import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { factions } from '../data/factions';

export const FactionShowcase: React.FC = () => {
    const [selectedId, setSelectedId] = useState<string | null>(null);

    const selectedFaction = factions.find(f => f.id === selectedId);

    return (
        <div className="min-h-screen bg-black text-white p-8 overflow-x-hidden">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-12 uppercase tracking-tight text-gray-200">
                The Great Powers
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                {factions.map(faction => (
                    <motion.div
                        layoutId={`card-${faction.id}`}
                        key={faction.id}
                        onClick={() => setSelectedId(faction.id)}
                        className="cursor-pointer relative overflow-hidden rounded-xl h-64 group border border-gray-800 hover:border-white/50 transition-colors"
                        whileHover={{ scale: 1.02 }}
                    >
                        {/* Background Image / Banner */}
                        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                            style={{ backgroundImage: `url(${faction.bannerImage})` }}>
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                        </div>

                        <div className="absolute bottom-0 left-0 p-4 w-full">
                            <motion.h3
                                layoutId={`title-${faction.id}`}
                                className="text-2xl font-bold uppercase tracking-wider"
                                style={{ color: faction.colors.primary }}
                            >
                                {faction.name}
                            </motion.h3>
                            <p className="text-gray-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                                Click to Inspect
                            </p>
                        </div>

                        {/* Hover Glitch Effect Element? */}
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {selectedId && selectedFaction && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedId(null)}
                            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
                        />

                        <motion.div
                            layoutId={`card-${selectedId}`}
                            className="relative w-full max-w-4xl bg-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-gray-700"
                            style={{ maxHeight: '90vh' }}
                        >
                            <button
                                onClick={(e) => { e.stopPropagation(); setSelectedId(null); }}
                                className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full hover:bg-white/20 text-white"
                            >
                                ✕
                            </button>

                            <div className="flex flex-col md:flex-row h-full">
                                {/* Image Section */}
                                <div className="w-full md:w-1/2 h-64 md:h-auto bg-cover bg-center relative"
                                    style={{ backgroundImage: `url(${selectedFaction.bannerImage})` }}>
                                    <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/80 to-transparent" />
                                </div>

                                {/* Content Section */}
                                <div className="p-8 md:w-1/2 flex flex-col justify-center overflow-y-auto">
                                    <motion.h2
                                        layoutId={`title-${selectedId}`}
                                        className="text-4xl font-black uppercase mb-2"
                                        style={{ color: selectedFaction.colors.primary }}
                                    >
                                        {selectedFaction.name}
                                    </motion.h2>
                                    <p className="text-sm italic text-gray-500 mb-6 font-serif">"{selectedFaction.motto}"</p>

                                    <p className="text-gray-300 leading-relaxed mb-6">
                                        {selectedFaction.description}
                                    </p>

                                    <div className="space-y-4">
                                        <h4 className="font-bold text-gray-400 uppercase text-xs tracking-widest">Key Traits</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedFaction.traits.map(trait => (
                                                <span key={trait} className="px-3 py-1 rounded-full text-xs font-bold uppercase bg-gray-800 border border-gray-700" style={{ color: selectedFaction.colors.accent }}>
                                                    {trait}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Color Palette Display */}
                                    <div className="mt-8 flex gap-4">
                                        <div className="w-8 h-8 rounded-full border border-gray-600" style={{ backgroundColor: selectedFaction.colors.primary }} title="Primary" />
                                        <div className="w-8 h-8 rounded-full border border-gray-600" style={{ backgroundColor: selectedFaction.colors.secondary }} title="Secondary" />
                                        <div className="w-8 h-8 rounded-full border border-gray-600" style={{ backgroundColor: selectedFaction.colors.accent }} title="Accent" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};
