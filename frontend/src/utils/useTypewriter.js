import { useState, useEffect } from 'react';

export function useTypewriter(text, baseSpeedMs = 30) {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    if (!text) return;
    setDisplayedText('');
    let i = 0;
    
    // Calculate dynamic speed based on length (aiming for ~2s total max)
    let speed = baseSpeedMs;
    const maxDuration = 2000;
    if (text.length * baseSpeedMs > maxDuration) {
      speed = maxDuration / text.length;
    }
    
    const intervalId = setInterval(() => {
      setDisplayedText((prev) => prev + text.charAt(i));
      i++;
      if (i >= text.length) {
        clearInterval(intervalId);
      }
    }, speed);
    
    return () => clearInterval(intervalId);
  }, [text, baseSpeedMs]);

  return displayedText;
}
