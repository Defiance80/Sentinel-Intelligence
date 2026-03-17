'use client'
import { useState, useMemo } from 'react'
import { broadcastData } from '@/lib/mock-data'
import { Tv, MapPin, Activity } from 'lucide-react'
import dynamic from 'next/dynamic'

// Dynamically import react-simple-maps to avoid SSR issues
const ComposableMap = dynamic(
  () => import('react-simple-maps').then((m) => m.ComposableMap),
  { ssr: false }
)
const Geographies = dynamic(
  () => import('react-simple-maps').then((m) => m.Geographies),
  { ssr: false }
)
const Geography = dynamic(
  () => import('react-simple-maps').then((m) => m.Geography),
  { ssr: false }
)

const GEO_URL = 'https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json'

// State FIPS to abbreviation mapping
const FIPS_TO_STATE: Record<string, { abbr: string; name: string }> = {
  '01': { abbr: 'AL', name: 'Alabama' },
  '02': { abbr: 'AK', name: 'Alaska' },
  '04': { abbr: 'AZ', name: 'Arizona' },
  '05': { abbr: 'AR', name: 'Arkansas' },
  '06': { abbr: 'CA', name: 'California' },
  '08': { abbr: 'CO', name: 'Colorado' },
  '09': { abbr: 'CT', name: 'Connecticut' },
  '10': { abbr: 'DE', name: 'Delaware' },
  '11': { abbr: 'DC', name: 'District of Columbia' },
  '12': { abbr: 'FL', name: 'Florida' },
  '13': { abbr: 'GA', name: 'Georgia' },
  '15': { abbr: 'HI', name: 'Hawaii' },
  '16': { abbr: 'ID', name: 'Idaho' },
  '17': { abbr: 'IL', name: 'Illinois' },
  '18': { abbr: 'IN', name: 'Indiana' },
  '19': { abbr: 'IA', name: 'Iowa' },
  '20': { abbr: 'KS', name: 'Kansas' },
  '21': { abbr: 'KY', name: 'Kentucky' },
  '22': { abbr: 'LA', name: 'Louisiana' },
  '23': { abbr: 'ME', name: 'Maine' },
  '24': { abbr: 'MD', name: 'Maryland' },
  '25': { abbr: 'MA', name: 'Massachusetts' },
  '26': { abbr: 'MI', name: 'Michigan' },
  '27': { abbr: 'MN', name: 'Minnesota' },
  '28': { abbr: 'MS', name: 'Mississippi' },
  '29': { abbr: 'MO', name: 'Missouri' },
  '30': { abbr: 'MT', name: 'Montana' },
  '31': { abbr: 'NE', name: 'Nebraska' },
  '32': { abbr: 'NV', name: 'Nevada' },
  '33': { abbr: 'NH', name: 'New Hampshire' },
  '34': { abbr: 'NJ', name: 'New Jersey' },
  '35': { abbr: 'NM', name: 'New Mexico' },
  '36': { abbr: 'NY', name: 'New York' },
  '37': { abbr: 'NC', name: 'North Carolina' },
  '38': { abbr: 'ND', name: 'North Dakota' },
  '39': { abbr: 'OH', name: 'Ohio' },
  '40': { abbr: 'OK', name: 'Oklahoma' },
  '41': { abbr: 'OR', name: 'Oregon' },
  '42': { abbr: 'PA', name: 'Pennsylvania' },
  '44': { abbr: 'RI', name: 'Rhode Island' },
  '45': { abbr: 'SC', name: 'South Carolina' },
  '46': { abbr: 'SD', name: 'South Dakota' },
  '47': { abbr: 'TN', name: 'Tennessee' },
  '48': { abbr: 'TX', name: 'Texas' },
  '49': { abbr: 'UT', name: 'Utah' },
  '50': { abbr: 'VT', name: 'Vermont' },
  '51': { abbr: 'VA', name: 'Virginia' },
  '53': { abbr: 'WA', name: 'Washington' },
  '54': { abbr: 'WV', name: 'West Virginia' },
  '55': { abbr: 'WI', name: 'Wisconsin' },
  '56': { abbr: 'WY', name: 'Wyoming' },
  '72': { abbr: 'PR', name: 'Puerto Rico' },
}

