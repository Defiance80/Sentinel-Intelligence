'use client'
import { useState } from 'react'
import { Search, Calendar, Filter } from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

const timelineData = [
  { month: 'Jul 24', articles: 45 }, { month: 'Aug 24', articles: 62 }, { month: 'Sep 24', articles: 78 },
  { month: 'Oct 24', articles: 95 }, { month: 'Nov 24', articles: 120 }, { month: 'Dec 24', articles: 88 },
  { month: 'Jan 25', articles: 145 }, { month: 'Feb 25', articles: 178 }, { month: 'Mar 25', articles: 210 },
]

const archiveResults = [
  { headline: "CDC Declares H5N1 Public Health Concern", source: "Reuters", date: "2025-02-28", topic: "Avian Flu", region: "National" },
  { headline: "Mpox Outbreak Contained in Chicago Area", source: "Chicago Tribune", date: "2025-02-15", topic: "Mpox", region: "Midwest" },
  { headline: "Opioid Deaths Decline for First Time Since 2019", source: "NYT", date: "2025-01-20", topic: "Opioid Crisis", region: "National" },
  { headline: "New Maternal Health Clinics Open in Rural Mississippi", source: "AP News", date: "2025-01-08", topic: "Maternal Health", region: "Southeast" },
  { headline: "Vaccine Confidence Survey Shows Improvement", source: "STAT News", date: "2024-12-15", topic: "Vaccines", region: "National" },
  { headline: "Youth Mental Health Emergency Declaration Anniversary", source: "Washington Post", date: "2024-12-01", topic: "Mental Health", region: "National" },
  { headline: "Fentanyl Seizures Triple at Southern Border", source: "NPR", date: "2024-11-18", topic: "Opioid Crisis", region: "Southwest" },
  { headline: "Global COVID Variant Tracking Update", source: "The Lancet", date: "2024-11-02", topic: "COVID-19", region: "Global" },
]

export default function HistoricalPage() {
  const [query, setQuery] = useState('')
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-cdc-text">Historical Media Search</h1>
        <p className="text-sm text-cdc-muted mt-1">Search the media archive going back 24 months</p>
      </div>

      <div className="bg-white rounded-xl border border-cdc-border p-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
          <div className="relative md:col-span-2">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-cdc-muted" />
            <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search historical articles..." className="w-full pl-10 pr-4 py-2 border border-cdc-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-cdc-blue" />
          </div>
          <input type="date" defaultValue="2024-07-01" className="px-3 py-2 border border-cdc-border rounded-lg text-sm" />
          <input type="date" defaultValue="2025-03-16" className="px-3 py-2 border border-cdc-border rounded-lg text-sm" />
          <button className="bg-cdc-blue text-white px-4 py-2 rounded-lg text-sm hover:bg-cdc-dark transition-colors">Search Archive</button>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-cdc-border p-5">
        <h3 className="text-sm font-semibold text-cdc-text mb-4 flex items-center gap-2">
          <Calendar className="w-4 h-4 text-cdc-blue" /> Coverage Timeline
        </h3>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={timelineData}>
            <XAxis dataKey="month" tick={{ fontSize: 11 }} />
            <YAxis tick={{ fontSize: 11 }} />
            <Tooltip />
            <Bar dataKey="articles" fill="#1a5276" radius={[4,4,0,0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white rounded-xl border border-cdc-border overflow-hidden">
        <div className="px-5 py-3 border-b border-cdc-border">
          <h3 className="text-sm font-semibold text-cdc-text">{archiveResults.length} Archive Results</h3>
        </div>
        <div className="divide-y divide-cdc-border">
          {archiveResults.map((r, i) => (
            <div key={i} className="px-5 py-4 hover:bg-cdc-gray transition-colors">
              <h3 className="text-sm font-medium text-cdc-text">{r.headline}</h3>
              <div className="flex items-center gap-3 mt-1.5">
                <span className="text-xs text-cdc-blue font-medium">{r.source}</span>
                <span className="text-xs text-cdc-muted">{r.date}</span>
                <span className="text-[10px] px-2 py-0.5 bg-blue-50 text-blue-700 rounded-full">{r.topic}</span>
                <span className="text-[10px] px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full">{r.region}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
