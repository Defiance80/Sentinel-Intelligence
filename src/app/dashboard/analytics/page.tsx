'use client'
import { analyticsData, journalistActivity } from '@/lib/mock-data'
import { BarChart3, TrendingUp, Users, Globe } from 'lucide-react'
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts'

function Card({ title, icon: Icon, children }: { title: string; icon: any; children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-xl border border-cdc-border p-5">
      <h3 className="text-sm font-semibold text-cdc-text mb-4 flex items-center gap-2"><Icon className="w-4 h-4 text-cdc-blue" />{title}</h3>
      {children}
    </div>
  )
}

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-cdc-text">Analytics</h1>
        <p className="text-sm text-cdc-muted mt-1">In-depth media coverage analytics and trends</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Coverage Trends (6 Months)" icon={BarChart3}>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={analyticsData.coverageTrends}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="month" tick={{ fontSize: 11 }} />
              <YAxis tick={{ fontSize: 11 }} />
              <Tooltip />
              <Bar dataKey="articles" fill="#1a5276" name="Articles" radius={[4,4,0,0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        <Card title="Media Reach Over Time (Millions)" icon={TrendingUp}>
          <ResponsiveContainer width="100%" height={260}>
            <LineChart data={analyticsData.reachOverTime}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="week" tick={{ fontSize: 11 }} />
              <YAxis tick={{ fontSize: 11 }} />
              <Tooltip />
              <Line type="monotone" dataKey="reach" stroke="#2980b9" strokeWidth={2} dot={{ fill: '#2980b9', r: 3 }} name="Reach (M)" />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        <Card title="Topic Growth Rate" icon={Globe}>
          <div className="space-y-3">
            {analyticsData.topicGrowth.map((t, i) => (
              <div key={i}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-cdc-text">{t.topic}</span>
                  <span className="text-xs font-bold text-cdc-blue">+{t.growth}%</span>
                </div>
                <div className="h-2 bg-cdc-gray rounded-full overflow-hidden">
                  <div className="h-full bg-cdc-blue rounded-full transition-all" style={{ width: `${Math.min(t.growth / 3.4, 100)}%` }} />
                </div>
                <p className="text-[10px] text-cdc-muted mt-0.5">{t.articles} articles</p>
              </div>
            ))}
          </div>
        </Card>

        <Card title="Journalist Activity" icon={Users}>
          <div className="space-y-3">
            {journalistActivity.map((j, i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-cdc-gray rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-cdc-blue rounded-full flex items-center justify-center text-white text-xs font-medium">
                    {j.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-cdc-text">{j.name}</p>
                    <p className="text-xs text-cdc-muted">{j.outlet}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-cdc-blue">{j.articles}</p>
                  <p className="text-[10px] text-cdc-muted">articles this week</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}
