import { motion } from 'motion/react';

interface PaintOverlayProps {
  isActive: boolean;
  onComplete: () => void;
}

export function PaintOverlay({ isActive, onComplete }: PaintOverlayProps) {
  if (!isActive) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.1 }}
      onAnimationComplete={() => {
        // Wait a moment then trigger completion
        setTimeout(onComplete, 800);
      }}
    >
      {/* Multiple paint layers for more realistic effect */}
      <motion.div
        className="absolute inset-0 bg-white"
        initial={{ scaleY: 0, transformOrigin: 'top' }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute inset-0 bg-white"
        initial={{ scaleX: 0, transformOrigin: 'left' }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.4, delay: 0.2, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute inset-0 bg-white"
        initial={{ scale: 0, transformOrigin: 'center' }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3, ease: "easeInOut" }}
      />
    </motion.div>
  );
}