import { CheckCircle2, Clock } from 'lucide-react'

export function Timeline() {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Timeline</h2>
      <div className="flow-root">
        <ul role="list" className="-mb-8">
          <li>
            <div className="relative pb-8">
              <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
              <div className="relative flex space-x-3">
                <div>
                  <span className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center ring-8 ring-white">
                    <Clock className="h-5 w-5 text-blue-500" aria-hidden="true" />
                  </span>
                </div>
                <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                  <div>
                    <p className="text-sm text-gray-500">Started <span className="font-medium text-gray-900">PWA003: Project Dashboard</span></p>
                  </div>
                  <div className="whitespace-nowrap text-right text-sm text-gray-500">
                    <time dateTime="2024-12-05">Dec 5</time>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="relative pb-8">
              <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
              <div className="relative flex space-x-3">
                <div>
                  <span className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center ring-8 ring-white">
                    <CheckCircle2 className="h-5 w-5 text-green-500" aria-hidden="true" />
                  </span>
                </div>
                <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                  <div>
                    <p className="text-sm text-gray-500">Completed <span className="font-medium text-gray-900">PWA002: Voice Rainbow</span></p>
                  </div>
                  <div className="whitespace-nowrap text-right text-sm text-gray-500">
                    <time dateTime="2024-12-05">Dec 5</time>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="relative">
              <div className="relative flex space-x-3">
                <div>
                  <span className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center ring-8 ring-white">
                    <CheckCircle2 className="h-5 w-5 text-green-500" aria-hidden="true" />
                  </span>
                </div>
                <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                  <div>
                    <p className="text-sm text-gray-500">Completed <span className="font-medium text-gray-900">PWA001: Rainbow Hello World</span></p>
                  </div>
                  <div className="whitespace-nowrap text-right text-sm text-gray-500">
                    <time dateTime="2024-12-03">Dec 3</time>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}