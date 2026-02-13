import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function SplashScreen({ onComplete }) {
  const [phase, setPhase] = useState(0)

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 600),
      setTimeout(() => setPhase(2), 1800),
      setTimeout(() => setPhase(3), 3200),
      setTimeout(() => setPhase(4), 4500),
      setTimeout(() => onComplete(), 5500),
    ]
    return () => timers.forEach(clearTimeout)
  }, [onComplete])

  return (
    <div className="h-full w-full flex flex-col items-center justify-center bg-gradient-ocean relative overflow-hidden">
      {/* Animated ocean waves background */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bottom-0 left-0 right-0 bg-white/5 rounded-t-full"
            initial={{ height: 0 }}
            animate={{ height: `${(i + 1) * 15}%` }}
            transition={{
              duration: 2,
              delay: i * 0.2,
              ease: 'easeOut'
            }}
            style={{ bottom: 0 }}
          />
        ))}
      </div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {['🌸', '✨', '🐚', '🌊', '💫'].map((emoji, i) => (
          <motion.span
            key={i}
            className="absolute text-xl opacity-20"
            style={{
              left: `${15 + i * 17}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.1, 0.3, 0.1],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.4,
            }}
          >
            {emoji}
          </motion.span>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-5">
        {/* Emoji Animation */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', duration: 1, delay: 0.3 }}
          className="text-7xl"
        >
          🌺
        </motion.div>

        {/* Personalized greeting */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={phase >= 1 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-white/50 text-xs font-light tracking-[0.25em] uppercase mb-1">
            Hecho especialmente para
          </p>
          <motion.h1
            className="font-display text-5xl font-bold bg-gradient-to-r from-hawaii-plumeria via-white to-hawaii-sky bg-clip-text text-transparent"
            animate={phase >= 1 ? { backgroundPosition: ['0%', '100%', '0%'] } : {}}
            transition={{ duration: 5, repeat: Infinity }}
          >
            Lili
          </motion.h1>
        </motion.div>

        {/* App title */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={phase >= 2 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-2xl font-bold text-white/90 mb-0.5">
            Hawai'i Explorer
          </h2>
          <p className="text-white/40 text-xs text-center max-w-[260px] leading-relaxed">
            Tu viaje personal por las islas del paraíso 🌴
          </p>
        </motion.div>

        {/* Personal message */}
        <motion.div
          className="glass rounded-2xl px-6 py-3 max-w-[280px]"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={phase >= 3 ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-white/60 text-[11px] text-center leading-relaxed italic">
            "Cada isla guarda algo especial, igual que tú" 🌺
          </p>
        </motion.div>

        {/* Loading dots */}
        <motion.div
          className="flex gap-2 mt-3"
          initial={{ opacity: 0 }}
          animate={phase >= 3 ? { opacity: 1 } : {}}
        >
          {[0, 1, 2].map(i => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-hawaii-plumeria/50 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>
      </div>

      {/* Bottom text */}
      <motion.p
        className="absolute bottom-10 text-white/25 text-[10px] tracking-widest uppercase"
        initial={{ opacity: 0 }}
        animate={phase >= 2 ? { opacity: 1 } : {}}
      >
        Aloha, Lili 🤙
      </motion.p>
    </div>
  )
}
