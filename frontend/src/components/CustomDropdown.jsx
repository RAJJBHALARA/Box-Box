import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function CustomDropdown({ label, value, options, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="flex flex-col gap-1.5" ref={dropdownRef}>
      {label && <label className="text-[10px] font-bold text-[#e9bcb5] tracking-widest uppercase px-1">{label}</label>}
      <div className="relative">
        <div 
          onClick={() => setIsOpen(!isOpen)}
          className="bg-[#1c1b1b] border border-[#5e3f3a]/20 rounded-lg px-4 py-3 flex items-center justify-between hover:bg-[#2a2a2a] transition-colors cursor-pointer group"
        >
          <span className="font-['Space_Grotesk'] font-bold text-sm tracking-tight text-white">{value}</span>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown className="w-4 h-4 text-[#999999] group-hover:text-[#ffb4a8] transition-colors" />
          </motion.div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8, scaleY: 0.95 }}
              animate={{ opacity: 1, y: 0, scaleY: 1 }}
              exit={{ opacity: 0, y: -8, scaleY: 0.95 }}
              transition={{ duration: 0.2 }}
              style={{ transformOrigin: 'top' }}
              className="absolute z-50 w-full mt-2 bg-[#1c1b1b] border border-[#5e3f3a]/20 rounded-lg shadow-xl overflow-hidden"
            >
              <div className="max-h-60 overflow-y-auto custom-scrollbar">
                {options.map((opt) => (
                  <div
                    key={opt}
                    onClick={() => {
                      onChange(opt);
                      setIsOpen(false);
                    }}
                    className="px-4 py-3 text-sm font-['Space_Grotesk'] font-bold text-[#999999] hover:text-white hover:bg-[#e10600] transition-colors cursor-pointer"
                  >
                    {opt}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
