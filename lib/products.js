// Centralized product data for the entire website
export const allProducts = [
  {
    id: 1,
    name: 'Dehydrated White Onion Powder',
    description: 'Premium quality dehydrated white onion powder. Pure, aromatic, and perfect for industrial food processing.',
    image: '/items/dehydrated-white-onion-powder.jpeg',
    isStar: true,
    category: 'powders'
  },
  {
    id: 2,
    name: 'Red Onion Powder',
    description: 'Natural red onion powder with a sharp, sweet profile. Ideal for spice blends and gourmet cooking.',
    image: '/items/red-onion-powder.jpeg',
    isStar: true,
    category: 'powders'
  },
  {
    id: 3,
    name: 'Garlic Powder',
    description: 'Aromatic dehydrated garlic powder. High-quality seasoning for culinary and food manufacturing applications.',
    image: '/items/garlic-powder.jpeg',
    isStar: true,
    category: 'powders'
  },
  {
    id: 4,
    name: 'Red Onion Flakes',
    description: 'Premium red onion flakes with consistent texture and color. Great for soups, stews, and seasoning.',
    image: '/items/red-onion-flakes.png',
    isStar: false,
    category: 'powders'
  },
  {
    id: 5,
    name: 'White Sorted Onion Flakes',
    description: 'Carefully sorted white onion flakes. High-purity product for premium food applications.',
    image: '/items/white-sorted-onion-flakes.png',
    isStar: false,
    category: 'powders'
  },
  {
    id: 6,
    name: 'Fried Onion',
    description: 'Crispy and flavorful fried onions. Perfect for toppings and as a base for various cuisines.',
    image: '/items/fried-onion.jpeg',
    isStar: false,
    category: 'fresh'
  },
  {
    id: 7,
    name: 'Coated Fried Onion',
    description: 'Specialty coated fried onions with extra crunch and flavor retention. Ideal for professional culinary use.',
    image: '/items/coated-fried-onion.png',
    isStar: false,
    category: 'fresh'
  },
  {
    id: 8,
    name: 'Dehydrated White Granules',
    description: 'Uniformly dehydrated white onion granules. Provides excellent texture and flavor release in dry mixes.',
    image: '/items/dehydrated-white-onion-granules.jpeg',
    isStar: false,
    category: 'powders'
  },
  {
    id: 9,
    name: 'Fresh Red Onion',
    description: 'Farm-fresh red onions sourced from the finest growers in Nashik. High-quality bulbs ready for global export.',
    image: '/items/Fresh Red Onion.jpeg',
    isStar: false,
    category: 'fresh'
  },
  {
    id: 10,
    name: 'Pink Onion Flakes',
    description: 'Unique pink onion flakes with a mild flavor and distinct visual appeal for specialized food products.',
    image: '/items/pink-onion-flakes.png',
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
