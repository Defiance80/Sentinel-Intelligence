'use client'
import { useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useAppStore } from '@/lib/store'
import {
  LayoutDashboard, Radio, Tv, Users, List, Send, FileText, BarChart3,
  ClipboardList, Settings, Search, Bell, AlertTriangle, Menu, LogOut, Shield, X
} from 'lucide-react'

const navItems = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/dashboard/media-monitoring', label: 'Media Monitoring', icon: Radio },
  { href: '/dashboard/broadcast', label: 'Broadcast Monitoring', icon: Tv },
  { href: '/dashboard/historical', label: 'Historical Search', icon: Search },
  { href: '/dashboard/journalists', label: 'Journalists', icon: Users },
  { href: '/dashboard/media-lists', label: 'Media Lists', icon: List },
  { href: '/dashboard/distribution', label: 'Press Distribution', icon: Send },
  { href: '/dashboard/briefings', label: 'Daily Briefings', icon: FileText },
  { href: '/dashboard/analytics', label: 'Analytics', icon: BarChart3 },
  { href: '/dashboard/reports', label: 'Reports', icon: ClipboardList },
  { href: '/dashboard/emergency', label: 'Emergency Ops', icon: AlertTriangle },
  { href: '/dashboard/settings', label: 'Settings', icon: Settings },
]

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const { user, sidebarOpen, toggleSidebar, emergencyMode } = useAppStore()

  // Close sidebar on route change (mobile)
  useEffect(() => {
    if (window.innerWidth < 1024) {
      useAppStore.setState({ sidebarOpen: false })
    }
  }, [pathname])

  // Close sidebar on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) {
        useAppStore.setState({ sidebarOpen: true })
      }
    }
    onResize()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <div className="min-h-screen bg-cdc-gray flex overflow-x-hidden">
      {/* Mobile backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => useAppStore.setState({ sidebarOpen: false })}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 bg-white border-r border-cdc-border flex flex-col transition-all duration-200
        lg:static lg:translate-x-0 lg:shrink-0
        ${sidebarOpen ? 'translate-x-0 w-64' : '-translate-x-full w-64 lg:w-[68px] lg:translate-x-0'}
      `}>
        <div className={`p-4 border-b border-cdc-border flex items-center gap-3 ${!sidebarOpen ? 'lg:justify-center lg:px-2' : 'justify-between'}`}>
          <div className={`flex items-center gap-3 ${!sidebarOpen ? 'lg:justify-center' : ''}`}>
            <div className="w-8 h-8 bg-cdc-blue rounded-lg flex items-center justify-center shrink-0">
              <Shield className="w-4 h-4 text-white" />
            </div>
            <div className={`${!sidebarOpen ? 'lg:hidden' : ''}`}>
              <p className="text-sm font-bold text-cdc-blue leading-tight">CDC Sentinel</p>
              <p className="text-[10px] text-cdc-muted">Media Intelligence</p>
            </div>
          </div>
          <button
            onClick={() => useAppStore.setState({ sidebarOpen: false })}
            className="lg:hidden text-cdc-muted hover:text-cdc-text p-1 min-h-[44px] min-w-[44px] flex items-center justify-center"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <nav className={`flex-1 p-2 space-y-0.5 overflow-y-auto ${!sidebarOpen ? 'lg:px-1.5' : ''}`}>
          {navItems.map((item) => {
            const isActive = pathname === item.href
            const Icon = item.icon
            const isEmergency = item.href === '/dashboard/emergency'
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => {
                  if (window.innerWidth < 1024) useAppStore.setState({ sidebarOpen: false })
                }}
                title={!sidebarOpen ? item.label : undefined}
                className={`flex items-center gap-3 rounded-lg text-sm transition-colors min-h-[44px] ${
                  !sidebarOpen ? 'lg:justify-center lg:px-0 lg:gap-0 px-3 py-2.5' : 'px-3 py-2.5'
                } ${
                  isActive ? 'bg-cdc-blue text-white' : isEmergency && emergencyMode ? 'bg-red-50 text-cdc-red hover:bg-red-100' : 'text-cdc-muted hover:bg-cdc-gray hover:text-cdc-text'
                }`}
              >
                <Icon className="w-4 h-4 shrink-0" />
                <span className={`${!sidebarOpen ? 'lg:hidden' : ''}`}>{item.label}</span>
              </Link>
            )
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Nav */}
        <header className="h-14 bg-white border-b border-cdc-border flex items-center px-3 sm:px-4 gap-2 sm:gap-4 shrink-0">
          <button onClick={toggleSidebar} className="text-cdc-muted hover:text-cdc-text min-h-[44px] min-w-[44px] flex items-center justify-center">
            <Menu className="w-5 h-5" />
          </button>
          <div className="flex-1 max-w-md hidden sm:block">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-cdc-muted" />
              <input type="text" placeholder="Global search..." className="w-full pl-10 pr-4 py-1.5 bg-cdc-gray border border-cdc-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-cdc-blue" />
            </div>
          </div>
          {emergencyMode && (
            <div className="hidden sm:flex items-center gap-2 bg-red-50 border border-red-200 text-cdc-red px-3 py-1 rounded-full text-xs font-medium">
              <AlertTriangle className="w-3 h-3" />
              <span className="hidden md:inline">Emergency Mode Active</span>
              <span className="md:hidden">Emergency</span>
            </div>
          )}
          <div className="flex items-center gap-2 sm:gap-3 ml-auto">
            <button className="relative text-cdc-muted hover:text-cdc-text min-h-[44px] min-w-[44px] flex items-center justify-center">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-4 h-4 bg-cdc-red text-white text-[10px] rounded-full flex items-center justify-center">3</span>
            </button>
            <div className="flex items-center gap-2 pl-2 sm:pl-3 border-l border-cdc-border">
              <div className="w-8 h-8 bg-cdc-blue rounded-full flex items-center justify-center text-white text-xs font-medium">SC</div>
              <span className="text-sm text-cdc-text hidden md:inline">{user?.name || 'User'}</span>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-3 sm:p-4 lg:p-6 overflow-y-auto">
          {children}
          <footer className="mt-8 pt-4 border-t border-cdc-border">
            <p className="text-xs text-cdc-muted text-center">
              Conceptual prototype illustrating system capabilities and interface design.
            </p>
            <p className="text-xs text-center mt-2">
              <span className="text-cdc-muted">Developed by </span>
              <a href="https://gokoncentrate.com" target="_blank" rel="noopener noreferrer" className="font-semibold text-cdc-blue hover:underline">
                GoKoncentrate
              </a>
            </p>
          </footer>
        </main>
      </div>
    </div>
  )
}
