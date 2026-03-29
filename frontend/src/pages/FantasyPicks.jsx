import { useState, useEffect } from 'react';
import { Sparkles, Trophy, TrendingDown, TrendingUp, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { useStaggerChildren } from '../utils/useStaggerChildren';
import { useTypewriter } from '../utils/useTypewriter';
import SkeletonLoader from '../components/SkeletonLoader';
import PageTransition from '../components/PageTransition';

export default function FantasyPicks() {
  const shouldReduceMotion = useReducedMotion();
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const dur = (d) => (shouldReduceMotion ? 0 : isMobile ? d * 0.7 : d);

  const [isLoading, setIsLoading] = useState(true);
  const { containerVariants, itemVariants } = useStaggerChildren(0.1, 0.05);

  const aiIntro = "Based on FP2 long-run data and projected track degradation, here are the high-value targets for the upcoming race. Focus on mid-field reliability.";
  const displayedIntro = useTypewriter(aiIntro, 40);

  const drivers = [
    { id: 1, name: 'M. Verstappen', price: '$32.5M', trend: 'up', points: 412, team: 'Red Bull Racing', avatar: 'https://media.formula1.com/content/dam/fom-website/drivers/M/MAXVER01_Max_Verstappen/maxver01.png.transform/2col/image.png' },
    { id: 2, name: 'L. Norris', price: '$24.8M', trend: 'up', points: 285, team: 'McLaren', avatar: 'https://media.formula1.com/content/dam/fom-website/drivers/L/LANDON01_Lando_Norris/landon01.png.transform/2col/image.png' },
    { id: 3, name: 'C. Leclerc', price: '$22.1M', trend: 'down', points: 264, team: 'Ferrari', avatar: 'https://media.formula1.com/content/dam/fom-website/drivers/C/CHALEC01_Charles_Leclerc/chalec01.png.transform/2col/image.png' },
    { id: 4, name: 'O. Piastri', price: '$18.4M', trend: 'up', points: 218, team: 'McLaren', avatar: 'https://media.formula1.com/content/dam/fom-website/drivers/O/OSCPIA01_Oscar_Piastri/oscpia01.png.transform/2col/image.png' },
    { id: 5, name: 'N. Hülkenberg', price: '$8.2M', trend: 'up', points: 94, team: 'Haas', avatar: 'https://media.formula1.com/content/dam/fom-website/drivers/N/NICHUL01_Nico_Hulkenberg/nichul01.png.transform/2col/image.png' },
    { id: 6, name: 'Y. Tsunoda', price: '$7.5M', trend: 'static', points: 78, team: 'RB', avatar: 'https://media.formula1.com/content/dam/fom-website/drivers/Y/YUKTSU01_Yuki_Tsunoda/yuktsu01.png.transform/2col/image.png' },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <PageTransition>
      <div className="pt-8 pb-28 px-4 max-w-6xl mx-auto w-full">
        <header className="mb-12">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="font-['Space_Grotesk'] font-bold tracking-tight text-white mb-2 text-4xl"
          >
            FANTASY <span className="text-[#e10600]">STRATEGIST</span>
          </motion.h1>
          <p className="text-[#e9bcb5] uppercase tracking-[0.2em] font-bold text-xs">AI-Optimized Selection Engine</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* AI Advisor Panel */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: dur(0.6) }}
            className="lg:col-span-4"
          >
            <div className="bg-[#1c1b1b] p-8 rounded-2xl border border-white/5 relative overflow-hidden h-full">
              <div className="absolute top-0 right-0 p-4">
                <Sparkles className="text-[#e10600]/20 w-12 h-12" />
              </div>
              
              <h2 className="font-['Space_Grotesk'] font-bold text-sm tracking-widest text-white uppercase mb-6 flex items-center gap-2">
                <Trophy size={16} className="text-[#e10600]" />
                Strategy Brief
              </h2>

              <p className="text-[#e5e2e1] leading-relaxed mb-8 min-h-[100px]">
                {displayedIntro}
              </p>

              <div className="space-y-6">
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  className="bg-[#2a2a2a] p-5 rounded-xl border-l-2 border-[#e10600]"
                >
                  <p className="text-[10px] font-bold text-[#e10600] uppercase tracking-widest mb-1">Top Underdog</p>
                  <p className="text-white font-['Space_Grotesk'] font-bold">Nico Hülkenberg</p>
                  <p className="text-xs text-[#e9bcb5] mt-1">Projected P8-P10 finish vs $8.2M cost.</p>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                  className="bg-[#2a2a2a] p-5 rounded-xl border-l-2 border-[#47efda]"
                >
                  <p className="text-[10px] font-bold text-[#47efda] uppercase tracking-widest mb-1">Budget Watch</p>
                  <p className="text-white font-['Space_Grotesk'] font-bold">Red Bull Constructor</p>
                  <p className="text-xs text-[#e9bcb5] mt-1">High ROI despite $30M price tag.</p>
                </motion.div>
              </div>

              <motion.button 
                whileHover={{ gap: '12px' }}
                className="mt-12 w-full py-4 bg-[#e10600] text-white font-['Space_Grotesk'] font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(225,6,0,0.3)]"
              >
                Assemble Auto-Lineup <Sparkles size={14} />
              </motion.button>
            </div>
          </motion.div>

          {/* Driver Grid */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              {isLoading ? (
                <div key="loader" className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   {[1, 2, 3, 4].map(i => <SkeletonLoader key={i} type="driver" />)}
                </div>
              ) : (
                <motion.div 
                  key="content"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                   {drivers.map(driver => (
                     <motion.div 
                       key={driver.id}
                       variants={itemVariants}
                       whileHover={{ y: -8, boxShadow: '0 20px 40px -20px rgba(0,0,0,0.5)' }}
                       className="group bg-[#1c1b1b] rounded-2xl overflow-hidden border border-white/5 hover:border-[#e10600]/30 transition-colors"
                     >
                       <div className="relative h-48 bg-[#2a2a2a] overflow-hidden">
                          <img 
                            src={driver.avatar} 
                            alt={driver.name} 
                            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-48 object-contain transition-transform duration-700 group-hover:scale-110" 
                          />
                          <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                             <div className="flex items-center gap-1.5">
                                {driver.trend === 'up' && <TrendingUp size={14} className="text-[#47efda]" />}
                                {driver.trend === 'down' && <TrendingDown size={14} className="text-[#e10600]" />}
                                {driver.trend === 'static' && <AlertCircle size={14} className="text-[#e9bcb5]" />}
                                <span className="text-xs font-bold text-white">{driver.price}</span>
                             </div>
                          </div>
                       </div>

                       <div className="p-6">
                          <h3 className="font-['Space_Grotesk'] font-bold text-white text-xl mb-1">{driver.name}</h3>
                          <p className="text-xs text-[#e9bcb5] font-bold uppercase tracking-tighter opacity-60 mb-4">{driver.team}</p>
                          
                          <div className="flex justify-between items-center pt-4 border-t border-white/5">
                             <div>
                               <p className="text-[10px] text-[#999999] uppercase tracking-widest mb-1">Session Points</p>
                               <p className="font-['Space_Grotesk'] font-extrabold text-[#47efda]">{driver.points}</p>
                             </div>
                             <motion.button 
                               whileTap={{ scale: 0.95 }}
                               className="px-6 py-2 bg-[#2a2a2a] hover:bg-[#e10600] text-white text-[10px] font-bold uppercase tracking-widest transition-colors rounded-lg"
                             >
                               ADD TO TEAM
                             </motion.button>
                          </div>
                       </div>
                     </motion.div>
                   ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
