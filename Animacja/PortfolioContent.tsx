import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface PortfolioContentProps {
  isBankingTheme: boolean;
  isAnimating: boolean;
}

export function PortfolioContent({ isBankingTheme, isAnimating }: PortfolioContentProps) {
  const name = "Alex Chen";
  const photoUrl = "https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBvcnRyYWl0fGVufDF8fHx8MTc1NzY4MTI0MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen relative">
      <motion.div
        key={isBankingTheme ? 'banking' : 'web3'}
        initial={{ opacity: 0 }}
        animate={{ opacity: isAnimating ? 0 : 1 }}
        transition={{ 
          duration: isBankingTheme ? 0.8 : 1.2,
          delay: isBankingTheme ? 0.3 : 0.5,
          ease: "easeOut"
        }}
        className="flex flex-col items-center space-y-8"
      >
        {/* Profile Photo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: isAnimating ? 0 : 1 }}
          transition={{ 
            duration: 0.6,
            delay: isBankingTheme ? 0.5 : 0.7,
            ease: "easeOut"
          }}
          className={`relative ${
            isBankingTheme 
              ? 'rounded-full overflow-hidden shadow-xl border-4 border-green-100' 
              : 'rounded-lg overflow-hidden shadow-2xl border-2 border-cyan-400 shadow-cyan-400/25'
          }`}
        >
          <ImageWithFallback
            src={photoUrl}
            alt={name}
            className={`w-48 h-48 object-cover transition-all duration-500 ${
              isBankingTheme ? 'grayscale-0' : 'contrast-110 brightness-110'
            }`}
          />
          {!isBankingTheme && (
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-transparent to-purple-500/20 pointer-events-none" />
          )}
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: isAnimating ? 0 : 1 }}
          transition={{ 
            duration: 0.8,
            delay: isBankingTheme ? 0.7 : 0.9,
            ease: "easeOut"
          }}
          className={`text-5xl md:text-6xl transition-all duration-500 ${
            isBankingTheme
              ? 'text-gray-800 font-light tracking-wide'
              : 'text-white font-medium tracking-wider bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent'
          }`}
        >
          {name}
        </motion.h1>

        {/* Subtle tagline */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: isAnimating ? 0 : 1 }}
          transition={{ 
            duration: 0.8,
            delay: isBankingTheme ? 0.9 : 1.1,
            ease: "easeOut"
          }}
          className={`text-lg transition-all duration-500 ${
            isBankingTheme
              ? 'text-gray-600'
              : 'text-cyan-300/80'
          }`}
        >
          {isBankingTheme ? 'Financial Technology Specialist' : 'Blockchain Developer'}
        </motion.p>
      </motion.div>

      {/* Background effects */}
      {!isBankingTheme && (
        <>
          {/* Animated grid background */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10" />
            <motion.div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(0,255,255,0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(0,255,255,0.1) 1px, transparent 1px)
                `,
                backgroundSize: '50px 50px'
              }}
              animate={{ backgroundPosition: ['0px 0px', '50px 50px'] }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            />
          </div>

          {/* Floating particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.3, 1, 0.3],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: 'easeInOut'
                }}
              />
            ))}
          </div>
        </>
      )}

      {/* Banking theme subtle elements */}
      {isBankingTheme && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-50 rounded-full blur-3xl opacity-30" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-green-100 rounded-full blur-2xl opacity-20" />
        </div>
      )}
    </div>
  );
}