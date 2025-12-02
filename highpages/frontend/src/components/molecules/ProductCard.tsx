import React from "react"
import { motion } from "framer-motion"
import { useCart } from "../../context/CartContext"
import type { Product } from "../../types/product"

const ProductCard: React.FC<Product> = ({ id, name, price, image }) => {
  const { addToCart } = useCart()

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="border rounded-2xl p-4 shadow-sm hover:shadow-xl bg-white transition max-w-sm"
    >
      {/* Imagem */}
      <div className="w-full aspect-square overflow-hidden rounded-xl mb-4">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Título */}
      <h3 className="text-lg font-semibold text-gray-900">{name}</h3>

      {/* Preço */}
      <p className="text-gray-700 mt-1 font-medium text-lg">
        R$ {price.toFixed(2)}
      </p>

      {/* Botão */}
      <button
        onClick={() => addToCart({ id, name, price, image })}
        className="mt-4 w-full py-2.5 bg-black text-white rounded-lg 
                   hover:bg-gray-900 transition font-semibold"
      >
        Adicionar ao Carrinho
      </button>
    </motion.article>
  )
}

export default ProductCard
