import { useState, useEffect } from 'react';

export function useTypewriter(text, baseSpeedMs = 30) {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    setDisplayedText('');
    if (!text) return;

    const safeText = String(text);
    let i = 0;

    // Calculate dynamic speed based on length (aiming for ~2s total max)
    let speed = baseSpeedMs;
    const maxDuration = 2000;
    if (safeText.length * baseSpeedMs > maxDuration) {
      speed = maxDuration / safeText.length;
    }
    speed = Math.max(12, speed);

    const intervalId = setInterval(() => {
      i++;
      setDisplayedText(safeText.slice(0, i));
      if (i >= safeText.length) {
        clearInterval(intervalId);
      }
    }, speed);

    return () => clearInterval(intervalId);
  }, [text, baseSpeedMs]);

  return displayedText;
}
