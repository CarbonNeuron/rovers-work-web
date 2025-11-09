import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://rovers.work'
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/',
          '/portal',
          '/rovers',
          '/planets', 
          '/market',
          '/fabrication',
          '/company-board',
          '/profile'
        ],
        disallow: [
          '/test-scroll',
          '/loading-test',
          '/_next/',
          '/api/'
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: [
          '/',
          '/portal',
          '/rovers',
          '/planets',
          '/market',
          '/fabrication',
          '/company-board',
          '/profile'
        ],
        disallow: [
          '/test-scroll',
          '/loading-test'
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}