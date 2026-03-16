'use client'
import { useState } from 'react'
import { broadcastData } from '@/lib/mock-data'
import { Tv, MapPin } from 'lucide-react'

const states = [
  { id: 'WA', d: 'M125,25 L155,25 155,55 125,55Z', name: 'Washington' },
  { id: 'OR', d: 'M115,55 L155,55 155,85 115,85Z', name: 'Oregon' },
  { id: 'CA', d: 'M105,85 L140,85 140,155 105,155Z', name: 'California' },
  { id: 'NV', d: 'M140,75 L170,75 170,130 140,130Z', name: 'Nevada' },
  { id: 'ID', d: 'M155,30 L180,30 180,75 155,75Z', name: 'Idaho' },
  { id: 'MT', d: 'M180,20 L240,20 240,50 180,50Z', name: 'Montana' },
  { id: 'WY', d: 'M180,50 L230,50 230,80 180,80Z', name: 'Wyoming' },
  { id: 'UT', d: 'M170,75 L200,75 200,115 170,115Z', name: 'Utah' },
  { id: 'CO', d: 'M200,80 L250,80 250,110 200,110Z', name: 'Colorado' },
  { id: 'AZ', d: 'M145,120 L185,120 185,165 145,165Z', name: 'Arizona' },
  { id: 'NM', d: 'M185,115 L225,115 225,165 185,165Z', name: 'New Mexico' },
  { id: 'ND', d: 'M240,20 L290,20 290,45 240,45Z', name: 'North Dakota' },
  { id: 'SD', d: 'M240,45 L290,45 290,70 240,70Z', name: 'South Dakota' },
  { id: 'NE', d: 'M240,70 L300,70 300,90 240,90Z', name: 'Nebraska' },
  { id: 'KS', d: 'M250,90 L310,90 310,115 250,115Z', name: 'Kansas' },
  { id: 'OK', d: 'M250,115 L320,115 320,140 250,140Z', name: 'Oklahoma' },
  { id: 'TX', d: 'M225,140 L300,140 300,200 225,200Z', name: 'Texas' },
  { id: 'MN', d: 'M290,20 L330,20 330,55 290,55Z', name: 'Minnesota' },
  { id: 'IA', d: 'M300,55 L345,55 345,80 300,80Z', name: 'Iowa' },
  { id: 'MO', d: 'M310,80 L355,80 355,115 310,115Z', name: 'Missouri' },
  { id: 'AR', d: 'M320,115 L355,115 355,145 320,145Z', name: 'Arkansas' },
  { id: 'LA', d: 'M320,145 L355,145 355,180 320,180Z', name: 'Louisiana' },
  { id: 'WI', d: 'M330,20 L370,20 370,55 330,55Z', name: 'Wisconsin' },
  { id: 'IL', d: 'M345,50 L370,50 370,100 345,100Z', name: 'Illinois' },
  { id: 'MI', d: 'M370,20 L410,20 410,60 370,60Z', name: 'Michigan' },
  { id: 'IN', d: 'M370,55 L395,55 395,95 370,95Z', name: 'Indiana' },
  { id: 'OH', d: 'M395,50 L430,50 430,85 395,85Z', name: 'Ohio' },
  { id: 'KY', d: 'M370,95 L425,95 425,115 370,115Z', name: 'Kentucky' },
  { id: 'TN', d: 'M355,115 L425,115 425,135 355,135Z', name: 'Tennessee' },
  { id: 'MS', d: 'M355,135 L380,135 380,175 355,175Z', name: 'Mississippi' },
  { id: 'AL', d: 'M380,130 L410,130 410,175 380,175Z', name: 'Alabama' },
  { id: 'GA', d: 'M410,125 L445,125 445,170 410,170Z', name: 'Georgia' },
  { id: 'FL', d: 'M410,170 L460,170 460,215 430,215Z', name: 'Florida' },
  { id: 'SC', d: 'M425,115 L460,115 460,140 425,140Z', name: 'South Carolina' },
  { id: 'NC', d: 'M420,100 L475,100 475,120 420,120Z', name: 'North Carolina' },
  { id: 'VA', d: 'M415,82 L470,82 470,102 415,102Z', name: 'Virginia' },
  { id: 'WV', d: 'M420,72 L445,72 445,95 420,95Z', name: 'West Virginia' },
  { id: 'PA', d: 'M420,48 L470,48 470,72 420,72Z', name: 'Pennsylvania' },
  { id: 'NY', d: 'M430,25 L480,25 480,50 430,50Z', name: 'New York' },
  { id: 'NJ', d: 'M465,52 L480,52 480,72 465,72Z', name: 'New Jersey' },
  { id: 'CT', d: 'M470,38 L490,38 490,48 470,48Z', name: 'Connecticut' },
  { id: 'MA', d: 'M470,30 L500,30 500,40 470,40Z', name: 'Massachusetts' },
  { id: 'ME', d: 'M480,5 L505,5 505,30 480,30Z', name: 'Maine' },
]

