import { useState } from 'react';
import { ArrowRight, Activity, TrendingUp, Timer } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { useAnimatedCounter } from '../utils/useAnimatedCounter';
import CustomDropdown from '../components/CustomDropdown';
import ScrollProgress from '../components/ScrollProgress';
import PageTransition from '../components/PageTransition';

export default function RaceAnalysis() {
  const shouldReduceMotion = useReducedMotion();
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const dur = (d) => shouldReduceMotion ? 0 : isMobile ? d * 0.7 : d;

  const [season, setSeason] = useState('2024');
  const [gp, setGp] = useState('MONACO GP');
  const [session, setSession] = useState('RACE');

  const topSpeed = useAnimatedCounter(342, 1.5, 0.3);
  const pitStop = useAnimatedCounter(2.34, 1.5, 0.5, true);
  const winProb = useAnimatedCounter(87.4, 1.5, 0.7, true);

  // SVG path lengths for draw animation
  const pathLength1 = 'M0,150 L40,145 L80,152 L120,138 L160,142 L200,120 L240,115 L280,122 L320,110 L360,112 L400,105';
  const pathLength2 = 'M0,155 L40,148 L80,155 L120,142 L160,140 L200,135 L240,128 L280,130 L320,125 L360,118 L400,115';

  const tireDrivers = [
    { name: 'M. VERSTAPPEN', detail: '1 STOP (LAP 32)', segments: [{ compound: 'M', width: '41%', bg: 'bg-yellow-400', text: 'text-black' }, { compound: 'H', width: '59%', bg: 'bg-white', text: 'text-black' }] },
    { name: 'C. LECLERC', detail: '1 STOP (LAP 30)', segments: [{ compound: 'S', width: '38%', bg: 'bg-red-600', text: 'text-white' }, { compound: 'H', width: '62%', bg: 'bg-white', text: 'text-black' }] },
    { name: 'L. HAMILTON', detail: '2 STOPS (LAP 24, 52)', segments: [{ compound: 'M', width: '30%', bg: 'bg-yellow-400', text: 'text-black' }, { compound: 'S', width: '35%', bg: 'bg-red-600', text: 'text-white' }, { compound: 'S', width: '35%', bg: 'bg-red-600', text: 'text-white' }] },
  ];

  return (
    <PageTransition>
      <div className="pt-8 pb-28 px-4 space-y-8 max-w-5xl mx-auto w-full">
        <ScrollProgress />

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: dur(0.4) }}
          className="flex items-center justify-between"
        >
          <h1 className="font-['Space_Grotesk'] font-bold tracking-[-0.02em] uppercase text-3xl text-[#ffb4a8]">RACE ANALYSIS</h1>
          <motion.span
            animate={{ boxShadow: shouldReduceMotion ? 'none' : ['0 0 0px #01d2be', '0 0 10px #01d2be', '0 0 0px #01d2be'] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-[10px] font-bold text-[#47efda] uppercase tracking-widest bg-[#01d2be]/10 px-3 py-1.5 rounded"
          >
            Live Data
          </motion.span>
        </motion.div>

        {/* Dropdown Selectors */}
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: dur(0.4) }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          <CustomDropdown label="Season" value={season} options={['2024', '2023', '2022', '2021']} onChange={setSeason} />
          <CustomDropdown label="Grand Prix" value={gp} options={['MONACO GP', 'SILVERSTONE GP', 'SPA-FRANCORCHAMPS', 'SUZUKA CIRCUIT', 'MONZA']} onChange={setGp} />
          <CustomDropdown label="Session" value={session} options={['RACE', 'QUALIFYING', 'SPRINT', 'FP1', 'FP2', 'FP3']} onChange={setSession} />
        </motion.section>

        {/* Lap Time Evolution */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: dur(0.5) }}
          className="bg-[#1c1b1b] rounded-xl overflow-hidden border border-white/5 shadow-lg"
        >
          <div className="p-6 border-b border-white/5 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div>
              <h2 className="font-['Space_Grotesk'] font-bold text-xl tracking-[-0.02em] uppercase text-white">LAP TIME EVOLUTION</h2>
              <p className="text-sm text-[#e9bcb5] mt-1">Comparison between leaders (Lap 1 - 78)</p>
            </div>
            <div className="flex gap-6">
              <div className="flex items-center gap-2">
                <span className="w-4 h-1 bg-[#e10600]"></span>
                <span className="text-xs font-['Space_Grotesk'] font-bold uppercase text-white">VER</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-1 bg-white"></span>
                <span className="text-xs font-['Space_Grotesk'] font-bold uppercase text-white">LEC</span>
              </div>
            </div>
          </div>
          <div className="h-80 relative p-4 overflow-hidden bg-[radial-gradient(circle,#ffffff05_1px,transparent_1px)]" style={{ backgroundSize: '24px 24px' }}>
            <svg className="w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="none">
              <motion.path
                d={pathLength1}
                fill="none"
                stroke="#e10600"
                strokeWidth="2.5"
                className="drop-shadow-[0_0_8px_rgba(225,6,0,0.4)]"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: dur(1.5), ease: 'easeInOut' }}
              />
              <motion.path
                d={pathLength2}
                fill="none"
                stroke="#e5e2e1"
                strokeWidth="2.5"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: dur(1.5), ease: 'easeInOut', delay: 0.2 }}
              />
            </svg>
            <div className="absolute inset-0 flex pointer-events-none">
              <div className="flex-1 border-r border-[#ffffff05]"></div>
              <div className="flex-1 border-r border-[#ffffff05]"></div>
              <div className="flex-1 border-r border-[#ffffff05]"></div>
              <div className="flex-1 border-r border-[#ffffff05]"></div>
            </div>
            {/* Highlight Indicator */}
            <div className="absolute top-0 bottom-0 left-[60%] w-[1px] bg-[#47efda] opacity-30"></div>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1, duration: dur(0.3) }}
              className="absolute top-[48%] left-[58.5%] bg-[#353534]/90 border border-[#47efda]/30 rounded p-3 text-[10px] font-['Space_Grotesk'] backdrop-blur-md shadow-xl"
            >
              <div className="text-[#47efda] font-bold mb-1 text-xs">LAP 47</div>
              <div className="text-white">VER: 1:14.281</div>
              <div className="text-[#e9bcb5]">LEC: 1:14.902</div>
            </motion.div>
          </div>
        </motion.section>

        {/* Tire Strategy */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: dur(0.5) }}
          className="bg-[#1c1b1b] rounded-xl overflow-hidden border border-white/5 shadow-lg"
        >
          <div className="p-6">
            <h2 className="font-['Space_Grotesk'] font-bold text-xl tracking-[-0.02em] uppercase text-white">TIRE STRATEGY</h2>
            <div className="mt-8 space-y-8">
              {tireDrivers.map((driver, di) => (
                <div key={driver.name} className="space-y-3">
                  <div className="flex justify-between items-center text-xs font-['Space_Grotesk'] font-bold uppercase tracking-widest text-white">
                    <span>{driver.name}</span>
                    <span className="text-[#e9bcb5]">{driver.detail}</span>
                  </div>
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: dur(0.8), delay: di * 0.2 }}
                    style={{ transformOrigin: 'left' }}
                    className="h-10 w-full flex rounded-full overflow-hidden bg-[#353534] shadow-inner"
                  >
                    {driver.segments.map((seg, si) => (
                      <div
                        key={si}
                        className={`h-full ${seg.bg} flex items-center justify-center ${si > 0 ? 'border-l-4 border-black/20' : ''}`}
                        style={{ width: seg.width }}
                      >
                        <span className={`text-xs font-black ${seg.text}`}>{seg.compound}</span>
                      </div>
                    ))}
                  </motion.div>
                </div>
              ))}
            </div>
            
            <div className="mt-10 pt-6 border-t border-white/5 flex justify-center gap-8">
              {[
                { color: 'bg-red-600', label: 'Soft' },
                { color: 'bg-yellow-400', label: 'Medium' },
                { color: 'bg-white border border-[#353534]', label: 'Hard' },
              ].map(t => (
                <div key={t.label} className="flex items-center gap-2">
                  <div className={`w-4 h-4 rounded-full ${t.color}`}></div>
                  <span className="text-xs font-['Space_Grotesk'] font-bold uppercase text-[#e9bcb5]">{t.label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Bento Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: dur(0.4) }}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className="bg-[#1c1b1b] p-8 rounded-xl border border-white/5 flex flex-col justify-between aspect-square md:aspect-auto h-48"
          >
            <Activity className="text-[#e10600] mb-4" size={28} />
            <div>
              <div className="text-xs font-['Space_Grotesk'] font-bold text-[#e9bcb5] uppercase tracking-wider mb-2">Top Speed</div>
              <div className="text-4xl font-['Space_Grotesk'] font-bold text-white">{topSpeed}<span className="text-lg font-medium ml-1 text-[#e9bcb5]">km/h</span></div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: dur(0.4) }}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className="bg-[#1c1b1b] p-8 rounded-xl border border-white/5 flex flex-col justify-between aspect-square md:aspect-auto h-48"
          >
            <Timer className="text-[#47efda] mb-4" size={28} />
            <div>
              <div className="text-xs font-['Space_Grotesk'] font-bold text-[#e9bcb5] uppercase tracking-wider mb-2">Avg. Pit Stop</div>
              <div className="text-4xl font-['Space_Grotesk'] font-bold text-white">{pitStop}<span className="text-lg font-medium ml-1 text-[#e9bcb5]">s</span></div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: dur(0.4) }}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className="col-span-1 md:col-span-2 lg:col-span-1 bg-[#1c1b1b] p-8 rounded-xl border border-white/5 flex items-center justify-between h-48"
          >
            <div>
              <div className="text-xs font-['Space_Grotesk'] font-bold text-[#e9bcb5] uppercase tracking-wider mb-2">Win Probability</div>
              <div className="text-5xl font-['Space_Grotesk'] font-bold text-[#e10600]">{winProb}%</div>
            </div>
            <motion.div
              animate={shouldReduceMotion ? {} : { rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              className="w-20 h-20 rounded-full border-4 border-[#353534] border-t-[#e10600] flex items-center justify-center"
            >
              <TrendingUp className="text-[#e10600]" size={28} />
            </motion.div>
          </motion.div>
        </section>
      </div>
    </PageTransition>
  );
}
