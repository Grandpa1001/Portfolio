import { useEffect, useRef } from 'react';

const StaircaseTransition = ({ isActive, onComplete }) => {
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

    const stepHeight = 40; // Wysokość każdego schodka
    const totalSteps = Math.ceil(canvas.height / stepHeight) + 2; // +2 dla bufora
    const stepWidth = canvas.width;
    
    let animationId;
    let startTime = Date.now();
    let currentStep = 0;
    let stepProgress = 0;

    function draw() {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const elapsed = Date.now() - startTime;
      const stepDuration = 80; // Czas na każdy schodek (ms)
      const totalDuration = totalSteps * stepDuration;

      // Oblicz aktualny schodek i postęp
      currentStep = Math.floor(elapsed / stepDuration);
      stepProgress = (elapsed % stepDuration) / stepDuration;

      // Rysuj wszystkie schodki do aktualnego
      for (let i = 0; i <= currentStep && i < totalSteps; i++) {
        const stepY = i * stepHeight;
        const stepX = 0;
        
        if (i < currentStep) {
          // Schodki już w pełni wjechane
          ctx.fillStyle = 'rgba(255, 255, 255, 1)';
          ctx.fillRect(stepX, stepY, stepWidth, stepHeight);
        } else if (i === currentStep) {
          // Aktualny schodek w trakcie wjeżdżania
          const progress = Math.min(stepProgress, 1);
          const currentHeight = stepHeight * progress;
          
          ctx.fillStyle = 'rgba(255, 255, 255, 1)';
          ctx.fillRect(stepX, stepY, stepWidth, currentHeight);
        }
      }

      // Dodaj cienie dla efektu głębi
      for (let i = 0; i < currentStep && i < totalSteps; i++) {
        const stepY = i * stepHeight;
        
        // Cień na dole każdego schodka
        ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
        ctx.fillRect(0, stepY + stepHeight - 2, stepWidth, 2);
      }

      // Sprawdź czy animacja powinna się zakończyć
      if (elapsed > totalDuration + 500) { // +500ms na pełne pokrycie
        // Wypełnij cały ekran na biało
        ctx.fillStyle = 'rgba(255, 255, 255, 1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        cancelAnimationFrame(animationId);
        onComplete();
        return;
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

export default StaircaseTransition;
