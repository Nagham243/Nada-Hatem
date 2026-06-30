import React, { useState } from 'react';
import { useLang } from '../context/LanguageContext';
import { Sparkles } from 'lucide-react';

interface Props {
  onReveal: () => void;
}

const GoldenLightReveal: React.FC<Props> = ({ onReveal }) => {
  const { t } = useLang();
  const [isRevealing, setIsRevealing] = useState(false);

  const handleReveal = () => {
    if (isRevealing) return;
    setIsRevealing(true);
    
    // Call the parent onReveal smoothly
    setTimeout(() => {
      onReveal();
    }, 1800); 
  };

  // Generate random particles for a magical effect
  const particles = Array.from({ length: 25 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 4}s`,
    size: Math.random() * 4 + 2,
  }));

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center overflow-hidden ${
        isRevealing ? 'animate-fade-out-slow pointer-events-none' : 'cursor-pointer'
      }`}
      onClick={handleReveal}
    >
      {/* Rich gradient background instead of flat color */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#9e8b75] via-[#7a6a58] to-[#4a3e30]"></div>
      
      {/* Decorative Border Frame */}
      <div className="absolute inset-4 border border-themeGold/30 pointer-events-none">
        <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-themeGold/60 m-2"></div>
        <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-themeGold/60 m-2"></div>
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-themeGold/60 m-2"></div>
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-themeGold/60 m-2"></div>
      </div>

      {/* Sparkling particles */}
      {particles.map(p => (
        <div 
          key={p.id}
          className="absolute rounded-full bg-themeGold animate-sparkle mix-blend-screen"
          style={{
            left: p.left,
            top: p.top,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDelay: p.animationDelay,
            boxShadow: '0 0 10px rgba(207,168,118,0.8)'
          }}
        />
      ))}

      {/* The sweeping golden light beam */}
      <div className="absolute inset-0 pointer-events-none flex justify-center items-center overflow-hidden">
        <div 
          className={`w-[250vw] h-[40vh] bg-gradient-to-b from-transparent via-themeGold to-transparent blur-[60px] opacity-0 mix-blend-screen ${isRevealing ? 'animate-light-sweep' : ''}`} 
        />
        <div 
          className={`w-[250vw] h-[15vh] bg-white blur-[30px] opacity-0 mix-blend-overlay absolute ${isRevealing ? 'animate-light-sweep' : ''}`} 
          style={{ animationDelay: '0.1s' }}
        />
      </div>
      
      {/* Content */}
      <div className={`relative z-10 text-center flex flex-col items-center justify-center p-8 max-w-md transition-opacity duration-700 ${isRevealing ? 'opacity-0' : 'opacity-100 animate-float'}`}>
        <h2 className={`font-script text-themeGold mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] ${t('text-7xl', 'text-6xl')}`}>
          {t('Hatem & Nada', 'حاتم و ندى')}
        </h2>
        
        <div className="flex items-center justify-center space-x-4 mb-16 opacity-80">
          <div className="h-px w-12 bg-themeGold"></div>
          <p className="text-white uppercase tracking-[0.3em] text-xs font-serif drop-shadow-md">
            {t('A Golden Beginning', 'بداية ذهبية')}
          </p>
          <div className="h-px w-12 bg-themeGold"></div>
        </div>

        <div className="animate-pulse-glow flex flex-col items-center group rounded-full px-8 py-5 border border-themeGold/60 bg-themeGold/10 backdrop-blur-md shadow-[0_0_20px_rgba(207,168,118,0.2)]">
          <Sparkles className="text-themeGold mb-2" size={24} />
          <p className="text-themeGold text-xs uppercase tracking-[0.2em] font-semibold">
            {t('Tap to Reveal', 'اضغط للفتح')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default GoldenLightReveal;