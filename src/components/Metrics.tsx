export function Metrics() {
  const metrics = {
    total: 6,
    completed: 5,
    inProgress: 1
  }

  return (
    <div className="rounded-lg border bg-white text-gray-900 shadow-sm">
      <div className="p-6 flex flex-col space-y-2">
        <h2 className="text-2xl font-semibold">Project Metrics</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="p-4 bg-green-50 rounded-lg">
            <h3 className="font-semibold text-green-600">Total Projects</h3>
            <p className="text-2xl">{metrics.total}</p>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-blue-600">Completed</h3>
            <p className="text-2xl">{metrics.completed}</p>
          </div>
          <div className="p-4 bg-yellow-50 rounded-lg">
            <h3 className="font-semibold text-yellow-600">In Progress</h3>
            <p className="text-2xl">{metrics.inProgress}</p>
          </div>
        </div>
      </div>
    </div>
  )
}