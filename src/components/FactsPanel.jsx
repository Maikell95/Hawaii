import { motion } from 'framer-motion'
import { funFacts, stateSymbols, generalInfo, islands } from '../data/hawaiiData'

const categoryIcons = {
  'Geografía': '🌋',
  'Naturaleza': '🌿',
  'Cultura': '🎭',
  'Ciencia': '🔬',
  'Historia': '📜',
  'Récords': '🏆',
  'Fauna': '🐟',
  'Geología': '🔥',
  'Clima': '🌈',
  'Idioma': '🗣️',
  'Vida': '❤️',
  'Record': '🏆',
}

function FactsPanel() {
  return (
    <div className="px-4 pt-4 pb-8 space-y-6">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h2 className="text-2xl font-display font-bold text-white mb-1">
          Datos de Hawái
        </h2>
        <p className="text-white/50 text-sm">
          Descubre datos fascinantes sobre el paraíso del Pacífico
        </p>
      </motion.div>

      {/* General Info Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <h3 className="text-sm font-bold text-white/70 uppercase tracking-wider mb-3 flex items-center gap-2">
          <span>📊</span> Información General
        </h3>
        <div className="grid grid-cols-2 gap-3">
          <InfoCard emoji="👥" label="Población" value={generalInfo.population} />
          <InfoCard emoji="🏙️" label="Capital" value={generalInfo.capital} />
          <InfoCard emoji="📐" label="Superficie" value={generalInfo.totalArea} />
          <InfoCard emoji="🏝️" label="Islas" value={`${generalInfo.mainIslands} principales (${generalInfo.totalIslands} total)`} />
          <InfoCard emoji="⛰️" label="Punto más alto" value={generalInfo.highestPoint} />
          <InfoCard emoji="🌊" label="Costa" value={generalInfo.coastline} />
        </div>
      </motion.div>

      {/* State Symbols */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h3 className="text-sm font-bold text-white/70 uppercase tracking-wider mb-3 flex items-center gap-2">
          <span>🏛️</span> Símbolos del Estado
        </h3>
        <div className="glass rounded-2xl p-4 space-y-0">
          <SymbolRow icon={stateSymbols.flower.emoji} label="Flor estatal" value={stateSymbols.flower.name} desc={stateSymbols.flower.description} image={stateSymbols.flower.image} />
          <SymbolRow icon={stateSymbols.bird.emoji} label="Ave estatal" value={stateSymbols.bird.name} desc={stateSymbols.bird.description} image={stateSymbols.bird.image} />
          <SymbolRow icon={stateSymbols.fish.emoji} label="Pez estatal" value={stateSymbols.fish.name} desc={stateSymbols.fish.description} image={stateSymbols.fish.image} />
          <SymbolRow icon={stateSymbols.tree.emoji} label="Árbol estatal" value={stateSymbols.tree.name} desc={stateSymbols.tree.description} image={stateSymbols.tree.image} />
          <SymbolRow icon={stateSymbols.insect.emoji} label="Insecto estatal" value={stateSymbols.insect.name} desc={stateSymbols.insect.description} image={stateSymbols.insect.image} />
          <SymbolRow icon={stateSymbols.dance.emoji} label="Danza estatal" value={stateSymbols.dance.name} desc={stateSymbols.dance.description} image={stateSymbols.dance.image} />
          <SymbolRow icon={stateSymbols.sport.emoji} label="Deporte estatal" value={stateSymbols.sport.name} desc={stateSymbols.sport.description} image={stateSymbols.sport.image} />
          <SymbolRow icon={stateSymbols.food.emoji} label="Alimento estatal" value={stateSymbols.food.name} desc={stateSymbols.food.description} image={stateSymbols.food.image} />
          <SymbolRow icon={stateSymbols.gem.emoji} label="Gema estatal" value={stateSymbols.gem.name} desc={stateSymbols.gem.description} image={stateSymbols.gem.image} />
        </div>
      </motion.div>

      {/* Islands Quick Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h3 className="text-sm font-bold text-white/70 uppercase tracking-wider mb-3 flex items-center gap-2">
          <span>🏝️</span> Las 8 Islas Principales
        </h3>
        <div className="space-y-2">
          {islands.map((island, i) => (
            <motion.div
              key={island.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.05 }}
              className="glass rounded-xl p-3 flex items-center gap-3"
            >
              <span className="text-2xl">{island.emoji}</span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-white">{island.name}</span>
                  <span className="text-[10px] text-white/40">"{island.nickname}"</span>
                </div>
                <div className="flex items-center gap-3 mt-0.5">
                  <span className="text-[11px] text-white/50">📐 {island.area}</span>
                  <span className="text-[11px] text-white/50">👥 {island.population}</span>
                </div>
              </div>
              <div
                className="w-3 h-3 rounded-full shadow-lg"
                style={{ backgroundColor: island.color, boxShadow: `0 0 8px ${island.color}50` }}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Fun Facts */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h3 className="text-sm font-bold text-white/70 uppercase tracking-wider mb-3 flex items-center gap-2">
          <span>✨</span> Datos Curiosos
        </h3>
        <div className="space-y-3">
          {funFacts.map((fact, index) => (
            <motion.div
              key={fact.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + index * 0.05 }}
              className="glass rounded-2xl p-4 border border-white/5 hover:border-white/10 transition-colors"
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl flex-shrink-0 mt-0.5">
                  {fact.icon || categoryIcons[fact.category] || '🌟'}
                </span>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-medium text-white/40 uppercase tracking-wider bg-white/5 px-2 py-0.5 rounded-full">
                      {fact.category}
                    </span>
                  </div>
                  <p className="text-sm text-white/80 leading-relaxed">
                    {fact.fact}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="text-center pt-4 space-y-2"
      >
        <p className="text-white/30 text-xs">
          🌺 Aloha — El espíritu de Hawái 🌺
        </p>
        <p className="text-white/20 text-[10px] italic">
          Hecho con ✨ para Lili
        </p>
      </motion.div>
    </div>
  )
}

function InfoCard({ emoji, label, value }) {
  return (
    <div className="glass rounded-xl p-3 text-center">
      <span className="text-xl block mb-1">{emoji}</span>
      <p className="text-xs text-white/40 mb-0.5">{label}</p>
      <p className="text-sm font-bold text-white leading-tight">{value}</p>
    </div>
  )
}

function SymbolRow({ icon, label, value, desc, image }) {
  return (
    <div className="py-3 border-b border-white/5 last:border-0">
      <div className="flex items-start gap-3">
        <span className="text-lg mt-0.5">{icon}</span>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="text-xs text-white/40 flex-shrink-0">{label}</span>
            <span className="text-sm text-white/80 font-medium truncate">{value}</span>
          </div>
          {desc && <p className="text-[11px] text-white/40 mt-0.5">{desc}</p>}
        </div>
      </div>
      {image && (
        <div className="mt-2 ml-8 rounded-xl overflow-hidden h-24">
          <img
            src={image}
            alt={value}
            className="w-full h-full object-cover"
            loading="lazy"
            onError={(e) => { e.target.parentElement.style.display = 'none' }}
          />
        </div>
      )}
    </div>
  )
}

export default FactsPanel
