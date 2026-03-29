import { useState } from 'react';
import { Share2, BarChart2, Lightbulb } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { useAnimatedCounter } from '../utils/useAnimatedCounter';
import { useTypewriter } from '../utils/useTypewriter';
import CustomDropdown from '../components/CustomDropdown';
import PageTransition from '../components/PageTransition';

export default function RivalryTracker() {
  const shouldReduceMotion = useReducedMotion();
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const dur = (d) => (shouldReduceMotion ? 0 : isMobile ? d * 0.7 : d);

  const [season, setSeason] = useState('2024');

  // Stats Counters
  const qualy1 = useAnimatedCounter(9, 1.5, 1);
  const qualy2 = useAnimatedCounter(4, 1.5, 1);
  const wins1 = useAnimatedCounter(6, 1.5, 1.2);
  const wins2 = useAnimatedCounter(7, 1.5, 1.2);
  const points1 = useAnimatedCounter(154, 1.5, 1.4);
  const points2 = useAnimatedCounter(132, 1.5, 1.4);

  const aiAnalysis = "Hamilton shows superior tire management in Stint 2 metrics, gaining an average of 0.08s over Russell during long runs. However, Russell's Qualifying delta remains within 0.05%, making this the tightest teammate battle on the grid.";
  const displayedAnalysis = useTypewriter(aiAnalysis, 30);

  const stats = [
    { label: 'Qualifying', v1: qualy1, v2: qualy2, p1: '70%', p2: '30%' },
    { label: 'Race Wins', v1: wins1, v2: wins2, p1: '45%', p2: '55%' },
    { label: 'Avg. Pace Gap', v1: '+0.142s', v2: '---', p1: '85%', p2: '15%', isSpecial: true },
    { label: 'Championship Points', v1: points1, v2: points2, p1: '54%', p2: '46%' },
  ];

  return (
    <PageTransition>
      <div className="pt-8 pb-28 px-4 max-w-4xl mx-auto min-h-screen w-full">
        <div className="flex items-center justify-between mb-8">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-['Space_Grotesk'] font-bold tracking-[-0.02em] uppercase text-3xl text-white"
          >
            <span className="text-[#e10600] italic mr-3">RIVALRY</span>
            HUB
          </motion.h1>
        </div>

        {/* Year Selector & Action Bar */}
        <div className="flex justify-between items-center mb-8 gap-4">
          <div className="w-48">
             <CustomDropdown value={season} options={['2024', '2023', '2022', '2021']} onChange={setSeason} />
          </div>
          <div className="flex gap-4">
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 flex items-center justify-center bg-[#1c1b1b] rounded-full text-[#e9bcb5] hover:text-white transition-colors border border-white/5"
            >
              <Share2 className="w-5 h-5" />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 flex items-center justify-center bg-[#e10600] rounded-full text-white shadow-[0_0_15px_rgba(225,6,0,0.4)] hover:bg-[#c00500] transition-colors"
            >
              <BarChart2 className="w-5 h-5" />
            </motion.button>
          </div>
        </div>

        {/* Rivalry Head-to-Head Hero */}
        <div className="relative grid grid-cols-2 gap-px bg-[#5e3f3a]/20 rounded-2xl overflow-hidden mb-12 shadow-2xl">
          {/* Driver 1 */}
          <motion.div 
            initial={{ x: -80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: dur(0.6), ease: "easeOut" }}
            className="bg-[#1c1b1b] p-6 pb-0 flex flex-col items-center relative"
          >
            <div className="w-16 h-16 mb-6">
              <img 
                className="w-full h-full object-contain grayscale brightness-125" 
                alt="Mercedes Logo" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGPK19DZCBVy6-sLhcA6hUt8Tyu80tQo225oq5ZPQb8mze5xiNLebrGZiRbSOKSeLV3eGLu1W46DXes7P236q3ie-9mgYU4VMqpmgkJa2DbxNyc_ECK9BTGj1L21WtS6qnagjMKpDzLuIAUJW_RhsssL2WSfjAl-jd-maSDoNwysM7EeK1cLj8p6HY0pfWvRmyhn2hpzNi-1o812eGtpYEqzreVQiHFYnFzftVt2-nTSbqB-AWHy874pN-U_dQ-7gicWMfuxAKKD3Z" 
              />
            </div>
            <div className="relative w-full aspect-[4/5] mt-auto">
              <img 
                className="absolute bottom-0 left-0 w-full h-full object-cover object-top" 
                alt="Lewis Hamilton" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3IVgm3OhgMcdYUPdO2JVhbmtWS3QaxqspXGQ-y1h0_32aNjXlTmXaevpnHuHYUmW7AKVqadyXPI_EnEykIdoNAWfjk9QdGtHpCNir3Wbb1w3oGjw3EIaHb1Onmg8uartRaCkAWOhoUNNvhqfAn5yjHEvei6jp9ZERCdzGIoIwkSJzhiR2EJ7FCKDWj0ufB66JR8WECNA6A6kB6aEAFPVMqO4fGKTvYJctCOh8dCZYmMn0kzy3tRYfx3thIgS2UFnuTMf99FsU11y0" 
              />
            </div>
            <div className="absolute bottom-6 left-6 z-10">
              <p className="font-['Space_Grotesk'] font-black text-5xl italic text-white tracking-tighter leading-none drop-shadow-lg">LH44</p>
              <p className="font-body text-xs text-[#e9bcb5] uppercase tracking-[0.2em] mt-2 font-bold drop-shadow-md">L. Hamilton</p>
            </div>
          </motion.div>

          {/* Driver 2 */}
          <motion.div 
            initial={{ x: 80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: dur(0.6), ease: "easeOut" }}
            className="bg-[#1c1b1b] p-6 pb-0 flex flex-col items-center relative"
          >
            <div className="w-16 h-16 mb-6">
              <img 
                className="w-full h-full object-contain grayscale brightness-125" 
                alt="Mercedes Logo" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3rFb3VXsQ6s5HTJX2iR1D3cZ0fgSLw5Na9jGIc6Ql1KLpPa07XzYoEZLRnarKI68lKXNVu7shf4DLyg7MZ5CqVJsEVN1QVk5i22YHG58cZcOqnc8HLXtvJiIaBp3uWR7EK9ZpteQ9cC_liJ7vqIaSaBh6XPgMV9u0ZtZu2_8lm-EvCPNfVGnps0M0g4RLchkQYBmOtB29_Pxiq310PrK0o3rv9O5O0eA-DFfXfWOgyLla8DwlXP4acmy1DpzmKK4NhWIr53m8rw44" 
              />
            </div>
            <div className="relative w-full aspect-[4/5] mt-auto">
              <img 
                className="absolute bottom-0 right-0 w-full h-full object-cover object-top" 
                alt="George Russell" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMNCTZp9di5h_ahnBMDUl8AY1lm6WUIers31p-UeCUqy2E0bdl7GFTjLr5vucrsVe_inXfwDzrp5vGOcZJy4BznahiUwoBnLUvCejioo45DDjRX8zIAMLx1F1r3TpFao45dg9fJ_3DQFBqyoPtfR9WHOcWvprZbYfX_ETOJEsWL75wa2_tbUCqZY0wIK5upUOHTzAmlJYynbrzR4iQi8d1VD3PsjIL1Nbv6ElC00hm-Sa9EPQiaz2ZfisRZiU9YmFl-CBCD1uBk9Qn" 
              />
            </div>
            <div className="absolute bottom-6 right-6 z-10 text-right">
              <p className="font-['Space_Grotesk'] font-black text-5xl italic text-white tracking-tighter leading-none drop-shadow-lg">GR63</p>
              <p className="font-body text-xs text-[#e9bcb5] uppercase tracking-[0.2em] mt-2 font-bold drop-shadow-md">G. Russell</p>
            </div>
          </motion.div>

          {/* VS Badge */}
          <motion.div 
            initial={{ scale: 0, rotate: -15 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
          >
            <div className="bg-[#e10600] text-white font-['Space_Grotesk'] font-black italic px-6 py-2 text-xl skew-x-[-12deg] shadow-[0_10px_30px_rgba(225,6,0,0.5)]">
              VS
            </div>
          </motion.div>
        </div>

        {/* Comparative Stats Grid */}
        <section className="space-y-10">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-['Space_Grotesk'] font-black text-xl text-[#e9bcb5] tracking-widest uppercase mb-8 flex items-center gap-4"
          >
            <span className="h-px flex-1 bg-[#5e3f3a]/50"></span>
            Head-to-Head Data
            <span className="h-px flex-1 bg-[#5e3f3a]/50"></span>
          </motion.h2>

          {stats.map((stat, i) => (
            <div key={stat.label} className="space-y-4">
              <div className="flex justify-between items-end px-2">
                <span className={`font-['Space_Grotesk'] font-bold text-3xl ${stat.isSpecial ? 'text-[#47efda]' : 'text-white'}`}>{stat.v1}</span>
                <span className="font-['Space_Grotesk'] font-bold text-xs text-[#e9bcb5] tracking-[0.2em] uppercase pb-1">{stat.label}</span>
                <span className="font-['Space_Grotesk'] font-bold text-3xl text-white">{stat.v2}</span>
              </div>
              <div className="flex h-2 w-full bg-[#353534] rounded-full overflow-hidden gap-1 shadow-inner">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: stat.p1 }}
                  viewport={{ once: true }}
                  transition={{ duration: dur(0.8), delay: i * 0.15 }}
                  className={`h-full ${stat.isSpecial ? 'bg-[#01d2be]' : 'bg-gradient-to-l from-transparent to-[#e10600]'} rounded-full`}
                />
                <div className="h-full bg-[#2a2a2a] rounded-full flex-1"></div>
                {!stat.isSpecial && (
                   <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: stat.p2 }}
                    viewport={{ once: true }}
                    transition={{ duration: dur(0.8), delay: i * 0.15 }}
                    className="h-full bg-gradient-to-r from-transparent to-[#e10600] rounded-full"
                  />
                )}
              </div>
            </div>
          ))}
        </section>

        {/* Insights Card */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: dur(0.5) }}
          className="mt-16 p-8 rounded-2xl bg-[#1c1b1b] border-l-4 border-[#e10600] relative overflow-hidden shadow-xl"
        >
          <div className="absolute top-0 right-0 p-4 opacity-5">
            <Lightbulb className="w-32 h-32" />
          </div>
          <h3 className="font-['Space_Grotesk'] font-bold text-sm tracking-widest text-[#ffb4a8] uppercase mb-4 flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-[#e10600]" />
            AI Analysis
          </h3>
          <p className="text-[#e5e2e1] text-lg leading-relaxed relative z-10 font-['Inter']">
            {displayedAnalysis}
          </p>
        </motion.div>

      </div>
    </PageTransition>
  );
}
