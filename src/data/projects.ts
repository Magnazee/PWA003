export interface Project {
  id: string
  name: string
  description: string
  status: 'completed' | 'in-progress' | 'planned'
  startDate: string
  endDate?: string
  repo?: string
  demo?: string
  features: string[]
}

export const projects: Project[] = [
  {
    id: 'pwa001',
    name: 'Rainbow Hello World',
    description: 'Interactive color-changing text PWA',
    status: 'completed',
    startDate: '2024-12-03',
    endDate: '2024-12-03',
    repo: 'https://github.com/Magnazee/PWA001',
    demo: 'https://magnazee.github.io/PWA001/',
    features: [
      'Color-changing text on click',
      'Background toggle',
      'Full PWA support',
      'Basic accessibility'
    ]
  },
  {
    id: 'pwa002',
    name: 'Voice Rainbow',
    description: 'Text-to-speech enabled PWA with multi-language support',
    status: 'completed',
    startDate: '2024-12-04',
    endDate: '2024-12-05',
    repo: 'https://github.com/Magnazee/PWA002',
    demo: 'https://magnazee.github.io/PWA002/',
    features: [
      'Voice synthesis',
      'Finnish language support',
      'Enhanced PWA features',
      'Accessibility improvements'
    ]
  },
  {
    id: 'pwa003',
    name: 'Project Dashboard',
    description: 'Project tracking and visualization PWA',
    status: 'completed',
    startDate: '2024-12-06',
    endDate: '2024-12-06',
    repo: 'https://github.com/Magnazee/PWA003',
    demo: 'https://magnazee.github.io/PWA003/',
    features: [
      'Project status tracking',
      'Timeline visualization',
      'Metrics display',
      'PWA functionality'
    ]
  },
  {
    id: 'pwa004',
    name: 'Speech to Text',
    description: 'Speech recognition PWA with real-time text display',
    status: 'in-progress',
    startDate: '2024-12-07',
    repo: 'https://github.com/Magnazee/PWA004',
    features: [
      'Speech recognition',
      'Real-time text display',
      'Status indicators',
      'Error handling'
    ]
  },
  {
    id: 'pwa005',
    name: 'Voice Commander',
    description: 'Advanced voice recognition and command system',
    status: 'planned',
    startDate: '2024-12-09',
    features: [
      'Command system architecture',
      'Multi-language support',
      'Custom command definitions',
      'Advanced voice recognition'
    ]
  }
]