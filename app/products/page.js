import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/ui/Footer'
import { allProducts } from '@/lib/products'

export const metadata = {
  title: 'Dehydrated Onion Flakes, Powder & Granules | Destiny Global Products',
  description: 'Destiny Global is a trusted exporter and supplier of premium dehydrated onion products, including dried onion flakes, onion powder, and onion granules, delivering reliable quality and export solutions to global markets. Call us today!',
  keywords: 'buy dehydrated onion flakes bulk, premium onion powder wholesale, dehydrated onion granules manufacturer, minced dried onion, kibbled onion supplier, B2B food ingredients, bulk spices supplier, wholesale white onion powder, red onion flakes India',
  alternates: {
    canonical: 'https://destinyglobal.com/products',
  },
  openGraph: {
    title: 'Dehydrated Onion Flakes, Powder & Granules | Destiny Global Products',
    description: 'Destiny Global is a trusted exporter and supplier of premium dehydrated onion products, including dried onion flakes, onion powder, and onion granules, delivering reliable quality and export solutions to global markets. Call us today!',
    url: 'https://destinyglobal.com/products',
    siteName: 'Destiny Global',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://destinyglobal.com/logo-text.png',
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
    images: ['https://destinyglobal.com/logo-text.png'],
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
        'image': `https://destinyglobal.com${product.image}`,
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
              Discover our complete range of premium dehydrated powders, carefully crafted from the finest Indian ingredients 
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
            <div className="mb-32 text-left">
              <Link href="/contact" className="btn-primary inline-block px-6 md:px-8 py-3 md:py-4 text-sm md:text-base">
                CHOOSE CUSTOMIZED PACKAGING
              </Link>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {allProducts.map((product, idx) => (
                <div key={idx} className="product-card">
                  <div className="product-image relative">
                    <Image 
                      src={product.image} 
                      alt={product.name} 
                      fill
                      className="image-cover object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="product-content">
                    <h3 className="subheading text-primary mb-3">{product.name}</h3>
                    <p className="caption text-gray-600 mb-3">Product Description</p>
                    <p className="body-small text-gray-700 mb-4">{product.description}</p>
                    <p className="caption text-gray-500">MOQ</p>
                  </div>
                </div>
              ))}
            </div>

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
