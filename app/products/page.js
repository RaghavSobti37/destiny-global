import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { allProducts } from '@/lib/products'

export const metadata = {
  title: 'Products - Destiny Global',
  description: 'Browse our complete catalogue of dehydrated powders including onion, beetroot, moringa and more.',
}

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Header Section */}
        <section className="bg-light-gray section-padding-sm">
          <div className="container-custom">
            <h1 className="heading-xl mb-4">OUR PRODUCTS</h1>
            <p className="body-text text-gray-600 max-w-2xl">
              Discover our complete range of premium dehydrated powders, carefully crafted from the finest Indian ingredients 
              for global markets with regulatory verification.
            </p>
          </div>
        </section>

        {/* Product Grid */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            {/* Category Button */}
            <div className="mb-12 text-center">
              <button className="btn-primary">
                CHOOSE CUSTOMIZED PACKAGING
              </button>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {allProducts.map((product, idx) => (
                <div key={idx} className="product-card">
                  <div className="product-image">
                    <img src={product.image} alt={product.name} className="image-cover" />
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

            {/* View More Button */}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
