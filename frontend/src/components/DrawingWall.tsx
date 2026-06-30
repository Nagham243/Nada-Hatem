import React, { useRef, useState, useEffect } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import axios from 'axios';
import { Eraser, Send, Palette } from 'lucide-react';
import { useLang } from '../context/LanguageContext';

interface Drawing {
  id: number;
  image_data: string;
  created_at: string;
}

const DrawingWall: React.FC = () => {
  const { t } = useLang();
  const sigPad = useRef<SignatureCanvas>(null);
  const [drawings, setDrawings] = useState<Drawing[]>([]);
  const [color, setColor] = useState('#2C1A0D');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const colors = ['#2C1A0D', '#CFA876', '#E25E5E', '#5D8A66', '#4A6984'];

  const fetchDrawings = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/drawings');
      setDrawings(response.data);
    } catch (error) {
      console.error('Error fetching drawings:', error);
    }
  };

  useEffect(() => {
    fetchDrawings();
  }, []);

  const clear = () => {
    sigPad.current?.clear();
  };

  const save = async () => {
    if (sigPad.current?.isEmpty()) return;
    
    setIsSubmitting(true);
    const dataUrl = sigPad.current?.getTrimmedCanvas().toDataURL('image/png');
    
    try {
      await axios.post('http://localhost:5000/api/drawings', {
        image_data: dataUrl
      });
      clear();
      fetchDrawings();
    } catch (error) {
      console.error('Error submitting drawing:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full flex flex-col space-y-12">
      {/* Drawing Pad */}
      <div className="w-full max-w-3xl mx-auto bg-white rounded-3xl shadow-md border border-themeGold/30 overflow-hidden">
        <div className="bg-themeCard/50 p-4 border-b border-themeGold/30 flex justify-between items-center">
          <div className="flex space-x-3 items-center">
            <Palette size={20} className="text-themeGold ml-2 mr-2" />
            {colors.map(c => (
              <button
                key={c}
                onClick={() => setColor(c)}
                className={`w-8 h-8 rounded-full border-2 transition-transform hover:scale-110 ${color === c ? 'border-gray-500 scale-110 shadow-sm' : 'border-transparent'}`}
                style={{ backgroundColor: c }}
                aria-label={`Select color ${c}`}
              />
            ))}
          </div>
          <button 
            onClick={clear}
            className="text-sm uppercase tracking-wider text-themeText/70 hover:text-themeText flex items-center px-3 py-1 rounded-lg hover:bg-white/50 transition-colors"
          >
            <Eraser size={16} className={t('mr-2', 'ml-2')} />
            <span className="font-semibold">{t('Clear', 'مسح')}</span>
          </button>
        </div>
        
        <div className="cursor-crosshair w-full relative bg-white">
          {/* Subtle watermark guiding to draw */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-5">
            <span className="font-serif text-4xl">{t('Draw here', 'ارسم هنا')}</span>
          </div>
          <SignatureCanvas 
            ref={sigPad}
            penColor={color}
            canvasProps={{
              className: 'w-full h-72 sm:h-96 relative z-10 touch-none',
            }}
            minWidth={2}
            maxWidth={5}
          />
        </div>
        
        <div className="p-5 border-t border-themeGold/30 bg-themeCard/20">
          <button 
            onClick={save}
            disabled={isSubmitting}
            className="w-full bg-themeText text-white rounded-xl py-4 flex items-center justify-center hover:bg-themeText/90 transition-all hover:shadow-lg disabled:opacity-70 font-semibold text-lg"
          >
            <span>{isSubmitting ? t('Saving...', 'جاري الحفظ...') : t('Post Drawing', 'نشر الرسمة')}</span>
            <Send size={18} className={t('ml-2', 'mr-2 rotate-180')} />
          </button>
        </div>
      </div>

      {/* Gallery */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto w-full px-4">
        {drawings.map(drawing => (
          <div key={drawing.id} className="bg-white rounded-2xl shadow-sm border border-themeGold/20 p-3 overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="bg-themeBg/40 rounded-xl overflow-hidden">
              <img src={drawing.image_data} alt="Guest drawing" className="w-full h-auto object-contain" />
            </div>
          </div>
        ))}
      </div>
      
      {drawings.length === 0 && (
        <div className="text-center text-themeText/50 py-12 bg-white/30 rounded-3xl max-w-3xl mx-auto w-full border border-themeGold/10">
          <p className="font-serif italic text-xl">
            {t('No drawings yet. Be the first to draw something!', 'لا توجد رسومات بعد. كن أول من يرسم!')}
          </p>
        </div>
      )}
    </div>
  );
};

export default DrawingWall;