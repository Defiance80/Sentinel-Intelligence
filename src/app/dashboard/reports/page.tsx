'use client'
import { useState } from 'react'
import { ClipboardList, Download, FileText, BarChart3, Users, Globe } from 'lucide-react'

const reportTypes = [
  { id: 'coverage', label: 'Coverage Summary', icon: FileText, desc: 'Comprehensive overview of media coverage by topic, outlet, and sentiment.' },
  { id: 'topic', label: 'Topic Analytics', icon: BarChart3, desc: 'Deep-dive analysis of specific health topics and their media trajectory.' },
  { id: 'journalist', label: 'Journalist Engagement', icon: Users, desc: 'Track journalist interactions, story pickups, and relationship metrics.' },
  { id: 'geographic', label: 'Geographic Distribution', icon: Globe, desc: 'Regional and global coverage mapping and distribution analysis.' },
]

const recentReports = [
  { name: 'Weekly Coverage Summary - March 10-16', type: 'Coverage Summary', created: '2025-03-16', pages: 12 },
  { name: 'H5N1 Media Trajectory Analysis', type: 'Topic Analytics', created: '2025-03-14', pages: 8 },
  { name: 'Q1 2025 Journalist Engagement Report', type: 'Journalist Engagement', created: '2025-03-10', pages: 15 },
  { name: 'February Geographic Coverage Map', type: 'Geographic Distribution', created: '2025-03-01', pages: 6 },
]

export default function ReportsPage() {
  const [selectedType, setSelectedType] = useState<string | null>(null)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-cdc-text">Report Builder</h1>
        <p className="text-sm text-cdc-muted mt-1">Generate custom reports for analysis and distribution</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {reportTypes.map((rt) => (
          <div key={rt.id} onClick={() => setSelectedType(rt.id)} className={`bg-white rounded-xl border p-5 cursor-pointer transition-all ${selectedType === rt.id ? 'border-cdc-blue shadow-sm' : 'border-cdc-border hover:border-cdc-light'}`}>
            <rt.icon className={`w-6 h-6 mb-3 ${selectedType === rt.id ? 'text-cdc-blue' : 'text-cdc-muted'}`} />
            <h3 className="text-sm font-semibold text-cdc-text">{rt.label}</h3>
            <p className="text-xs text-cdc-muted mt-1">{rt.desc}</p>
          </div>
        ))}
      </div>

      {selectedType && (
        <div className="bg-white rounded-xl border border-cdc-border p-6">
          <h3 className="text-lg font-bold text-cdc-text mb-4">Configure Report</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div>
              <label className="block text-xs font-medium text-cdc-text mb-1">Date Range</label>
              <select className="w-full px-3 py-2 border border-cdc-border rounded-lg text-sm">
                <option>Last 7 days</option><option>Last 30 days</option><option>Last 90 days</option><option>Custom range</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-cdc-text mb-1">Topics</label>
              <select className="w-full px-3 py-2 border border-cdc-border rounded-lg text-sm">
                <option>All Topics</option><option>Avian Flu</option><option>Vaccines</option><option>Opioid Crisis</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-cdc-text mb-1">Format</label>
              <select className="w-full px-3 py-2 border border-cdc-border rounded-lg text-sm">
                <option>PDF Report</option><option>CSV Data Export</option><option>Executive Summary</option>
              </select>
            </div>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-cdc-blue text-white rounded-lg text-sm hover:bg-cdc-dark transition-colors">
              <ClipboardList className="w-4 h-4" /> Generate Report
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border border-cdc-border rounded-lg text-sm hover:bg-cdc-gray transition-colors">
              <Download className="w-4 h-4" /> Export as PDF
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border border-cdc-border rounded-lg text-sm hover:bg-cdc-gray transition-colors">
              <Download className="w-4 h-4" /> Export as CSV
            </button>
          </div>
        </div>
      )}

      <div className="bg-white rounded-xl border border-cdc-border overflow-hidden">
        <div className="px-5 py-3 border-b border-cdc-border">
          <h3 className="text-sm font-semibold text-cdc-text">Recent Reports</h3>
        </div>
        <table className="w-full">
          <thead>
            <tr className="bg-cdc-gray text-left">
              <th className="px-5 py-2.5 text-xs font-medium text-cdc-muted">Report Name</th>
              <th className="px-5 py-2.5 text-xs font-medium text-cdc-muted">Type</th>
              <th className="px-5 py-2.5 text-xs font-medium text-cdc-muted">Created</th>
              <th className="px-5 py-2.5 text-xs font-medium text-cdc-muted">Pages</th>
              <th className="px-5 py-2.5 text-xs font-medium text-cdc-muted">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-cdc-border">
            {recentReports.map((r, i) => (
              <tr key={i} className="hover:bg-cdc-gray transition-colors">
                <td className="px-5 py-3 text-sm font-medium text-cdc-text">{r.name}</td>
                <td className="px-5 py-3 text-xs"><span className="px-2 py-0.5 bg-blue-50 text-blue-700 rounded-full">{r.type}</span></td>
                <td className="px-5 py-3 text-sm text-cdc-muted">{r.created}</td>
                <td className="px-5 py-3 text-sm text-cdc-muted">{r.pages}</td>
                <td className="px-5 py-3"><button className="text-xs text-cdc-blue hover:underline">Download</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
