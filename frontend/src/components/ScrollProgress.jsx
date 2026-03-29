import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-20 left-0 right-0 h-[2px] bg-[#e10600] z-40"
      style={{ scaleX, transformOrigin: "0% 50%" }}
    />
  );
}
