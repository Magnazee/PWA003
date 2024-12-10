export function Dashboard() {
  const projects = [
    { id: 'PWA001', name: 'Hello World PWA', status: 'Completed', date: 'Dec 3, 2024' },
    { id: 'PWA002', name: 'Voice Synthesis', status: 'Completed', date: 'Dec 4-5, 2024' },
    { id: 'PWA003', name: 'Project Dashboard', status: 'Completed', date: 'Dec 6, 2024' },
    { id: 'PWA004', name: 'Speech to Text', status: 'Completed', date: 'Dec 7-8, 2024' },
    { id: 'PWA005', name: 'Claude Chat PWA', status: 'Completed', date: 'Dec 9, 2024' },
    { id: 'PWA006', name: 'Voice AI Assistant', status: 'In Progress', date: 'Dec 10, 2024' },
  ];

  return (
    <div className="p-6">
      <header className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Project Dashboard</h1>
          <p className="mt-2 text-sm text-gray-600">Project in a Day Progress Tracker</p>
        </div>
        <div className="w-24 h-24">
          <img 
            src="/sleepy-owl.svg" 
            alt="Sleepy owl" 
            className="w-full h-full"
            title="Time to rest! We'll continue tomorrow."
          />
        </div>
      </header>

      <div className="grid gap-6 mb-8">
        <div className="bg-white rounded-lg shadow">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Project Status</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {projects.map((project) => (
                    <tr key={project.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{project.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{project.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                          ${project.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                          {project.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{project.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}