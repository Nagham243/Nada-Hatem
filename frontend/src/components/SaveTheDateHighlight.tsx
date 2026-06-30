import React from 'react';
import { useLang } from '../context/LanguageContext';

const SaveTheDateHighlight: React.FC = () => {
  const { t } = useLang();

  return (
    <div className="w-full flex justify-center py-12">
      <div className="relative group w-full max-w-sm">
        
        {/* Animated glowing backdrop */}
        <div className="absolute inset-0 bg-themeGold/20 rounded-full blur-3xl animate-pulse-glow group-hover:bg-themeGold/30 transition-all duration-700"></div>
        
        <div className="relative bg-white/60 backdrop-blur-md rounded-full aspect-square flex flex-col items-center justify-center border border-themeGold/30 shadow-[0_0_40px_rgba(207,168,118,0.15)] overflow-hidden">
          
          {/* Rotating dashed ring */}
          <div className="absolute inset-2 border-2 border-dashed border-themeGold/60 rounded-full animate-spin-slow"></div>
          
          {/* Static thin inner ring */}
          <div className="absolute inset-5 border border-themeGold/30 rounded-full"></div>

          <div className="z-10 text-center animate-breathe flex flex-col items-center justify-center h-full">
            <span className="uppercase tracking-[0.3em] text-xs font-semibold text-themeText/70 mb-2">
              {t('Save The Date', 'احفظ هذا التاريخ')}
            </span>
            
            <div className="relative">
              <span className="text-[120px] leading-none font-serif text-themeGold drop-shadow-md">
                7
              </span>
              <span className="absolute -right-6 top-6 text-themeGold/60 animate-sparkle">✨</span>
            </div>
            
            <div className="flex flex-col items-center mt-2 space-y-1">
              <span className="text-xl font-serif text-themeText font-bold uppercase tracking-widest">
                {t('July', 'يوليو')}
              </span>
              <span className="text-themeText/70 tracking-widest text-sm font-semibold">
                2026
              </span>
            </div>
          </div>

          {/* Floating decorative elements */}
          <div className="absolute top-1/4 left-8 w-2 h-2 bg-themeGold rounded-full animate-float blur-[1px]"></div>
          <div className="absolute bottom-1/4 right-8 w-3 h-3 bg-themeGold rounded-full animate-float-delayed blur-[1px]"></div>
        </div>
      </div>
    </div>
  );
};

export default SaveTheDateHighlight;