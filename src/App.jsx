import React, { useState, useEffect } from 'react';
import { HeaderNav } from './components/HeaderNav';
import { PosterGalleryView } from './components/PosterGalleryView';
import { SplitScreenSandbox } from './components/SplitScreenSandbox';
import { InteractiveGuidedTour } from './components/InteractiveGuidedTour';
import { DeveloperPayloadDrawer } from './components/DeveloperPayloadDrawer';
import { CriteriaModal } from './components/CriteriaModal';
import { 
  Shield, 
  Heart, 
  Sparkles, 
  CheckCircle2, 
  Layers, 
  Lock, 
  ArrowRight,
  Code
} from 'lucide-react';
import './styles/theme.css';

export default function App() {
  const [theme, setTheme] = useState('light');
  const [activeView, setActiveView] = useState('gallery'); // 'gallery' | 'sandbox' | 'guided'
  const [guidedStep, setGuidedStep] = useState(1);
  const [isPayloadOpen, setIsPayloadOpen] = useState(false);
  const [isCriteriaOpen, setIsCriteriaOpen] = useState(false);

  // Sync theme with DOM attribute
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const handleSelectPosterScreen = (screenNumber) => {
    setGuidedStep(screenNumber);
    setActiveView('guided');
  };

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-[var(--brand-pink)] selection:text-white">
      {/* Chic Top Header */}
      <HeaderNav
        theme={theme}
        onToggleTheme={toggleTheme}
        activeView={activeView}
        onSelectView={setActiveView}
        onOpenPayload={() => setIsPayloadOpen(true)}
        onOpenCriteriaModal={() => setIsCriteriaOpen(true)}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6 space-y-6">
        
        {/* Core Value Proposition Ribbon */}
        <div className="card-chic p-4 flex flex-wrap items-center justify-between gap-4" style={{ background: 'var(--bg-surface)' }}>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center font-bold text-white shadow-sm" style={{ background: 'var(--brand-pink)' }}>
              <Shield size={18} />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[var(--brand-pink)]">
                Core Solution Architecture
              </p>
              <h2 className="text-sm font-bold" style={{ color: 'var(--text-main)' }}>
                AI proposes → Owner decides → Backend enforces → Access expires
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-3 text-xs font-semibold" style={{ color: 'var(--text-muted)' }}>
            <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-emerald-500" /> Least-Privilege Scoping</span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:flex items-center gap-1.5"><Lock size={14} className="text-[var(--brand-pink)]" /> Zero Password Sharing</span>
          </div>
        </div>

        {/* View Switcher Output */}
        {activeView === 'gallery' && (
          <PosterGalleryView onSelectScreen={handleSelectPosterScreen} />
        )}

        {activeView === 'sandbox' && (
          <SplitScreenSandbox onOpenPayload={() => setIsPayloadOpen(true)} />
        )}

        {activeView === 'guided' && (
          <InteractiveGuidedTour
            currentStep={guidedStep}
            onSetStep={setGuidedStep}
            onOpenPayload={() => setIsPayloadOpen(true)}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="border-t py-6 mt-12 text-center text-xs" style={{ borderColor: 'var(--border-subtle)', background: 'var(--bg-surface)' }}>
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-between gap-3 text-[var(--text-muted)]">
          <div className="flex items-center gap-2">
            <span className="font-bold" style={{ color: 'var(--text-main)' }}>TaskKey</span>
            <span>—</span>
            <span className="italic">"Delegate the task. Keep the business."</span>
          </div>
          <div className="flex items-center gap-4 text-[11px] font-medium">
            <span>Track 2: Women at the Tech Frontier</span>
            <span>•</span>
            <span className="font-bold text-[var(--brand-pink)]">Team Algo Amigos</span>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <DeveloperPayloadDrawer
        isOpen={isPayloadOpen}
        onClose={() => setIsPayloadOpen(false)}
      />

      <CriteriaModal
        isOpen={isCriteriaOpen}
        onClose={() => setIsCriteriaOpen(false)}
      />
    </div>
  );
}
