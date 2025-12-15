import React from 'react';
import { motion } from 'framer-motion';
import { imperiumFactions } from '../data/imperium';

interface MindMapProps {
    scores: { [factionId: string]: number };
    finished: boolean;
}

// Fixed positions for the 9 Imperium factions
// Arranged in a circle/grid for better visual distribution
const factionPositions: { [key: string]: { x: number; y: number } } = {
    ultramarines: { x: 50, y: 15 },     // Top Center
    blood_angels: { x: 80, y: 30 },     // Top Right
    dark_angels: { x: 20, y: 30 },      // Top Left
    space_wolves: { x: 85, y: 60 },     // Right
    sisters: { x: 15, y: 60 },          // Left
    custodes: { x: 50, y: 50 },         // Center (The Golden Center)
    admech: { x: 70, y: 85 },           // Bottom Right
    guard: { x: 50, y: 90 },            // Bottom Center
    inquisition: { x: 30, y: 85 },      // Bottom Left
};

export const MindMap: React.FC<MindMapProps> = ({ scores, finished }) => {
    // Calculate center based on weighted average of positions
    const totalScore = Object.values(scores).reduce((a, b) => a + b, 0) || 1;

    let userX = 50;
    let userY = 50;

    if (totalScore > 0) {
        let vectorX = 0;
        let vectorY = 0;

        imperiumFactions.forEach(f => {
            const score = scores[f.id] || 0;
            const pos = factionPositions[f.id] || { x: 50, y: 50 };

            // Vector from center to faction
            const dx = pos.x - 50;
            const dy = pos.y - 50;

            const influence = score / (totalScore * 0.7); // slightly less dampening to make movement more visible

            vectorX += dx * influence;
            vectorY += dy * influence;
        });

        userX = 50 + vectorX;
        userY = 50 + vectorY;

        // Clamp to safe bounds (prevent spilling out)
        // Keep within 10% - 90%
        userX = Math.max(10, Math.min(90, userX));
        userY = Math.max(10, Math.min(90, userY));
    }

    return (
        <div className="relative w-full aspect-square max-w-2xl mx-auto bg-gray-950 rounded-lg border-2 border-yellow-900/50 p-4 overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.8)]">
            {/* Background Grid & CRT Effect */}
            <div className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                    backgroundImage: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))',
                    backgroundSize: '100% 2px, 3px 100%'
                }} />
            <div className="absolute inset-0 opacity-10 pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle, #D4AF37 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

            {/* Faction Nodes */}
            {imperiumFactions.map(faction => {
                const pos = factionPositions[faction.id];
                if (!pos) return null;

                const score = scores[faction.id] || 0;
                const size = 30 + (score * 2); // Dynamic sizing based on score

                return (
                    <motion.div
                        key={faction.id}
                        className="absolute flex flex-col items-center justify-center text-center transform -translate-x-1/2 -translate-y-1/2 w-20 z-10"
                        style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.1 }}
                    >
                        <div
                            className="rounded-full flex items-center justify-center border-2 mb-1 shadow-lg transition-all duration-500"
                            style={{
                                borderColor: faction.colors.primary,
                                backgroundColor: 'rgba(0,0,0,0.9)',
                                boxShadow: `0 0 ${10 + score * 2}px ${faction.colors.accent}40`,
                                width: `${Math.min(60, Math.max(30, size))}px`,
                                height: `${Math.min(60, Math.max(30, size))}px`,
                            }}
                        >
                            <span className="text-[10px] font-black" style={{ color: faction.colors.accent }}>
                                {faction.name.substring(0, 2).toUpperCase()}
                            </span>
                        </div>
                        <span className="text-[9px] text-gray-500 font-serif tracking-widest uppercase opacity-70 leading-tight block w-24">
                            {faction.name}
                        </span>
                    </motion.div>
                );
            })}

            {/* User Indicator */}
            <motion.div
                className="absolute w-4 h-4 bg-white rounded-full border-2 border-yellow-500 shadow-[0_0_15px_white] z-20"
                style={{ left: `${userX}%`, top: `${userY}%` }}
                animate={{
                    left: `${userX}%`,
                    top: `${userY}%`,
                    scale: finished ? [1, 2, 1] : 1
                }}
                transition={{ type: 'spring', stiffness: 80, damping: 15 }}
            >
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-yellow-500 text-[10px] font-bold tracking-widest uppercase drop-shadow-md">
                    INITIATE
                </div>
            </motion.div>
        </div>
    );
};
