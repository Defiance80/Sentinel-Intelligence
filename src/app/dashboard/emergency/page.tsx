'use client'
import { useAppStore } from '@/lib/store'
import { emergencyData } from '@/lib/mock-data'
import { AlertTriangle, Zap, Users, TrendingUp, Shield } from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

export default function EmergencyPage() {
  const { emergencyMode, toggleEmergency } = useAppStore()

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-cdc-text flex items-center gap-2">
            <AlertTriangle className={`w-6 h-6 ${emergencyMode ? 'text-cdc-red' : 'text-cdc-muted'}`} />
            Emergency Operations Mode
          </h1>
          <p className="text-sm text-cdc-muted mt-1">Crisis media monitoring and misinformation tracking</p>
        </div>
        <button onClick={toggleEmergency} className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-colors ${emergencyMode ? 'bg-cdc-red text-white hover:bg-red-700' : 'bg-cdc-blue text-white hover:bg-cdc-dark'}`}>
          {emergencyMode ? 'Deactivate Emergency Mode' : 'Activate Emergency Mode'}
        </button>
      </div>

      {emergencyMode && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-center gap-3">
          <AlertTriangle className="w-5 h-5 text-cdc-red shrink-0" />
          <div>
            <p className="text-sm font-semibold text-red-800">Emergency Operations Active</p>
            <p className="text-xs text-red-700">Event: {emergencyData.event}</p>
          </div>
        </div>
      )}

      {/* Coverage Velocity */}
      <div className="bg-white rounded-xl border border-cdc-border p-5">
        <h3 className="text-sm font-semibold text-cdc-text mb-4 flex items-center gap-2">
          <Zap className="w-4 h-4 text-cdc-orange" /> Coverage Velocity
        </h3>
        <ResponsiveContainer width="100%" height={220}>
          <LineChart data={emergencyData.coverageVelocity}>
            <XAxis dataKey="hour" tick={{ fontSize: 11 }} />
            <YAxis tick={{ fontSize: 11 }} />
            <Tooltip />
            <Line type="monotone" dataKey="articles" stroke="#e74c3c" strokeWidth={2} dot={{ fill: '#e74c3c', r: 3 }} name="Articles/hour" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Misinfo Spikes */}
        <div className="bg-white rounded-xl border border-cdc-border p-5">
          <h3 className="text-sm font-semibold text-cdc-text mb-4 flex items-center gap-2">
            <Shield className="w-4 h-4 text-cdc-red" /> Misinformation Spikes
          </h3>
          <div className="space-y-3">
            {emergencyData.misinfoSpikes.map((m, i) => (
              <div key={i} className="p-3 bg-cdc-gray rounded-lg border-l-4" style={{ borderColor: m.risk === 'critical' ? '#e74c3c' : m.risk === 'high' ? '#f39c12' : '#27ae60' }}>
                <p className="text-sm font-medium text-cdc-text">{m.narrative}</p>
                <div className="flex items-center gap-3 mt-2">
                  <span className="text-xs font-bold text-cdc-red">{m.growth}</span>
                  <span className="text-xs text-cdc-muted">{m.volume.toLocaleString()} mentions</span>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                    m.risk === 'critical' ? 'bg-red-100 text-red-800' : m.risk === 'high' ? 'bg-amber-50 text-amber-800' : 'bg-green-50 text-green-700'
                  }`}>{m.risk}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Journalists Covering */}
        <div className="bg-white rounded-xl border border-cdc-border p-5">
          <h3 className="text-sm font-semibold text-cdc-text mb-4 flex items-center gap-2">
            <Users className="w-4 h-4 text-cdc-blue" /> Top Journalists Covering Event
          </h3>
          <div className="space-y-3">
            {emergencyData.topJournalists.map((j, i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-cdc-gray rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-cdc-blue rounded-full flex items-center justify-center text-white text-xs font-medium">
                    {j.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-cdc-text">{j.name}</p>
                    <p className="text-xs text-cdc-muted">{j.outlet}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-cdc-blue">{j.stories} stories</p>
                  <p className="text-[10px] text-cdc-muted">Last filed: {j.lastFiled}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
