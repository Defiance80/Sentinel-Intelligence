'use client'
import { useState } from 'react'
import { journalists } from '@/lib/mock-data'
import { Search, Users, Mail, MapPin, Globe, Plus, ExternalLink } from 'lucide-react'

export default function JournalistsPage() {
  const [query, setQuery] = useState('')
  const [selectedJournalist, setSelectedJournalist] = useState<typeof journalists[0] | null>(null)

  const filtered = journalists.filter((j) =>
    !query || j.name.toLowerCase().includes(query.toLowerCase()) || j.beat.toLowerCase().includes(query.toLowerCase()) || j.outlet.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-cdc-text">Journalist Discovery</h1>
          <p className="text-sm text-cdc-muted mt-1">Searchable database of {journalists.length} health and science journalists</p>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-cdc-border p-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          <div className="relative md:col-span-2">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-cdc-muted" />
            <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search by name, beat, outlet..." className="w-full pl-10 pr-4 py-2 border border-cdc-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-cdc-blue" />
          </div>
          <select className="px-3 py-2 border border-cdc-border rounded-lg text-sm">
            <option>All Beats</option>
            <option>Infectious Disease</option>
            <option>Public Health</option>
            <option>Vaccines</option>
            <option>Health Policy</option>
          </select>
          <select className="px-3 py-2 border border-cdc-border rounded-lg text-sm">
            <option>All Languages</option>
            <option>English</option>
            <option>Spanish</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-3">
          {filtered.map((j) => (
            <div key={j.id} onClick={() => setSelectedJournalist(j)} className={`bg-white rounded-xl border p-4 cursor-pointer transition-colors ${selectedJournalist?.id === j.id ? 'border-cdc-blue bg-blue-50/30' : 'border-cdc-border hover:border-cdc-light'}`}>
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-sm font-semibold text-cdc-text">{j.name}</h3>
                  <p className="text-xs text-cdc-blue mt-0.5">{j.outlet}</p>
                  <div className="flex items-center gap-3 mt-2">
                    <span className="text-[10px] px-2 py-0.5 bg-blue-50 text-blue-700 rounded-full">{j.beat}</span>
                    <span className="text-[10px] px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full">{j.subBeat}</span>
                    <span className="flex items-center gap-1 text-xs text-cdc-muted"><MapPin className="w-3 h-3" />{j.geo}</span>
                    <span className="flex items-center gap-1 text-xs text-cdc-muted"><Globe className="w-3 h-3" />{j.language}</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-cdc-blue">{j.reach}</p>
                  <p className="text-[10px] text-cdc-muted">est. reach</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Profile Panel */}
        <div className="bg-white rounded-xl border border-cdc-border p-5 h-fit sticky top-6">
          {selectedJournalist ? (
            <div className="space-y-4">
              <div className="text-center pb-4 border-b border-cdc-border">
                <div className="w-16 h-16 bg-cdc-blue rounded-full mx-auto flex items-center justify-center text-white text-lg font-bold">
                  {selectedJournalist.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-lg font-bold text-cdc-text mt-3">{selectedJournalist.name}</h3>
                <p className="text-sm text-cdc-blue">{selectedJournalist.outlet}</p>
                <p className="text-xs text-cdc-muted mt-1">{selectedJournalist.beat} — {selectedJournalist.subBeat}</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-cdc-muted"><MapPin className="w-3 h-3" />{selectedJournalist.geo}</div>
                <div className="flex items-center gap-2 text-xs text-cdc-muted"><Mail className="w-3 h-3" />{selectedJournalist.email}</div>
                <div className="flex items-center gap-2 text-xs text-cdc-muted"><Globe className="w-3 h-3" />{selectedJournalist.language}</div>
              </div>
              <div>
                <p className="text-xs font-semibold text-cdc-text mb-2">Recent Articles</p>
                {selectedJournalist.recentArticles.map((a, i) => (
                  <div key={i} className="flex items-center gap-2 py-1.5 text-xs text-cdc-text">
                    <ExternalLink className="w-3 h-3 text-cdc-muted shrink-0" />{a}
                  </div>
                ))}
              </div>
              <div className="flex gap-2 pt-2">
                <button className="flex-1 flex items-center justify-center gap-1 bg-cdc-blue text-white px-3 py-2 rounded-lg text-xs hover:bg-cdc-dark transition-colors">
                  <Plus className="w-3 h-3" /> Add to List
                </button>
                <button className="flex-1 flex items-center justify-center gap-1 border border-cdc-border text-cdc-text px-3 py-2 rounded-lg text-xs hover:bg-cdc-gray transition-colors">
                  <Mail className="w-3 h-3" /> Contact
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-64 text-cdc-muted">
              <Users className="w-8 h-8 mb-2" />
              <p className="text-sm">Select a journalist to view profile</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
