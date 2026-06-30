import React, { useState } from 'react';
import { Heart } from 'lucide-react';

interface Props {
  onReveal: () => void;
}

const FrostedGlassReveal: React.FC<Props> = ({ onReveal }) => {
  const [isMelting, setIsMelting] = useState(false);

  const handleReveal = () => {
    setIsMelting(true);
    setTimeout(() => {
      onReveal();
    }, 2000); // Matches the new melt-away animation duration
  };

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center ${
        isMelting ? 'animate-melt-away pointer-events-none' : 'cursor-pointer'
      }`}
      onClick={handleReveal}
    >
      {/* Background layer */}
      <div className="absolute inset-0 bg-themeBg/60 backdrop-blur-xl transition-all duration-1000"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center flex flex-col items-center justify-center p-8 max-w-md animate-float">
        <h2 className="text-5xl font-script text-themeGold mb-2 drop-shadow-md">
          Hatem & Nada
        </h2>
        <h2 className="text-3xl font-serif text-themeGold mb-6 drop-shadow-md">
          حاتم و ندى
        </h2>
        
        <p className="text-themeText/80 uppercase tracking-[0.2em] text-sm mb-2">
          Unlock Our Invitation
        </p>
        <p className="text-themeText/80 font-serif text-lg mb-10">
          افتح دعوتنا
        </p>

        <div className="animate-pulse-slow flex flex-col items-center group">
          <div className="w-16 h-16 rounded-full border-2 border-themeGold flex items-center justify-center bg-white/30 frosted-glass shadow-[0_0_15px_rgba(207,168,118,0.5)] group-hover:scale-110 transition-transform duration-300">
             <Heart className="text-themeGold fill-themeGold/20" size={24} />
          </div>
          <p className="mt-4 text-themeText/60 text-xs uppercase tracking-widest">
            Tap to open
          </p>
          <p className="mt-1 text-themeText/60 font-serif text-sm">
            اضغط للفتح
          </p>
        </div>
      </div>
    </div>
  );
};

export default FrostedGlassReveal;