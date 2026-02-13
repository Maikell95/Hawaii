import { useState, useCallback, useRef } from 'react'

const gradients = [
  'linear-gradient(135deg, #0077B6 0%, #023E8A 100%)',
  'linear-gradient(135deg, #D62828 0%, #6A040F 100%)',
  'linear-gradient(135deg, #2D6A4F 0%, #1B4332 100%)',
  'linear-gradient(135deg, #F77F00 0%, #E36414 100%)',
  'linear-gradient(135deg, #5C0029 0%, #350016 100%)',
  'linear-gradient(135deg, #FCBF49 0%, #F77F00 100%)',
]

export default function SafeImage({
  src,
  alt = '',
  className = '',
  fallbackEmoji = '🌺',
  style,
  loading = 'lazy',
  ...props
}) {
  const [status, setStatus] = useState('loading') // loading | loaded | error
  const retryCount = useRef(0)
  const maxRetries = 2
  const imgRef = useRef(null)

  const gradient = gradients[Math.abs(hashStr(alt || src || '')) % gradients.length]

  const handleLoad = useCallback(() => {
    setStatus('loaded')
  }, [])

  const handleError = useCallback(() => {
    if (retryCount.current < maxRetries) {
      retryCount.current++
      const delay = retryCount.current * 2000 // 2s, 4s
      setTimeout(() => {
        if (imgRef.current) {
          const sep = src.includes('?') ? '&' : '?'
          imgRef.current.src = src + sep + 'retry=' + retryCount.current
        }
      }, delay)
    } else {
      setStatus('error')
    }
  }, [src])

  if (status === 'error') {
    return (
      <div
        className={className}
        style={{
          ...style,
          background: gradient,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(255,255,255,0.3) 0%, transparent 50%)',
          }}
        />
        <span className="text-3xl drop-shadow-lg z-10">{fallbackEmoji}</span>
      </div>
    )
  }

  return (
    <div className={className} style={{ ...style, position: 'relative', overflow: 'hidden' }}>
      {/* Shimmer placeholder */}
      {status === 'loading' && (
        <div
          className="absolute inset-0 animate-pulse"
          style={{ background: gradient, opacity: 0.5 }}
        />
      )}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        style={{
          opacity: status === 'loaded' ? 1 : 0,
          transition: 'opacity 0.4s ease',
        }}
        loading={loading}
        referrerPolicy="no-referrer"
        crossOrigin="anonymous"
        onLoad={handleLoad}
        onError={handleError}
        {...props}
      />
    </div>
  )
}

function hashStr(s) {
  let h = 0
  for (let i = 0; i < s.length; i++) {
    h = ((h << 5) - h + s.charCodeAt(i)) | 0
  }
  return h
}
