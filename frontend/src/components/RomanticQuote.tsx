import React from 'react';
import { useLang } from '../context/LanguageContext';

const RomanticQuote: React.FC = () => {
  const { t } = useLang();

  return (
    <div className="max-w-2xl mx-auto px-4 w-full relative py-12">
      {/* Decorative backdrop graphics */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-[150%] bg-[radial-gradient(ellipse_at_center,_rgba(207,168,118,0.15)_0%,_transparent_70%)] pointer-events-none -z-10 animate-breathe"></div>

      <div className="relative bg-themeCard/30 backdrop-blur-sm p-10 md:p-14 rounded-3xl border border-themeGold/20 shadow-xl animate-float">
        
        {/* Corner Ornaments */}
        <div className="absolute top-4 left-4">
          <svg width="40" height="40" viewBox="0 0 100 100" fill="none" className="opacity-60 text-themeGold">
            <path d="M0,0 L100,0 C100,0 50,50 0,100 Z" fill="currentColor" />
          </svg>
        </div>
        <div className="absolute bottom-4 right-4 rotate-180">
          <svg width="40" height="40" viewBox="0 0 100 100" fill="none" className="opacity-60 text-themeGold">
            <path d="M0,0 L100,0 C100,0 50,50 0,100 Z" fill="currentColor" />
          </svg>
        </div>

        <div className="flex flex-col items-center text-center space-y-6">
          <div className="text-themeGold opacity-80 mb-2">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="animate-pulse">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </div>
          
          <h2 className="text-2xl md:text-3xl text-themeText font-script leading-relaxed">
            {t(
              '"I have found the one whom my soul loves."',
              '"وَجَدْتُ مَنْ تُحِبُّهُ نَفْسِي."'
            )}
          </h2>
          
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-themeGold to-transparent my-4"></div>
          
          <p className="text-themeText/70 font-serif italic text-sm md:text-base">
            {t(
              'A new chapter begins, written with love and wrapped in gold.',
              'فصل جديد يبدأ، كُتب بالحب وتُوّج بالذهب.'
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RomanticQuote;