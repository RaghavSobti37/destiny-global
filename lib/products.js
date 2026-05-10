// Centralized product data for the entire website
export const allProducts = [
  {
    id: 1,
    name: 'Dehydrated White Onion Powder',
    description: 'Premium quality dehydrated white onion powder. Pure, aromatic, and perfect for industrial food processing.',
    image: '/items/Dehydrated White Onion powder.jpeg',
    isStar: true,
    category: 'powders'
  },
  {
    id: 2,
    name: 'Red Onion Powder',
    description: 'Natural red onion powder with a sharp, sweet profile. Ideal for spice blends and gourmet cooking.',
    image: '/items/Red Onion powder.jpeg',
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
    image: '/items/garlic powder.jpeg',
    isStar: false,
    category: 'fresh'
  },
  {
    id: 5,
    name: 'Tomato Powder',
    description: 'Tangy dehydrated tomato powder. Natural food coloring and flavoring agent for diverse food products.',
    image: '/items/Tomato.jpg',
    isStar: false,
    category: 'fresh'
  },
  {
    id: 6,
    name: 'Red Onion Flakes',
    description: 'Premium red onion flakes with consistent texture and color. Great for soups, stews, and seasoning.',
    image: '/items/Red Onion flakes.jpeg',
    isStar: false,
    category: 'powders'
  },
  {
    id: 7,
    name: 'White Sorted Onion Flakes',
    description: 'Carefully sorted white onion flakes. High-purity product for premium food applications.',
    image: '/items/white sorted onion flakes.jpeg',
    isStar: false,
    category: 'powders'
  },
  {
    id: 8,
    name: 'Fried Onion',
    description: 'Crispy and flavorful fried onions. Perfect for toppings and as a base for various cuisines.',
    image: '/items/Fresh fried onion.jpeg',
    isStar: false,
    category: 'fresh'
  },
  {
    id: 9,
    name: 'Beetroot Powder',
    description: 'Natural beetroot powder rich in nutrients and vibrant color. Perfect for food coloring and health beverages.',
    image: '/items/beetroot.jpg',
    isStar: false,
    category: 'powders'
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
