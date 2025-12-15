import { useState } from 'react';
import { Quiz } from './components/Quiz';
import { FactionShowcase } from './components/FactionShowcase';

type View = 'home' | 'quiz' | 'showcase';

function App() {
  const [view, setView] = useState<View>('home');

  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-red-500 selection:text-white">
      {/* Navbar / Menu */}
      <nav className="fixed top-0 left-0 w-full z-40 p-6 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent pointer-events-none">
        <div className="text-2xl font-black tracking-tighter uppercase pointer-events-auto cursor-pointer" onClick={() => setView('home')}>
          W40K <span className="text-red-600">Augur</span>
        </div>
        <div className="flex gap-4 pointer-events-auto">
          <button
            onClick={() => setView('quiz')}
            className={`px-4 py-2 text-sm font-bold uppercase tracking-widest hover:text-red-500 transition-colors ${view === 'quiz' ? 'text-red-500' : 'text-gray-400'}`}
          >
            Quiz
          </button>
          <button
            onClick={() => setView('showcase')}
            className={`px-4 py-2 text-sm font-bold uppercase tracking-widest hover:text-blue-500 transition-colors ${view === 'showcase' ? 'text-blue-500' : 'text-gray-400'}`}
          >
            Factions
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20">
        {view === 'home' && (
          <div className="min-h-[80vh] flex flex-col items-center justify-center p-4 text-center">
            <h1 className="text-6xl md:text-8xl font-black mb-6 animate-pulse-slow">
              CHOOSE YOUR <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">ALLEGIANCE</span>
            </h1>
            <p className="max-w-xl text-gray-400 text-lg mb-12 leading-relaxed">
              The galaxy is in flames. Ancient powers clash in an eternal war.
              Undergo the psycho-indoctrination protocols to discover where your true loyalty lies.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <button
                onClick={() => setView('quiz')}
                className="px-8 py-4 bg-red-700 hover:bg-red-600 text-white font-bold uppercase tracking-[0.2em] rounded-sm transition-all shadow-[0_0_20px_rgba(220,38,38,0.5)] hover:shadow-[0_0_40px_rgba(220,38,38,0.7)]"
              >
                Initiate Protocol
              </button>
              <button
                onClick={() => setView('showcase')}
                className="px-8 py-4 border border-gray-600 hover:border-white text-gray-300 hover:text-white font-bold uppercase tracking-[0.2em] rounded-sm transition-all"
              >
                View Archives
              </button>
            </div>

            {/* Footer / Credits */}
            <div className="fixed bottom-4 text-xs text-gray-700">
              Data-slate 773.M42 // Authorized by the Inquisition
            </div>
          </div>
        )}

        {view === 'quiz' && <Quiz />}
        {view === 'showcase' && <FactionShowcase />}
      </main>
    </div>
  );
}

export default App;
