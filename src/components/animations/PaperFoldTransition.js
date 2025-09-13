import { motion } from 'framer-motion';

const PaperFoldTransition = ({ isActive, onComplete }) => {
  if (!isActive) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 50,
      pointerEvents: 'none',
      overflow: 'hidden'
    }}>
      {/* Multiple paper sheets folding from top */}
      {[...Array(8)].map((_, index) => (
        <motion.div
          key={`paper-${index}`}
          style={{
            position: 'absolute',
            width: '100%',
            height: '20vh',
            top: '-20vh',
            left: 0,
            backgroundColor: 'white',
            boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
            transformOrigin: 'top center'
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
          style={{
            position: 'absolute',
            height: '4px',
            width: '100%',
            top: `${30 + index * 20}%`,
            left: 0,
            background: 'linear-gradient(to right, transparent, #fbbf24, transparent)'
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
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, #f9fafb 0%, #ffffff 50%, #f3f4f6 100%)',
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
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '128px',
          height: '128px',
          border: '4px solid #059669',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
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
          style={{
            width: '80px',
            height: '80px',
            border: '2px solid #10b981',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 0.5,
            delay: 1.2,
            ease: "backOut"
          }}
        >
          <div style={{
            color: '#059669',
            fontWeight: 'bold',
            fontSize: '12px'
          }}>APPROVED</div>
        </motion.div>
      </motion.div>

      {/* Final paper settlement effect */}
      <motion.div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'white'
        }}
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
          style={{
            position: 'absolute',
            width: '8px',
            height: '8px',
            backgroundColor: 'white',
            borderRadius: '2px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            left: `${Math.random() * 100}%`,
            top: '-10px'
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
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center'
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: [0, 0, 1, 0] }}
        transition={{
          duration: 1.5,
          delay: 1.2,
          ease: "easeOut"
        }}
      >
        <motion.div 
          style={{
            fontSize: '24px',
            color: '#1f2937',
            letterSpacing: '0.05em',
            fontFamily: 'serif'
          }}
        >
          Witamy w Bankowości
        </motion.div>
        <motion.div 
          style={{
            fontSize: '14px',
            color: '#6b7280',
            marginTop: '8px',
            height: '1px',
            background: 'linear-gradient(to right, transparent, #10b981, transparent)',
            margin: '8px auto 0'
          }}
          initial={{ width: 0 }}
          animate={{ width: '100px' }}
          transition={{ delay: 1.4, duration: 0.8 }}
        />
      </motion.div>
    </div>
  );
};

export default PaperFoldTransition;
