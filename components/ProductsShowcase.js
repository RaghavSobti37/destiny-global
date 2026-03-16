export default function ProductsShowcase() {
  const starProducts = [
    {
      name: 'Dehydrated Onion Powder',
      description: 'Premium quality dehydrated onion powder. Ideal for food manufacturers and spice blends worldwide. Sourced from the finest Indian farms.',
      image: 'https://images.unsplash.com/photo-1585021866299-651b6480d9dc?w=400&h=300&fit=crop'
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
      name: 'Garlic Powder',
      description: 'Aromatic dehydrated garlic powder. High-quality seasoning for culinary and food manufacturing applications.',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop'
    },
    {
      name: 'Tomato Powder',
      description: 'Tangy dehydrated tomato powder. Natural food coloring and flavoring agent for diverse food products.',
      image: 'https://images.unsplash.com/photo-1599599810694-f3ee465b9b0f?w=400&h=300&fit=crop'
    },
    {
      name: 'Spinach Powder',
      description: 'Nutrient-rich spinach powder. A healthy ingredient for beverages, supplements, and food fortification.',
      image: 'https://images.unsplash.com/photo-1511621776486-a01980e01a18?w=400&h=300&fit=crop'
    }
  ]

  return (
    <>
      {/* OUR STAR PRODUCTS */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-xl text-center mb-4">OUR STAR PRODUCTS</h2>
          <p className="body-text text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            We craft exceptional powders using the finest ingredients from Indian farms, ensuring quality, compliance and reliability for customers across the globe.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
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
            <button className="btn-primary">
              VIEW FULL CATALOGUE
            </button>
          </div>
        </div>
      </section>

      {/* FRESH FRUITS & VEGETABLES POWDERS */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-md text-center mb-4">FRESH INDIAN FRUITS & VEGETABLES POWDERS AVAILABLE</h2>
          <p className="body-text text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Complete range of dehydrated vegetable and fruit powders manufactured with premium quality standards.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {freshProducts.map((product, idx) => (
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
            <button className="btn-primary">
              CHOOSE CUSTOMIZED PACKAGING
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
