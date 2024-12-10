import { Copy, Link, Check } from 'lucide-react'
import { type Project } from './Dashboard'
import { useState } from 'react'

interface ProjectListProps {
  projects: Project[]
}

export function ProjectList({ projects }: ProjectListProps) {
  const [copiedStates, setCopiedStates] = useState<{ [key: string]: boolean }>({})

  const copyToClipboard = async (url: string, projectId: string) => {
    try {
      await navigator.clipboard.writeText(url)
      setCopiedStates({ ...copiedStates, [projectId]: true })
      setTimeout(() => {
        setCopiedStates(prev => ({ ...prev, [projectId]: false }))
      }, 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <div className="rounded-lg border bg-white text-gray-900 shadow-sm" id="project-list">
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Project Status</h2>
        <div className="overflow-x-auto">
          {/* Desktop View */}
          <table className="min-w-full divide-y divide-gray-200 hidden md:table">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Links</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {projects.map((project) => (
                <tr key={project.id} id={`project-${project.id}`} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {project.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 hover:text-blue-800 flex items-center gap-2">
                    <a 
                      href={project.deploymentUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      {project.name}
                    </a>
                    <button
                      onClick={() => copyToClipboard(project.deploymentUrl, project.id)}
                      className="text-gray-500 hover:text-gray-700"
                      title="Copy deployment URL"
                    >
                      {copiedStates[project.id] ? (
                        <Check className="w-4 h-4 text-green-500" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex space-x-4">
                      <a 
                        href={project.repoUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
                        title="View Repository"
                      >
                        <Link className="w-4 h-4" />
                        <span>Repo</span>
                      </a>
                      <a 
                        href={project.readmeUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800"
                        title="View README"
                      >
                        README
                      </a>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${project.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                      {project.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {project.date}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Mobile View */}
          <div className="md:hidden space-y-6">
            {projects.map((project) => (
              <div
                key={project.id}
                id={`project-${project.id}-mobile`}
                className="bg-white rounded-lg border border-gray-200 p-4 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-900">{project.id}</span>
                  <span className={`px-2 text-xs leading-5 font-semibold rounded-full 
                    ${project.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                    {project.status}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <a 
                    href={project.deploymentUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    {project.name}
                  </a>
                  <button
                    onClick={() => copyToClipboard(project.deploymentUrl, `${project.id}-mobile`)}
                    className="text-gray-500 hover:text-gray-700"
                    title="Copy deployment URL"
                  >
                    {copiedStates[`${project.id}-mobile`] ? (
                      <Check className="w-4 h-4 text-green-500" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                <div className="flex flex-wrap gap-4 text-sm">
                  <a 
                    href={project.repoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
                    title="View Repository"
                  >
                    <Link className="w-4 h-4" />
                    <span>Repository</span>
                  </a>
                  <a 
                    href={project.readmeUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                    title="View README"
                  >
                    README
                  </a>
                </div>

                <div className="text-sm text-gray-500">
                  {project.date}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}