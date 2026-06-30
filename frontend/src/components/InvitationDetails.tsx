import React from 'react';
import { useLang } from '../context/LanguageContext';
import { MapPin } from 'lucide-react';

const InvitationDetails: React.FC = () => {
  const { t } = useLang();

  return (
    <div className="flex flex-col items-center text-center space-y-12">
      <div className="space-y-4 animate-fade-in-up">
        <p className="text-themeGold font-serif text-lg mb-6">
          {t('In the name of God, the Most Gracious, the Most Merciful', 'بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ')}
        </p>
        <p className="uppercase tracking-[0.2em] text-sm text-themeText/80 font-medium">
          {t('You are invited to our engagement ceremony', 'نتشرف بدعوتكم لحضور حفل خطوبتنا')}
        </p>
      </div>

      <div className="py-8 w-full max-w-md relative animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        {/* Elegant Golden Arch Design */}
        <div className="absolute inset-0 border-2 border-themeGold/50 rounded-t-[200px] rounded-b-2xl pointer-events-none shadow-[0_0_30px_rgba(207,168,118,0.1)] bg-gradient-to-b from-themeCard/30 to-themeBg"></div>
        <div className="absolute inset-3 border border-themeGold/20 rounded-t-[190px] rounded-b-xl pointer-events-none"></div>
        
        {/* Botanical SVG Decoration at the bottom of the arch */}
        <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none overflow-hidden rounded-b-2xl opacity-40">
          <svg viewBox="0 0 400 150" className="absolute bottom-0 w-full" preserveAspectRatio="none">
            <path d="M0,150 Q100,80 200,150 Q300,80 400,150 L400,150 L0,150 Z" fill="none" stroke="#CFA876" strokeWidth="1" />
            <path d="M50,150 Q80,100 120,130" fill="none" stroke="#CFA876" strokeWidth="1.5" />
            <path d="M350,150 Q320,100 280,130" fill="none" stroke="#CFA876" strokeWidth="1.5" />
            <circle cx="120" cy="130" r="2" fill="#CFA876" />
            <circle cx="280" cy="130" r="2" fill="#CFA876" />
            <path d="M150,150 Q180,110 200,130 Q220,110 250,150" fill="none" stroke="#CFA876" strokeWidth="1.2" />
            <circle cx="200" cy="130" r="1.5" fill="#CFA876" />
          </svg>
        </div>
        
        <div className="relative space-y-6 pt-20 pb-16 px-6">
          <h1 className="font-script text-7xl md:text-8xl text-themeText leading-tight drop-shadow-sm">
            {t('Hatem', 'حاتم')}
            <span className="block text-4xl md:text-5xl my-4 text-themeGold font-script drop-shadow-sm">{t('and', 'و')}</span>
            {t('Nada', 'ندى')}
          </h1>
          
          <div className="flex items-center justify-center space-x-6 py-8 border-y border-themeGold/30 my-8 mx-4">
            <div className="text-center w-24">
              <p className="uppercase tracking-widest text-sm font-semibold">{t('Tuesday', 'الثلاثاء')}</p>
            </div>
            <div className="text-center px-6 border-x border-themeGold/30">
              <p className="uppercase tracking-widest text-sm mb-1">{t('July', 'يوليو')}</p>
              <p className="text-6xl font-serif text-themeGold drop-shadow-sm font-semibold">7</p>
              <p className="text-sm tracking-widest mt-1">2026</p>
            </div>
            <div className="text-center w-24">
              <p className="uppercase tracking-widest text-sm font-semibold whitespace-nowrap">{t('07:00 PM', '٠٧:٠٠ م')}</p>
            </div>
          </div>

          <div className="space-y-5 pt-4">
            <h3 className="text-2xl font-bold font-serif text-themeText">{t('Blanco Café', 'بلانكو كافيه')}</h3>
            <p className="text-sm text-themeText/80 max-w-[250px] mx-auto leading-relaxed">
              {t(
                'Shukri El Kawatly, In Front of Western Union Exchange, El Mahalla El Kobra',
                'شكرى القوتلى، أمام صرافة ويسترن يونيون، المحلة الكبرى'
              )}
            </p>
            
            <div className="pt-6 relative z-10">
              <a 
                href="https://maps.app.goo.gl/sM36inZjkvRJDNFN7?g_st=aw" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-8 py-3 bg-themeGold text-white rounded-full hover:bg-themeGold/90 transition-all hover:scale-105 shadow-lg text-sm uppercase tracking-wider font-semibold group"
              >
                <MapPin size={18} className={`${t('mr-2', 'ml-2')} group-hover:animate-bounce`} />
                <span>{t('View Location', 'عرض الموقع')}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvitationDetails;