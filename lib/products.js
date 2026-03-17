// Centralized product data for the entire website
export const allProducts = [
  {
    id: 1,
    name: 'Dehydrated Onion Powder',
    description: 'Premium quality dehydrated onion powder. Ideal for food manufacturers and spice blends worldwide. Sourced from the finest Indian farms.',
    image: '/onion-powder.jpeg',
    isStar: true,
    category: 'powders'
  },
  {
    id: 2,
    name: 'Beetroot Powder',
    description: 'Natural beetroot powder rich in nutrients and vibrant color. Perfect for food coloring applications and health beverages.',
    image: '/items/beetroot.jpg',
    isStar: true,
    category: 'powders'
  },
  {
    id: 3,
    name: 'Moringa Powder',
    description: 'Pure moringa powder loaded with essential nutrients. A superfood ingredient for supplements and wellness products.',
    image: '/items/Moringa.jpg',
    isStar: true,
    category: 'powders'
  },
  {
    id: 4,
    name: 'Garlic Powder',
    description: 'Aromatic dehydrated garlic powder. High-quality seasoning for culinary and food manufacturing applications.',
    image: '/items/garlic-and-garlic-powder-on-old-wood-close-up-ima-2026-03-15-23-49-45-utc.jpg',
    isStar: false,
    category: 'fresh'
  },
  {
    id: 5,
    name: 'Tomato Powder',
    description: 'Tangy dehydrated tomato powder. Natural food coloring and flavoring agent for diverse food products.',
    image: '/items/chilli-powder-smoked-chilli-paprika-red-chilli-p-2026-01-09-06-54-18-utc.jpg',
    isStar: false,
    category: 'fresh'
  },
  {
    id: 6,
    name: 'Spinach Powder',
    description: 'Nutrient-rich spinach powder. A healthy ingredient for beverages, supplements, and food fortification.',
    image: '/items/spinach.jpg',
    isStar: false,
    category: 'fresh'
  },
  {
    id: 7,
    name: 'Carrot Powder',
    description: 'Sweet dehydrated carrot powder. Rich in beta-carotene and perfect for natural food coloring.',
    image: 'https://images.unsplash.com/photo-1584623354325-cd4628902e4a?w=400&h=300&fit=crop',
    isStar: false,
    category: 'fresh'
  },
  {
    id: 8,
    name: 'Cabbage Powder',
    description: 'Fresh dehydrated cabbage powder. A nutritious ingredient for food supplements and wellness products.',
    image: 'https://images.unsplash.com/photo-1566781796910-bd4e3b2b4fe1?w=400&h=300&fit=crop',
    isStar: false,
    category: 'fresh'
  },
  {
    id: 9,
    name: 'Bell Pepper Powder',
    description: 'Colorful bell pepper powder blend. Adds vibrant color and mild flavor to food products worldwide.',
    image: 'https://images.unsplash.com/photo-1563565375-c3340ca199e8?w=400&h=300&fit=crop',
    isStar: false,
    category: 'fresh'
  },
]

// Get star products only
export const getStarProducts = () => {
  return allProducts.filter(product => product.isStar)
}

// Get fresh products only
export const getFreshProducts = () => {
  return allProducts.filter(product => product.category === 'fresh')
}

// Get products by category
export const getProductsByCategory = (category) => {
  return allProducts.filter(product => product.category === category)
}
