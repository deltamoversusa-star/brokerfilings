import type { MetadataRoute } from 'next'

const BASE_URL = 'https://brokerfilings.com'

const blogPosts = [
  'moving-broker-surety-bond-requirements',
  'ideas-for-small-business',
  'what-is-a-boc-3-filing-for-moving-brokers',
  'how-to-get-fmcsa-broker-authority',
  'how-much-does-it-cost-to-start-a-moving-brokerage',
  'moving-broker-license-requirements',
  'hhg-broker-vs-freight-broker',
  'how-long-does-fmcsa-approval-take',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...blogEntries,
  ]
}
