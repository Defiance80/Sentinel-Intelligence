'use client'
import { useAppStore } from '@/lib/store'
import { Settings, Users, Shield, Eye, Keyboard, Monitor } from 'lucide-react'

const roles = [
  { name: 'Administrator', count: 3, permissions: 'Full access to all features, user management, system configuration' },
  { name: 'Press Officer', count: 8, permissions: 'Media monitoring, journalist management, press distribution, briefings' },
  { name: 'Analyst', count: 6, permissions: 'Analytics, reports, media monitoring, historical search' },
  { name: 'Viewer', count: 3, permissions: 'Read-only access to dashboards, briefings, and reports' },
]

export default function SettingsPage() {
  const { user, highContrast, toggleHighContrast } = useAppStore()

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-cdc-text">Settings</h1>
        <p className="text-sm text-cdc-muted mt-1">System configuration and user management</p>
      </div>

      {/* Current User */}
      <div className="bg-white rounded-xl border border-cdc-border p-5">
        <h3 className="text-sm font-semibold text-cdc-text mb-4 flex items-center gap-2"><Shield className="w-4 h-4 text-cdc-blue" /> Current User</h3>
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-cdc-blue rounded-full flex items-center justify-center text-white text-lg font-bold">SC</div>
          <div>
            <p className="text-lg font-bold text-cdc-text">{user?.name || 'Dr. Sarah Chen'}</p>
            <p className="text-sm text-cdc-muted">{user?.email || 'demo@cdc.gov'}</p>
            <span className="text-[10px] px-2 py-0.5 bg-blue-50 text-blue-700 rounded-full">{user?.role || 'Administrator'}</span>
          </div>
        </div>
      </div>

      {/* User Roles */}
      <div className="bg-white rounded-xl border border-cdc-border p-5">
        <h3 className="text-sm font-semibold text-cdc-text mb-4 flex items-center gap-2"><Users className="w-4 h-4 text-cdc-blue" /> User Roles ({roles.reduce((a, r) => a + r.count, 0)} users)</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {roles.map((role, i) => (
            <div key={i} className="p-4 bg-cdc-gray rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-sm font-semibold text-cdc-text">{role.name}</h4>
                <span className="text-xs bg-white px-2 py-0.5 rounded-full text-cdc-muted border border-cdc-border">{role.count} users</span>
              </div>
              <p className="text-xs text-cdc-muted">{role.permissions}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Accessibility */}
      <div className="bg-white rounded-xl border border-cdc-border p-5">
        <h3 className="text-sm font-semibold text-cdc-text mb-4 flex items-center gap-2"><Eye className="w-4 h-4 text-cdc-blue" /> Accessibility (Section 508)</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-3 bg-cdc-gray rounded-lg">
            <div className="flex items-center gap-3">
              <Monitor className="w-4 h-4 text-cdc-muted" />
              <div>
                <p className="text-sm font-medium text-cdc-text">High Contrast Mode</p>
                <p className="text-xs text-cdc-muted">Increase contrast for better visibility</p>
              </div>
            </div>
            <button onClick={toggleHighContrast} className={`w-12 h-6 rounded-full transition-colors relative ${highContrast ? 'bg-cdc-blue' : 'bg-gray-300'}`}>
              <span className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${highContrast ? 'translate-x-6' : 'translate-x-0.5'}`} />
            </button>
          </div>
          <div className="flex items-center gap-3 p-3 bg-cdc-gray rounded-lg">
            <Keyboard className="w-4 h-4 text-cdc-muted" />
            <div>
              <p className="text-sm font-medium text-cdc-text">Keyboard Navigation</p>
              <p className="text-xs text-cdc-muted">Full keyboard navigation support enabled. Use Tab, Enter, and Arrow keys to navigate.</p>
            </div>
            <span className="text-[10px] px-2 py-0.5 bg-green-50 text-green-700 rounded-full ml-auto shrink-0">Active</span>
          </div>
          <div className="flex items-center gap-3 p-3 bg-cdc-gray rounded-lg">
            <Settings className="w-4 h-4 text-cdc-muted" />
            <div>
              <p className="text-sm font-medium text-cdc-text">Screen Reader Compatibility</p>
              <p className="text-xs text-cdc-muted">ARIA labels and semantic HTML structure for screen reader support.</p>
            </div>
            <span className="text-[10px] px-2 py-0.5 bg-green-50 text-green-700 rounded-full ml-auto shrink-0">Compatible</span>
          </div>
        </div>
      </div>
    </div>
  )
}
