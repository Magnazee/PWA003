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
    description: 'Speech recognition PWA with multi-language support',
    status: 'completed',
    startDate: '2024-12-07',
    endDate: '2024-12-08',
    repo: 'https://github.com/Magnazee/PWA004',
    demo: 'https://magnazee.github.io/PWA004/',
    features: [
      'Real-time speech recognition',
      'English and Finnish language support',
      'Language toggle interface',
      'Error handling and status indicators',
      'Full PWA capabilities'
    ]
  },
  {
    id: 'pwa005',
    name: 'Claude Chat PWA',
    description: 'PWA for interacting with Claude AI',
    status: 'completed',
    startDate: '2024-12-09',
    endDate: '2024-12-09',
    repo: 'https://github.com/Magnazee/PWA005',
    demo: 'https://magnazee.github.io/PWA005/',
    features: [
      'GitHub Pages frontend',
      'Vercel serverless backend',
      'Claude API integration',
      'Cross-origin communication',
      'Secure API key handling',
      'Error handling and status displays'
    ]
  },
  {
    id: 'pwa006',
    name: 'Voice Commander',
    description: 'Advanced voice recognition and command system',
    status: 'planned',
    startDate: '2024-12-10',
    features: [
      'Command system architecture',
      'Multi-language support',
      'Custom command definitions',
      'Advanced voice recognition'
    ]
  }
]