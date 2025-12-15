import React from 'react';
import { motion } from 'framer-motion';
import { factions } from '../data/factions';

interface MindMapProps {
    scores: { [factionId: string]: number };
    finished: boolean;
}

// Calculate position based on pseudo-coordinates for factions
// This is a simplified visual mapping
const factionPositions: { [key: string]: { x: number; y: number } } = {
    imperium: { x: 50, y: 10 },    // Top
    chaos: { x: 50, y: 90 },       // Bottom
    orks: { x: 90, y: 50 },        // Right
    eldar: { x: 10, y: 30 },       // Top-Left
    necrons: { x: 10, y: 70 },     // Bottom-Left
    tyranids: { x: 90, y: 90 },    // Bottom-Right
    tau: { x: 90, y: 10 },         // Top-Right
};

export const MindMap: React.FC<MindMapProps> = ({ scores, finished }) => {
    // Calculate center based on weighted average of positions
    const totalScore = Object.values(scores).reduce((a, b) => a + b, 0) || 1;

    let userX = 50;
    let userY = 50;

    if (totalScore > 0) {


        // Start from center
        // Pull towards factions based on score proportion

        // A simple vector addition model:
        // Center is (50, 50).
        // Each faction pulls the user vector from center.

        let vectorX = 0;
        let vectorY = 0;

        factions.forEach(f => {
            const score = scores[f.id] || 0;
            const pos = factionPositions[f.id] || { x: 50, y: 50 };

            // Vector from center to faction
            const dx = pos.x - 50;
            const dy = pos.y - 50;

            const influence = score / (totalScore * 0.6); // dampening

            vectorX += dx * influence;
            vectorY += dy * influence;
        });

        userX = 50 + vectorX;
        userY = 50 + vectorY;

        // Clamp to bounds 10-90
        userX = Math.max(10, Math.min(90, userX));
        userY = Math.max(10, Math.min(90, userY));
    }

    return (
        <div className="relative w-full aspect-square max-w-2xl mx-auto bg-gray-900 rounded-lg border border-gray-700 p-4 overflow-hidden shadow-2xl">
            {/* Background Grid */}
            <div className="absolute inset-0 opacity-20 pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle, #333 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

            {/* Faction Nodes */}
            {factions.map(faction => {
                const pos = factionPositions[faction.id];
                if (!pos) return null;



                return (
                    <motion.div
                        key={faction.id}
                        className="absolute flex flex-col items-center justify-center text-center transform -translate-x-1/2 -translate-y-1/2 w-24"
                        style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <div
                            className="w-12 h-12 rounded-full flex items-center justify-center border-2 mb-2 shadow-[0_0_15px_rgba(0,0,0,0.5)]"
                            style={{
                                borderColor: faction.colors.primary,
                                backgroundColor: 'rgba(0,0,0,0.8)',
                                boxShadow: `0 0 20px ${faction.colors.accent}40`
                            }}
                        >
                            {/* Optional: Icon here */}
                            <span className="text-xs font-bold" style={{ color: faction.colors.primary }}>
                                {faction.name.substring(0, 2).toUpperCase()}
                            </span>
                        </div>
                        <span className="text-xs text-gray-400 font-mono tracking-wider">{faction.name}</span>
                    </motion.div>
                );
            })}

            {/* User Indicator */}
            <motion.div
                className="absolute w-6 h-6 bg-white rounded-full border-4 border-blue-500 shadow-[0_0_20px_white] z-10"
                style={{ left: `${userX}%`, top: `${userY}%` }}
                animate={{
                    left: `${userX}%`,
                    top: `${userY}%`,
                    scale: finished ? [1, 1.5, 1] : 1
                }}
                transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            >
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-black text-white text-xs px-2 py-1 rounded border border-gray-600">
                    You
                </div>
            </motion.div>

            {/* Connecting Lines (Optional, maybe draw lines to top matches?) */}
        </div>
    );
};
