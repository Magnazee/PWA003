import { ProjectList } from './ProjectList'
import { Timeline } from './Timeline'
import { Metrics } from './Metrics'

export interface Project {
  id: string
  name: string
  status: string
  date: string
  deploymentUrl: string
  repoUrl: string
  readmeUrl: string
}

const projects: Project[] = [
  {
    id: 'PWA001',
    name: 'Hello World PWA',
    status: 'Completed',
    date: 'Dec 3, 2024',
    deploymentUrl: 'https://magnazee.github.io/PWA001/',
    repoUrl: 'https://github.com/Magnazee/PWA001',
    readmeUrl: 'https://github.com/Magnazee/PWA001#readme'
  },
  {
    id: 'PWA002',
    name: 'Voice Synthesis',
    status: 'Completed',
    date: 'Dec 4-5, 2024',
    deploymentUrl: 'https://magnazee.github.io/PWA002/',
    repoUrl: 'https://github.com/Magnazee/PWA002',
    readmeUrl: 'https://github.com/Magnazee/PWA002#readme'
  },
  {
    id: 'PWA003',
    name: 'Project Dashboard',
    status: 'Completed',
    date: 'Dec 6, 2024',
    deploymentUrl: 'https://magnazee.github.io/PWA003/',
    repoUrl: 'https://github.com/Magnazee/PWA003',
    readmeUrl: 'https://github.com/Magnazee/PWA003#readme'
  },
  {
    id: 'PWA004',
    name: 'Speech to Text',
    status: 'Completed',
    date: 'Dec 7-8, 2024',
    deploymentUrl: 'https://magnazee.github.io/PWA004/',
    repoUrl: 'https://github.com/Magnazee/PWA004',
    readmeUrl: 'https://github.com/Magnazee/PWA004#readme'
  },
  {
    id: 'PWA005',
    name: 'Claude Chat PWA',
    status: 'Completed',
    date: 'Dec 9, 2024',
    deploymentUrl: 'https://magnazee.github.io/PWA005/',
    repoUrl: 'https://github.com/Magnazee/PWA005',
    readmeUrl: 'https://github.com/Magnazee/PWA005#readme'
  },
  {
    id: 'PWA006',
    name: 'Voice AI Assistant',
    status: 'In Progress',
    date: 'Dec 10, 2024',
    deploymentUrl: 'https://magnazee.github.io/PWA006/',
    repoUrl: 'https://github.com/Magnazee/PWA006',
    readmeUrl: 'https://github.com/Magnazee/PWA006#readme'
  }
]

export function Dashboard() {
  return (
    <div className="space-y-6 p-6">
      <header className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Project Dashboard</h1>
          <p className="mt-2 text-sm text-gray-600">Project in a Day Progress Tracker</p>
        </div>
        <div className="w-24 h-24">
          <img 
            src="/PWA003/sleepy-owl.svg" 
            alt="Sleepy owl" 
            className="w-full h-full"
            title="Time to rest! We'll continue tomorrow."
          />
        </div>
      </header>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Metrics />
        <Timeline projects={projects} />
      </div>
      <ProjectList projects={projects} />
    </div>
  )
}