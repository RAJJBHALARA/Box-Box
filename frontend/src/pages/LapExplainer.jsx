import { useState } from 'react';
import { Play, SkipForward, Info, Timer, Zap, Gauge, Map } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { useAnimatedCounter } from '../utils/useAnimatedCounter';
import { useTypewriter } from '../utils/useTypewriter';
import ScrollProgress from '../components/ScrollProgress';
import PageTransition from '../components/PageTransition';

export default function LapExplainer() {
  const shouldReduceMotion = useReducedMotion();
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const dur = (d) => (shouldReduceMotion ? 0 : isMobile ? d * 0.7 : d);

  const [isPlaying, setIsPlaying] = useState(false);
  
  const lapTime = useAnimatedCounter(1.11, 1, 0.5, true);
  const gear = useAnimatedCounter(8, 0.5, 0.8);
  const rpm = useAnimatedCounter(12450, 1.5, 1);
  const brakePressure = useAnimatedCounter(98.4, 1.5, 1.2, true);

  const aiAnalysis = "Telemetry shows a delayed downshift at Turn 4, costing 0.12s in exit velocity. The ERS deployment was optimal through the Tunnel, compensating for the early traction loss. Monitor brake temps on next push.";
  const displayedAnalysis = useTypewriter(aiAnalysis, 35);

  const shakeVariants = {
    shake: {
      x: [0, -2, 2, -2, 2, 0],
      transition: { duration: 0.4, repeat: 3 }
    }
  };

  return (
    <PageTransition>
      <div className="pt-8 pb-28 px-4 max-w-5xl mx-auto w-full">
        <ScrollProgress />

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6">
          <div>
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="font-['Space_Grotesk'] font-bold tracking-[-0.02em] text-white text-3xl"
            >
              LAP <span className="text-[#e10600]">EXPLAINER</span>
            </motion.h1>
            <p className="text-[#e9bcb5] text-sm mt-2 opacity-60">Session: Q3 — Final Push</p>
          </div>
          <div className="flex gap-4">
             <motion.button 
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
               onClick={() => setIsPlaying(!isPlaying)}
               className="flex items-center gap-2 px-6 py-3 bg-[#e10600] text-white font-bold rounded-full text-xs uppercase tracking-widest shadow-lg shadow-[#e10600]/20"
             >
               {isPlaying ? 'PAUSE ANALYSIS' : 'PLAY REPLAY'} <Play size={14} fill={isPlaying ? 'none' : 'currentColor'} />
             </motion.button>
             <motion.button 
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
               className="flex items-center gap-2 px-6 py-3 bg-[#1c1b1b] border border-white/10 text-white font-bold rounded-full text-xs uppercase tracking-widest"
             >
               NEXT TURN <SkipForward size={14} />
             </motion.button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Track Map Visualization */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="lg:col-span-2 bg-[#1c1b1b] rounded-2xl p-8 border border-white/5 relative overflow-hidden flex flex-col items-center justify-center min-h-[450px]"
          >
            <div className="absolute top-6 left-6 flex items-center gap-2">
              <Map size={16} className="text-[#e10600]" />
              <span className="text-[10px] font-bold text-white uppercase tracking-widest">MONACO CIRCUIT</span>
            </div>
            
            <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_20px_rgba(225,6,0,0.15)]">
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 3, ease: "linear", repeat: Infinity }}
                  d="M50,10 L70,10 L80,20 L80,40 L70,60 L50,80 L30,60 L20,40 L20,20 L30,10 Z"
                  fill="none"
                  stroke="#e10600"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className="opacity-20"
                />
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 5, ease: "easeInOut" }}
                  d="M50,10 L70,10 L80,20 L80,40 L70,60 L50,80 L30,60 L20,40 L20,20 L30,10 Z"
                  fill="none"
                  stroke="#e10600"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                {/* Dot Following Path */}
                <motion.circle
                  r="3"
                  fill="white"
                  initial={{ offsetDistance: "0%" }}
                  animate={{ offsetDistance: "100%" }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  style={{ offsetPath: "path('M50,10 L70,10 L80,20 L80,40 L70,60 L50,80 L30,60 L20,40 L20,20 L30,10 Z')", offsetRotate: "auto" }}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                 <div className="text-center">
                   <p className="text-[10px] text-[#999999] uppercase tracking-[0.2em] mb-1">Current Sector</p>
                   <p className="text-4xl font-['Space_Grotesk'] font-bold text-white tracking-tighter">S3</p>
                 </div>
              </div>
            </div>
          </motion.div>

          {/* Real-time Telemetry Bento */}
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-[#1c1b1b] p-6 rounded-2xl border border-white/5 flex flex-col justify-between h-[120px]"
            >
              <div className="flex justify-between items-start">
                <span className="text-[10px] text-[#999999] font-bold uppercase tracking-widest">LAP TIME (REL)</span>
                <Timer size={14} className="text-[#47efda]" />
              </div>
              <div className="text-3xl font-['Space_Grotesk'] font-bold text-white">1:{lapTime}<span className="text-sm font-normal text-[#47efda] ml-2 font-body">-0.045s</span></div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-[#1c1b1b] p-6 rounded-2xl border border-white/5 flex flex-col justify-between h-[120px]"
            >
              <div className="flex justify-between items-start">
                <span className="text-[10px] text-[#999999] font-bold uppercase tracking-widest">TRANSMISSION</span>
                <Zap size={14} className="text-[#e10600]" />
              </div>
              <div className="flex items-end justify-between">
                <div className="text-4xl font-['Space_Grotesk'] font-bold text-white">{gear}</div>
                <div className="text-right">
                   <p className="text-[10px] text-[#999999] uppercase font-bold">RPM</p>
                   <p className="text-lg font-['Space_Grotesk'] font-bold text-white">{rpm}</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-[#1c1b1b] p-6 rounded-2xl border border-white/5 flex flex-col justify-between h-[120px]"
            >
              <div className="flex justify-between items-start">
                <span className="text-[10px] text-[#999999] font-bold uppercase tracking-widest">BRAKE PRESSURE</span>
                <Gauge size={14} className="text-[#e10600]" />
              </div>
              <div className="w-full bg-[#2a2a2a] h-1.5 rounded-full overflow-hidden mt-2">
                 <motion.div 
                   initial={{ width: 0 }}
                   animate={{ width: `${brakePressure}%` }}
                   transition={{ duration: 1.5 }}
                   className="h-full bg-[#e10600]" 
                 />
              </div>
              <div className="text-2xl font-['Space_Grotesk'] font-bold text-white text-right">{brakePressure}%</div>
            </motion.div>
          </div>
        </div>

        {/* Dynamic AI Analysis Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
           <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="bg-[#2a2a2a]/50 p-8 rounded-2xl border border-white/5 flex items-start gap-4"
           >
              <div className="bg-[#e10600]/10 p-4 rounded-xl">
                 <Info className="text-[#e10600]" size={24} />
              </div>
              <div>
                 <h3 className="text-xs font-bold text-[#e10600] uppercase tracking-[0.2em] mb-4">Telemetric Verdict</h3>
                 <p className="text-[#e5e2e1] text-lg leading-relaxed font-['Inter']">
                   {displayedAnalysis}
                 </p>
              </div>
           </motion.div>

           <motion.div 
             variants={shakeVariants}
             animate="shake"
             className="bg-[#1c1b1b] p-8 rounded-2xl border border-[#e10600]/20 flex flex-col justify-center"
           >
              <div className="flex items-center gap-3 mb-4">
                 <div className="w-3 h-3 bg-[#e10600] rounded-full animate-pulse"></div>
                 <h3 className="text-xs font-bold text-white uppercase tracking-widest">Performance Loss Detected</h3>
              </div>
              <div className="flex justify-between items-baseline">
                 <p className="text-5xl font-['Space_Grotesk'] font-extrabold text-[#e10600] tracking-tighter">+0.128s</p>
                 <p className="text-xs text-[#999999] uppercase font-bold">VS BEST SECTOR 1</p>
              </div>
              <p className="text-xs text-[#e9bcb5] mt-4 leading-relaxed">Turn 7 exit traction loss confirmed. Tire surface temp spiked to 118°C.</p>
           </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}
