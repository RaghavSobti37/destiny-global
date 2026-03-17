import { getStarProducts, getFreshProducts } from '@/lib/products'

export default function ProductsShowcase() {
  const starProducts = getStarProducts()
  const freshProducts = getFreshProducts()

  return (
    <>
      {/* OUR STAR PRODUCTS */}
      <section className="section-padding bg-white">
        <div className="container-custom px-4 md:px-8">
          <h2 className="heading-xl text-center mb-4 text-2xl md:text-4xl">OUR STAR PRODUCTS</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
            {starProducts.map((product, idx) => (
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

          <div className="text-center">
            And many other powers available... <br /> {/* make it left for desktop and center for mobile */}
            <a href="/products" className="btn-primary inline-block px-6 md:px-8 py-3 md:py-4 text-sm md:text-base">
              VIEW FULL CATALOGUE
            </a>
          </div>
        </div>
      </section>

      {/* FRESH FRUITS & VEGETABLES POWDERS */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom px-4 md:px-8">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
            {freshProducts.map((product, idx) => (
              <div key={idx} className="product-card">
                <div className="product-image">
                  <img src={product.image} alt={product.name} className="image-cover" />
                </div>
                <div className="product-content">
                  <h3 className="subheading text-primary mb-3 text-base md:text-lg">{product.name}</h3>
                  <p className="caption text-gray-600 mb-3 text-xs md:text-sm">Product Description</p>
                  <p className="body-small text-gray-700 mb-4 text-sm">{product.description}</p>
                  <p className="caption text-gray-500 text-xs">MOQ</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a href="/contact" className="btn-primary inline-block px-6 md:px-8 py-3 md:py-4 text-sm md:text-base">
              CHOOSE CUSTOMIZED PACKAGING
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
