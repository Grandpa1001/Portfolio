import { useState } from 'react';
import { PortfolioContent } from './components/PortfolioContent';
import { ThemeToggle } from './components/ThemeToggle';
import { MatrixRain } from './components/MatrixRain';
import { PaperFoldTransition } from './components/PaperFoldTransition';

export default function App() {
  const [isBankingTheme, setIsBankingTheme] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showMatrixRain, setShowMatrixRain] = useState(false);
  const [showPaperFoldTransition, setShowPaperFoldTransition] = useState(false);

  const handleThemeToggle = () => {
    if (isAnimating) return;

    setIsAnimating(true);

    if (isBankingTheme) {
      // Banking → Web3: Matrix rain animation
      // Change background to dark immediately when matrix starts
      setIsBankingTheme(false);
      setShowMatrixRain(true);
    } else {
      // Web3 → Banking: Paper fold transition animation
      setShowPaperFoldTransition(true);
    }
  };

  const handleMatrixComplete = () => {
    setShowMatrixRain(false);
    // Theme already changed during animation
    setIsAnimating(false);
  };

  const handlePaperFoldComplete = () => {
    setShowPaperFoldTransition(false);
    setIsBankingTheme(true);
    setIsAnimating(false);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isBankingTheme 
        ? 'bg-white' 
        : 'bg-gradient-to-br from-gray-900 via-black to-gray-800'
    }`}>
      <ThemeToggle
        isBankingTheme={isBankingTheme}
        onToggle={handleThemeToggle}
        disabled={isAnimating}
      />
      
      <PortfolioContent
        isBankingTheme={isBankingTheme}
        isAnimating={isAnimating}
      />

      <MatrixRain
        isActive={showMatrixRain}
        onComplete={handleMatrixComplete}
      />

      <PaperFoldTransition
        isActive={showPaperFoldTransition}
        onComplete={handlePaperFoldComplete}
      />
    </div>
  );
}