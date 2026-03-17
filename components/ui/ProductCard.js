export default function ProductCard({ name, description, image }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition">
      <div className="h-48 bg-gray-200 overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover hover:scale-105 transition" />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2 text-blue-600">{name}</h3>
        <p className="text-sm text-gray-600 uppercase font-semibold mb-2">Product Description</p>
        <p className="text-xs text-gray-500 line-clamp-2">{description}</p>
        <p className="text-xs text-gray-400 mt-3">MOQ.</p>
      </div>
    </div>
  )
}
