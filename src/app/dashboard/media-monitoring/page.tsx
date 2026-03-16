'use client'
import { useState } from 'react'
import { mediaArticles } from '@/lib/mock-data'
import { Search, Filter, Save, Globe, Clock, ExternalLink } from 'lucide-react'

export default function MediaMonitoringPage() {
  const [keyword, setKeyword] = useState('')
  const [language, setLanguage] = useState('all')
  const [mediaType, setMediaType] = useState('all')

  const filtered = mediaArticles.filter((a) => {
    if (keyword && !a.headline.toLowerCase().includes(keyword.toLowerCase())) return false
    if (language !== 'all' && a.language !== language) return false
    if (mediaType !== 'all' && a.type !== mediaType) return false
    return true
  })

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-cdc-text">Media Monitoring</h1>
          <p className="text-sm text-cdc-muted mt-1">Real-time media coverage tracking across global sources</p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 bg-cdc-blue text-white rounded-lg text-sm hover:bg-cdc-dark transition-colors min-h-[44px]">
            <Save className="w-4 h-4" /> Save Search
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl border border-cdc-border p-4">
        <div className="flex items-center gap-2 mb-3">
          <Filter className="w-4 h-4 text-cdc-blue" />
          <span className="text-sm font-semibold text-cdc-text">Filters</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
          <div className="relative md:col-span-2">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-cdc-muted" />
            <input type="text" value={keyword} onChange={(e) => setKeyword(e.target.value)} placeholder="Search keywords..." className="w-full pl-10 pr-4 py-2 border border-cdc-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-cdc-blue" />
          </div>
          <select value={language} onChange={(e) => setLanguage(e.target.value)} className="px-3 py-2 border border-cdc-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-cdc-blue">
            <option value="all">All Languages</option>
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
            <option value="Arabic">Arabic</option>
            <option value="Chinese">Chinese</option>
          </select>
          <select value={mediaType} onChange={(e) => setMediaType(e.target.value)} className="px-3 py-2 border border-cdc-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-cdc-blue">
            <option value="all">All Media Types</option>
            <option value="Wire">Wire</option>
            <option value="Newspaper">Newspaper</option>
            <option value="Broadcast">Broadcast</option>
            <option value="Digital">Digital</option>
            <option value="Journal">Journal</option>
          </select>
          <select className="px-3 py-2 border border-cdc-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-cdc-blue">
            <option>All Regions</option>
            <option>United States</option>
            <option>Europe</option>
            <option>Asia</option>
            <option>Latin America</option>
          </select>
        </div>
      </div>

      {/* Results */}
      <div className="bg-white rounded-xl border border-cdc-border overflow-hidden">
        <div className="px-5 py-3 border-b border-cdc-border flex items-center justify-between">
          <span className="text-sm font-semibold text-cdc-text">{filtered.length} Results</span>
          <span className="text-xs text-cdc-muted">Sorted by most recent</span>
        </div>
        <div className="divide-y divide-cdc-border">
          {filtered.map((article) => (
            <div key={article.id} className="px-5 py-4 hover:bg-cdc-gray transition-colors">
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <h3 className="text-sm font-medium text-cdc-text leading-snug flex items-center gap-2">
                    {article.headline}
                    <ExternalLink className="w-3 h-3 text-cdc-muted shrink-0" />
                  </h3>
                  <div className="flex items-center gap-3 mt-2 flex-wrap">
                    <span className="text-xs text-cdc-blue font-medium">{article.source}</span>
                    <span className="text-xs text-cdc-muted">{article.author}</span>
                    <span className="flex items-center gap-1 text-xs text-cdc-muted"><Clock className="w-3 h-3" />{article.time}</span>
                    <span className="flex items-center gap-1 text-xs text-cdc-muted"><Globe className="w-3 h-3" />{article.geo}</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">{article.language}</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">{article.type}</span>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                    article.sentiment === 'positive' ? 'bg-green-50 text-green-700' : article.sentiment === 'negative' ? 'bg-red-50 text-red-700' : 'bg-gray-50 text-gray-600'
                  }`}>{article.sentiment}</span>
                  <p className="text-xs text-cdc-muted mt-1">{article.engagement.toLocaleString()} engagements</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
