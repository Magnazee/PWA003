import { ProjectList } from './ProjectList'
import { Timeline } from './Timeline'
import { Metrics } from './Metrics'

export function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Metrics />
        <Timeline />
      </div>
      <ProjectList />
    </div>
  )
}