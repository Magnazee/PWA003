import { projects } from '../data/projects'

export function Metrics() {
  const completedProjects = projects.filter(p => p.status === 'completed').length
  const inProgressProjects = projects.filter(p => p.status === 'in-progress').length
  const plannedProjects = projects.filter(p => p.status === 'planned').length

  // Calculate days active
  const firstProject = projects.reduce((earliest, project) => {
    return project.startDate < earliest.startDate ? project : earliest
  })
  const daysActive = Math.floor((new Date().getTime() - new Date(firstProject.startDate).getTime()) / (1000 * 60 * 60 * 24)) + 1

  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Project Metrics</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-gray-50 rounded">
          <div className="text-2xl font-bold text-blue-600">{completedProjects}</div>
          <div className="text-sm text-gray-600">Completed</div>
        </div>
        <div className="p-4 bg-gray-50 rounded">
          <div className="text-2xl font-bold text-green-600">{inProgressProjects}</div>
          <div className="text-sm text-gray-600">In Progress</div>
        </div>
        <div className="p-4 bg-gray-50 rounded">
          <div className="text-2xl font-bold text-purple-600">{plannedProjects}</div>
          <div className="text-sm text-gray-600">Planned</div>
        </div>
        <div className="p-4 bg-gray-50 rounded">
          <div className="text-2xl font-bold text-orange-600">{daysActive}</div>
          <div className="text-sm text-gray-600">Days Active</div>
        </div>
      </div>
    </div>
  )
}