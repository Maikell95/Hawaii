import { motion } from 'framer-motion'
import { historicalTimeline } from '../data/hawaiiData'
import SafeImage from './SafeImage'

const eraColors = {
  'Antigua': 'from-amber-500/20 to-amber-700/10 border-amber-500/30',
  'Colonial': 'from-red-500/20 to-red-700/10 border-red-500/30',
  'Moderna': 'from-blue-500/20 to-blue-700/10 border-blue-500/30',
  'Contemporánea': 'from-emerald-500/20 to-emerald-700/10 border-emerald-500/30',
}

const eraLineColors = {
  'Antigua': 'bg-amber-400',
  'Colonial': 'bg-red-400',
  'Moderna': 'bg-blue-400',
  'Contemporánea': 'bg-emerald-400',
}

const eraDotColors = {
  'Antigua': 'bg-amber-400 shadow-amber-400/50',
  'Colonial': 'bg-red-400 shadow-red-400/50',
  'Moderna': 'bg-blue-400 shadow-blue-400/50',
  'Contemporánea': 'bg-emerald-400 shadow-emerald-400/50',
}

function HistoryPanel() {
  return (
    <div className="px-4 pt-4 pb-8">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-6"
      >
        <h2 className="text-2xl font-display font-bold text-white mb-1">
          Historia de Hawái
        </h2>
        <p className="text-white/50 text-sm">
          Un viaje a través del tiempo por las islas del Pacífico
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        {/* Línea vertical central */}
        <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-400/60 via-blue-400/60 to-emerald-400/60" />

        {historicalTimeline.map((event, index) => (
          <motion.div
            key={event.year}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.08, duration: 0.4 }}
            className="relative pl-14 mb-6 last:mb-0"
          >
            {/* Dot on timeline */}
            <div className={`absolute left-[14px] top-3 w-3 h-3 rounded-full ${eraDotColors[event.era] || 'bg-white shadow-white/50'} shadow-lg z-10`} />

            {/* Card */}
            <div className={`glass rounded-2xl overflow-hidden border ${eraColors[event.era] || 'border-white/10'} bg-gradient-to-br`}>
              {/* Event image */}
              {event.image && (
                <SafeImage
                  src={event.image}
                  alt={event.title}
                  className="w-full h-32"
                  fallbackEmoji={event.icon}
                />
              )}

              <div className="p-4">
              {/* Year badge */}
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">{event.icon}</span>
                <span className="text-xs font-bold text-white/70 bg-white/10 px-2.5 py-0.5 rounded-full tracking-wider">
                  {event.year}
                </span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                  event.era === 'Antigua' ? 'bg-amber-500/20 text-amber-300' :
                  event.era === 'Colonial' ? 'bg-red-500/20 text-red-300' :
                  event.era === 'Moderna' ? 'bg-blue-500/20 text-blue-300' :
                  'bg-emerald-500/20 text-emerald-300'
                }`}>
                  {event.era}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-base font-bold text-white mb-1.5">
                {event.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-white/60 leading-relaxed">
                {event.description}
              </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer note */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="text-center mt-8 glass rounded-2xl p-4"
      >
        <span className="text-3xl block mb-2">🌺</span>
        <p className="text-white/40 text-xs leading-relaxed">
          La historia de Hawái es un testimonio de resiliencia, cultura y la
          profunda conexión entre su pueblo y la tierra. Desde los primeros
          navegantes polinesios hasta la actualidad, las islas han sido un
          crisol de tradiciones y modernidad.
        </p>
        <p className="text-white/20 text-[10px] mt-3 italic">
          Lili, espero que este viaje por la historia te haya fascinado ✨
        </p>
      </motion.div>
    </div>
  )
}

export default HistoryPanel
