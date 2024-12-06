import { Check, AlertCircle, Clock, ExternalLink } from 'lucide-react'

const projects = [
  { 
    id: 'PWA001', 
    name: 'Rainbow Hello World', 
    status: 'completed', 
    date: 'December 3, 2024',
    url: 'https://magnazee.github.io/PWA001/'
  },
  { 
    id: 'PWA002', 
    name: 'Voice Rainbow', 
    status: 'completed', 
    date: 'December 4-5, 2024',
    url: 'https://magnazee.github.io/PWA002/'
  },
  { 
    id: 'PWA003', 
    name: 'Project Dashboard', 
    status: 'in-progress', 
    date: 'December 5, 2024',
    url: 'https://magnazee.github.io/PWA003/'
  },
]

export function ProjectList() {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Projects</h2>
      <div className="space-y-4">
        {projects.map((project) => (
          <div key={project.id} className="flex items-center justify-between p-4 border rounded-lg">
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h3 className="font-medium">{project.id}: {project.name}</h3>
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-600 hover:text-blue-800 inline-flex items-center"
                >
                  <ExternalLink size={14} />
                </a>
              </div>
              <p className="text-sm text-gray-500">{project.date}</p>
            </div>
            <div className="flex items-center gap-2">
              {project.status === 'completed' && (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  <Check size={12} className="mr-1" /> Completed
                </span>
              )}
              {project.status === 'in-progress' && (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  <Clock size={12} className="mr-1" /> In Progress
                </span>
              )}
              {project.status === 'blocked' && (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                  <AlertCircle size={12} className="mr-1" /> Blocked
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}