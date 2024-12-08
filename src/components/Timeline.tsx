import { projects } from '../data/projects'

export function Timeline() {
  const timelineProjects = projects.filter(p => p.status !== 'planned')

  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Project Timeline</h2>
      <div className="space-y-4">
        {timelineProjects.map((project) => (
          <div key={project.id} className="flex items-start space-x-4">
            <div className="min-w-[120px] text-sm text-gray-500">
              {new Date(project.startDate).toLocaleDateString('en-US', { 
                month: 'short',
                day: 'numeric'
              })}
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2">
                <span className={`w-2 h-2 rounded-full ${
                  project.status === 'completed' ? 'bg-green-500' : 'bg-blue-500'
                }`} />
                <h3 className="font-medium">{project.name}</h3>
              </div>
              <p className="mt-1 text-sm text-gray-600">{project.description}</p>
              {project.status === 'completed' && (
                <div className="mt-2">
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-blue-500 hover:text-blue-600"
                  >
                    View Demo →
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}