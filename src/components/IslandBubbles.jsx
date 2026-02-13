import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const bubbleVariants = {
  hidden: { opacity: 0, scale: 0.6, y: 30 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: 'spring',
      damping: 18,
      stiffness: 180,
      delay: i * 0.06,
    },
  }),
}

export default function IslandBubbles({ island, onClose }) {
  const [expandedFact, setExpandedFact] = useState(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    requestAnimationFrame(() => setShow(true))
  }, [])

  if (!island) return null

  const images = island.images || []

  return (
    <div className="px-4 pt-4 pb-28 max-w-lg mx-auto">

      {/* Close button */}
      <motion.button
        custom={0}
        variants={bubbleVariants}
        initial="hidden"
        animate={show ? 'visible' : 'hidden'}
        onClick={onClose}
        className="island-close-btn"
      >
            ✕
          </motion.button>

          {/* === 1. HERO — Imagen + nombre === */}
          <motion.div
            custom={1}
            variants={bubbleVariants}
            initial="hidden"
            animate={show ? 'visible' : 'hidden'}
            className="bubble-card mb-3 p-0 overflow-hidden"
            style={{ borderColor: `${island.color}30` }}
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={images[0]?.url}
                alt={images[0]?.caption || island.name}
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-3xl drop-shadow-lg">{island.emoji}</span>
                  <div
                    className="w-2.5 h-2.5 rounded-full animate-pulse shadow-lg"
                    style={{ backgroundColor: island.color, boxShadow: `0 0 14px ${island.color}` }}
                  />
                </div>
                <h2 className="text-2xl font-display font-bold text-white leading-tight drop-shadow-md">
                  {island.name}
                </h2>
                <p className="text-sm text-white/60 font-medium italic mt-0.5">
                  "{island.nickname}"
                </p>
              </div>
              {images[0]?.caption && (
                <span
                  className="absolute top-3 right-3 text-[10px] font-semibold px-2.5 py-1 rounded-full backdrop-blur-md"
                  style={{ backgroundColor: `${island.color}40`, color: '#fff', border: `1px solid ${island.color}60` }}
                >
                  📸 {images[0].caption}
                </span>
              )}
            </div>
          </motion.div>

          {/* === 2. STATS — Área, Población, Elevación === */}
          <div className="grid grid-cols-3 gap-2 mb-3">
            {[
              { emoji: '📐', label: 'Área', value: island.area },
              { emoji: '👥', label: 'Población', value: island.population },
              { emoji: '⛰️', label: 'Elevación', value: island.highestPoint.elevation },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                custom={2 + i}
                variants={bubbleVariants}
                initial="hidden"
                animate={show ? 'visible' : 'hidden'}
                className="bubble-stat"
                style={{ borderColor: `${island.color}20` }}
              >
                <span className="text-xl mb-0.5">{stat.emoji}</span>
                <span className="text-[10px] text-white/40 font-medium">{stat.label}</span>
                <span className="text-xs font-bold text-white mt-0.5 leading-tight">{stat.value}</span>
              </motion.div>
            ))}
          </div>

          {/* === 3. IMAGEN + EDAD === */}
          <div className="grid grid-cols-2 gap-2 mb-3">
            <motion.div
              custom={5}
              variants={bubbleVariants}
              initial="hidden"
              animate={show ? 'visible' : 'hidden'}
              className="bubble-card p-0 overflow-hidden"
              style={{ borderColor: `${island.color}20` }}
            >
              <div className="relative h-36">
                <img
                  src={images[1]?.url}
                  alt={images[1]?.caption}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <span className="absolute bottom-2 left-2 right-2 text-[10px] text-white/90 font-medium bg-black/50 px-2 py-1 rounded-lg backdrop-blur-sm text-center">
                  📸 {images[1]?.caption}
                </span>
              </div>
            </motion.div>

            <motion.div
              custom={6}
              variants={bubbleVariants}
              initial="hidden"
              animate={show ? 'visible' : 'hidden'}
              className="bubble-card flex flex-col items-center justify-center text-center"
              style={{ borderColor: `${island.color}20` }}
            >
              <span className="text-3xl mb-1.5">🕐</span>
              <span className="text-[10px] text-white/40 font-medium">Edad de la isla</span>
              <span className="text-sm font-bold text-white leading-tight mt-1">{island.age}</span>
              <div className="mt-2.5 w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{ backgroundColor: island.color }}
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
                />
              </div>
            </motion.div>
          </div>

          {/* === 4. DESCRIPCIÓN === */}
          <motion.div
            custom={7}
            variants={bubbleVariants}
            initial="hidden"
            animate={show ? 'visible' : 'hidden'}
            className="bubble-card mb-3"
            style={{ borderColor: `${island.color}20` }}
          >
            <div className="flex items-center gap-2 mb-2.5">
              <span className="text-lg">📝</span>
              <h3 className="text-sm font-bold text-white">Sobre la isla</h3>
            </div>
            <p className="text-[13px] text-white/70 leading-relaxed">
              {island.description}
            </p>
          </motion.div>

          {/* === 5. DESTACADOS === */}
          <motion.div
            custom={8}
            variants={bubbleVariants}
            initial="hidden"
            animate={show ? 'visible' : 'hidden'}
            className="bubble-card mb-3"
            style={{ borderColor: `${island.color}20` }}
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-lg">✨</span>
              <h3 className="text-sm font-bold text-white">Destacados</h3>
            </div>
            <div className="space-y-2">
              {island.highlights.map((highlight, i) => (
                <div
                  key={i}
                  className="rounded-xl px-3 py-2.5"
                  style={{ backgroundColor: `${island.color}10`, border: `1px solid ${island.color}18` }}
                >
                  <span className="text-xs text-white/80 leading-relaxed">{highlight}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* === 6. GALERÍA === */}
          <div className="grid grid-cols-2 gap-2 mb-3">
            {images.slice(1).map((img, i) => (
              <motion.div
                key={i}
                custom={9 + i}
                variants={bubbleVariants}
                initial="hidden"
                animate={show ? 'visible' : 'hidden'}
                className="bubble-card p-0 overflow-hidden"
                style={{ borderColor: `${island.color}20` }}
              >
                <div className="relative h-28">
                  <img
                    src={img.url}
                    alt={img.caption}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />
                  <span className="absolute bottom-2 left-2 right-2 text-[10px] text-white/90 font-medium bg-black/50 px-2 py-1 rounded-lg backdrop-blur-sm text-center">
                    {img.caption}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* === 7. PUNTO MÁS ALTO === */}
          <motion.div
            custom={12}
            variants={bubbleVariants}
            initial="hidden"
            animate={show ? 'visible' : 'hidden'}
            className="bubble-card mb-3"
            style={{ borderColor: `${island.color}20` }}
          >
            <div className="flex items-center gap-3">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                style={{ backgroundColor: `${island.color}15` }}
              >
                🏔️
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[10px] text-white/40 font-medium uppercase tracking-wider">Punto más alto</p>
                <p className="text-sm font-bold text-white">{island.highestPoint.name}</p>
                <p className="text-xs text-white/50">{island.highestPoint.elevation}</p>
              </div>
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-1.5 h-12 rounded-full overflow-hidden bg-white/10">
                  <motion.div
                    className="w-full rounded-full"
                    style={{ backgroundColor: island.color }}
                    initial={{ height: 0 }}
                    animate={{ height: '100%' }}
                    transition={{ duration: 1.2, delay: 0.8 }}
                  />
                </div>
                <span className="text-[8px] text-white/30 mt-1 font-medium">ALT</span>
              </div>
            </div>
          </motion.div>

          {/* === 8. DATOS CURIOSOS === */}
          <motion.div
            custom={13}
            variants={bubbleVariants}
            initial="hidden"
            animate={show ? 'visible' : 'hidden'}
            className="bubble-card mb-3"
            style={{ borderColor: `${island.color}20` }}
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-lg">🤓</span>
              <h3 className="text-sm font-bold text-white">Datos Curiosos</h3>
            </div>
            <div className="space-y-2">
              {island.funFacts.map((fact, i) => (
                <button
                  key={i}
                  onClick={() => setExpandedFact(expandedFact === i ? null : i)}
                  className="w-full text-left flex items-start gap-2.5 rounded-xl px-3 py-2.5 transition-all duration-200"
                  style={{
                    backgroundColor: expandedFact === i ? `${island.color}20` : `${island.color}08`,
                    border: `1px solid ${expandedFact === i ? island.color + '50' : island.color + '15'}`,
                    transform: expandedFact === i ? 'scale(1.02)' : 'scale(1)',
                  }}
                >
                  <span className="text-sm mt-0.5 flex-shrink-0">{expandedFact === i ? '⭐' : '💡'}</span>
                  <span className={`text-xs leading-relaxed transition-colors duration-200 ${expandedFact === i ? 'text-white font-medium' : 'text-white/60'}`}>
                    {fact}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>

          {/* === 9. MENSAJE PERSONAL === */}
          <motion.div
            custom={14}
            variants={bubbleVariants}
            initial="hidden"
            animate={show ? 'visible' : 'hidden'}
            className="bubble-card mb-3 text-center"
            style={{ borderColor: `${island.color}15`, background: 'rgba(255,180,210,0.05)' }}
          >
            <p className="text-white/30 text-[11px] italic leading-relaxed">
              🌺 Lili, ¿sabías todo esto sobre {island.name}? Sigue explorando
            </p>
          </motion.div>

          {/* === 10. BOTÓN VOLVER === */}
          <motion.div
            custom={15}
            variants={bubbleVariants}
            initial="hidden"
            animate={show ? 'visible' : 'hidden'}
            className="flex justify-center pt-2 pb-4"
          >
            <button
              onClick={onClose}
              className="bubble-card px-8 py-3 flex items-center gap-2.5 active:scale-95 transition-transform"
              style={{ borderColor: `${island.color}40`, background: `linear-gradient(135deg, ${island.color}15, rgba(255,255,255,0.06))` }}
            >
              <span className="text-lg">🗺️</span>
              <span className="text-sm font-semibold text-white/90">Volver al mapa</span>
            </button>
          </motion.div>

    </div>
  )
}
