import Image from 'next/image'
import Link from 'next/link'

export default function ProductCard({ product }) {
  return (
    <Link href={`/products/${product.slug}`} className="product-card flex flex-col no-underline group">
      <div className="product-image relative">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="image-cover object-cover"
          loading="lazy"
        />
      </div>
      <div className="product-content flex flex-col flex-1">
        <h3 className="subheading text-primary mb-3">{product.name}</h3>
        <p className="body-small text-gray-700 mb-4 flex-1">{product.description}</p>
        <span className="text-sm font-bold text-primary uppercase tracking-wide group-hover:underline">
          View Details &rarr;
        </span>
      </div>
    </Link>
  )
}
