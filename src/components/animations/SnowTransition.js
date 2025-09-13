import { useEffect, useRef } from 'react';

const SnowTransition = ({ isActive, onComplete }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!isActive) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Snowflakes array
    const snowflakes = [];
    const snowflakeCount = 500;

    // Create snowflakes
    for (let i = 0; i < snowflakeCount; i++) {
      snowflakes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speed: Math.random() * 2 + 1,
        opacity: Math.random() * 0.8 + 0.2,
        drift: Math.random() * 2 - 1
      });
    }

    let animationId;
    let startTime = Date.now();
    let accumulatedSnow = 0;
    let maxSnowHeight = 0;

    function draw() {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw accumulated snow on ground - stopniowo pokrywa cały ekran
      if (accumulatedSnow > 0) {
        maxSnowHeight = Math.max(maxSnowHeight, accumulatedSnow);
        const snowOpacity = Math.min(accumulatedSnow / 200, 1);
        ctx.fillStyle = `rgba(255, 255, 255, ${snowOpacity})`;
        ctx.fillRect(0, canvas.height - maxSnowHeight, canvas.width, maxSnowHeight);
        
        // Jeśli śnieg pokrył już większość ekranu, zacznij pokrywać od góry
        if (maxSnowHeight > canvas.height * 0.3) {
          const topCoverage = Math.min((maxSnowHeight - canvas.height * 0.3) / (canvas.height * 0.7), 1);
          ctx.fillStyle = `rgba(255, 255, 255, ${topCoverage * snowOpacity})`;
          ctx.fillRect(0, 0, canvas.width, canvas.height * topCoverage);
        }
      }

      // Draw falling snowflakes
      ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
      snowflakes.forEach((snowflake, index) => {
        // Draw snowflake
        ctx.beginPath();
        ctx.arc(snowflake.x, snowflake.y, snowflake.size, 0, Math.PI * 2);
        ctx.fill();

        // Add some sparkle
        if (Math.random() > 0.95) {
          ctx.fillStyle = 'rgba(255, 255, 255, 1)';
          ctx.beginPath();
          ctx.arc(snowflake.x, snowflake.y, snowflake.size * 0.5, 0, Math.PI * 2);
          ctx.fill();
          ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        }

        // Update snowflake position
        snowflake.y += snowflake.speed;
        snowflake.x += snowflake.drift * 0.5;

        // Reset snowflake when it hits bottom
        if (snowflake.y > canvas.height) {
          snowflake.y = -10;
          snowflake.x = Math.random() * canvas.width;
          accumulatedSnow += 1.5; // Zwiększona akumulacja śniegu
        }

        // Wrap around horizontally
        if (snowflake.x < 0) snowflake.x = canvas.width;
        if (snowflake.x > canvas.width) snowflake.x = 0;
      });

      // Check if animation should complete (after 2.5 seconds)
      if (Date.now() - startTime > 2500) {
        // Fill with complete white screen - gwarantuje pełne pokrycie
        ctx.fillStyle = 'rgba(255, 255, 255, 1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        if (Date.now() - startTime > 3000) {
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

export default SnowTransition;
