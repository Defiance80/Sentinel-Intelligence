'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAppStore } from '@/lib/store'
import { Shield, Eye, EyeOff } from 'lucide-react'

export default function LoginPage() {
  const [email, setEmail] = useState('demo@cdc.gov')
  const [password, setPassword] = useState('sentinel-demo')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const login = useAppStore((s) => s.login)
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (login(email, password)) {
      router.push('/dashboard')
    } else {
      setError('Invalid credentials')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-cdc-gray to-white flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-cdc-blue rounded-full mb-4">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-cdc-blue mb-1">CDC Sentinel</h1>
          <p className="text-lg text-cdc-text font-medium">Media Intelligence Platform</p>
          <div className="mt-3 inline-block bg-amber-50 border border-amber-200 text-amber-800 text-xs px-3 py-1 rounded-full font-medium">
            Prototype Demonstration
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg border border-cdc-border p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-cdc-text mb-1.5">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2.5 border border-cdc-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-cdc-blue focus:border-transparent"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-cdc-text mb-1.5">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2.5 border border-cdc-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-cdc-blue focus:border-transparent pr-10"
                  placeholder="Enter your password"
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-cdc-muted hover:text-cdc-text">
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>
            {error && <p className="text-sm text-cdc-red">{error}</p>}
            <button type="submit" className="w-full bg-cdc-blue text-white py-2.5 rounded-lg font-medium text-sm hover:bg-cdc-dark transition-colors">
              Sign In
            </button>
          </form>

          <div className="mt-6 p-4 bg-cdc-gray rounded-lg">
            <p className="text-xs text-cdc-muted mb-2 font-medium">Demo Credentials</p>
            <p className="text-xs text-cdc-text font-mono">demo@cdc.gov / sentinel-demo</p>
          </div>
        </div>

        <p className="text-center text-xs text-cdc-muted mt-6">
          Conceptual prototype illustrating system capabilities and interface design.
        </p>
        <p className="text-center text-xs mt-2">
          <span className="text-cdc-muted">Developed by </span>
          <a href="https://gokoncentrate.com" target="_blank" rel="noopener noreferrer" className="font-semibold text-cdc-blue hover:underline">
            GoKoncentrate
          </a>
        </p>
      </div>
    </div>
  )
}
