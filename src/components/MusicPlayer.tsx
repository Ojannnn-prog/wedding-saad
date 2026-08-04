import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Square, SkipForward, Music, Disc } from 'lucide-react';
import { globalAudio, tracks, subscribeTrackChange, playNextTrack, getCurrentTrackIndex } from '../lib/audioManager';

interface MusicPlayerProps {
  isOpened: boolean;
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ isOpened }) => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);

  useEffect(() => {
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    globalAudio.addEventListener('play', handlePlay);
    globalAudio.addEventListener('pause', handlePause);

    const unsubscribe = subscribeTrackChange((newIndex) => {
      setCurrentTrackIndex(newIndex);
    });

    // Sinkronisasi status dengan audioManager
    setCurrentTrackIndex(getCurrentTrackIndex());
    setIsPlaying(!globalAudio.paused);

    return () => {
      globalAudio.removeEventListener('play', handlePlay);
      globalAudio.removeEventListener('pause', handlePause);
      unsubscribe();
    };
  }, []);

  const togglePlay = () => {
    if (isPlaying) {
      globalAudio.pause();
    } else {
      globalAudio.play().catch(e => console.error("Play error:", e));
    }
  };

  const handleStop = () => {
    globalAudio.pause();
    globalAudio.currentTime = 0;
    setIsPlaying(false);
  };

  const handleNext = () => {
    playNextTrack();
  };

  // Sembunyikan player sama sekali jika belum buka undangan
  if (!isOpened) return null;

  return (
    <div className="fixed bottom-20 md:bottom-12 right-4 md:right-8 z-[120] flex flex-col items-end pointer-events-none">
      <AnimatePresence>
        {isExpanded && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            className="bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl shadow-pink-200/50 border border-primary/20 mb-3 flex flex-col items-center gap-3 w-56 pointer-events-auto"
          >
            <div className="flex items-center gap-3 w-full px-1">
              <div 
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0 border border-primary/20 shadow-inner"
                style={{ animation: isPlaying ? 'spin 4s linear infinite' : 'none' }}
              >
                <Disc className="w-5 h-5 text-primary" />
              </div>
              <div className="overflow-hidden w-full flex-1">
                <div className="text-[10px] font-sans text-textMain/70 uppercase tracking-wider mb-0.5">Now Playing</div>
                <div className="whitespace-nowrap font-sans text-xs font-bold text-heading truncate">
                  {tracks[currentTrackIndex].title}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 w-full bg-secondary/30 py-2.5 rounded-xl border border-secondary">
               <button onClick={handleStop} className="text-textMain hover:text-primary transition-colors p-1" title="Stop">
                 <Square className="w-4 h-4 fill-current" />
               </button>
               <button 
                 onClick={togglePlay} 
                 className="text-white bg-primary hover:bg-heading transition-colors p-2.5 rounded-full shadow-md"
                 title={isPlaying ? "Pause" : "Play"}
               >
                 {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
               </button>
               <button onClick={handleNext} className="text-textMain hover:text-primary transition-colors p-1" title="Next Song">
                 <SkipForward className="w-4 h-4 fill-current" />
               </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center shadow-lg shadow-pink-300 hover:scale-105 active:scale-95 transition-transform pointer-events-auto"
      >
        <Music className={`w-5 h-5 ${isPlaying ? 'animate-pulse' : ''}`} />
      </button>
      
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default MusicPlayer;
