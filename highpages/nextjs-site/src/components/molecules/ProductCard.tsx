import React from 'react'
import type { Product } from '../../types/product'

const ProductCard: React.FC<Product> = ({ name, price, image }) => {
  return (
    <article className="border rounded-lg p-4 shadow-sm hover:shadow-lg transition bg-white">
      <img
        src={image}
        alt={name}
        className="mb-3 rounded-md object-cover w-full h-64"
      />
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-gray-700 mt-1 font-medium">R$ {price.toFixed(2)}</p>
      <button className="mt-3 w-full py-2 bg-black text-white rounded hover:bg-gray-900 transition">
        Comprar
      </button>
    </article>
  )
}

export default ProductCard
