import React from 'react';
import { 
  ShieldCheck, 
  Sparkles, 
  Clock, 
  CheckCircle2, 
  XCircle, 
  AlertTriangle, 
  Lock, 
  ArrowRight, 
  Plus, 
  Search, 
  Users, 
  FileText, 
  Settings, 
  Radio, 
  ChevronRight,
  TrendingUp,
  Ban,
  Download,
  Info,
  Layers
} from 'lucide-react';
import { UserAvatar, OwnerHeroIllustration, DeniedActionIllustration } from '../Illustrations';

// Screen 1: Dashboard View
export const DashboardScreen = ({ onAssignClick, onViewTeamClick, onAuditClick }) => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-bold" style={{ color: 'var(--text-main)' }}>
              Good morning, Juhi! <span className="inline-block animate-pulse">✨</span>
            </h2>
          </div>
          <p className="text-sm mt-0.5" style={{ color: 'var(--text-muted)' }}>
            Here's what's happening with your business today.
          </p>
        </div>
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium" style={{ background: 'var(--bg-surface-subtle)', color: 'var(--brand-pink)', border: '1px solid var(--border-subtle)' }}>
          <Clock size={13} />
          <span>Mon, 26 Apr</span>
        </div>
      </div>

      {/* Top 3 Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="card-chic p-4 flex flex-col justify-between">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
            <Radio size={14} style={{ color: 'var(--brand-pink)' }} />
            <span>Active Delegations</span>
          </div>
          <div className="mt-3 flex items-baseline justify-between">
            <span className="text-3xl font-extrabold" style={{ color: 'var(--text-main)', fontFamily: 'Outfit' }}>4</span>
            <span className="text-xs font-semibold px-2 py-0.5 rounded-md" style={{ background: 'var(--badge-green-bg)', color: 'var(--badge-green-text)' }}>
              ↑ 2 since yesterday
            </span>
          </div>
        </div>

        <div className="card-chic p-4 flex flex-col justify-between">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
            <CheckCircle2 size={14} style={{ color: 'var(--brand-pink)' }} />
            <span>Tasks Completed</span>
          </div>
          <div className="mt-3 flex items-baseline justify-between">
            <span className="text-3xl font-extrabold" style={{ color: 'var(--text-main)', fontFamily: 'Outfit' }}>18</span>
            <span className="text-xs font-semibold px-2 py-0.5 rounded-md" style={{ background: 'var(--badge-green-bg)', color: 'var(--badge-green-text)' }}>
              ↑ 5 since yesterday
            </span>
          </div>
        </div>

        <div className="card-chic p-4 flex flex-col justify-between">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
            <ShieldCheck size={14} style={{ color: 'var(--brand-pink)' }} />
            <span>Security Events</span>
          </div>
          <div className="mt-3 flex items-baseline justify-between">
            <span className="text-3xl font-extrabold" style={{ color: 'var(--text-main)', fontFamily: 'Outfit' }}>0</span>
            <span className="text-xs font-semibold px-2 py-0.5 rounded-md flex items-center gap-1" style={{ background: 'var(--brand-blush)', color: 'var(--brand-pink)' }}>
              🛡️ All safe
            </span>
          </div>
        </div>
      </div>

      {/* Main Banner + Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Banner Card */}
        <div className="lg:col-span-2 card-chic p-6 relative overflow-hidden flex flex-col justify-between" style={{ background: 'linear-gradient(135deg, var(--bg-surface-subtle) 0%, var(--bg-surface) 100%)' }}>
          <div className="relative z-10 max-w-[340px]">
            <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full inline-block mb-3" style={{ background: 'var(--brand-pink)', color: '#FFFFFF' }}>
              Least-Privilege Security
            </span>
            <h3 className="text-2xl font-bold leading-tight" style={{ fontFamily: 'Playfair Display, serif', color: 'var(--text-main)' }}>
              Your business, <br />
              <span style={{ color: 'var(--brand-pink)', fontStyle: 'italic' }}>Your rules.</span>
            </h3>
            <p className="text-sm mt-2 mb-5" style={{ color: 'var(--text-muted)' }}>
              Delegate tasks securely with TaskKey and stay in full control without sharing passwords or sensitive customer files.
            </p>
            <button onClick={onAssignClick} className="btn-pink-primary">
              <Plus size={16} />
              <span>Assign New Task</span>
            </button>
          </div>

          <div className="mt-4 sm:mt-0 sm:absolute right-4 bottom-2 opacity-95 pointer-events-none">
            <OwnerHeroIllustration />
          </div>
        </div>

        {/* Recent Activity Card */}
        <div className="card-chic p-5 flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-semibold text-sm" style={{ color: 'var(--text-main)' }}>Recent Activity</h4>
            <button onClick={onAuditClick} className="text-xs font-semibold hover:underline" style={{ color: 'var(--brand-pink)' }}>
              View all
            </button>
          </div>

          <div className="space-y-3.5 flex-1 text-xs">
            <div className="flex items-start gap-2.5 pb-3 border-b" style={{ borderColor: 'var(--border-subtle)' }}>
              <UserAvatar name="Riya Sharma" size={32} />
              <div className="flex-1">
                <p className="font-semibold" style={{ color: 'var(--text-main)' }}>
                  Riya Sharma completed <span style={{ color: 'var(--brand-pink)' }}>"Dispatch Orders #101–105"</span>
                </p>
                <span className="text-[11px]" style={{ color: 'var(--text-dim)' }}>1h ago</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5 pb-3 border-b" style={{ borderColor: 'var(--border-subtle)' }}>
              <UserAvatar name="Neha Patel" size={32} />
              <div className="flex-1">
                <p className="font-semibold" style={{ color: 'var(--text-main)' }}>
                  Neha Patel was assigned <span style={{ color: 'var(--brand-pink)' }}>"Customer Support Reply"</span>
                </p>
                <span className="text-[11px]" style={{ color: 'var(--text-dim)' }}>4h ago</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <UserAvatar name="Aman Khan" size={32} />
              <div className="flex-1">
                <p className="font-semibold" style={{ color: 'var(--text-main)' }}>
                  Task expired: Aman Khan <span style={{ color: 'var(--text-muted)' }}>"Inventory Update"</span>
                </p>
                <span className="text-[11px]" style={{ color: 'var(--text-dim)' }}>Yesterday</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Screen 2: My Team Screen
