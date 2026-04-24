import { motion, AnimatePresence } from 'framer-motion';
import { useMode } from '../context/ModeContext';

export default function BeginnerBanner() {
  const { isBeginnerMode } = useMode();
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <AnimatePresence>
      {isBeginnerMode && (
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -40, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
          className="beginner-banner-scanline w-full py-2 px-4"
          style={{
            background:
              'linear-gradient(90deg, rgba(245,158,11,0.15) 0%, rgba(245,158,11,0.08) 50%, rgba(245,158,11,0.15) 100%)',
            borderBottom: '1px solid rgba(245,158,11,0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 6,
            flexWrap: isMobile ? 'wrap' : 'nowrap',
            textAlign: 'center',
          }}
        >
          <span
            className="font-['Space_Grotesk'] font-bold"
            style={{ lineHeight: 1, color: '#F59E0B', fontSize: 12 }}
          >
            //
          </span>
          <span
            className="font-['Space_Grotesk'] font-semibold tracking-wider"
            style={{
              color: '#F59E0B',
              fontSize: isMobile ? 10 : 11,
              width: isMobile ? '100%' : 'auto',
            }}
          >
            BEGINNER MODE ACTIVE
          </span>
          <span
            className="font-['Space_Grotesk']"
            style={{
              color: 'rgba(245, 158, 11, 0.7)',
              fontSize: isMobile ? 10 : 11,
              maxWidth: isMobile ? '26ch' : 'none',
            }}
          >
            {isMobile
              ? "We're keeping things simple for you"
              : "- We're keeping things simple for you"}
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
