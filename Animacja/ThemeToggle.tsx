import { Switch } from "./ui/switch";

interface ThemeToggleProps {
  isBankingTheme: boolean;
  onToggle: () => void;
  disabled?: boolean;
}

export function ThemeToggle({ isBankingTheme, onToggle, disabled }: ThemeToggleProps) {
  return (
    <div className="fixed top-6 right-6 z-40 flex items-center space-x-3">
      <span className={`text-sm transition-colors duration-300 ${
        isBankingTheme ? 'text-gray-600' : 'text-cyan-400'
      }`}>
        Web3
      </span>
      <Switch
        checked={isBankingTheme}
        onCheckedChange={onToggle}
        disabled={disabled}
        className="data-[state=checked]:bg-green-600 data-[state=unchecked]:bg-gray-700"
      />
      <span className={`text-sm transition-colors duration-300 ${
        isBankingTheme ? 'text-green-600' : 'text-gray-400'
      }`}>
        Banking
      </span>
    </div>
  );
}