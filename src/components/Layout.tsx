import { ReactNode } from 'react'
import { RotateCw } from 'lucide-react'

export function Layout({ children }: { children: ReactNode }) {
  const handleRefresh = async () => {
    try {
      // Clear all caches
      const cacheKeys = await caches.keys()
      await Promise.all(cacheKeys.map(key => caches.delete(key)))
      
      // Unregister service workers
      if ('serviceWorker' in navigator) {
        const registrations = await navigator.serviceWorker.getRegistrations()
        await Promise.all(registrations.map(registration => registration.unregister()))
      }
      
      // Force reload the page
      window.location.reload()
    } catch (error) {
      console.error('Error during refresh:', error)
      // Fallback to simple reload if cache clearing fails
      window.location.reload()
    }
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between items-center">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold">Project in a Day Dashboard</h1>
            </div>
            <button
              onClick={handleRefresh}
              className="inline-flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 border border-gray-200"
              title="Force refresh (clears cache)"
            >
              <RotateCw className="h-4 w-4" />
              Refresh
            </button>
          </div>
        </div>
      </nav>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>
    </div>
  )
}