export default function BroadcastPage() {
  const [selectedState, setSelectedState] = useState<string | null>(null)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-cdc-text">Broadcast Monitoring</h1>
        <p className="text-sm text-cdc-muted mt-1">210 DMA regions across the United States</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Map */}
        <div className="bg-white rounded-xl border border-cdc-border p-5">
          <h3 className="text-sm font-semibold text-cdc-text mb-4 flex items-center gap-2">
            <MapPin className="w-4 h-4 text-cdc-blue" /> US Coverage Map
          </h3>
          <svg viewBox="90 0 430 220" className="w-full">
            {states.map((state) => (
              <g key={state.id}>
                <path
                  d={state.d}
                  fill={selectedState === state.id ? '#1a5276' : '#dbeafe'}
                  stroke="#ffffff"
                  strokeWidth="1.5"
                  className="cursor-pointer hover:fill-[#2980b9] transition-colors"
                  onClick={() => setSelectedState(state.id)}
                />
                <text
                  x={parseFloat(state.d.split(' ')[0].replace('M','')) + 15}
                  y={parseFloat(state.d.split(' ')[0].split(',')[1]) + 18}
                  fontSize="8"
                  fill={selectedState === state.id ? '#ffffff' : '#4b5563'}
                  textAnchor="middle"
                  className="pointer-events-none"
                >
                  {state.id}
                </text>
              </g>
            ))}
          </svg>
          <p className="text-[10px] text-cdc-muted mt-2 text-center">Click a state to view DMA broadcast data</p>
        </div>

        {/* Details */}
        <div className="bg-white rounded-xl border border-cdc-border p-5">
          <h3 className="text-sm font-semibold text-cdc-text mb-4 flex items-center gap-2">
            <Tv className="w-4 h-4 text-cdc-blue" /> Broadcast Coverage Details
          </h3>
          {selectedState ? (
            <div className="space-y-3">
              <p className="text-sm text-cdc-blue font-medium">{states.find(s => s.id === selectedState)?.name} — Top Stations</p>
              {broadcastData.slice(0, 4).map((b, i) => (
                <div key={i} className="p-3 bg-cdc-gray rounded-lg">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm font-medium text-cdc-text">{b.station}</p>
                      <p className="text-xs text-cdc-muted">{b.dma}</p>
                    </div>
                    <span className="text-xs text-cdc-muted">{b.audience}</span>
                  </div>
                  <p className="text-xs text-cdc-blue mt-1">{b.topic}</p>
                  <p className="text-[10px] text-cdc-muted">{b.airTime}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex items-center justify-center h-64 text-cdc-muted text-sm">
              Select a state on the map to view broadcast data
            </div>
          )}
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-cdc-border overflow-hidden">
        <div className="px-5 py-3 border-b border-cdc-border">
          <h3 className="text-sm font-semibold text-cdc-text">Recent Broadcast Mentions</h3>
        </div>
        <table className="w-full">
          <thead>
            <tr className="bg-cdc-gray text-left">
              <th className="px-5 py-2.5 text-xs font-medium text-cdc-muted">Station</th>
              <th className="px-5 py-2.5 text-xs font-medium text-cdc-muted">DMA</th>
              <th className="px-5 py-2.5 text-xs font-medium text-cdc-muted">Topic</th>
              <th className="px-5 py-2.5 text-xs font-medium text-cdc-muted">Air Time</th>
              <th className="px-5 py-2.5 text-xs font-medium text-cdc-muted">Audience</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-cdc-border">
            {broadcastData.map((b, i) => (
              <tr key={i} className="hover:bg-cdc-gray transition-colors">
                <td className="px-5 py-3 text-sm font-medium text-cdc-text">{b.station}</td>
                <td className="px-5 py-3 text-sm text-cdc-muted">{b.dma}</td>
                <td className="px-5 py-3 text-sm text-cdc-blue">{b.topic}</td>
                <td className="px-5 py-3 text-sm text-cdc-muted">{b.airTime}</td>
                <td className="px-5 py-3 text-sm text-cdc-muted">{b.audience}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
