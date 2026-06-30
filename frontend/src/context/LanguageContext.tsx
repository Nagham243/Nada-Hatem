import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'ar';

interface LangContextType {
  lang: Language;
  toggleLang: () => void;
  t: (en: string, ar: string) => string;
  dir: 'ltr' | 'rtl';
}

const LangContext = createContext<LangContextType>({} as LangContextType);

export const useLang = () => useContext(LangContext);

export const LangProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [lang, setLang] = useState<Language>('en');
  
  const toggleLang = () => {
    setLang(prev => prev === 'en' ? 'ar' : 'en');
  };
  
  const t = (en: string, ar: string) => {
    return lang === 'en' ? en : ar;
  };
  
  const dir = lang === 'en' ? 'ltr' : 'rtl';

  return (
    <LangContext.Provider value={{ lang, toggleLang, t, dir }}>
      <div dir={dir} className={lang === 'ar' ? 'font-sans' : 'font-sans'}>
        {children}
      </div>
    </LangContext.Provider>
  );
};