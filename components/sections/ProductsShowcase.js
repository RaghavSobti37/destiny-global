import Link from 'next/link'
import ProductCard from '@/components/ui/ProductCard'
import { getStarProducts } from '@/lib/products'

export default function ProductsShowcase() {
  const starProducts = getStarProducts()

  return (
    <>
      {/* OUR STAR PRODUCTS */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-xl text-center mb-4 text-2xl md:text-4xl">OUR STAR PRODUCTS</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
            {starProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>

          <div className="flex flex-col md:flex-row md:items-center md:gap-6 text-center justify-center">
            <p className="text-base md:text-lg font-bold">AND MANY OTHER POWDERS AVAILABLE</p>
            <Link href="/products" className="btn-primary inline-block px-6 md:px-8 py-3 md:py-4 text-sm md:text-base font-bold mt-4 md:mt-0 uppercase">
              VIEW FULL CATALOGUE
            </Link>
          </div>
        </div>
      </section>

    </>
  )
}
