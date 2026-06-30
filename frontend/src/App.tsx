import React, { useState } from 'react';
import { useLang } from './context/LanguageContext';
import { Heart } from 'lucide-react';
import GoldenLightReveal from './components/GoldenLightReveal';
import InvitationDetails from './components/InvitationDetails';
import SaveTheDateHighlight from './components/SaveTheDateHighlight';
import RomanticQuote from './components/RomanticQuote';
import MessageBoard from './components/MessageBoard';
import DrawingWall from './components/DrawingWall';
import AudioPlayer from './components/AudioPlayer';
import Countdown from './components/Countdown';
import OurStory from './components/OurStory';

function App() {
  const { lang, toggleLang, t } = useLang();
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-themeBg text-themeText selection:bg-themeGold selection:text-white">
      {/* Floating Language Toggle */}
      <button 
        onClick={toggleLang}
        className="fixed top-6 right-6 z-50 bg-white/80 backdrop-blur-md border border-themeGold/50 px-5 py-2 rounded-full shadow-lg text-themeGold font-bold text-sm hover:bg-themeGold hover:text-white transition-all transform hover:scale-105"
        aria-label="Toggle Language"
      >
        {lang === 'en' ? 'عربي' : 'English'}
      </button>

      {!isRevealed && (
        <GoldenLightReveal onReveal={() => setIsRevealed(true)} />
      )}
      
      <div className={`transition-opacity duration-1000 ${isRevealed ? 'opacity-100' : 'opacity-0'} relative z-0`}>
        {/* Background Decorative Elements */}
        <div className="fixed inset-0 pointer-events-none z-[-1] flex flex-col justify-between opacity-60">
           <div className="h-64 w-full bg-gradient-to-b from-themeCard to-transparent"></div>
           <div className="h-64 w-full bg-gradient-to-t from-themeCard to-transparent"></div>
        </div>

        <main className="max-w-4xl mx-auto px-4 py-16 md:py-24 space-y-32">
          <InvitationDetails />

          {/* New Eye-Catching Save The Date Circle */}
          <div className="border-t border-themeGold/20 pt-20">
            <SaveTheDateHighlight />
          </div>

          <div className="border-t border-themeGold/20 pt-20">
            <Countdown />
          </div>

          {/* New Eye-Catching Romantic Quote Frame */}
          <div className="border-t border-themeGold/20 pt-20">
            <RomanticQuote />
          </div>

          <div className="border-t border-themeGold/20 pt-20">
            <OurStory />
          </div>
          
          <div className="border-t border-themeGold/20 pt-20">
            <h2 className="text-4xl text-center text-themeGold font-serif font-bold mb-12">
              {t('Guestbook', 'دفتر الزوار')}
            </h2>
            <MessageBoard />
          </div>

          <div className="border-t border-themeGold/20 pt-20 pb-12">
            <h2 className="text-4xl text-center text-themeGold font-serif font-bold mb-12">
              {t('Drawing Wall', 'حائط الرسم')}
            </h2>
            <DrawingWall />
          </div>

          {/* Footer */}
          <footer className="pb-12 pt-4 text-center">
            <p className="text-themeText/60 text-xs font-serif uppercase tracking-widest flex items-center justify-center">
              <span>{t('Generated with', 'صُنع بـ')}</span>
              <Heart size={14} className="text-[#E25E5E] fill-[#E25E5E] animate-pulse mx-2" />
              <span>{t('by NOTA', 'بواسطة NOTA')}</span>
            </p>
          </footer>
        </main>
      </div>

      {/* Persistent Audio Player that stays after reveal */}
      {isRevealed && <AudioPlayer />}
    </div>
  );
}

export default App;