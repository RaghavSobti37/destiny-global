import { allProducts } from '@/lib/products'

export default function sitemap() {
  const baseUrl = 'https://www.destinnyglobal.com'

  // Product pages (if there were individual ones, but currently they are all on /products)
  // Since all products are on the /products page, we just map the main routes.
  
  const routes = ['', '/about', '/products', '/contact'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
  }))

  return [...routes]
}
