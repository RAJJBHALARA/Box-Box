import { motion } from 'framer-motion';

export function SkeletonLoader({ className }) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`relative overflow-hidden bg-gradient-to-r from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a] rounded-lg ${className}`}
      style={{
        backgroundSize: '200% 100%',
        animation: 'skeleton-shimmer 1.5s infinite linear'
      }}
    >
      <style>{`
        @keyframes skeleton-shimmer {
          0% { background-position: 200% 0 }
          100% { background-position: -200% 0 }
        }
      `}</style>
    </motion.div>
  );
}
