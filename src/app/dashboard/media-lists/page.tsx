'use client'
import { useState } from 'react'
import { mediaLists, journalists } from '@/lib/mock-data'
import { List, Plus, Download, Search, Users, Calendar } from 'lucide-react'

export default function MediaListsPage() {
  const [selectedList, setSelectedList] = useState<typeof mediaLists[0] | null>(null)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-cdc-text">Media List Builder</h1>
          <p className="text-sm text-cdc-muted mt-1">Organize journalists by campaign, topic, or custom criteria</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-cdc-blue text-white rounded-lg text-sm hover:bg-cdc-dark transition-colors">
          <Plus className="w-4 h-4" /> New List
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="space-y-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-cdc-muted" />
            <input type="text" placeholder="Search lists..." className="w-full pl-10 pr-4 py-2 border border-cdc-border rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-cdc-blue" />
          </div>
          {mediaLists.map((list) => (
            <div key={list.id} onClick={() => setSelectedList(list)} className={`bg-white rounded-xl border p-4 cursor-pointer transition-colors ${selectedList?.id === list.id ? 'border-cdc-blue' : 'border-cdc-border hover:border-cdc-light'}`}>
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-sm font-semibold text-cdc-text">{list.name}</h3>
                  <div className="flex items-center gap-3 mt-2">
                    <span className="flex items-center gap-1 text-xs text-cdc-muted"><Users className="w-3 h-3" />{list.journalists}</span>
                    <span className="text-[10px] px-2 py-0.5 bg-blue-50 text-blue-700 rounded-full">{list.campaign}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1 mt-2 text-[10px] text-cdc-muted">
                <Calendar className="w-3 h-3" /> Updated {list.lastUpdated}
              </div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-2 bg-white rounded-xl border border-cdc-border">
          {selectedList ? (
            <div>
              <div className="px-5 py-4 border-b border-cdc-border flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-cdc-text">{selectedList.name}</h3>
                  <p className="text-xs text-cdc-muted">Campaign: {selectedList.campaign} • {selectedList.journalists} journalists</p>
                </div>
                <div className="flex gap-2">
                  <button className="flex items-center gap-1 px-3 py-1.5 border border-cdc-border rounded-lg text-xs hover:bg-cdc-gray transition-colors">
                    <Download className="w-3 h-3" /> Export CSV
                  </button>
                  <button className="flex items-center gap-1 px-3 py-1.5 bg-cdc-blue text-white rounded-lg text-xs hover:bg-cdc-dark transition-colors">
                    <Plus className="w-3 h-3" /> Add Journalist
                  </button>
                </div>
              </div>
              <div className="overflow-x-auto">
              <table className="w-full min-w-[500px]">
                <thead>
                  <tr className="bg-cdc-gray text-left">
                    <th className="px-5 py-2.5 text-xs font-medium text-cdc-muted">Name</th>
                    <th className="px-5 py-2.5 text-xs font-medium text-cdc-muted">Outlet</th>
                    <th className="px-5 py-2.5 text-xs font-medium text-cdc-muted">Beat</th>
                    <th className="px-5 py-2.5 text-xs font-medium text-cdc-muted">Reach</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-cdc-border">
                  {journalists.slice(0, selectedList.journalists > 8 ? 8 : selectedList.journalists).map((j) => (
                    <tr key={j.id} className="hover:bg-cdc-gray transition-colors">
                      <td className="px-5 py-3 text-sm font-medium text-cdc-text">{j.name}</td>
                      <td className="px-5 py-3 text-sm text-cdc-blue">{j.outlet}</td>
                      <td className="px-5 py-3 text-sm text-cdc-muted">{j.beat}</td>
                      <td className="px-5 py-3 text-sm text-cdc-muted">{j.reach}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-64 text-cdc-muted">
              <List className="w-8 h-8 mb-2" />
              <p className="text-sm">Select a list to view journalists</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
