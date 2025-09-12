import { motion } from 'motion/react';

interface RippleTransitionProps {
  isActive: boolean;
  onComplete: () => void;
}

export function RippleTransition({ isActive, onComplete }: RippleTransitionProps) {
  if (!isActive) return null;

  return (
    <div className="fixed inset-0 z-50 pointer-events-none flex items-center justify-center">
      {/* Multiple ripple waves for depth */}
      {[0, 1, 2].map((index) => (
        <motion.div
          key={index}
          className="absolute w-0 h-0 rounded-full border-4 border-white/30"
          initial={{ 
            width: 0, 
            height: 0,
            opacity: 0.8
          }}
          animate={{ 
            width: '300vw', 
            height: '300vh',
            opacity: 0
          }}
          transition={{
            duration: 1.2,
            delay: index * 0.15,
            ease: "easeOut"
          }}
        />
      ))}
      
      {/* Main white circle that fills the screen */}
      <motion.div
        className="absolute w-0 h-0 rounded-full bg-white"
        initial={{ 
          width: 0, 
          height: 0,
          opacity: 0
        }}
        animate={{ 
          width: '300vw', 
          height: '300vh',
          opacity: 1
        }}
        transition={{
          duration: 1.0,
          delay: 0.3,
          ease: "easeInOut"
        }}
        onAnimationComplete={() => {
          setTimeout(onComplete, 200);
        }}
      />
      
      {/* Subtle gradient overlay for smoother transition */}
      <motion.div
        className="absolute inset-0 bg-gradient-radial from-transparent via-white/50 to-white"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 3 }}
        transition={{
          duration: 0.8,
          delay: 0.4,
          ease: "easeOut"
        }}
      />
      
      {/* Sparkle effects around the ripple */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`sparkle-${i}`}
          className="absolute w-2 h-2 bg-green-400 rounded-full"
          style={{
            left: '50%',
            top: '50%',
            transform: `rotate(${i * 30}deg) translateY(-80px)`
          }}
          initial={{ 
            scale: 0, 
            opacity: 0,
            rotate: i * 30
          }}
          animate={{ 
            scale: [0, 1.5, 0], 
            opacity: [0, 1, 0],
            y: [-80, -120, -160]
          }}
          transition={{
            duration: 1.0,
            delay: 0.2 + (i * 0.05),
            ease: "easeOut"
          }}
        />
      ))}
    </div>
  );
}