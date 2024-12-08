import { projects } from '../data/projects'

const statusColors = {
  'completed': 'bg-green-100 text-green-800',
  'in-progress': 'bg-blue-100 text-blue-800',
  'planned': 'bg-gray-100 text-gray-800'
}

export function ProjectList() {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="px-6 py-4 border-b">
        <h2 className="text-xl font-semibold">Projects</h2>
      </div>
      <div className="divide-y">
        {projects.map((project) => (
          <div key={project.id} className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-medium">{project.name}</h3>
                <p className="mt-1 text-gray-600">{project.description}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusColors[project.status]}`}>
                {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
              </span>
            </div>
            <div className="mt-4">
              <h4 className="text-sm font-medium text-gray-500 mb-2">Features</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                {project.features.map((feature, index) => (
                  <li key={index} className="text-sm">{feature}</li>
                ))}
              </ul>
            </div>
            {project.repo && (
              <div className="mt-4 flex space-x-4">
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-500 hover:text-blue-600"
                >
                  View Repository →
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-500 hover:text-blue-600"
                  >
                    View Demo →
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}