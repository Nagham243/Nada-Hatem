import React, { useRef, useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const AudioPlayer: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    // Attempt to play as soon as component mounts (which is after reveal interaction)
    if (audioRef.current) {
      audioRef.current.volume = 0.4;
      audioRef.current.play().catch(e => {
        console.error("Audio play failed:", e);
        setIsPlaying(false);
      });
    }
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <audio 
        ref={audioRef} 
        src="/song.mp3" 
        loop 
        preload="auto"
      />
      <button 
        onClick={togglePlay}
        className="w-12 h-12 bg-white/80 backdrop-blur-sm border border-themeGold/30 rounded-full flex items-center justify-center shadow-lg text-themeGold hover:bg-white transition-all hover:scale-105"
        aria-label="Toggle background music"
      >
        {isPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
      </button>
    </div>
  );
};

export default AudioPlayer;