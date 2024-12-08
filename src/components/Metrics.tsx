import { CheckCircle2, Circle, CircleDot } from 'lucide-react'

const metrics = {
  completed: 3,
  inProgress: 0,
  planned: 3,
  total: 6
}

export function Metrics() {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Progress Overview</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 border rounded-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <CheckCircle2 className="text-green-500 mr-2" />
              <span className="text-sm font-medium">Completed</span>
            </div>
            <span className="text-2xl font-semibold">{metrics.completed}</span>
          </div>
        </div>
        <div className="p-4 border rounded-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <CircleDot className="text-blue-500 mr-2" />
              <span className="text-sm font-medium">In Progress</span>
            </div>
            <span className="text-2xl font-semibold">{metrics.inProgress}</span>
          </div>
        </div>
        <div className="p-4 border rounded-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Circle className="text-gray-500 mr-2" />
              <span className="text-sm font-medium">Planned</span>
            </div>
            <span className="text-2xl font-semibold">{metrics.planned}</span>
          </div>
        </div>
        <div className="p-4 border rounded-lg bg-gray-50">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Total Projects</span>
            <span className="text-2xl font-semibold">{metrics.total}</span>
          </div>
        </div>
      </div>
    </div>
  )
}