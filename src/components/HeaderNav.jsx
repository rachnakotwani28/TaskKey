import React from 'react';
import { 
  Sun, 
  Moon, 
  Code, 
  LayoutGrid, 
  SplitSquareVertical, 
  Compass, 
  Shield, 
  Sparkles, 
  CheckCircle2, 
  Award,
  Layers
} from 'lucide-react';

export const HeaderNav = ({ 
  theme, 
  onToggleTheme, 
  activeView, 
  onSelectView, 
  onOpenPayload, 
  onOpenCriteriaModal 
}) => {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md border-b transition-all" style={{ background: 'var(--bg-page)', borderColor: 'var(--border-subtle)', opacity: 0.98 }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-4">
        
        {/* Brand Logo */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => onSelectView('gallery')}>
          <div className="w-10 h-10 rounded-2xl flex items-center justify-center shadow-md relative group" style={{ background: 'linear-gradient(135deg, var(--brand-pink) 0%, var(--brand-rose) 100%)', color: '#FFFFFF' }}>
            <Shield size={22} className="group-hover:scale-110 transition-transform" />
            <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-white border-2 border-[var(--brand-pink)]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-black tracking-tight" style={{ fontFamily: 'Outfit, sans-serif', color: 'var(--text-main)' }}>
                Task<span style={{ color: 'var(--brand-pink)' }}>Key</span>
              </h1>
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[var(--brand-peach)] text-[var(--brand-pink)]">
                Track 2 • Algo Amigos
              </span>
            </div>
            <p className="text-[11px] font-medium" style={{ color: 'var(--text-muted)' }}>
              Give help, not full access. Delegate the task. Keep the business.
            </p>
          </div>
        </div>

        {/* Mode Switcher Tabs */}
        <div className="flex items-center rounded-xl p-1 border shadow-xs text-xs font-bold" style={{ background: 'var(--bg-surface-subtle)', borderColor: 'var(--border-subtle)' }}>
          <button
            onClick={() => onSelectView('gallery')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
              activeView === 'gallery'
                ? 'bg-[var(--brand-pink)] text-white shadow-sm'
                : 'text-[var(--text-muted)] hover:text-[var(--brand-pink)]'
            }`}
          >
            <LayoutGrid size={14} />
            <span className="hidden sm:inline">12-Screen Poster Mockups</span>
            <span className="sm:hidden">Poster</span>
          </button>

          <button
            onClick={() => onSelectView('sandbox')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
              activeView === 'sandbox'
                ? 'bg-[var(--brand-pink)] text-white shadow-sm'
                : 'text-[var(--text-muted)] hover:text-[var(--brand-pink)]'
            }`}
          >
            <SplitSquareVertical size={14} />
            <span className="hidden sm:inline">Live Split-Screen Sandbox</span>
            <span className="sm:hidden">Live Sandbox</span>
          </button>

          <button
            onClick={() => onSelectView('guided')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
              activeView === 'guided'
                ? 'bg-[var(--brand-pink)] text-white shadow-sm'
                : 'text-[var(--text-muted)] hover:text-[var(--brand-pink)]'
            }`}
          >
            <Compass size={14} />
            <span className="hidden sm:inline">Guided Demo Tour (1-12)</span>
            <span className="sm:hidden">Tour</span>
          </button>
        </div>

        {/* Action Controls: Theme Switcher + Developer Payload + Criteria */}
        <div className="flex items-center gap-2">
          {/* Hackathon Criteria Button */}
          <button
            onClick={onOpenCriteriaModal}
            className="btn-outline-subtle text-xs py-1.5 px-2.5 font-bold"
            title="View Hackathon Evaluation Criteria & Feature Mapping"
          >
            <Award size={14} className="text-[var(--brand-pink)]" />
            <span className="hidden md:inline">Evaluation Criteria</span>
          </button>

          {/* Developer Payload JSON */}
          <button
            onClick={onOpenPayload}
            className="btn-outline-subtle text-xs py-1.5 px-2.5 font-bold"
            title="Inspect backend cryptographic permission policy payload"
          >
            <Code size={14} className="text-[var(--brand-pink)]" />
            <span className="hidden md:inline">Dev Payload</span>
          </button>

          {/* Light / Dark Theme Toggle */}
          <button
            onClick={onToggleTheme}
            className="p-2 rounded-xl border transition-all hover:border-[var(--brand-pink)] flex items-center gap-1.5 text-xs font-bold shadow-xs"
            style={{ 
              background: 'var(--bg-surface)', 
              borderColor: 'var(--border-subtle)',
              color: 'var(--text-main)'
            }}
            title={theme === 'light' ? 'Switch to Dark Theme' : 'Switch to Light Theme'}
          >
            {theme === 'light' ? (
              <>
                <Moon size={15} className="text-[var(--brand-pink)]" />
                <span className="hidden lg:inline">Dark Theme</span>
              </>
            ) : (
              <>
                <Sun size={15} className="text-amber-400" />
                <span className="hidden lg:inline">Light Theme</span>
              </>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