// Realistic broadcast mention counts by state abbreviation
const STATE_MENTIONS: Record<string, number> = {
  AL: 89, AK: 12, AZ: 134, AR: 45, CA: 487, CO: 112, CT: 78, DE: 22,
  DC: 245, FL: 356, GA: 178, HI: 28, ID: 18, IL: 267, IN: 95, IA: 42,
  KS: 38, KY: 67, LA: 98, ME: 25, MD: 142, MA: 189, MI: 156, MN: 108,
  MS: 52, MO: 87, MT: 15, NE: 32, NV: 72, NH: 19, NJ: 165, NM: 34,
  NY: 423, NC: 168, ND: 11, OH: 195, OK: 56, OR: 82, PA: 212, RI: 24,
  SC: 76, SD: 14, TN: 124, TX: 398, UT: 48, VT: 9, VA: 158, WA: 145,
  WV: 28, WI: 92, WY: 8, PR: 35,
}

// CDC Blue color scale - 6 stops from lightest to darkest
const COLOR_SCALE = [
  '#E8F4FD', // very light
  '#B3D9F2', // light
  '#6BBBE0', // medium-light
  '#2E8BC0', // medium
  '#1A6FA0', // dark
  '#0B4F6C', // very dark
]

function getColorForMentions(count: number): string {
  const max = 487 // CA
  const ratio = Math.min(count / max, 1)
  const idx = Math.min(Math.floor(ratio * COLOR_SCALE.length), COLOR_SCALE.length - 1)
  return COLOR_SCALE[idx]
}

function getStateInfo(fips: string) {
  const padded = String(fips).padStart(2, '0')
  return FIPS_TO_STATE[padded]
}

