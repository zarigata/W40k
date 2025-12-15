import { useState, useCallback, useEffect } from 'react';
import { Quiz } from './components/Quiz';
import { FactionShowcase } from './components/FactionShowcase';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { motion, AnimatePresence } from 'framer-motion';

type View = 'home' | 'quiz' | 'showcase';

function App() {
  const [view, setView] = useState<View>('home');
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-red-500 selection:text-white relative overflow-x-hidden">

      {/* Dynamic Background Particles (Embers/Ash) */}
      {init && (
        <Particles
          id="tsparticles"
          options={{
            background: {
              color: { value: "#000000" },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: { enable: true, mode: "push" },
                onHover: { enable: true, mode: "repulse" },
              },
              modes: {
                push: { quantity: 4 },
                repulse: { distance: 100, duration: 0.4 },
              },
            },
            particles: {
              color: { value: ["#ff0000", "#ffaa00", "#550000"] }, // Fire/Ember colors
              links: { enable: false },
              move: {
                direction: "top",
                enable: true,
                outModes: { default: "out" },
                random: true,
                speed: 1, // Slow rising ash
                straight: false,
              },
              number: {
                density: { enable: true, area: 800 },
                value: 80,
              },
              opacity: {
                value: 0.5,
                animation: { enable: true, speed: 0.5, minimumValue: 0.1 }
              },
              shape: { type: "circle" },
              size: {
                value: { min: 1, max: 3 },
              },
            },
            detectRetina: true,
          }}
          className="absolute inset-0 z-0 pointer-events-none"
        />
      )}

      {/* Navbar / Menu */}
      <nav className="fixed top-0 left-0 w-full z-50 p-6 flex justify-between items-center bg-gradient-to-b from-black/90 to-transparent pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-black tracking-tighter uppercase pointer-events-auto cursor-pointer drop-shadow-lg"
          onClick={() => setView('home')}
        >
          W40K <span className="text-red-600">Augur</span>
        </motion.div>

        <div className="flex gap-4 pointer-events-auto">
          <button
            onClick={() => setView('quiz')}
            className={`relative group px-4 py-2 text-sm font-bold uppercase tracking-widest transition-colors ${view === 'quiz' ? 'text-red-500' : 'text-gray-400 hover:text-white'}`}
          >
            <span className="relative z-10">Quiz</span>
            {view === 'quiz' && <motion.div layoutId="nav-underline" className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600" />}
          </button>

          <button
            onClick={() => setView('showcase')}
            className={`relative group px-4 py-2 text-sm font-bold uppercase tracking-widest transition-colors ${view === 'showcase' ? 'text-blue-500' : 'text-gray-400 hover:text-white'}`}
          >
            <span className="relative z-10">Factions</span>
            {view === 'showcase' && <motion.div layoutId="nav-underline" className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600" />}
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20 relative z-10">
        <AnimatePresence mode="wait">
          {view === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
              transition={{ duration: 0.5 }}
              className="min-h-[80vh] flex flex-col items-center justify-center p-4 text-center"
            >
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.5 }}
                  transition={{ delay: 0.5, duration: 1 }}
                  className="absolute -inset-20 bg-red-600/20 blur-[100px] rounded-full pointer-events-none"
                />

                <h1 className="relative text-6xl md:text-9xl font-black mb-6 tracking-tighter">
                  <motion.span
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="block text-white"
                  >
                    CHOOSE
                  </motion.span>
                  <motion.span
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="block text-white"
                  >
                    YOUR
                  </motion.span>
                  <motion.span
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="block text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-500 to-red-800 animate-text-shimmer bg-[size:200%_auto]"
                  >
                    ALLEGIANCE
                  </motion.span>
                </h1>
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="max-w-xl text-gray-400 text-lg mb-12 leading-relaxed font-serif italic"
              >
                "In the grim darkness of the far future, there is only war.
                Undergo the psycho-augmentation protocols to discover your genetic destiny."
              </motion.p>

              <div className="flex flex-col sm:flex-row gap-6">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(220,38,38,0.6)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setView('quiz')}
                  className="group relative px-10 py-5 bg-red-700 text-white font-black uppercase tracking-[0.2em] transition-all overflow-hidden border border-red-500"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-700 skew-x-12" />
                  <span className="relative flex items-center gap-2">
                    Initiate Protocol
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  </span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05, borderColor: "white", color: "white" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setView('showcase')}
                  className="px-8 py-4 border border-gray-600 text-gray-400 font-bold uppercase tracking-[0.2em] transition-all hover:bg-white/5"
                >
                  View Archives
                </motion.button>
              </div>

              {/* Footer / Credits */}
              <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
                className="fixed bottom-4 text-[10px] text-gray-700 font-mono"
              >
                Data-slate 773.M42 // Authorized by the Inquisition // Thought for the Day: "Hope is the first step on the road to disappointment."
              </motion.div>
            </motion.div>
          )}

          {view === 'quiz' && (
            <motion.div key="quiz" initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -100 }} transition={{ duration: 0.5 }}>
              <Quiz />
            </motion.div>
          )}

          {view === 'showcase' && (
            <motion.div key="showcase" initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -100 }} transition={{ duration: 0.5 }}>
              <FactionShowcase />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;
```
