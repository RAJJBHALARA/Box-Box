import { useState, useEffect } from 'react';
import { animate } from 'framer-motion';

export function useAnimatedCounter(endValue, duration = 1.5, delay = 0, isDecimal = false, start = true) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;
    const controls = animate(0, endValue, {
      duration: duration,
      delay: delay,
      ease: 'easeOut',
      onUpdate(v) {
        setValue(isDecimal ? parseFloat(v.toFixed(1)) : Math.round(v));
      }
    });
    return () => controls.stop();
  }, [endValue, duration, delay, isDecimal, start]);

  return value;
}
