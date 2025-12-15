import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { questions } from '../data/quiz';
import { factions } from '../data/factions';
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
        let winner = factions[0];
        factions.forEach(f => {
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
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-30 pointer-events-none"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black pointer-events-none"></div>

            <div className="z-10 w-full max-w-4xl">
                <h1 className="text-4xl md:text-6xl font-black text-center mb-8 tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-red-600 filter drop-shadow-[0_0_10px_rgba(255,165,0,0.5)]">
                    Faction Alignment
                </h1>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

                    {/* Quiz Area */}
                    <div className="bg-gray-900/80 backdrop-blur-md p-8 rounded-2xl border border-gray-800 shadow-2xl min-h-[400px] flex flex-col justify-center">
                        <AnimatePresence mode='wait'>
                            {!finished ? (
                                <motion.div
                                    key={currentQuestion.id}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <h2 className="text-2xl font-bold mb-6 text-gray-200">
                                        {currentQuestion.id}. {currentQuestion.text}
                                    </h2>
                                    <div className="space-y-4">
                                        {currentQuestion.options.map((option, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => handleAnswer(option.weights)}
                                                className="w-full text-left p-4 rounded-xl bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-blue-500 transition-all duration-200 transform hover:scale-[1.02] active:scale-95 group"
                                            >
                                                <span className="group-hover:text-blue-400 transition-colors bg-clip-text">
                                                    {option.text}
                                                </span>
                                            </button>
                                        ))}
                                    </div>
                                    <div className="mt-8 h-1 w-full bg-gray-800 rounded-full overflow-hidden">
                                        <motion.div
                                            className="h-full bg-blue-500"
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
                                    <h2 className="text-3xl font-bold mb-4 text-white">Result</h2>
                                    <p className="text-xl mb-6 text-gray-400">You belong to the:</p>

                                    <div className="mb-6 relative group cursor-pointer"
                                        onClick={() => window.scrollTo({ top: 1000, behavior: 'smooth' })}> {/* Placeholder for navigation */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -skew-x-12"></div>
                                        <h3 className="text-5xl font-black uppercase tracking-widest mb-2" style={{ color: winner.colors.primary }}>
                                            {winner.name}
                                        </h3>
                                        <p className="text-sm italic text-gray-500">"{winner.motto}"</p>
                                    </div>

                                    <p className="text-gray-300 mb-8 max-w-sm mx-auto">
                                        {winner.description}
                                    </p>

                                    <button onClick={() => window.location.reload()} className="px-6 py-2 border border-gray-600 rounded-full hover:bg-white hover:text-black transition-colors uppercase text-sm tracking-widest">
                                        Retake Protocol
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Mind Map Visualization */}
                    <div className="flex flex-col">
                        <div className="mb-4 flex justify-between items-center px-2">
                            <span className="text-xs uppercase tracking-widest text-gray-500">Live Augur Array</span>
                            {finished && <span className="text-xs uppercase tracking-widest text-green-500 animate-pulse">Analysis Complete</span>}
                        </div>
                        <MindMap scores={scores} finished={finished} />
                        <p className="text-xs text-center mt-4 text-gray-600 max-w-xs mx-auto">
                            Spatial representation of your psychometric alignment. Coordinates shift in real-time as you answer.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};
