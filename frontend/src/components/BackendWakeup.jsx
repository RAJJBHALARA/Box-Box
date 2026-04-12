import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';

const HEALTH_URL = `${import.meta.env.VITE_API_URL || 'http://localhost:8000'}/api/health`;

export default function BackendWakeup() {
  const [status, setStatus] = useState('checking');
  // checking | waking | awake | hidden

  useEffect(() => {
    let cancelled = false;

    const checkBackend = async () => {
      try {
        const start = Date.now();
        await axios.get(HEALTH_URL, { timeout: 60000 });
        if (cancelled) return;

        const duration = Date.now() - start;

        if (duration > 5000) {
          // Was sleeping, just woke up
          setStatus('awake');
          setTimeout(() => {
            if (!cancelled) setStatus('hidden');
          }, 2500);
        } else {
          setStatus('hidden');
        }
      } catch {
        if (cancelled) return;
        setStatus('waking');
        // Retry after 5 seconds
        setTimeout(() => {
          if (!cancelled) checkBackend();
        }, 5000);
      }
    };

    checkBackend();
    return () => { cancelled = true; };
  }, []);

  return (
    <AnimatePresence>
      {(status === 'waking' || status === 'awake') && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          style={{
            position: 'fixed',
            bottom: 88,
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'rgba(15,15,15,0.95)',
            border: `1px solid ${status === 'awake' ? 'rgba(34,197,94,0.3)' : 'rgba(255,255,255,0.1)'}`,
            borderRadius: 100,
            padding: '10px 22px',
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            zIndex: 9999,
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
            whiteSpace: 'nowrap',
          }}
        >
          {status === 'waking' ? (
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              style={{ display: 'inline-block', fontSize: 16, lineHeight: 1 }}
            >⚙️</motion.span>
          ) : (
            <span style={{ fontSize: 14, lineHeight: 1 }}>✓</span>
          )}

          <span style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 12,
            fontWeight: 600,
            color: status === 'awake' ? '#22c55e' : '#ccc',
            letterSpacing: '0.03em',
          }}>
            {status === 'waking'
              ? 'Waking up server... (~30s)'
              : 'Server ready!'}
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