export const TeamScreen = ({ team, onSelectMember, onAssignClick }) => {
  return (
    <div className="space-y-5 animate-fade-in">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold" style={{ color: 'var(--text-main)' }}>My Team</h2>
          <p className="text-sm mt-0.5" style={{ color: 'var(--text-muted)' }}>Manage your trusted helpers and active task delegations</p>
        </div>
        <button onClick={onAssignClick} className="btn-pink-primary text-sm">
          <Plus size={16} />
          <span>Add Member</span>
        </button>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2" style={{ color: 'var(--text-dim)' }} />
        <input 
          type="text" 
          placeholder="Search team member..." 
          className="w-full pl-10 pr-4 py-2.5 rounded-xl text-sm border outline-none transition-all"
          style={{ 
            background: 'var(--bg-surface)', 
            borderColor: 'var(--border-subtle)',
            color: 'var(--text-main)'
          }}
        />
      </div>

      {/* Member Cards */}
      <div className="space-y-3">
        {team.map((member) => (
          <div 
            key={member.id} 
            className="card-chic p-4 flex flex-wrap items-center justify-between gap-4 transition-all hover:border-[var(--brand-pink)] cursor-pointer"
            onClick={() => onSelectMember(member)}
          >
            <div className="flex items-center gap-3.5">
              <UserAvatar name={member.name} size={44} />
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-bold text-sm" style={{ color: 'var(--text-main)' }}>{member.name}</h4>
                  <span className={`inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full ${
                    member.status === 'Available' 
                      ? 'bg-[var(--badge-green-bg)] text-[var(--badge-green-text)]' 
                      : 'bg-[var(--badge-warning-bg)] text-[var(--badge-warning-text)]'
                  }`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${member.status === 'Available' ? 'bg-emerald-500' : 'bg-amber-500'}`} />
                    {member.status}
                  </span>
                </div>
                <p className="text-xs font-medium" style={{ color: 'var(--text-muted)' }}>{member.role} • <span className="italic">{member.relation}</span></p>
                <p className="text-[11px] mt-0.5" style={{ color: 'var(--text-dim)' }}>
                  Active tasks: <strong style={{ color: 'var(--text-main)' }}>{member.activeTasks}</strong> | Completed: <strong style={{ color: 'var(--text-main)' }}>{member.completedTasks}</strong>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button 
                onClick={(e) => { e.stopPropagation(); onAssignClick(member); }}
                className={member.status === 'Available' ? 'btn-pink-secondary text-xs py-1.5 px-3.5' : 'btn-outline-subtle text-xs py-1.5 px-3.5'}
              >
                {member.status === 'Available' ? 'Assign Task' : 'View'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Screen 3: Employee Profile
export const EmployeeProfileScreen = ({ member, onBack, onAssignTask }) => {
  return (
    <div className="space-y-6 animate-fade-in">
      <button onClick={onBack} className="btn-outline-subtle text-xs py-1.5 px-3">
        ← Back to Team
      </button>

      <div className="card-chic p-6">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b" style={{ borderColor: 'var(--border-subtle)' }}>
          <div className="flex items-center gap-4">
            <UserAvatar name={member.name} size={64} />
            <div>
              <div className="flex items-center gap-2.5">
                <h2 className="text-xl font-bold" style={{ color: 'var(--text-main)' }}>{member.name}</h2>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[var(--badge-green-bg)] text-[var(--badge-green-text)] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  {member.status}
                </span>
              </div>
              <p className="text-sm font-medium" style={{ color: 'var(--text-muted)' }}>{member.role}</p>
              <p className="text-xs italic" style={{ color: 'var(--text-dim)' }}>{member.relation}</p>
            </div>
          </div>

          <button onClick={() => onAssignTask(member)} className="btn-pink-primary text-sm">
            <Plus size={16} />
            <span>Assign New Task</span>
          </button>
        </div>

        {/* Profile Tabs Mockup */}
        <div className="flex gap-6 mt-4 border-b text-xs font-bold" style={{ borderColor: 'var(--border-subtle)' }}>
          <button className="pb-2.5 border-b-2 font-bold" style={{ borderColor: 'var(--brand-pink)', color: 'var(--brand-pink)' }}>Overview</button>
          <button className="pb-2.5 text-[var(--text-muted)] hover:text-[var(--brand-pink)]">Activity</button>
          <button className="pb-2.5 text-[var(--text-muted)] hover:text-[var(--brand-pink)]">Performance</button>
        </div>

        {/* Current Workload Bar */}
        <div className="mt-5 p-4 rounded-xl" style={{ background: 'var(--bg-surface-subtle)', border: '1px solid var(--border-subtle)' }}>
          <div className="flex justify-between items-center text-xs font-semibold mb-2">
            <span style={{ color: 'var(--text-main)' }}>Current Workload Capacity</span>
            <span style={{ color: 'var(--brand-pink)' }}>{member.workload}%</span>
          </div>
          <div className="w-full h-2 rounded-full overflow-hidden" style={{ background: 'var(--border-subtle)' }}>
            <div 
              className="h-full rounded-full transition-all duration-500" 
              style={{ width: `${member.workload}%`, background: 'linear-gradient(90deg, var(--brand-pink) 0%, var(--brand-rose) 100%)' }} 
            />
          </div>
        </div>

        {/* Active Tasks & Recent Activity */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
          <div className="p-4 rounded-xl border" style={{ borderColor: 'var(--border-subtle)' }}>
            <h4 className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: 'var(--text-muted)' }}>Active Tasks</h4>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-center justify-between p-2.5 rounded-lg" style={{ background: 'var(--bg-surface-subtle)' }}>
                <div>
                  <p className="font-bold" style={{ color: 'var(--text-main)' }}>1. Dispatch Orders #101–105</p>
                  <p className="text-[11px]" style={{ color: 'var(--text-dim)' }}>3 remaining to mark</p>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[var(--badge-warning-bg)] text-[var(--badge-warning-text)]">
                  In progress
                </span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-lg" style={{ background: 'var(--bg-surface-subtle)' }}>
                <div>
                  <p className="font-bold" style={{ color: 'var(--text-main)' }}>2. Shipping Labels Batch</p>
                  <p className="text-[11px]" style={{ color: 'var(--text-dim)' }}>8 remaining</p>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[var(--badge-warning-bg)] text-[var(--badge-warning-text)]">
                  In progress
                </span>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl border" style={{ borderColor: 'var(--border-subtle)' }}>
            <h4 className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: 'var(--text-muted)' }}>Recent Security Activity</h4>
            <div className="space-y-2 text-xs">
              {member.recentActivity?.map((act, idx) => (
                <div key={idx} className="flex items-center justify-between py-1.5 border-b last:border-0" style={{ borderColor: 'var(--border-subtle)' }}>
                  <div className="flex items-center gap-2">
                    {act.type === 'blocked' ? (
                      <XCircle size={14} className="text-red-500 flex-shrink-0" />
                    ) : (
                      <CheckCircle2 size={14} className="text-emerald-500 flex-shrink-0" />
                    )}
                    <span className="font-medium" style={{ color: act.type === 'blocked' ? 'var(--badge-red-text)' : 'var(--text-main)' }}>
                      {act.action}
                    </span>
                  </div>
                  <span className="text-[11px]" style={{ color: 'var(--text-dim)' }}>{act.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
