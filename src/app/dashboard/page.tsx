'use client'
import { breakingNews, topicTrends, topOutlets, emergingNarratives, regionCoverage, journalistActivity, globalCoverage } from '@/lib/mock-data'
import { TrendingUp, TrendingDown, Minus, Newspaper, Globe, Users, BarChart3, AlertTriangle, ArrowUpRight } from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts'

function Card({ title, icon: Icon, children, className = '' }: { title: string; icon?: any; children: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-white rounded-xl border border-cdc-border p-4 sm:p-5 ${className}`}>
      <div className="flex items-center gap-2 mb-4">
        {Icon && <Icon className="w-4 h-4 text-cdc-blue" />}
        <h3 className="text-sm font-semibold text-cdc-text">{title}</h3>
      </div>
      {children}
    </div>
  )
}

function SentimentBadge({ sentiment }: { sentiment: string }) {
  const colors: Record<string, string> = { positive: 'bg-green-50 text-green-700', negative: 'bg-red-50 text-red-700', neutral: 'bg-gray-50 text-gray-600' }
  return <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${colors[sentiment] || colors.neutral}`}>{sentiment}</span>
}

export default function DashboardPage() {
  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-cdc-text">Media Intelligence Dashboard</h1>
          <p className="text-sm text-cdc-muted mt-1">Real-time overview of media landscape • March 16, 2025</p>
        </div>
        <div className="grid grid-cols-3 gap-2 sm:flex sm:gap-3">
          <div className="bg-white border border-cdc-border rounded-lg px-3 sm:px-4 py-2 text-center">
            <p className="text-lg sm:text-2xl font-bold text-cdc-blue">1,247</p>
            <p className="text-[10px] text-cdc-muted">Articles Today</p>
          </div>
          <div className="bg-white border border-cdc-border rounded-lg px-3 sm:px-4 py-2 text-center">
            <p className="text-lg sm:text-2xl font-bold text-cdc-blue">45.2M</p>
            <p className="text-[10px] text-cdc-muted">Est. Reach</p>
          </div>
          <div className="bg-white border border-cdc-border rounded-lg px-3 sm:px-4 py-2 text-center">
            <p className="text-lg sm:text-2xl font-bold text-cdc-blue">892</p>
            <p className="text-[10px] text-cdc-muted">Active Journalists</p>
          </div>
        </div>
      </div>

      {/* Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        <Card title="Breaking Media Coverage" icon={Newspaper} className="lg:col-span-2">
          <div className="space-y-3">
            {breakingNews.map((item) => (
              <div key={item.id} className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 pb-3 border-b border-cdc-border last:border-0 last:pb-0">
                <div className="min-w-0">
                  <p className="text-sm font-medium text-cdc-text leading-snug">{item.headline}</p>
                  <p className="text-xs text-cdc-muted mt-1">{item.source} • {item.time}</p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <SentimentBadge sentiment={item.sentiment} />
                  <span className="text-xs text-cdc-muted">{item.reach}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card title="Emerging Narratives" icon={AlertTriangle}>
          <div className="space-y-3">
            {emergingNarratives.map((item, i) => (
              <div key={i} className="p-3 bg-cdc-gray rounded-lg">
                <p className="text-sm font-medium text-cdc-text">{item.topic}</p>
                <div className="flex items-center gap-3 mt-2 flex-wrap">
                  <span className={`text-xs font-bold ${item.risk === 'high' ? 'text-cdc-red' : item.risk === 'medium' ? 'text-cdc-orange' : 'text-cdc-green'}`}>
                    {item.velocity}
                  </span>
                  <span className="text-xs text-cdc-muted">{item.articles} articles</span>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                    item.risk === 'high' ? 'bg-red-50 text-red-700' : item.risk === 'medium' ? 'bg-amber-50 text-amber-700' : 'bg-green-50 text-green-700'
                  }`}>{item.risk}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        <Card title="Topic Trend Velocity" icon={TrendingUp}>
          <ResponsiveContainer width="100%" height={240}>
            <LineChart data={topicTrends}>
              <XAxis dataKey="name" tick={{ fontSize: 11 }} />
              <YAxis tick={{ fontSize: 11 }} />
              <Tooltip />
              <Line type="monotone" dataKey="avianFlu" stroke="#1a5276" name="Avian Flu" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="mpox" stroke="#2980b9" name="Mpox" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="opioid" stroke="#1abc9c" name="Opioid" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="vaccine" stroke="#f39c12" name="Vaccines" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="maternal" stroke="#8e44ad" name="Maternal" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        <Card title="Coverage Volume by Region" icon={Globe}>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <ResponsiveContainer width="100%" height={200} className="sm:!w-1/2">
              <PieChart>
                <Pie data={regionCoverage} dataKey="coverage" nameKey="region" cx="50%" cy="50%" outerRadius={80} label={false}>
                  {regionCoverage.map((_, i) => <Cell key={i} fill={['#1a5276','#2980b9','#1abc9c','#f39c12','#27ae60'][i]} />)}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex-1 flex flex-col justify-center space-y-2">
              {regionCoverage.map((r, i) => (
                <div key={i} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: ['#1a5276','#2980b9','#1abc9c','#f39c12','#27ae60'][i] }} />
                    <span className="text-cdc-text">{r.region}</span>
                  </div>
                  <span className="text-cdc-muted">{r.percentage}%</span>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>

      {/* Row 3 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        <Card title="Top Media Outlets Today" icon={BarChart3}>
          <div className="space-y-2.5">
            {topOutlets.slice(0, 6).map((outlet, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-3 min-w-0">
                  <span className="text-xs text-cdc-muted w-4 shrink-0">{i + 1}</span>
                  <span className="text-sm text-cdc-text font-medium truncate">{outlet.name}</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-4 shrink-0">
                  <span className="text-xs text-cdc-muted">{outlet.articles} <span className="hidden sm:inline">articles</span></span>
                  <span className="text-xs text-cdc-muted hidden sm:inline">{outlet.reach}</span>
                  {outlet.trend === 'up' ? <TrendingUp className="w-3 h-3 text-cdc-green" /> : outlet.trend === 'down' ? <TrendingDown className="w-3 h-3 text-cdc-red" /> : <Minus className="w-3 h-3 text-cdc-muted" />}
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card title="Journalist Activity Tracker" icon={Users}>
          <div className="space-y-2.5">
            {journalistActivity.map((j, i) => (
              <div key={i} className="flex items-center justify-between pb-2.5 border-b border-cdc-border last:border-0 last:pb-0">
                <div className="min-w-0">
                  <p className="text-sm font-medium text-cdc-text truncate">{j.name}</p>
                  <p className="text-xs text-cdc-muted truncate">{j.outlet} • {j.beat}</p>
                </div>
                <div className="text-right shrink-0 ml-2">
                  <p className="text-sm font-medium text-cdc-blue">{j.articles} articles</p>
                  <p className="text-[10px] text-cdc-muted">{j.lastActive}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Global Coverage */}
      <Card title="Global Media Coverage" icon={Globe}>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4">
          {globalCoverage.map((r, i) => (
            <div key={i} className="text-center p-2 sm:p-3 bg-cdc-gray rounded-lg">
              <div className="w-10 h-10 rounded-full mx-auto mb-2 flex items-center justify-center text-white text-xs font-bold" style={{ backgroundColor: r.color }}>
                {r.percentage}%
              </div>
              <p className="text-xs font-medium text-cdc-text">{r.region}</p>
              <p className="text-[10px] text-cdc-muted">{r.articles.toLocaleString()}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
