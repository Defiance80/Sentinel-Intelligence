'use client'
import { useState } from 'react'
import { briefings } from '@/lib/mock-data'
import { FileText, Plus, Clock, ExternalLink, Edit, Archive, Download } from 'lucide-react'

export default function BriefingsPage() {
  const [selectedBriefing, setSelectedBriefing] = useState(briefings[0])

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-cdc-text">Daily Media Briefings</h1>
          <p className="text-sm text-cdc-muted mt-1">Curate and distribute daily media intelligence briefs</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-cdc-blue text-white rounded-lg text-sm hover:bg-cdc-dark transition-colors">
          <Plus className="w-4 h-4" /> New Briefing
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Archive sidebar */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-cdc-text flex items-center gap-2"><Archive className="w-4 h-4 text-cdc-blue" /> Briefing Archive</h3>
          {briefings.map((b) => (
            <div key={b.id} onClick={() => setSelectedBriefing(b)} className={`bg-white rounded-lg border p-3 cursor-pointer transition-colors ${selectedBriefing.id === b.id ? 'border-cdc-blue' : 'border-cdc-border hover:border-cdc-light'}`}>
              <p className="text-xs font-medium text-cdc-text">{b.date}</p>
              <p className="text-[10px] text-cdc-muted mt-0.5">{b.title}</p>
              <span className={`text-[10px] px-2 py-0.5 rounded-full mt-1 inline-block ${b.status === 'draft' ? 'bg-amber-50 text-amber-700' : 'bg-green-50 text-green-700'}`}>{b.status}</span>
            </div>
          ))}
        </div>

        {/* Briefing content */}
        <div className="lg:col-span-3 bg-white rounded-xl border border-cdc-border">
          <div className="px-4 sm:px-6 py-4 border-b border-cdc-border flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h2 className="text-lg font-bold text-cdc-text">{selectedBriefing.title}</h2>
              <div className="flex items-center gap-3 mt-1">
                <span className={`text-[10px] px-2 py-0.5 rounded-full ${selectedBriefing.status === 'draft' ? 'bg-amber-50 text-amber-700' : 'bg-green-50 text-green-700'}`}>{selectedBriefing.status}</span>
                <span className="text-xs text-cdc-muted">{selectedBriefing.stories.length} stories curated</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <button className="flex items-center gap-1 px-3 py-1.5 border border-cdc-border rounded-lg text-xs hover:bg-cdc-gray transition-colors min-h-[44px]">
                <Edit className="w-3 h-3" /> Edit
              </button>
              <button className="flex items-center gap-1 px-3 py-1.5 border border-cdc-border rounded-lg text-xs hover:bg-cdc-gray transition-colors min-h-[44px]">
                <Download className="w-3 h-3" /> Export PDF
              </button>
              <button className="flex items-center gap-1 px-3 py-1.5 bg-cdc-blue text-white rounded-lg text-xs hover:bg-cdc-dark transition-colors min-h-[44px]">
                Generate Report
              </button>
            </div>
          </div>

          <div className="p-6 space-y-4">
            {selectedBriefing.stories.length > 0 ? (
              selectedBriefing.stories.map((story, i) => (
                <div key={i} className="p-4 bg-cdc-gray rounded-lg">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-sm font-semibold text-cdc-text">{story.headline}</h3>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="text-xs text-cdc-blue">{story.source}</span>
                        <span className="flex items-center gap-1 text-xs text-cdc-muted"><Clock className="w-3 h-3" />{story.time}</span>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-cdc-muted shrink-0" />
                  </div>
                  <p className="text-sm text-cdc-text mt-3 leading-relaxed">{story.summary}</p>
                </div>
              ))
            ) : (
              <div className="text-center py-12 text-cdc-muted">
                <FileText className="w-8 h-8 mx-auto mb-2" />
                <p className="text-sm">This briefing has been archived. Select the current draft to view stories.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
