import React, { useState, useEffect } from 'react';
import { useLang } from '../context/LanguageContext';

const Countdown: React.FC = () => {
  const { t } = useLang();
  const targetDate = new Date('2026-07-07T19:00:00').getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex flex-col items-center justify-center space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-serif text-themeText">
          {t('Time Until We Celebrate', 'الوقت المتبقي لنحتفل معاً')}
        </h2>
      </div>
      
      <div className="flex space-x-4 md:space-x-8" dir="ltr">
        {[
          { label: t('Days', 'أيام'), value: timeLeft.days },
          { label: t('Hours', 'ساعات'), value: timeLeft.hours },
          { label: t('Mins', 'دقائق'), value: timeLeft.minutes },
          { label: t('Secs', 'ثواني'), value: timeLeft.seconds }
        ].map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-themeCard rounded-full flex items-center justify-center border-2 border-themeGold shadow-inner">
              <span className="text-2xl md:text-3xl font-serif text-themeGold font-bold">{item.value}</span>
            </div>
            <span className="text-sm font-semibold text-themeText/80 mt-3 uppercase tracking-wider">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countdown;