import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useMemo } from 'react'
import { quizQuestions } from '../data/hawaiiData'

const QUESTIONS_PER_QUIZ = 10

const difficultyColors = {
  'fácil': { bg: 'bg-emerald-500/15', text: 'text-emerald-400', border: 'border-emerald-500/30' },
  'medio': { bg: 'bg-amber-500/15', text: 'text-amber-400', border: 'border-amber-500/30' },
  'difícil': { bg: 'bg-red-500/15', text: 'text-red-400', border: 'border-red-500/30' },
}

function shuffleArray(arr) {
  const shuffled = [...arr]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

export default function QuizPanel() {
  const [phase, setPhase] = useState('intro') // intro | playing | result
  const [questions, setQuestions] = useState([])
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState(null)
  const [showAnswer, setShowAnswer] = useState(false)
  const [score, setScore] = useState(0)
  const [answers, setAnswers] = useState([])
  const [streak, setStreak] = useState(0)
  const [bestStreak, setBestStreak] = useState(0)
  const [timeLeft, setTimeLeft] = useState(20)
  const [timerActive, setTimerActive] = useState(false)

  // Timer countdown
  useEffect(() => {
    if (!timerActive || timeLeft <= 0) return
    const timer = setTimeout(() => setTimeLeft(t => t - 1), 1000)
    return () => clearTimeout(timer)
  }, [timerActive, timeLeft])

  // Auto-reveal when time runs out
  useEffect(() => {
    if (timeLeft === 0 && timerActive && !showAnswer) {
      handleSelect(-1) // timeout = wrong
    }
  }, [timeLeft, timerActive, showAnswer])

  const startQuiz = () => {
    const shuffled = shuffleArray(quizQuestions).slice(0, QUESTIONS_PER_QUIZ)
    setQuestions(shuffled)
    setCurrent(0)
    setSelected(null)
    setShowAnswer(false)
    setScore(0)
    setAnswers([])
    setStreak(0)
    setBestStreak(0)
    setTimeLeft(20)
    setTimerActive(true)
    setPhase('playing')
  }

  const handleSelect = (index) => {
    if (showAnswer) return
    setSelected(index)
    setShowAnswer(true)
    setTimerActive(false)

    const isCorrect = index === questions[current].correct
    if (isCorrect) {
      setScore(s => s + 1)
      setStreak(s => {
        const next = s + 1
        setBestStreak(b => Math.max(b, next))
        return next
      })
    } else {
      setStreak(0)
    }

    setAnswers(prev => [...prev, {
      question: questions[current],
      selectedIndex: index,
      isCorrect,
    }])
  }

  const nextQuestion = () => {
    if (current + 1 >= questions.length) {
      setPhase('result')
    } else {
      setCurrent(c => c + 1)
      setSelected(null)
      setShowAnswer(false)
      setTimeLeft(20)
      setTimerActive(true)
    }
  }

  const q = questions[current]
  const progress = questions.length > 0 ? ((current + 1) / questions.length) * 100 : 0

  const scorePercent = questions.length > 0 ? Math.round((score / questions.length) * 100) : 0

  const getResultData = () => {
    if (scorePercent >= 90) return { emoji: '🏆', title: '¡Increíble, Lili!', subtitle: 'Eres toda una experta en Hawaii 🌟', color: '#FFD700' }
    if (scorePercent >= 70) return { emoji: '🌟', title: '¡Excelente, Lili!', subtitle: 'Conoces muy bien las islas', color: '#48CAE4' }
    if (scorePercent >= 50) return { emoji: '🌺', title: '¡Bien hecho, Lili!', subtitle: 'Vas por buen camino, sigue explorando', color: '#F77F00' }
    if (scorePercent >= 30) return { emoji: '📖', title: 'Sigue aprendiendo, Lili', subtitle: 'Cada intento te acerca más al paraíso', color: '#FF6B6B' }
    return { emoji: '🌊', title: 'A explorar se ha dicho', subtitle: 'Lili, visita las otras secciones para aprender más', color: '#6C757D' }
  }

  // ===== INTRO SCREEN =====
  if (phase === 'intro') {
    return (
      <div className="px-4 pt-4 pb-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-6"
        >
          <h2 className="text-2xl font-display font-bold text-white mb-1">
            Quiz de Hawái
          </h2>
          <p className="text-white/50 text-sm">
            Lili, ¿cuánto sabes sobre las islas? 🌺
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15 }}
          className="glass rounded-3xl p-8 text-center mb-6"
        >
          <motion.span
            className="text-7xl block mb-4"
            animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
          >
            🧠
          </motion.span>
          <h3 className="text-xl font-bold text-white mb-2">¿Lista para el desafío, Lili?</h3>
          <p className="text-white/50 text-sm mb-6 max-w-xs mx-auto leading-relaxed">
            {QUESTIONS_PER_QUIZ} preguntas aleatorias sobre geografía, historia, cultura y naturaleza de Hawaii.
            Tienes 20 segundos por pregunta. ¡Tú puedes!
          </p>

          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className="glass rounded-xl p-3 text-center">
              <span className="text-lg block">❓</span>
              <span className="text-xs text-white/50 block mt-1">{QUESTIONS_PER_QUIZ} preguntas</span>
            </div>
            <div className="glass rounded-xl p-3 text-center">
              <span className="text-lg block">⏱️</span>
              <span className="text-xs text-white/50 block mt-1">20s c/u</span>
            </div>
            <div className="glass rounded-xl p-3 text-center">
              <span className="text-lg block">🎯</span>
              <span className="text-xs text-white/50 block mt-1">4 opciones</span>
            </div>
          </div>

          <motion.button
            onClick={startQuiz}
            className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-hawaii-ocean to-hawaii-sky text-white font-bold text-base tracking-wide shadow-lg shadow-hawaii-ocean/30"
            whileTap={{ scale: 0.97 }}
            whileHover={{ scale: 1.02 }}
          >
            🚀 Comenzar Quiz
          </motion.button>
        </motion.div>

        {/* Difficulty legend */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center gap-4"
        >
          {Object.entries(difficultyColors).map(([level, colors]) => (
            <div key={level} className="flex items-center gap-1.5">
              <div className={`w-2 h-2 rounded-full ${colors.bg} ${colors.border} border`} />
              <span className={`text-[10px] ${colors.text} capitalize`}>{level}</span>
            </div>
          ))}
        </motion.div>
      </div>
    )
  }

  // ===== RESULT SCREEN =====
  if (phase === 'result') {
    const result = getResultData()
    return (
      <div className="px-4 pt-4 pb-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-6"
        >
          <h2 className="text-2xl font-display font-bold text-white mb-1">
            Resultados
          </h2>
        </motion.div>

        {/* Score card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', damping: 15 }}
          className="glass rounded-3xl p-8 text-center mb-5"
        >
          <motion.span
            className="text-7xl block mb-3"
            initial={{ scale: 0 }}
            animate={{ scale: 1, rotate: [0, 15, -15, 0] }}
            transition={{ type: 'spring', delay: 0.2 }}
          >
            {result.emoji}
          </motion.span>
          <h3 className="text-2xl font-bold text-white mb-1">{result.title}</h3>
          <p className="text-white/50 text-sm mb-5">{result.subtitle}</p>

          {/* Score Ring */}
          <div className="relative w-32 h-32 mx-auto mb-5">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="7" />
              <motion.circle
                cx="50" cy="50" r="42"
                fill="none"
                stroke={result.color}
                strokeWidth="7"
                strokeLinecap="round"
                strokeDasharray={`${2 * Math.PI * 42}`}
                initial={{ strokeDashoffset: 2 * Math.PI * 42 }}
                animate={{ strokeDashoffset: 2 * Math.PI * 42 * (1 - scorePercent / 100) }}
                transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <motion.span
                className="text-3xl font-bold text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                {scorePercent}%
              </motion.span>
              <span className="text-[10px] text-white/40">{score}/{questions.length}</span>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3">
            <div className="glass rounded-xl p-3">
              <span className="text-lg block">✅</span>
              <span className="text-sm font-bold text-emerald-400">{score}</span>
              <span className="text-[10px] text-white/40 block">Correctas</span>
            </div>
            <div className="glass rounded-xl p-3">
              <span className="text-lg block">❌</span>
              <span className="text-sm font-bold text-red-400">{questions.length - score}</span>
              <span className="text-[10px] text-white/40 block">Incorrectas</span>
            </div>
            <div className="glass rounded-xl p-3">
              <span className="text-lg block">🔥</span>
              <span className="text-sm font-bold text-amber-400">{bestStreak}</span>
              <span className="text-[10px] text-white/40 block">Mejor racha</span>
            </div>
          </div>
        </motion.div>

        {/* Answer Review */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-sm font-bold text-white/70 uppercase tracking-wider mb-3 flex items-center gap-2">
            <span>📋</span> Revisión de respuestas
          </h3>
          <div className="space-y-2">
            {answers.map((ans, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.05 }}
                className={`glass rounded-xl p-3 border ${
                  ans.isCorrect ? 'border-emerald-500/30' : 'border-red-500/30'
                }`}
              >
                <div className="flex items-start gap-2">
                  <span className="text-sm mt-0.5">{ans.isCorrect ? '✅' : '❌'}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-white/80 font-medium mb-1">{ans.question.question}</p>
                    {!ans.isCorrect && (
                      <p className="text-[11px] text-emerald-400/80">
                        ✓ {ans.question.options[ans.question.correct]}
                      </p>
                    )}
                    <p className="text-[10px] text-white/40 mt-1 leading-relaxed">{ans.question.explanation}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Retry button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex justify-center pt-6 pb-4"
        >
          <motion.button
            onClick={startQuiz}
            className="bubble-card px-8 py-3 flex items-center gap-2.5 bg-gradient-to-r from-hawaii-ocean/20 to-hawaii-sky/20 border-hawaii-sky/30"
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-lg">🔄</span>
            <span className="text-sm font-semibold text-white/90">Intentar de nuevo</span>
          </motion.button>
        </motion.div>
      </div>
    )
  }

  // ===== PLAYING SCREEN =====
  return (
    <div className="px-4 pt-4 pb-8">
      {/* Progress bar */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-4"
      >
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-white/50 font-medium">
            Pregunta {current + 1} de {questions.length}
          </span>
          <div className="flex items-center gap-2">
            {streak >= 2 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="text-xs text-amber-400 font-bold"
              >
                🔥 {streak}
              </motion.span>
            )}
            <span className="text-xs font-bold text-white/70">
              {score} pts
            </span>
          </div>
        </div>
        <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-hawaii-ocean to-hawaii-sky rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.4 }}
          />
        </div>
      </motion.div>

      {/* Timer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex justify-center mb-4"
      >
        <div className={`flex items-center gap-2 px-4 py-1.5 rounded-full ${
          timeLeft <= 5 ? 'bg-red-500/20 border border-red-500/30' : 'glass'
        }`}>
          <span className="text-sm">⏱️</span>
          <motion.span
            className={`text-sm font-bold tabular-nums ${
              timeLeft <= 5 ? 'text-red-400' : 'text-white/80'
            }`}
            animate={timeLeft <= 5 ? { scale: [1, 1.2, 1] } : {}}
            transition={{ duration: 0.5, repeat: timeLeft <= 5 ? Infinity : 0 }}
          >
            {timeLeft}s
          </motion.span>
        </div>
      </motion.div>

      {/* Question Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={q.id}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
        >
          {/* Category & Difficulty */}
          <div className="flex items-center gap-2 mb-3">
            <span className="text-2xl">{q.emoji}</span>
            <span className="text-[10px] text-white/40 font-medium bg-white/5 px-2 py-0.5 rounded-full uppercase tracking-wider">
              {q.category}
            </span>
            <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full capitalize ${
              difficultyColors[q.difficulty]?.bg || ''
            } ${difficultyColors[q.difficulty]?.text || ''} ${difficultyColors[q.difficulty]?.border || ''} border`}>
              {q.difficulty}
            </span>
          </div>

          {/* Question */}
          <div className="glass rounded-2xl p-5 mb-4">
            <h3 className="text-base font-bold text-white leading-relaxed">
              {q.question}
            </h3>
          </div>

          {/* Options */}
          <div className="space-y-2.5 mb-4">
            {q.options.map((option, i) => {
              let optionClass = 'glass border border-white/10 hover:border-white/25 active:scale-[0.98]'
              if (showAnswer) {
                if (i === q.correct) {
                  optionClass = 'bg-emerald-500/20 border border-emerald-500/50 shadow-lg shadow-emerald-500/10'
                } else if (i === selected && i !== q.correct) {
                  optionClass = 'bg-red-500/20 border border-red-500/50'
                } else {
                  optionClass = 'glass border border-white/5 opacity-50'
                }
              }

              return (
                <motion.button
                  key={i}
                  onClick={() => handleSelect(i)}
                  disabled={showAnswer}
                  className={`w-full text-left rounded-2xl p-4 flex items-center gap-3 transition-all duration-200 ${optionClass}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.06 }}
                  whileTap={!showAnswer ? { scale: 0.97 } : {}}
                >
                  <span className={`w-8 h-8 rounded-xl flex items-center justify-center text-sm font-bold flex-shrink-0 ${
                    showAnswer && i === q.correct
                      ? 'bg-emerald-500/30 text-emerald-300'
                      : showAnswer && i === selected && i !== q.correct
                      ? 'bg-red-500/30 text-red-300'
                      : 'bg-white/10 text-white/60'
                  }`}>
                    {showAnswer && i === q.correct ? '✓' : showAnswer && i === selected ? '✗' : String.fromCharCode(65 + i)}
                  </span>
                  <span className={`text-sm leading-relaxed ${
                    showAnswer && i === q.correct ? 'text-emerald-300 font-medium' : 'text-white/80'
                  }`}>
                    {option}
                  </span>
                </motion.button>
              )
            })}
          </div>

          {/* Explanation (after answer) */}
          <AnimatePresence>
            {showAnswer && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <div className={`rounded-2xl p-4 mb-4 ${
                  selected === q.correct
                    ? 'bg-emerald-500/10 border border-emerald-500/20'
                    : 'bg-amber-500/10 border border-amber-500/20'
                }`}>
                  <div className="flex items-start gap-2">
                    <span className="text-lg mt-0.5">{selected === q.correct ? '🎉' : '💡'}</span>
                    <div>
                      <p className={`text-sm font-bold mb-1 ${
                        selected === q.correct ? 'text-emerald-400' : 'text-amber-400'
                      }`}>
                        {selected === q.correct ? '¡Correcto!' : selected === -1 ? '¡Tiempo agotado!' : 'Incorrecto'}
                      </p>
                      <p className="text-xs text-white/60 leading-relaxed">
                        {q.explanation}
                      </p>
                    </div>
                  </div>
                </div>

                <motion.button
                  onClick={nextQuestion}
                  className="w-full py-3 rounded-2xl bg-gradient-to-r from-hawaii-ocean/70 to-hawaii-sky/70 text-white font-semibold text-sm tracking-wide"
                  whileTap={{ scale: 0.97 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {current + 1 >= questions.length ? '📊 Ver resultados' : '➡️ Siguiente pregunta'}
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
