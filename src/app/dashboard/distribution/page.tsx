'use client'
import { pressReleases, distributionEngagement } from '@/lib/mock-data'
import { Send, FileText, Eye, MousePointer, Newspaper } from 'lucide-react'
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

export default function DistributionPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-cdc-text">Press Release Distribution Tracker</h1>
        <p className="text-sm text-cdc-muted mt-1">Track engagement and coverage from press release distribution</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: 'Total Sent', value: '1,033', icon: Send, color: 'text-cdc-blue' },
          { label: 'Total Opened', value: '808', icon: Eye, color: 'text-cdc-light' },
          { label: 'Total Clicked', value: '443', icon: MousePointer, color: 'text-cdc-accent' },
          { label: 'Stories Written', value: '76', icon: Newspaper, color: 'text-cdc-green' },
        ].map((stat, i) => (
          <div key={i} className="bg-white rounded-xl border border-cdc-border p-4">
            <stat.icon className={`w-5 h-5 ${stat.color} mb-2`} />
            <p className="text-2xl font-bold text-cdc-text">{stat.value}</p>
            <p className="text-xs text-cdc-muted">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Engagement Chart */}
      <div className="bg-white rounded-xl border border-cdc-border p-5">
        <h3 className="text-sm font-semibold text-cdc-text mb-4">Engagement Over Time (Latest Release)</h3>
        <ResponsiveContainer width="100%" height={240}>
          <AreaChart data={distributionEngagement}>
            <XAxis dataKey="name" tick={{ fontSize: 11 }} />
            <YAxis tick={{ fontSize: 11 }} />
            <Tooltip />
            <Area type="monotone" dataKey="received" stroke="#1a5276" fill="#1a527620" name="Received %" />
            <Area type="monotone" dataKey="opened" stroke="#2980b9" fill="#2980b920" name="Opened %" />
            <Area type="monotone" dataKey="clicked" stroke="#1abc9c" fill="#1abc9c20" name="Clicked %" />
            <Area type="monotone" dataKey="stories" stroke="#27ae60" fill="#27ae6020" name="Stories" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Press Releases Table */}
      <div className="bg-white rounded-xl border border-cdc-border overflow-hidden">
        <div className="px-5 py-3 border-b border-cdc-border">
          <h3 className="text-sm font-semibold text-cdc-text flex items-center gap-2"><FileText className="w-4 h-4 text-cdc-blue" /> Recent Press Releases</h3>
        </div>
        <table className="w-full">
          <thead>
            <tr className="bg-cdc-gray text-left">
              <th className="px-5 py-2.5 text-xs font-medium text-cdc-muted">Release</th>
              <th className="px-5 py-2.5 text-xs font-medium text-cdc-muted">Date</th>
              <th className="px-5 py-2.5 text-xs font-medium text-cdc-muted">Sent</th>
              <th className="px-5 py-2.5 text-xs font-medium text-cdc-muted">Opened</th>
              <th className="px-5 py-2.5 text-xs font-medium text-cdc-muted">Clicked</th>
              <th className="px-5 py-2.5 text-xs font-medium text-cdc-muted">Stories</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-cdc-border">
            {pressReleases.map((pr) => (
              <tr key={pr.id} className="hover:bg-cdc-gray transition-colors">
                <td className="px-5 py-3 text-sm font-medium text-cdc-text max-w-md">{pr.title}</td>
                <td className="px-5 py-3 text-sm text-cdc-muted">{pr.date}</td>
                <td className="px-5 py-3 text-sm text-cdc-muted">{pr.sent}</td>
                <td className="px-5 py-3 text-sm text-cdc-muted">{pr.opened} <span className="text-[10px] text-cdc-blue">({Math.round(pr.opened/pr.sent*100)}%)</span></td>
                <td className="px-5 py-3 text-sm text-cdc-muted">{pr.clicked} <span className="text-[10px] text-cdc-blue">({Math.round(pr.clicked/pr.sent*100)}%)</span></td>
                <td className="px-5 py-3 text-sm font-medium text-cdc-green">{pr.storiesWritten}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
