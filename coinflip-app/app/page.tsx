'use client'

import { useState } from 'react'
import Coin from '@/components/Coin'
import { motion, AnimatePresence } from 'framer-motion'

export default function Home() {
  const [isFlipping, setIsFlipping] = useState(false)
  const [result, setResult] = useState<'heads' | 'tails' | null>(null)
  const [player1, setPlayer1] = useState('')
  const [player2, setPlayer2] = useState('')
  const [gameStarted, setGameStarted] = useState(false)

  const handleFlip = () => {
    setIsFlipping(true)
    setTimeout(() => {
      const newResult = Math.random() > 0.5 ? 'heads' : 'tails'
      setResult(newResult)
      setIsFlipping(false)
    }, 1000)
  }

  const handleStartGame = () => {
    if (player1 && player2) {
      setGameStarted(true)
    }
  }

  const getWinner = () => {
    if (!result) return null
    return result === 'heads' ? player1 : player2
  }

  if (!gameStarted) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-purple-900 to-blue-900 flex flex-col items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-xl w-96"
        >
          <h1 className="text-4xl font-bold text-white mb-8 text-center">Desafío Cara o Cruz</h1>
          <div className="space-y-4">
            <div>
              <label className="block text-white mb-2">👑 Jugador 1 (Cara)</label>
              <input
                type="text"
                value={player1}
                onChange={(e) => setPlayer1(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/50 border border-white/30 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Ingresá tu nombre"
              />
            </div>
            <div>
              <label className="block text-white mb-2">🌟 Jugador 2 (Cruz)</label>
              <input
                type="text"
                value={player2}
                onChange={(e) => setPlayer2(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/50 border border-white/30 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Ingresá tu nombre"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleStartGame}
              disabled={!player1 || !player2}
              className="w-full px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-black font-bold rounded-lg
                transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-4"
            >
              ¡Empezar Juego!
            </motion.button>
          </div>
        </motion.div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-900 to-blue-900 flex flex-col items-center justify-center p-4">
      <div className="text-center max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-6xl font-bold text-white mb-12">Desafío Cara o Cruz</h1>
          <div className="flex justify-center gap-12 mb-12">
            <motion.div 
              className={`p-6 rounded-xl ${result === 'heads' ? 'bg-yellow-500' : 'bg-white/10'} backdrop-blur-md transition-colors`}
              animate={{ scale: result === 'heads' ? 1.1 : 1 }}
            >
              <p className="text-white text-xl">👑 {player1}</p>
            </motion.div>
            <motion.div 
              className={`p-6 rounded-xl ${result === 'tails' ? 'bg-yellow-500' : 'bg-white/10'} backdrop-blur-md transition-colors`}
              animate={{ scale: result === 'tails' ? 1.1 : 1 }}
            >
              <p className="text-white text-xl">🌟 {player2}</p>
            </motion.div>
          </div>
        </motion.div>
        
        <div className="flex justify-center mb-12">
          <Coin isFlipping={isFlipping} result={result} />
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleFlip}
          disabled={isFlipping}
          className="px-12 py-6 bg-yellow-500 hover:bg-yellow-400 text-black text-xl font-bold rounded-full
            transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
        >
          {isFlipping ? 'Tirando...' : '¡Tirar Moneda!'}
        </motion.button>

        <AnimatePresence>
          {result && !isFlipping && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mt-12"
            >
              <motion.p 
                className="text-4xl text-white font-bold"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 0.5 }}
              >
                🎉 ¡{getWinner()} Ganó! 🎉
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  )
}