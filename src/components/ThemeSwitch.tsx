import React from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-16 h-8 bg-portfolio-bg-light border border-portfolio-border rounded-full animate-pulse" />
    );
  }

  const toggleTheme = () => {
    const button = document.querySelector('#theme-switch');
    const rect = button?.getBoundingClientRect();
    const x = rect ? rect.left + rect.width / 2 : window.innerWidth / 2;
    const y = rect ? rect.top + rect.height / 2 : window.innerHeight / 2;

    document.documentElement.classList.add('theme-changing');
    document.documentElement.style.setProperty('--theme-change-x', `${x}px`);
    document.documentElement.style.setProperty('--theme-change-y', `${y}px`);
    
    setTheme(theme === 'dark' ? 'light' : 'dark');

    // Remove existing visible classes
    document.querySelector('.clouds')?.classList.remove('visible');
    document.querySelector('.stars')?.classList.remove('visible');
    
    // Add visible class after theme change
    setTimeout(() => {
      document.documentElement.classList.remove('theme-changing');
      if (theme === 'dark') {
        document.querySelector('.clouds')?.classList.add('visible');
      } else {
        document.querySelector('.stars')?.classList.add('visible');
      }
    }, 600);
  };

  return (
    <button
      id="theme-switch"
      onClick={toggleTheme}
      className="relative w-16 h-8 bg-portfolio-bg-light border border-portfolio-border rounded-full transition-all duration-500 hover:border-portfolio-accent hover:shadow-lg hover:shadow-portfolio-accent/20 group overflow-hidden z-[900]"
      aria-label="Toggle theme"
    >
      {/* Background gradient that shifts */}
      <div 
        className={`absolute inset-0 rounded-full transition-all duration-500 ${
          theme === 'dark' 
            ? 'bg-gradient-to-r from-slate-800 to-slate-600' 
            : 'bg-gradient-to-r from-orange-300 to-yellow-200'
        }`}
      />
      
      {/* Animated stars/clouds container */}
      <div className="absolute inset-0 overflow-hidden rounded-full">
        {theme === 'dark' ? (
          <>
            <div className="absolute top-2 right-3 w-0.5 h-0.5 bg-white rounded-full animate-twinkle" />
            <div className="absolute top-4 right-2 w-0.5 h-0.5 bg-white rounded-full animate-twinkle animation-delay-300" />
            <div className="absolute top-3 right-4 w-0.5 h-0.5 bg-white rounded-full animate-twinkle animation-delay-700" />
            <div className="absolute top-2 right-5 w-0.5 h-0.5 bg-white rounded-full animate-twinkle animation-delay-500" />
          </>
        ) : (
          <>
            <div className="absolute top-4 left-3 w-2 h-1 bg-white/60 rounded-full animate-float" />
            <div className="absolute top-5 left-2 w-1.5 h-0.5 bg-white/40 rounded-full animate-float animation-delay-300" />
            <div className="absolute top-6 left-4 w-2 h-0.5 bg-white/50 rounded-full animate-float animation-delay-500" />
          </>
        )}
      </div>

      {/* Sliding thumb */}
      <div 
        className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-lg transition-all duration-500 flex items-center justify-center ${
          theme === 'dark' ? 'left-1' : 'left-9'
        } z-10`}
      >
        <div className={`transition-all duration-300 ${theme === 'dark' ? 'scale-100 rotate-0' : 'scale-0 rotate-180'}`}>
          <Moon className="w-3 h-3 text-slate-700" />
        </div>
        <div className={`absolute transition-all duration-300 ${theme === 'light' ? 'scale-100 rotate-0' : 'scale-0 -rotate-180'}`}>
          <Sun className="w-3 h-3 text-orange-500" />
        </div>
      </div>
    </button>
  );
};

export default ThemeSwitch;