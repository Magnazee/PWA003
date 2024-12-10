interface Project {
  id: string
  name: string
  status: string
  date: string
}

interface TimelineProps {
  projects: Project[]
}

export function Timeline({ projects }: TimelineProps) {
  return (
    <div className="rounded-lg border bg-white text-gray-900 shadow-sm">
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Timeline</h2>
        <div className="space-y-4">
          {projects.map((project) => (
            <div key={project.id} className="flex items-start">
              <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-blue-500" />
              <div className="ml-4">
                <p className="font-medium">{project.id}: {project.name}</p>
                <p className="text-sm text-gray-500">{project.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}