import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Products - Destiny Global',
  description: 'Browse our complete catalogue of dehydrated powders including onion, beetroot, moringa and more.',
}

const allProducts = [
  {
    name: 'Dehydrated Onion Powder',
    image: 'https://images.unsplash.com/photo-1585021866299-651b6480d9dc?w=400&h=300&fit=crop',
    description: 'Premium quality dehydrated onion powder'
  },
  {
    name: 'Beetroot Powder',
    image: 'https://images.unsplash.com/photo-1585518419759-f4c9ecf75ffe?w=400&h=300&fit=crop',
    description: 'Natural beetroot powder rich in nutrients'
  },
  {
    name: 'Moringa Powder',
    image: 'https://images.unsplash.com/photo-1526499297297-2d4611a533a7?w=400&h=300&fit=crop',
    description: 'Pure moringa powder with essential nutrients'
  },
  {
    name: 'Garlic Powder',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop',
    description: 'Aromatic dehydrated garlic powder'
  },
  {
    name: 'Tomato Powder',
    image: 'https://images.unsplash.com/photo-1599599810694-f3ee465b9b0f?w=400&h=300&fit=crop',
    description: 'Tangy dehydrated tomato powder'
  },
  {
    name: 'Spinach Powder',
    image: 'https://images.unsplash.com/photo-1511621776486-a01980e01a18?w=400&h=300&fit=crop',
    description: 'Nutrient-rich spinach powder'
  },
  {
    name: 'Carrot Powder',
    image: 'https://images.unsplash.com/photo-1584623354325-cd4628902e4a?w=400&h=300&fit=crop',
    description: 'Sweet dehydrated carrot powder'
  },
  {
    name: 'Cabbage Powder',
    image: 'https://images.unsplash.com/photo-1566781796910-bd4e3b2b4fe1?w=400&h=300&fit=crop',
    description: 'Fresh dehydrated cabbage powder'
  },
  {
    name: 'Bell Pepper Powder',
    image: 'https://images.unsplash.com/photo-1563565375-c3340ca199e8?w=400&h=300&fit=crop',
    description: 'Colorful bell pepper powder blend'
  },
]

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
            <div className="text-center">
              <button className="btn-primary">
                VIEW MORE PRODUCTS
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
