import Link from 'next/link'
import ProductCard from '@/components/ui/ProductCard'
import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/ui/Footer'
import { allProducts, categories, getProductsByCategory } from '@/lib/products'

export const metadata = {
  title: 'Dehydrated Onion Flakes, Powder & Granules | Destiny Global Products',
  description: 'Destiny Global is a trusted exporter and supplier of premium dehydrated onion products, including dried onion flakes, onion powder, and onion granules, delivering reliable quality and export solutions to global markets. Call us today!',
  keywords: 'buy dehydrated onion flakes bulk, premium onion powder wholesale, dehydrated onion granules manufacturer, minced dried onion, kibbled onion supplier, B2B food ingredients, bulk spices supplier, wholesale white onion powder, red onion flakes India',
  alternates: {
    canonical: 'https://www.destinnyglobal.com/products',
  },
  openGraph: {
    title: 'Dehydrated Onion Flakes, Powder & Granules | Destiny Global Products',
    description: 'Destiny Global is a trusted exporter and supplier of premium dehydrated onion products, including dried onion flakes, onion powder, and onion granules, delivering reliable quality and export solutions to global markets. Call us today!',
    url: 'https://www.destinnyglobal.com/products',
    siteName: 'Destiny Global',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://www.destinnyglobal.com/logo-text.png',
        width: 1200,
        height: 630,
        alt: 'Destiny Global Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dehydrated Onion Flakes, Powder & Granules | Destiny Global Products',
    description: 'Destiny Global is a trusted exporter and supplier of premium dehydrated onion products, including dried onion flakes, onion powder, and onion granules, delivering reliable quality and export solutions to global markets. Call us today!',
    images: ['https://www.destinnyglobal.com/logo-text.png'],
  },
}

export default function ProductsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'itemListElement': allProducts.map((product, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'item': {
        '@type': 'Product',
        'name': product.name,
        'description': product.description,
        'image': `https://www.destinnyglobal.com${encodeURI(product.image)}`,
        'url': `https://www.destinnyglobal.com/products/${product.slug}`,
        'category': product.category,
        'brand': {
          '@type': 'Brand',
          'name': 'Destiny Global'
        }
      }
    }))
  }

  return (
    <>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <Navbar />
      <main>
        {/* Header Section */}
        <section className="bg-light-gray py-8">
          <div className="container-custom">
            <h1 className="heading-xl mb-4">OUR PRODUCTS</h1>
            <p className="body-text text-gray-600 max-w-2xl mb-6">
              Discover our range of premium dehydrated products and fresh vegetables &amp; fruits, carefully sourced from India 
              for global markets with regulatory verification.
            </p>
            <p className="text-primary font-bold tracking-widest uppercase text-sm md:text-base">
              Quality. Compliance. Reliability.
            </p>
          </div>
        </section>

        {/* Product Grid */}
        <section className="pb-24 bg-white">
          <div className="container-custom">
            {/* Category Button */}
            <div className="mb-10 text-left">
              <Link href="/contact" className="btn-primary inline-block px-6 md:px-8 py-3 md:py-4 text-sm md:text-base">
                CHOOSE CUSTOMIZED PACKAGING
              </Link>
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap gap-3 mb-12">
              {categories.map((cat) => (
                <a key={cat.id} href={`#${cat.id}`} className="btn-primary inline-block px-5 md:px-6 py-2 md:py-3 text-sm md:text-base">
                  {cat.label.toUpperCase()}
                </a>
              ))}
            </div>

            {categories.map((cat) => (
              <div key={cat.id} id={cat.id} className="mb-16 scroll-mt-32">
                <h2 className="heading-lg font-bold mb-2 text-2xl md:text-3xl">{cat.label.toUpperCase()}</h2>
                <p className="body-text text-gray-600 mb-8 max-w-3xl">{cat.intro}</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {getProductsByCategory(cat.id).map((product) => (
                    <ProductCard key={product.slug} product={product} />
                  ))}
                </div>
              </div>
            ))}

            {/* Get Quote Button */}
            <div className="text-center">
              <Link href="/contact" className="btn-primary inline-block px-8 md:px-10 py-3 md:py-4 text-sm md:text-base">
                CHOOSE CUSTOMIZED PACKAGING
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
