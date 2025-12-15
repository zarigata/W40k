import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export const InteractiveLogo: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const rY = ((mouseX / width) - 0.5) * 40; // max rotation Y (deg)
        const rX = ((mouseY / height) - 0.5) * -40; // max rotation X (deg)

        setRotateX(rX);
        setRotateY(rY);
    };

    const handleMouseLeave = () => {
        setRotateX(0);
        setRotateY(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="w-full max-w-md mx-auto aspect-square flex items-center justify-center perspective-1000 relative cursor-pointer"
            style={{ perspective: 1000 }}
        >
            <motion.div
                style={{
                    rotateX: rotateX,
                    rotateY: rotateY,
                    transformStyle: "preserve-3d",
                }}
                className="w-48 h-48 md:w-64 md:h-64 relative"
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
                {/* Core Logo */}
                <motion.img
                    src="/W40k/src/assets/aquila.png"
                    alt="Imperial Aquila"
                    className="w-full h-full object-contain filter drop-shadow-[0_0_20px_rgba(255,215,0,0.6)]"
                    style={{ translateZ: 50 }}
                />

                {/* Back Glow */}
                <div
                    className="absolute inset-0 bg-yellow-500/20 blur-3xl rounded-full"
                    style={{ transform: "translateZ(-50px) scale(1.5)" }}
                />
            </motion.div>
        </motion.div>
    );
};
