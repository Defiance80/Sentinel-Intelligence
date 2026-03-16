import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CDC Sentinel - Media Intelligence Platform',
  description: 'Unified media intelligence command dashboard for CDC Division of Media Relations',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white">{children}</body>
    </html>
  )
}
