import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Send } from 'lucide-react';
import { useLang } from '../context/LanguageContext';
import { API_BASE_URL } from '../config';

interface Message {
  id: number;
  name: string;
  content: string;
  created_at: string;
}

const MessageBoard: React.FC = () => {
  const { t, dir } = useLang();
  const [messages, setMessages] = useState<Message[]>([]);
  const [name, setName] = useState('');
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const fetchMessages = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/messages`);
      setMessages(response.data);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !content.trim()) return;
    
    setIsSubmitting(true);
    try {
      await axios.post(`${API_BASE_URL}/api/messages`, {
        name,
        content
      });
      setName('');
      setContent('');
      fetchMessages();
    } catch (error) {
      console.error('Error submitting message:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto w-full flex flex-col md:flex-row gap-8">
      {/* Form Section */}
      <div className="w-full md:w-1/2 bg-themeCard/60 p-8 rounded-2xl shadow-sm border border-themeGold/30">
        <h3 className="font-serif text-2xl mb-6 text-themeText text-center font-bold">
          {t('Leave a Message', 'اترك رسالة')}
        </h3>
        
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm uppercase tracking-wider text-themeText/80 mb-2 font-semibold">
              {t('Name', 'الاسم')}
            </label>
            <input 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-white/80 border border-themeGold/40 rounded-xl px-4 py-3 focus:outline-none focus:border-themeGold focus:ring-1 focus:ring-themeGold transition-all"
              placeholder={t('Your Name', 'اسمك')}
              required
              dir={dir}
            />
          </div>
          <div>
            <label className="block text-sm uppercase tracking-wider text-themeText/80 mb-2 font-semibold">
              {t('Message', 'الرسالة')}
            </label>
            <textarea 
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full bg-white/80 border border-themeGold/40 rounded-xl px-4 py-3 focus:outline-none focus:border-themeGold focus:ring-1 focus:ring-themeGold transition-all h-32 resize-none"
              placeholder={t('Write your wishes...', 'اكتب أمنياتك...')}
              required
              dir={dir}
            />
          </div>
          <button 
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-themeGold text-white rounded-xl py-4 flex items-center justify-center space-x-2 hover:bg-themeGold/90 transition-all hover:shadow-lg disabled:opacity-70 font-semibold text-lg"
          >
            <span>{isSubmitting ? t('Sending...', 'جاري الإرسال...') : t('Send Message', 'إرسال')}</span>
            <Send size={18} className={t('ml-2', 'mr-2 rotate-180')} />
          </button>
        </form>
      </div>

      {/* Messages List Section */}
      <div className="w-full md:w-1/2 h-[450px] overflow-y-auto pr-2 space-y-4 custom-scrollbar">
        {messages.length === 0 ? (
          <div className="text-center text-themeText/50 py-20 bg-white/30 rounded-2xl border border-themeGold/10 h-full flex items-center justify-center">
            <p className="font-serif italic text-lg">
              {t('Be the first to leave a message...', 'كن أول من يترك رسالة...')}
            </p>
          </div>
        ) : (
          messages.map(msg => (
            <div key={msg.id} className="bg-white/80 p-5 rounded-2xl border border-themeGold/20 shadow-sm hover:shadow-md transition-shadow">
              <p className="text-base text-themeText leading-relaxed whitespace-pre-wrap">{msg.content}</p>
              <div className="mt-4 flex justify-between items-center border-t border-themeGold/20 pt-3">
                <span className="font-bold text-themeGold">{msg.name}</span>
                <span className="text-xs text-themeText/60 font-medium">
                  {new Date(msg.created_at).toLocaleDateString(t('en-US', 'ar-EG'))}
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MessageBoard;