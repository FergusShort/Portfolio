import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Play, Pause } from 'lucide-react';
import styles from './MusicPlayerStyles.module.css';

function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const audioRef = useRef(null);

  // Using a royalty-free ambient track URL
  const musicUrl = "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav";

  useEffect(() => {
    // Create audio element
    audioRef.current = new Audio();
    audioRef.current.loop = true;
    audioRef.current.volume = volume;
    
    // For demo purposes, we'll use a data URL with a simple tone
    // In production, you'd use actual music files
    audioRef.current.src = "data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIG2m98OScTgwOUarm7blmGgU7k9n1unEiBC13yO/eizEIHWq+8+OWT";
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(e => console.log('Audio play failed:', e));
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  return (
    <div className={styles.musicPlayer}>
      <button 
        className={styles.playButton}
        onClick={togglePlay}
        aria-label={isPlaying ? 'Pause music' : 'Play music'}
      >
        {isPlaying ? <Pause size={16} /> : <Play size={16} />}
      </button>
      
      <button 
        className={styles.muteButton}
        onClick={toggleMute}
        aria-label={isMuted ? 'Unmute' : 'Mute'}
      >
        {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
      </button>
      
      <input
        type="range"
        min="0"
        max="1"
        step="0.1"
        value={volume}
        onChange={handleVolumeChange}
        className={styles.volumeSlider}
        aria-label="Volume control"
      />
      
      <span className={styles.label}>Ambient</span>
    </div>
  );
}

export default MusicPlayer;