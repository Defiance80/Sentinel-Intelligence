import { create } from 'zustand'

interface AppState {
  isAuthenticated: boolean
  user: { name: string; email: string; role: string } | null
  emergencyMode: boolean
  highContrast: boolean
  sidebarOpen: boolean
  login: (email: string, password: string) => boolean
  logout: () => void
  toggleEmergency: () => void
  toggleHighContrast: () => void
  toggleSidebar: () => void
}

export const useAppStore = create<AppState>((set) => ({
  isAuthenticated: false,
  user: null,
  emergencyMode: false,
  highContrast: false,
  sidebarOpen: true,
  login: (email: string, password: string) => {
    if (email === 'demo@cdc.gov' && password === 'sentinel-demo') {
      set({ isAuthenticated: true, user: { name: 'Dr. Sarah Chen', email: 'demo@cdc.gov', role: 'Administrator' } })
      return true
    }
    return false
  },
  logout: () => set({ isAuthenticated: false, user: null }),
  toggleEmergency: () => set((s) => ({ emergencyMode: !s.emergencyMode })),
  toggleHighContrast: () => set((s) => ({ highContrast: !s.highContrast })),
  toggleSidebar: () => set((s) => ({ sidebarOpen: !s.sidebarOpen })),
}))
