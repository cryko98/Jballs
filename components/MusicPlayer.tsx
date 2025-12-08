import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, AlertCircle } from 'lucide-react';
import { ASSETS } from '../constants';

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.4; // Slightly lower volume
    }
  }, []);

  const togglePlay = async () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      try {
        setHasError(false);
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (error) {
        console.error("Playback failed");
        // Ez általában akkor történik, ha a felhasználó még nem interaktált az oldallal,
        // vagy hálózati hiba lépett fel.
        setHasError(true);
        setIsPlaying(false);
      }
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-center gap-2">
      <audio 
        ref={audioRef} 
        loop 
        preload="auto"
        onError={() => {
          // Fixed: Removed 'e' argument logging to prevent circular structure error
          console.error("Audio failed to load.");
          setHasError(true);
        }}
      >
        {/* Primary Source: MP3 */}
        <source src={ASSETS.JINGLE_BELLS_MP3} type="audio/mpeg" />
        {/* Fallback Source: OGG */}
        <source src={ASSETS.JINGLE_BELLS_OGG} type="audio/ogg" />
      </audio>
      
      {/* Segítség a felhasználónak */}
      {!isPlaying && !hasError && (
        <span className="bg-white text-christmas-red text-xs font-bold px-2 py-1 rounded-md shadow-md animate-bounce mb-1">
          Play Music 🎵
        </span>
      )}

      {/* Hibaüzenet ha nem sikerül betölteni */}
      {hasError && (
        <span className="bg-white text-red-600 text-xs font-bold px-2 py-1 rounded-md shadow-md mb-1">
          Audio Error ❌
        </span>
      )}

      <button
        onClick={togglePlay}
        className={`p-3 rounded-full shadow-lg border-4 transition-transform duration-200 hover:scale-110 
          ${hasError 
            ? 'bg-gray-200 text-gray-400 border-gray-400 cursor-not-allowed' 
            : 'bg-white text-christmas-red border-christmas-green'}`}
        title={isPlaying ? "Mute Jingle Bells" : "Play Jingle Bells"}
      >
        {hasError ? <AlertCircle size={24} /> : (isPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />)}
      </button>
    </div>
  );
};

export default MusicPlayer;