export default function BroadcastPage() {
  const [selectedState, setSelectedState] = useState<string | null>(null)
  const [hoveredState, setHoveredState] = useState<string | null>(null)
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 })

  const selectedStateName = useMemo(() => {
    if (!selectedState) return null
    return Object.values(FIPS_TO_STATE).find(s => s.abbr === selectedState)?.name ?? null
  }, [selectedState])

  const totalMentions = useMemo(() => Object.values(STATE_MENTIONS).reduce((a, b) => a + b, 0), [])
  const statesWithData = Object.keys(STATE_MENTIONS).length
  const avgMentions = Math.round(totalMentions / statesWithData)

  const hoveredInfo = useMemo(() => {
    if (!hoveredState) return null
    const name = Object.values(FIPS_TO_STATE).find(s => s.abbr === hoveredState)?.name
    const count = STATE_MENTIONS[hoveredState] ?? 0
    return { name, count }
  }, [hoveredState])

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-cdc-text">Broadcast Monitoring</h1>
        <p className="text-sm text-cdc-muted mt-1">210 DMA regions across the United States</p>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl border border-cdc-border p-4">
          <p className="text-xs text-cdc-muted font-medium">Total Mentions</p>
          <p className="text-2xl font-bold text-cdc-text mt-1">{totalMentions.toLocaleString()}</p>
        </div>
        <div className="bg-white rounded-xl border border-cdc-border p-4">
          <p className="text-xs text-cdc-muted font-medium">States Covered</p>
          <p className="text-2xl font-bold text-cdc-text mt-1">{statesWithData}</p>
        </div>
        <div className="bg-white rounded-xl border border-cdc-border p-4">
          <p className="text-xs text-cdc-muted font-medium">Avg per State</p>
          <p className="text-2xl font-bold text-cdc-text mt-1">{avgMentions}</p>
        </div>
        <div className="bg-white rounded-xl border border-cdc-border p-4">
          <p className="text-xs text-cdc-muted font-medium">DMA Regions</p>
          <p className="text-2xl font-bold text-cdc-text mt-1">210</p>
        </div>
      </div>

      {/* Map + Details */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Map - takes 2/3 on large screens */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-cdc-border p-5 relative">
          <h3 className="text-sm font-semibold text-cdc-text mb-2 flex items-center gap-2">
            <MapPin className="w-4 h-4 text-cdc-blue" /> US Broadcast Coverage Intensity
          </h3>

          <div
            className="relative"
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect()
              setTooltipPos({ x: e.clientX - rect.left, y: e.clientY - rect.top })
            }}
          >
            <ComposableMap
              projection="geoAlbersUsa"
              projectionConfig={{ scale: 1000 }}
              width={800}
              height={500}
              style={{ width: '100%', height: 'auto' }}
            >
              <Geographies geography={GEO_URL}>
                {({ geographies }: { geographies: Array<{ rsmKey: string; id: string; properties: Record<string, string> }> }) =>
                  geographies.map((geo) => {
                    const stateInfo = getStateInfo(geo.id)
                    if (!stateInfo) return null
                    const abbr = stateInfo.abbr
                    const mentions = STATE_MENTIONS[abbr] ?? 0
                    const isSelected = selectedState === abbr
                    const isHovered = hoveredState === abbr

                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill={
                          isSelected
                            ? '#0A3D5C'
                            : isHovered
                            ? '#1B6B93'
                            : getColorForMentions(mentions)
                        }
                        stroke="#FFFFFF"
                        strokeWidth={isSelected ? 1.5 : 0.5}
                        style={{
                          default: { outline: 'none' },
                          hover: { outline: 'none', cursor: 'pointer' },
                          pressed: { outline: 'none' },
                        }}
                        onMouseEnter={() => setHoveredState(abbr)}
                        onMouseLeave={() => setHoveredState(null)}
                        onClick={() => setSelectedState(abbr === selectedState ? null : abbr)}
                      />
                    )
                  })
                }
              </Geographies>
            </ComposableMap>

            {/* Tooltip */}
            {hoveredInfo && (
              <div
                className="absolute pointer-events-none z-20 bg-gray-900 text-white text-xs rounded-lg px-3 py-2 shadow-lg"
                style={{
                  left: tooltipPos.x + 12,
                  top: tooltipPos.y - 40,
                  transform: tooltipPos.x > 500 ? 'translateX(-110%)' : undefined,
                }}
              >
                <p className="font-semibold">{hoveredInfo.name}</p>
                <p className="text-gray-300">{hoveredInfo.count.toLocaleString()} mentions</p>
              </div>
            )}
          </div>

          {/* Legend */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 mt-3">
            <span className="text-[10px] text-cdc-muted font-medium">Coverage Intensity:</span>
            <div className="flex items-center gap-0">
              <span className="text-[10px] text-cdc-muted mr-1">Low</span>
              {COLOR_SCALE.map((color, i) => (
                <div
                  key={i}
                  className="w-8 h-3 first:rounded-l last:rounded-r"
                  style={{ backgroundColor: color }}
                />
              ))}
              <span className="text-[10px] text-cdc-muted ml-1">High</span>
            </div>
          </div>

          <p className="text-[10px] text-cdc-muted mt-2 text-center">
            Click a state to view DMA broadcast data • Hover for details
          </p>
        </div>

        {/* Details panel */}
        <div className="bg-white rounded-xl border border-cdc-border p-5">
          <h3 className="text-sm font-semibold text-cdc-text mb-4 flex items-center gap-2">
            <Tv className="w-4 h-4 text-cdc-blue" /> Broadcast Coverage Details
          </h3>
          {selectedState ? (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <p className="text-sm text-cdc-blue font-semibold">{selectedStateName}</p>
                <div className="flex items-center gap-1 bg-blue-50 text-cdc-blue px-2 py-0.5 rounded text-xs font-medium">
                  <Activity className="w-3 h-3" />
                  {(STATE_MENTIONS[selectedState] ?? 0).toLocaleString()} mentions
                </div>
              </div>
              <p className="text-xs text-cdc-muted">Top stations in this market:</p>
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
            <div className="flex flex-col items-center justify-center h-64 text-cdc-muted text-sm gap-2">
              <MapPin className="w-8 h-8 text-gray-300" />
              <p>Select a state on the map</p>
              <p className="text-xs">to view broadcast data</p>
            </div>
          )}
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-cdc-border overflow-hidden">
        <div className="px-5 py-3 border-b border-cdc-border">
          <h3 className="text-sm font-semibold text-cdc-text">Recent Broadcast Mentions</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px]">
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
    </div>
  )
}
