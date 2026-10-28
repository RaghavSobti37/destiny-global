import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/ui/Footer'
import ProductCard from '@/components/ui/ProductCard'
import { allProducts, categories, getProductBySlug } from '@/lib/products'

const baseUrl = 'https://www.destinnyglobal.com'

export function generateStaticParams() {
  return allProducts.map((product) => ({ slug: product.slug }))
}

export const dynamicParams = false

export function generateMetadata({ params }) {
  const product = getProductBySlug(params.slug)
  if (!product) return {}
  const title = `${product.name} Exporter from India | Destiny Global`
  const url = `${baseUrl}/products/${product.slug}`
  const image = `${baseUrl}${encodeURI(product.image)}`
  return {
    title,
    description: product.description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description: product.description,
      url,
      siteName: 'Destiny Global',
      locale: 'en_US',
      type: 'website',
      images: [{ url: image, alt: product.name }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: product.description,
      images: [image],
    },
  }
}

export default function ProductDetailPage({ params }) {
  const product = getProductBySlug(params.slug)
  if (!product) notFound()

  const category = categories.find((c) => c.id === product.category)
  const related = allProducts.filter((p) => p.category === product.category && p.slug !== product.slug).slice(0, 3)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.longDescription,
    image: `${baseUrl}${encodeURI(product.image)}`,
    url: `${baseUrl}/products/${product.slug}`,
    category: category?.label,
    brand: { '@type': 'Brand', name: 'Destiny Global' },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <main>
        <section className="bg-light-gray py-6">
          <div className="container-custom text-sm text-gray-600">
            <Link href="/products" className="hover:text-primary">Products</Link>
            <span className="mx-2">/</span>
            <Link href={`/products#${product.category}`} className="hover:text-primary">{category?.label}</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-semibold">{product.name}</span>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
            <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-gray-100 border border-gray-200">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>

            <div>
              <p className="text-primary font-bold tracking-widest uppercase text-xs md:text-sm mb-3">{category?.label}</p>
              <h1 className="heading-xl mb-6 text-3xl md:text-4xl">{product.name.toUpperCase()}</h1>
              <p className="body-text text-gray-700 leading-relaxed mb-6">{product.longDescription}</p>
              {product.applications && (
                <p className="body-text text-gray-700 mb-8">
                  <span className="font-bold text-gray-900">Applications: </span>
                  {product.applications}
                </p>
              )}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary inline-block text-center px-8 py-3 md:py-4 text-sm md:text-base">
                  REQUEST A QUOTE
                </Link>
                <Link href="/products" className="btn-primary inline-block text-center px-8 py-3 md:py-4 text-sm md:text-base">
                  BACK TO CATALOGUE
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-16 bg-white">
          <div className="container-custom">
            <h2 className="heading-lg font-bold mb-6 text-2xl md:text-3xl">SPECIFICATIONS</h2>
            {product.specs.length > 0 ? (
              <div className="overflow-x-auto border border-gray-200 rounded-lg">
                <table className="w-full text-left text-sm md:text-base">
                  <tbody>
                    {product.specs.map(([label, value], idx) => (
                      <tr key={label} className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <th scope="row" className="py-3 px-4 md:px-6 font-semibold text-gray-900 align-top w-1/3 md:w-1/4">{label}</th>
                        <td className="py-3 px-4 md:px-6 text-gray-700">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="body-text text-gray-700">
                Detailed specifications are shared on request. <Link href="/contact" className="text-primary font-semibold underline">Send us an inquiry</Link> with your grade, size and packaging requirements.
              </p>
            )}
          </div>
        </section>

        {related.length > 0 && (
          <section className="section-padding bg-light-gray">
            <div className="container-custom">
              <h2 className="heading-lg font-bold mb-8 text-2xl md:text-3xl">RELATED PRODUCTS</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                {related.map((p) => (
                  <ProductCard key={p.slug} product={p} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  )
}
