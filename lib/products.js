// Centralized product data for the entire website

export const categories = [
  {
    id: 'dehydrated',
    label: 'Dehydrated & Processed',
    intro: 'Onion and garlic powders, flakes, granules and fried onion for food manufacturers, seasoning producers and food service.',
  },
  {
    id: 'fresh',
    label: 'Fresh Vegetables & Fruits',
    intro: 'Fresh produce sourced from selected Indian growing regions, graded and packed to destination-market requirements.',
  },
]

const dryDocs = 'COA and applicable export documents, where available'
const shelfLife = 'As per validated product specification'

export const allProducts = [
  {
    id: 1,
    slug: 'dehydrated-white-onion-powder',
    name: 'Dehydrated White Onion Powder',
    description: 'Premium dehydrated white onion powder, milled to a consistent fine texture with a characteristic savory onion flavor.',
    longDescription: 'Premium dehydrated white onion powder processed from selected white onions and milled to a consistent fine texture. It provides a characteristic savory onion flavor and convenient handling for industrial food production. An ideal ingredient for seasoning blends, soups, sauces, prepared meals, and commercial food-service applications.',
    applications: 'Food processing, soups, sauces, spice blends and HORECA.',
    specs: [
      ['Product Description', 'Fine white onion powder with a characteristic savory aroma and flavor, suitable for industrial food formulations.'],
      ['Product Form', 'Fine powder'],
      ['Origin', 'India'],
      ['Key Specifications', 'Mesh size, moisture content, color, flavor, microbiological quality'],
      ['Packaging', 'Bulk export bags and retail packs, subject to availability'],
      ['Shelf Life', shelfLife],
      ['Applications', 'Food processing, soups, sauces, seasoning blends, prepared meals'],
      ['Export Documents', dryDocs],
    ],
    image: '/items/dehydrated-white-onion-powder.jpeg',
    isStar: true,
    category: 'dehydrated',
  },
  {
    id: 2,
    slug: 'dehydrated-red-onion-powder',
    name: 'Dehydrated Red Onion Powder',
    description: 'Finely milled red onion powder from selected Indian red onions, with a sweet-savory flavor and natural color.',
    longDescription: 'Dehydrated red onion powder produced from selected Indian red onions. It offers characteristic onion aroma, a sweet-savory flavor profile, and a natural color influenced by the raw material and processing conditions. Finely milled for use in industrial seasoning formulations, spice blends, sauces, snack coatings, and prepared foods.',
    applications: 'Snack seasonings, spice blends, dry rubs, sauces and ready meals.',
    specs: [
      ['Product Description', 'Finely milled red onion powder with a savory flavor and characteristic natural color.'],
      ['Product Form', 'Fine powder'],
      ['Origin', 'India'],
      ['Key Specifications', 'Mesh size, moisture content, color, flavor, microbiological quality'],
      ['Packaging', 'Bulk export bags and retail packs, subject to availability'],
      ['Shelf Life', shelfLife],
      ['Applications', 'Spice blends, snack seasonings, sauces, dry rubs, ready meals'],
      ['Export Documents', dryDocs],
    ],
    image: '/items/red-onion-powder.jpeg',
    isStar: true,
    category: 'dehydrated',
  },
  {
    id: 3,
    slug: 'dehydrated-garlic-powder',
    name: 'Dehydrated Garlic Powder',
    description: 'Premium-grade garlic powder from selected Indian garlic cloves, finely milled with a pungent aroma and robust flavor.',
    longDescription: 'Premium-grade dehydrated garlic powder processed from carefully selected garlic cloves sourced from India. Finely milled for a consistent texture, with a characteristic pungent aroma and robust garlic flavor. Suitable for food manufacturers, seasoning producers, spice blenders, and retail packers seeking a versatile garlic ingredient for commercial food applications.',
    applications: 'Seasonings, soups, sauces, snack foods, marinades and processed foods.',
    specs: [
      ['Product Description', 'Fine dehydrated garlic powder with a characteristic pungent aroma and robust garlic flavor.'],
      ['Product Form', 'Fine powder'],
      ['Origin', 'India'],
      ['Key Specifications', 'Mesh size, moisture content, aroma, flavor, microbiological quality'],
      ['Packaging', 'Bulk export bags and retail packs, subject to availability'],
      ['Shelf Life', shelfLife],
      ['Applications', 'Seasonings, soups, sauces, snack foods, marinades'],
      ['Export Documents', dryDocs],
    ],
    image: '/items/garlic-powder.jpeg',
    isStar: true,
    category: 'dehydrated',
  },
  {
    id: 4,
    slug: 'red-onion-flakes',
    name: 'Red Onion Flakes',
    description: 'Dehydrated red onion flakes that retain their flavor, aroma and natural color, available in specified cut sizes.',
    longDescription: 'Dehydrated red onion flakes prepared from selected Indian red onions and processed to retain their characteristic flavor, aroma, and natural color. Available in specified cut sizes to support different texture and rehydration requirements. Designed for food manufacturers, seasoning blenders, ready-meal producers, and commercial kitchens.',
    applications: 'Instant foods, ready meals, sauces, seasoning blends and food service.',
    specs: [
      ['Product Description', 'Dehydrated red onion flakes offering characteristic onion flavor, color, and texture.'],
      ['Product Form', 'Dried flakes'],
      ['Origin', 'India'],
      ['Key Specifications', 'Flake dimensions, moisture content, color, foreign matter, rehydration performance'],
      ['Packaging', 'Moisture-barrier bulk packaging and other available formats'],
      ['Shelf Life', shelfLife],
      ['Applications', 'Instant foods, ready meals, sauces, seasoning blends'],
      ['Export Documents', dryDocs],
    ],
    image: '/items/red-onion-flakes.png',
    isStar: false,
    category: 'dehydrated',
  },
  {
    id: 5,
    slug: 'white-onion-flakes-sorted',
    name: 'White Onion Flakes (Sorted)',
    description: 'Carefully sorted white onion flakes with a pale cream-to-white appearance, savory aroma and defined flake size.',
    longDescription: 'Carefully sorted dehydrated white onion flakes made from selected white onions. The product features a characteristic pale cream-to-white appearance, savory aroma, and defined flake size. Suitable for manufacturers requiring a consistent dried onion ingredient for soups, sauces, seasoning blends, instant foods, and prepared meals.',
    applications: 'Instant soups, sauces, canned and prepared foods, dry blends and HORECA.',
    specs: [
      ['Product Description', 'Sorted dehydrated white onion flakes with a characteristic pale cream-to-white appearance and savory flavor.'],
      ['Product Form', 'Sorted dried flakes'],
      ['Origin', 'India'],
      ['Key Specifications', 'Flake dimensions, color, moisture content, sorting grade, foreign matter'],
      ['Packaging', 'Moisture-barrier bulk packaging and other available formats'],
      ['Shelf Life', shelfLife],
      ['Applications', 'Instant soups, canned foods, sauces, dry blends, prepared meals'],
      ['Export Documents', dryDocs],
    ],
    image: '/items/white-sorted-onion-flakes.png',
    isStar: false,
    category: 'dehydrated',
  },
  {
    id: 6,
    slug: 'fried-onion',
    name: 'Fried Onion',
    description: 'Crispy golden-brown onion slices fried in food-grade vegetable oil, with a sweet-savory flavor.',
    longDescription: 'Crispy fried onion slices prepared from selected onions and cooked in food-grade vegetable oil to develop a golden-brown appearance and characteristic sweet-savory flavor. Suitable for food-service operators and manufacturers seeking a convenient onion topping or ingredient. Product specifications can include cut size, color, oil type, moisture, and oxidation-related quality parameters.',
    applications: 'Ready meals, biryani toppings, savory snacks, bakery products and catering.',
    specs: [
      ['Product Description', 'Golden-brown fried onion slices with a crisp texture and characteristic sweet-savory flavor.'],
      ['Product Form', 'Fried onion slices'],
      ['Origin', 'India, where verified'],
      ['Key Specifications', 'Cut size, color, crispness, moisture content, oil quality'],
      ['Packaging', 'Food-service bulk packs and suitable barrier packaging'],
      ['Shelf Life', shelfLife],
      ['Applications', 'Ready meals, biryani toppings, savory snacks, bakery products, catering'],
      ['Export Documents', dryDocs],
    ],
    image: '/items/fried-onion.jpeg',
    isStar: false,
    category: 'dehydrated',
  },
  {
    id: 7,
    slug: 'coated-fried-onion',
    name: 'Coated Fried Onion',
    description: 'Crispy fried onions with a light flour-based coating for a distinctive crunch in toppings and prepared foods.',
    longDescription: 'Crispy coated fried onions prepared from selected onions with a light flour-based coating, followed by frying to achieve a distinctive crunchy texture. Developed for food manufacturers and food-service operators looking for a coated onion ingredient for toppings and prepared foods. The coating formulation and allergen information should be specified for each product grade.',
    applications: 'Burgers, fast food, savory snacks, soups, salads and commercial catering.',
    specs: [
      ['Product Description', 'Crispy fried onion pieces with a flour-based coating for added texture.'],
      ['Product Form', 'Coated fried onion pieces'],
      ['Origin', 'India, where verified'],
      ['Key Specifications', 'Coating composition, cut size, crispness, moisture, oil quality, allergens'],
      ['Packaging', 'Food-service bulk packs and suitable barrier packaging'],
      ['Shelf Life', shelfLife],
      ['Applications', 'Burgers, fast food, savory snacks, soups, salads, catering'],
      ['Export Documents', 'COA, ingredient declaration, allergen information, and other applicable documents'],
    ],
    image: '/items/coated-fried-onion.png',
    isStar: false,
    category: 'dehydrated',
  },
  {
    id: 8,
    slug: 'dehydrated-white-onion-granules',
    name: 'Dehydrated White Onion Granules',
    description: 'White onion granules screened to a defined particle size, a coarser alternative to powder with savory flavor.',
    longDescription: 'Dehydrated white onion granules processed from selected Indian white onions and screened to achieve a defined particle-size distribution. Offering characteristic onion aroma and savory flavor, they provide a practical alternative to powder when a coarser texture is preferred. Suitable for industrial seasoning, soup mixes, sauces, dressings, and prepared foods.',
    applications: 'Spice blends, dry rubs, soups, sauces, condiments and prepared foods.',
    specs: [
      ['Product Description', 'Dehydrated white onion granules with a coarser texture than powder and a characteristic savory flavor.'],
      ['Product Form', 'Granules'],
      ['Origin', 'India'],
      ['Key Specifications', 'Particle-size distribution, moisture content, color, bulk density, microbiological quality'],
      ['Packaging', 'Bulk export bags and retail packs, subject to availability'],
      ['Shelf Life', shelfLife],
      ['Applications', 'Spice blends, dry rubs, soups, sauces, dressings, prepared foods'],
      ['Export Documents', dryDocs],
    ],
    image: '/items/dehydrated-white-onion-granules.jpeg',
    isStar: false,
    category: 'dehydrated',
  },
  {
    id: 10,
    slug: 'pink-onion-flakes',
    name: 'Pink Onion Flakes',
    description: 'Dehydrated pink onion flakes cut to specified sizes, with a sweet-savory flavor and natural color.',
    longDescription: 'Dehydrated pink onion flakes produced from selected pink onions and cut to specified sizes for commercial food applications. They offer a characteristic onion aroma, sweet-savory flavor, and a natural color that varies with the raw material and drying process. Suitable for manufacturers seeking a textured onion ingredient for seasoning blends, instant foods, sauces, and prepared meals.',
    applications: 'Instant foods, soups, sauces, condiments, seasoning blends and salad toppings.',
    specs: [
      ['Product Description', 'Dehydrated pink onion flakes with a characteristic onion aroma, savory-sweet flavor, and natural color.'],
      ['Product Form', 'Dried flakes'],
      ['Origin', 'India'],
      ['Key Specifications', 'Flake dimensions, moisture content, color, flavor, foreign matter, rehydration performance'],
      ['Packaging', 'Moisture-barrier bulk packaging and other available formats'],
      ['Shelf Life', shelfLife],
      ['Applications', 'Instant foods, soups, sauces, condiments, seasoning blends'],
      ['Export Documents', dryDocs],
    ],
    image: '/items/pink-onion-flakes.png',
    isStar: false,
    category: 'dehydrated',
  },
  {
    id: 9,
    slug: 'fresh-red-onion',
    name: 'Fresh Red Onion',
    description: 'Fresh red onions from selected Indian growing regions, cured, sorted and graded to agreed export requirements.',
    longDescription: 'Fresh red onions sourced from selected growing regions in India and graded according to agreed size, appearance, and quality requirements. Carefully cured, sorted, and packed for suitable transport conditions, they are intended for international wholesalers, importers, retail distributors, and food-service buyers. Export specifications can be tailored to destination-market requirements.',
    applications: 'Wholesale and retail distribution, food service, fresh-cut processing and food manufacturing.',
    specs: [
      ['Product Description', 'Fresh red onions sorted and graded according to agreed size and quality requirements for export markets.'],
      ['Product Form', 'Whole fresh bulbs'],
      ['Origin', 'India, where verified'],
      ['Key Specifications', 'Bulb size, maturity, skin quality, curing, defect tolerance'],
      ['Packaging', 'Ventilated mesh bags in available weights'],
      ['Shelf Life', 'Depends on variety, curing, storage, and transit conditions'],
      ['Applications', 'Wholesale and retail markets, food service, fresh-cut processing'],
      ['Export Documents', 'Phytosanitary certificate and other destination-specific documents, where required'],
    ],
    image: '/items/Fresh Red Onion.jpeg',
    isStar: false,
    category: 'fresh',
  },
  {
    id: 11,
    slug: 'pomegranate',
    name: 'Pomegranate',
    description: 'Fresh, premium-quality pomegranates sourced from Indian farms, packed for global export.',
    longDescription: 'Fresh, premium-quality pomegranates sourced from the finest Indian farms. Rich in flavor and nutrients, ready for global export.',
    applications: null,
    specs: [],
    image: '/items/pomegranate.png',
    isStar: false,
    category: 'fresh',
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

export const getProductBySlug = (slug) => {
  return allProducts.find(product => product.slug === slug)
}
