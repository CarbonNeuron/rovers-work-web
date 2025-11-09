import { MetadataRoute } from 'next'

// Define all the pages in the Universal Opportunities portal
const routes = [
  {
    url: '',
    priority: 1.0,
    changeFrequency: 'weekly' as const,
    lastModified: new Date(),
    description: 'Universal Opportunities - Remote Operations Portal Homepage'
  },
  {
    url: '/portal',
    priority: 0.9,
    changeFrequency: 'daily' as const,
    lastModified: new Date(),
    description: 'Operations Portal - Mission Dashboard'
  },
  {
    url: '/rovers',
    priority: 0.8,
    changeFrequency: 'daily' as const,
    lastModified: new Date(),
    description: 'Rovers - Fleet Management System'
  },
  {
    url: '/planets',
    priority: 0.8,
    changeFrequency: 'weekly' as const,
    lastModified: new Date(),
    description: 'Planets - Sector Overview and Inter-planetary Operations'
  },
  {
    url: '/market',
    priority: 0.7,
    changeFrequency: 'daily' as const,
    lastModified: new Date(),
    description: 'Market - Resource Trading and Dynamic Pricing'
  },
  {
    url: '/fabrication',
    priority: 0.7,
    changeFrequency: 'daily' as const,
    lastModified: new Date(),
    description: 'Fabrication - Production Queues and Manufacturing'
  },
  {
    url: '/company-board',
    priority: 0.6,
    changeFrequency: 'weekly' as const,
    lastModified: new Date(),
    description: 'Company Board - Contracts and Daily Tasks'
  },
  {
    url: '/profile',
    priority: 0.5,
    changeFrequency: 'monthly' as const,
    lastModified: new Date(),
    description: 'Profile - Operator Status and Certifications'
  }
]

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://rovers.work'
  
  return routes.map(route => ({
    url: `${baseUrl}${route.url}`,
    lastModified: route.lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}