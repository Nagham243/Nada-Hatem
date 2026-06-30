import React from 'react';
import { useLang } from '../context/LanguageContext';

const OurStory: React.FC = () => {
  const { t } = useLang();

  return (
    <div className="max-w-2xl mx-auto text-center space-y-8 px-4">
      <div className="space-y-4">
        <h2 className="text-4xl text-themeGold font-serif font-bold">
          {t('Our Beginning', 'بداية حكايتنا')}
        </h2>
      </div>
      
      <div className="relative p-8 md:p-12 bg-white/40 rounded-2xl shadow-sm border border-themeGold/20">
        {/* Decorative corner borders */}
        <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-themeGold rounded-tl-lg"></div>
        <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-themeGold rounded-tr-lg"></div>
        <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-themeGold rounded-bl-lg"></div>
        <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-themeGold rounded-br-lg"></div>

        <p className="text-themeText text-lg leading-loose italic font-serif relative z-10 px-4">
          {t(
            '"Every love story is beautiful, but ours is my favorite. We can\'t wait to share this special moment with all of you."',
            '"كل قصة حب جميلة، ولكن قصتنا هي الأقرب لقلبي. لا يسعنا الانتظار لمشاركتكم هذه اللحظة المميزة."'
          )}
        </p>
      </div>
    </div>
  );
};

export default OurStory;