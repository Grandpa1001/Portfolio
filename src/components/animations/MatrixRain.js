import { useEffect, useRef } from 'react';

const MatrixRain = ({ isActive, onComplete }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!isActive) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size - pokrywa całą stronę bez paddingu
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Matrix characters
    const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
    const matrixArray = matrix.split("");

    const fontSize = 16;
    const columns = canvas.width / fontSize;

    // Array of drops - one per column
    const drops = [];
    for (let x = 0; x < columns; x++) {
      drops[x] = 1;
    }

    let animationId;
    let startTime = Date.now();

    // Fill canvas with black immediately
    ctx.fillStyle = 'rgba(0, 0, 0, 1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    function draw() {
      // Black background with slight transparency for trailing effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#00ff41'; // Green color
      ctx.font = fontSize + 'px monospace';

      // Loop through drops
      for (let i = 0; i < drops.length; i++) {
        // Random character
        const text = matrixArray[Math.floor(Math.random() * matrixArray.length)];
        
        // Draw character
        ctx.fillStyle = '#00ff41';
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Add some randomness to make it look more authentic
        if (Math.random() > 0.975) {
          ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
          ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        }

        // Reset drop to top randomly
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        
        // Increment Y coordinate
        drops[i]++;
      }

      // Check if animation should complete (after 2 seconds)
      if (Date.now() - startTime > 2000) {
        // Fill with complete black screen
        ctx.fillStyle = 'rgba(0, 0, 0, 1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        if (Date.now() - startTime > 2500) {
          cancelAnimationFrame(animationId);
          onComplete();
          return;
        }
      }

      animationId = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isActive, onComplete]);

  if (!isActive) return null;

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 50,
        pointerEvents: 'none',
        background: 'transparent'
      }}
    />
  );
};

export default MatrixRain;
