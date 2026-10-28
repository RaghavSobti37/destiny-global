import { allProducts } from '@/lib/products'

export default function sitemap() {
  const baseUrl = 'https://www.destinnyglobal.com'

  const routes = ['', '/about', '/products', '/contact', '/privacy-policy'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
  }))

  const productRoutes = allProducts.map((product) => ({
    url: `${baseUrl}/products/${product.slug}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...routes, ...productRoutes]
}
