'use client'

import { motion } from 'framer-motion'

interface CoinProps {
  isFlipping: boolean
  result: 'heads' | 'tails' | null
}

export default function Coin({ isFlipping, result }: CoinProps) {
  return (
    <motion.div
      className="relative w-80 h-80 [perspective:1500px]"
      animate={{
        rotateX: isFlipping ? [0, 720] : 0,
        rotateY: isFlipping ? [0, 720] : 0,
      }}
      transition={{
        duration: 1,
        ease: "easeInOut",
      }}
    >
      {/* Cara - Heads */}
      <div className={`absolute w-full h-full rounded-full 
        ${result === 'heads' ? 'opacity-100' : 'opacity-0'}
        bg-gradient-to-b from-gray-300 via-gray-100 to-gray-300
        shadow-[inset_0_0_20px_rgba(0,0,0,0.2)]
        transform-style-preserve-3d
        flex items-center justify-center
        overflow-hidden`}
      >
        {/* Centro dorado */}
        <div className="absolute w-[70%] h-[70%] rounded-full 
          bg-gradient-to-b from-yellow-400 via-yellow-300 to-yellow-400
          shadow-[inset_0_0_20px_rgba(0,0,0,0.2)]
          flex items-center justify-center">
          <div className="text-7xl transform translate-z-[2px]">👑</div>
        </div>
        {/* Patrón radial */}
        <div className="absolute w-full h-full 
          bg-[radial-gradient(circle_at_center,transparent_60%,rgba(156,163,175,0.5)_61%,rgba(156,163,175,0.5)_69%,transparent_70%)]">
        </div>
      </div>

      {/* Cruz - Tails */}
      <div className={`absolute w-full h-full rounded-full 
        ${result === 'tails' ? 'opacity-100' : 'opacity-0'}
        bg-gradient-to-b from-gray-300 via-gray-100 to-gray-300
        shadow-[inset_0_0_20px_rgba(0,0,0,0.2)]
        transform-style-preserve-3d
        flex items-center justify-center
        overflow-hidden`}
      >
        {/* Centro dorado */}
        <div className="absolute w-[70%] h-[70%] rounded-full 
          bg-gradient-to-b from-yellow-400 via-yellow-300 to-yellow-400
          shadow-[inset_0_0_20px_rgba(0,0,0,0.2)]
          flex items-center justify-center">
          <div className="text-7xl transform translate-z-[2px]">🌟</div>
        </div>
        {/* Patrón radial */}
        <div className="absolute w-full h-full 
          bg-[radial-gradient(circle_at_center,transparent_60%,rgba(156,163,175,0.5)_61%,rgba(156,163,175,0.5)_69%,transparent_70%)]">
        </div>
      </div>

      {/* Efecto de brillo */}
      <div className="absolute w-full h-full rounded-full 
        bg-gradient-to-b from-transparent via-white/10 to-transparent 
        pointer-events-none">
      </div>

      {/* Efecto de borde */}
      <div className="absolute w-full h-full rounded-full 
        border-8 border-gray-300/50
        pointer-events-none">
      </div>
    </motion.div>
  )
}