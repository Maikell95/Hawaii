import { motion } from 'framer-motion'
import { generalInfo } from '../data/hawaiiData'

export default function Header({ activeTab, setActiveTab }) {
  return (
    <motion.header
      className="glass-dark z-50 px-4 pt-safe"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', damping: 20, delay: 0.2 }}
    >
      <div className="flex items-center justify-between py-3">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <motion.span
            className="text-2xl"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 5 }}
          >
            🌺
          </motion.span>
          <div>
            <h1 className="font-display text-lg font-bold leading-tight">
              Hawai'i
            </h1>
            <p className="text-[9px] text-white/40 tracking-[0.2em] uppercase font-medium">
              Para Lili 🌺
            </p>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="flex items-center gap-3">
          <QuickStat value="137" label="islas" delay={0.4} />
          <QuickStat value="8" label="principales" delay={0.5} />
        </div>
      </div>
    </motion.header>
  )
}

function QuickStat({ value, label, delay = 0 }) {
  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4 }}
    >
      <p className="text-sm font-bold text-hawaii-sky">{value}</p>
      <p className="text-[8px] text-white/40 uppercase tracking-wider">{label}</p>
    </motion.div>
  )
}
