export default function ProductsShowcase() {
  const starProducts = [
    {
      name: 'Dehydrated Onion Powder',
      description: 'Premium quality dehydrated onion powder. Ideal for food manufacturers and spice blends worldwide. Sourced from the finest Indian farms.',
      image: '/onion-powder.jpeg'
    },
    {
      name: 'Beetroot Powder',
      description: 'Natural beetroot powder rich in nutrients and vibrant color. Perfect for food coloring applications and health beverages.',
      image: 'https://images.unsplash.com/photo-1585518419759-f4c9ecf75ffe?w=400&h=300&fit=crop'
    },
    {
      name: 'Moringa Powder',
      description: 'Pure moringa powder loaded with essential nutrients. A superfood ingredient for supplements and wellness products.',
      image: 'https://images.unsplash.com/photo-1526499297297-2d4611a533a7?w=400&h=300&fit=crop'
    }
  ]

  const freshProducts = [
    {
      name: 'Specific Fresh Fruit',
      description: 'Aromatic dehydrated garlic powder. High-quality seasoning for culinary and food manufacturing applications.',
      image: '/close-up-brewer-s-yeast.jpg.jpeg'
    },
    {
      name: 'Specific Fresh Vegetable',
      description: 'Tangy dehydrated tomato powder. Natural food coloring and flavoring agent for diverse food products.',
      image: '/close-up-brewer-s-yeast.jpg.jpeg'
    },
    {
      name: 'Moringa Powder',
      description: 'Nutrient-rich moringa powder. A healthy ingredient for beverages, supplements, and food fortification.',
      image: 'https://images.unsplash.com/photo-1511621776486-a01980e01a18?w=400&h=300&fit=crop'
    }
  ]

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
