import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { questions } from '../data/quiz';
import { imperiumFactions } from '../data/imperium';
import { MindMap } from './MindMap';

export const Quiz: React.FC = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [scores, setScores] = useState<{ [key: string]: number }>({});
    const [finished, setFinished] = useState(false);

    const handleAnswer = (weights: { [key: string]: number }) => {
        const newScores = { ...scores };
        Object.entries(weights).forEach(([factionId, weight]) => {
            newScores[factionId] = (newScores[factionId] || 0) + weight;
        });
        setScores(newScores);

        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
        } else {
            setFinished(true);
        }
    };

    const currentQuestion = questions[currentQuestionIndex];

    const getDominantFaction = () => {
        let max = -1;
        let winner = imperiumFactions[0];
        imperiumFactions.forEach(f => {
            if ((scores[f.id] || 0) > max) {
                max = scores[f.id] || 0;
                winner = f;
            }
        });
        return winner;
    };

    const winner = getDominantFaction();

    return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center py-12 px-4 relative overflow-hidden">
            {/* Background Atmosphere */}
            <div className="absolute inset-0 bg-[url('/W40k/assets/inquisition_banner.png')] opacity-10 bg-cover bg-center pointer-events-none blur-sm"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/80 to-black pointer-events-none"></div>

            {/* CRT Scanline Effect */}
            <div className="absolute inset-0 opacity-10 pointer-events-none z-50"
                style={{
                    backgroundImage: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))',
                    backgroundSize: '100% 2px, 3px 100%'
                }} />

            <div className="z-10 w-full max-w-4xl">
                <h1 className="text-4xl md:text-6xl font-black text-center mb-8 tracking-tighter uppercase text-yellow-500 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] border-b-4 border-yellow-700 pb-4">
                    Imperium Assignment
                </h1>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

                    {/* Quiz Area */}
                    <div className="bg-gray-900/90 backdrop-blur-md p-8 rounded-sm border-2 border-yellow-800 shadow-[0_0_20px_rgba(0,0,0,0.5)] min-h-[400px] flex flex-col justify-center relative overflow-hidden">
                        {/* Decorative Screws */}
                        <div className="absolute top-2 left-2 w-2 h-2 rounded-full bg-yellow-700 shadow-inner"></div>
                        <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-yellow-700 shadow-inner"></div>
                        <div className="absolute bottom-2 left-2 w-2 h-2 rounded-full bg-yellow-700 shadow-inner"></div>
                        <div className="absolute bottom-2 right-2 w-2 h-2 rounded-full bg-yellow-700 shadow-inner"></div>

                        <AnimatePresence mode='wait'>
                            {!finished ? (
                                <motion.div
                                    key={currentQuestion.id}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <h2 className="text-xl font-bold mb-6 text-gray-300 font-serif leading-relaxed">
                                        <span className="text-yellow-600 mr-2">QUERY {currentQuestion.id}:</span> {currentQuestion.text}
                                    </h2>
                                    <div className="space-y-3">
                                        {currentQuestion.options.map((option, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => handleAnswer(option.weights)}
                                                className="w-full text-left p-4 rounded-sm bg-black/5 hover:bg-red-900/10 border border-black/20 hover:border-red-800 transition-all duration-300 group relative overflow-hidden font-serif"
                                            >
                                                <span className="group-hover:text-red-900 transition-colors relative z-10 font-bold tracking-wide text-lg text-gray-800">
                                                    {option.text}
                                                </span>
                                            </button>
                                        ))}
                                    </div>
                                    <div className="mt-8 h-1 w-full bg-black/10 rounded-none">
                                        <motion.div
                                            className="h-full bg-red-900"
                                            initial={{ width: `${(currentQuestionIndex / questions.length) * 100}%` }}
                                            animate={{ width: `${(currentQuestionIndex / questions.length) * 100}%` }}
                                        />
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center"
                                >
                                    <h2 className="text-3xl font-black mb-4 text-white uppercase tracking-widest border-b border-gray-700 pb-2">Destiny Revealed</h2>
                                    <p className="text-lg mb-6 text-gray-400 font-serif">You serve the Throne as:</p>

                                    <div className="mb-6 relative group cursor-pointer"
                                        onClick={() => window.scrollTo({ top: 1000, behavior: 'smooth' })}>
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        <h3 className="text-4xl md:text-5xl font-black uppercase tracking-widest mb-2 drop-shadow-lg" style={{ color: winner.colors.primary }}>
                                            {winner.name}
                                        </h3>
                                        <p className="text-sm italic text-gray-500">"{winner.motto}"</p>
                                    </div>

                                    <p className="text-gray-300 mb-8 max-w-sm mx-auto text-sm leading-relaxed border-l-2 border-yellow-700 pl-4 text-left">
                                        {winner.description}
                                    </p>

                                    <button onClick={() => window.location.reload()} className="px-6 py-2 border-2 border-yellow-700 bg-black/50 hover:bg-yellow-900/30 text-yellow-500 hover:text-white transition-colors uppercase text-xs font-bold tracking-[0.2em]">
                                        Re-Initialize
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Mind Map Visualization */}
                    <div className="flex flex-col">
                        <div className="mb-2 flex justify-between items-center px-2 border-b border-gray-800 pb-2">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                <span className="text-xs uppercase tracking-widest text-gray-500 font-mono">Augur Array // Active</span>
                            </div>
                            {finished && <span className="text-xs uppercase tracking-widest text-yellow-500 font-mono">Data Locked</span>}
                        </div>
                        <MindMap scores={scores} finished={finished} />
                        <div className="border border-gray-800 bg-black/50 p-2 mt-4 text-xs font-mono text-gray-500 text-center">
                            COORDINATES: {scores[winner.id] || 0} // SECTOR: {winner.id.toUpperCase()}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};
