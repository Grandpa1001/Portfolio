import { motion } from 'motion/react';

interface PaperFoldTransitionProps {
  isActive: boolean;
  onComplete: () => void;
}

export function PaperFoldTransition({ isActive, onComplete }: PaperFoldTransitionProps) {
  if (!isActive) return null;

  return (
    <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden">
      {/* Multiple paper sheets folding from top */}
      {[...Array(8)].map((_, index) => (
        <motion.div
          key={`paper-${index}`}
          className="absolute w-full bg-white shadow-2xl"
          style={{
            height: '20vh',
            top: '-20vh',
            left: 0,
            transformOrigin: 'top center',
            boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
          }}
          initial={{ 
            y: -200,
            rotateX: -90,
            opacity: 0,
            scale: 0.8
          }}
          animate={{ 
            y: index * window.innerHeight / 8,
            rotateX: 0,
            opacity: 1,
            scale: 1
          }}
          transition={{
            duration: 0.8,
            delay: index * 0.1,
            ease: [0.4, 0, 0.2, 1]
          }}
        />
      ))}

      {/* Elegant gold accent lines sliding in */}
      {[...Array(3)].map((_, index) => (
        <motion.div
          key={`gold-line-${index}`}
          className="absolute h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"
          style={{
            width: '100%',
            top: `${30 + index * 20}%`,
            left: 0,
          }}
          initial={{ 
            scaleX: 0,
            opacity: 0
          }}
          animate={{ 
            scaleX: 1,
            opacity: [0, 1, 0.7, 0]
          }}
          transition={{
            duration: 1.2,
            delay: 0.5 + index * 0.2,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Professional document texture overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100"
        style={{
          backgroundImage: `
            linear-gradient(45deg, transparent 49%, rgba(0,0,0,0.02) 50%, transparent 51%),
            linear-gradient(-45deg, transparent 49%, rgba(0,0,0,0.02) 50%, transparent 51%)
          `,
          backgroundSize: '20px 20px'
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.3, 0.8, 1] }}
        transition={{
          duration: 1.5,
          delay: 0.8,
          ease: "easeOut"
        }}
      />

      {/* Corporate seal/stamp effect */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-32 h-32 border-4 border-green-600 rounded-full flex items-center justify-center bg-white/90"
        style={{
          transform: 'translate(-50%, -50%)'
        }}
        initial={{ 
          scale: 0,
          rotate: -180,
          opacity: 0
        }}
        animate={{ 
          scale: [0, 1.2, 1],
          rotate: 0,
          opacity: [0, 1, 0.8, 0]
        }}
        transition={{
          duration: 1.0,
          delay: 1.0,
          ease: "easeOut"
        }}
      >
        <motion.div
          className="w-20 h-20 border-2 border-green-500 rounded-full flex items-center justify-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 0.5,
            delay: 1.2,
            ease: "backOut"
          }}
        >
          <div className="text-green-600 font-bold text-xs">APPROVED</div>
        </motion.div>
      </motion.div>

      {/* Final paper settlement effect */}
      <motion.div
        className="absolute inset-0 bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0, 0, 0.5, 1] }}
        transition={{
          duration: 2.0,
          delay: 1.5,
          ease: "easeInOut"
        }}
        onAnimationComplete={() => {
          setTimeout(onComplete, 300);
        }}
      />

      {/* Subtle paper particles falling */}
      {[...Array(15)].map((_, index) => (
        <motion.div
          key={`particle-${index}`}
          className="absolute w-2 h-2 bg-white rounded-sm shadow-md"
          style={{
            left: `${Math.random() * 100}%`,
            top: '-10px',
          }}
          initial={{ 
            y: -20,
            opacity: 0,
            rotate: 0
          }}
          animate={{ 
            y: window.innerHeight + 50,
            opacity: [0, 1, 0.5, 0],
            rotate: 360 * 2
          }}
          transition={{
            duration: 2.5,
            delay: Math.random() * 1.5,
            ease: "easeOut"
          }}
        />
      ))}

      {/* Professional typography emerging */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: [0, 0, 1, 0] }}
        transition={{
          duration: 1.5,
          delay: 1.2,
          ease: "easeOut"
        }}
      >
        <motion.div 
          className="text-2xl text-gray-800 tracking-wide"
          style={{ fontFamily: 'serif' }}
        >
          Witamy w Bankowości
        </motion.div>
        <motion.div 
          className="text-sm text-gray-600 mt-2"
          initial={{ width: 0 }}
          animate={{ width: '100px' }}
          transition={{ delay: 1.4, duration: 0.8 }}
          style={{ 
            height: '1px', 
            background: 'linear-gradient(to right, transparent, #10b981, transparent)',
            margin: '0 auto'
          }}
        />
      </motion.div>
    </div>
  );
}