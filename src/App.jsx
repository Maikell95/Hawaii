import { useState } from 'react'
import Header from './components/Header'
import HawaiiMap from './components/HawaiiMap'
import IslandBubbles from './components/IslandBubbles'
import SplashScreen from './components/SplashScreen'
import HistoryPanel from './components/HistoryPanel'
import FactsPanel from './components/FactsPanel'
import QuizPanel from './components/QuizPanel'

function App() {
  const [selectedIsland, setSelectedIsland] = useState(null)
  const [showSplash, setShowSplash] = useState(true)
  const [activeTab, setActiveTab] = useState('map')

  const handleSelectIsland = (island) => {
    console.log('🌴 App received island:', island?.name, island)
    setSelectedIsland(island)
  }

  if (showSplash) {
    return <SplashScreen onComplete={() => setShowSplash(false)} />
  }

  return (
    <div className="h-full w-full flex flex-col relative bg-hawaii-night overflow-hidden">
      {/* Header - ocultar cuando se muestra info de isla */}
      {!selectedIsland && (
        <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      )}

      {/* Main Content Area */}
      <div className="flex-1 relative overflow-hidden">
        {/* Map - ocultar cuando se muestra info de isla */}
        {activeTab === 'map' && !selectedIsland && (
          <div className="absolute inset-0">
            <HawaiiMap
              selectedIsland={selectedIsland}
              onSelectIsland={handleSelectIsland}
            />
          </div>
        )}

        {/* Island Bubbles - reemplaza el mapa cuando hay isla seleccionada */}
        {activeTab === 'map' && selectedIsland && (
          <div className="absolute inset-0 overflow-y-auto"
            style={{ background: `radial-gradient(ellipse at 50% 20%, ${selectedIsland.color}35, rgba(10,22,40,0.97))` }}
          >
            <IslandBubbles
              island={selectedIsland}
              onClose={() => setSelectedIsland(null)}
            />
          </div>
        )}

        {/* History Tab */}
        {activeTab === 'history' && (
          <div className="absolute inset-0 overflow-y-auto pb-20">
            <HistoryPanel />
          </div>
        )}

        {/* Facts Tab */}
        {activeTab === 'facts' && (
          <div className="absolute inset-0 overflow-y-auto pb-20">
            <FactsPanel />
          </div>
        )}

        {/* Quiz Tab */}
        {activeTab === 'quiz' && (
          <div className="absolute inset-0 overflow-y-auto pb-20">
            <QuizPanel />
          </div>
        )}
      </div>

      {/* Bottom Navigation */}
      <nav className="glass-dark flex items-center justify-around px-4 py-2 pb-safe z-[100] relative">
        <NavButton
          icon="🗺️"
          label="Mapa"
          active={activeTab === 'map'}
          onClick={() => { setActiveTab('map'); setSelectedIsland(null); }}
        />
        <NavButton
          icon="📖"
          label="Historia"
          active={activeTab === 'history'}
          onClick={() => { setActiveTab('history'); setSelectedIsland(null); }}
        />
        <NavButton
          icon="🌺"
          label="Datos"
          active={activeTab === 'facts'}
          onClick={() => { setActiveTab('facts'); setSelectedIsland(null); }}
        />
        <NavButton
          icon="🧠"
          label="Quiz"
          active={activeTab === 'quiz'}
          onClick={() => { setActiveTab('quiz'); setSelectedIsland(null); }}
        />
      </nav>
    </div>
  )
}

function NavButton({ icon, label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center gap-0.5 px-5 py-1.5 rounded-xl transition-all duration-300 ${
        active
          ? 'bg-white/10 text-white scale-105'
          : 'text-white/50 hover:text-white/80'
      }`}
    >
      <span className="text-xl">{icon}</span>
      <span className="text-[10px] font-medium tracking-wide">{label}</span>
    </button>
  )
}

export default App
