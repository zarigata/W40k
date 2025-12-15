import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { thoughtsOfTheDay } from '../data/lore';

export const LoreTicker: React.FC = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % thoughtsOfTheDay.length);
        }, 8000); // Change every 8 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed bottom-0 left-0 w-full bg-black/80 border-t-2 border-red-900 z-50 py-2 overflow-hidden pointer-events-none">
            <div className="max-w-7xl mx-auto px-4 flex items-center justify-between relative">

                {/* Static Label */}
                <div className="text-red-600 font-bold uppercase tracking-widest text-xs mr-4 shrink-0 font-medieval border-r border-red-900 pr-4 drop-shadow-[0_0_5px_rgba(220,38,38,0.8)]">
                    Vox-Caster 72.A
                </div>

                {/* Scrolling/Fading Text */}
                <div className="flex-1 relative h-6">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={index}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="absolute inset-0 flex items-center justify-center md:justify-start"
                        >
                            <span className="text-gray-300 font-serif italic text-sm md:text-base tracking-wide drop-shadow-md">
                                " {thoughtsOfTheDay[index]} "
                            </span>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Decorative End */}
                <div className="hidden md:block text-red-900/50 text-xs ml-4 shrink-0">
                    +++ TRANSMISSION SECURE +++
                </div>
            </div>

            {/* Scanline overlay for the ticker only */}
            <div className="absolute inset-0 bg-[url('https://media.giphy.com/media/xT0xejJne5c3l7F50k/giphy.gif')] opacity-[0.05] pointer-events-none mix-blend-overlay"></div>
        </div>
    );
};
