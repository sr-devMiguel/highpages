import React, { useState } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { useCart } from "../context/CartContext"
import { useToast } from "../context/ToastContext"
import { ShoppingCart, Check, Eye } from "lucide-react"
import type { Product } from "../../types/product"

const ProductCard: React.FC<Product> = ({ id, name, price, image }) => {
  const { addToCart } = useCart()
  const { showToast } = useToast()
  const [isAdded, setIsAdded] = useState(false)

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault() // Previne navegação ao clicar no botão
    addToCart({ id, name, price, image })
    setIsAdded(true)
    showToast(`${name} adicionado ao carrinho!`, 'success')
    setTimeout(() => setIsAdded(false), 2000)
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="border rounded-2xl p-3 md:p-4 shadow-sm hover:shadow-2xl bg-white transition-all duration-300 w-full group"
    >
      {/* Imagem */}
      <div className="w-full aspect-square overflow-hidden rounded-xl mb-3 md:mb-4 bg-gray-100">
        <motion.img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
      </div>

      {/* Título */}
      <h3 className="text-base md:text-lg font-semibold text-gray-900 line-clamp-2 mb-1">
        {name}
      </h3>

      {/* Preço */}
      <motion.p 
        className="text-gray-700 mt-1 font-medium text-base md:text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        R$ {price.toFixed(2)}
      </motion.p>

      {/* Botão */}
      <motion.button
        onClick={handleAddToCart}
        whileTap={{ scale: 0.95 }}
        className={`mt-3 md:mt-4 w-full py-2 md:py-2.5 rounded-lg transition-all duration-300 font-semibold text-sm md:text-base flex items-center justify-center gap-2 ${
          isAdded 
            ? 'bg-green-600 text-white' 
            : 'bg-black text-white hover:bg-gray-800 hover:shadow-lg'
        }`}
      >
        {isAdded ? (
          <>
            <Check size={18} />
            Adicionado!
          </>
        ) : (
          <>
            <ShoppingCart size={18} />
            Adicionar ao Carrinho
          </>
        )}
      </motion.button>
    </motion.article>
  )
}

export default ProductCard