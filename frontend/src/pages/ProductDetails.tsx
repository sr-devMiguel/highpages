import { useParams, useNavigate, Link } from "react-router-dom"
import { motion } from "framer-motion"
import { useCart } from "../components/context/CartContext"
import { useToast } from "../components/context/ToastContext"
import useProducts from "../hooks/useProducts"
import { ArrowLeft, ShoppingCart, Check } from "lucide-react"
import { useState } from "react"

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { addToCart } = useCart()
  const { showToast } = useToast()
  const { products, loading } = useProducts()
  const [isAdded, setIsAdded] = useState(false)
  
  const product = products.find((p) => p.id === id)

  const handleAddToCart = () => {
    if (!product) return
    addToCart(product)
    setIsAdded(true)
    showToast(`${product.name} adicionado ao carrinho!`, 'success')
    setTimeout(() => setIsAdded(false), 2000)
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin w-12 h-12 border-4 border-black border-t-transparent rounded-full"></div>
      </div>
    )
  }

  if (!product) {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center mt-10 space-y-4"
      >
        <p className="text-xl text-gray-600">Produto não encontrado.</p>
        <Link 
          to="/products"
          className="inline-block bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
        >
          Ver todos os produtos
        </Link>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto py-6 md:py-10 px-3 md:px-4"
    >
      {/* Breadcrumb / Voltar */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-gray-600 hover:text-black transition mb-6 group"
      >
        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
        Voltar
      </motion.button>

      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        {/* Imagem */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="relative"
        >
          <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100 shadow-xl">
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Informações */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-6"
        >
          {/* Categoria */}
          <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full">
            {product.category}
          </span>

          {/* Título */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            {product.name}
          </h1>

          {/* Preço */}
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-bold text-gray-900">
              R$ {product.price.toFixed(2)}
            </span>
            <span className="text-gray-500 text-sm">à vista</span>
          </div>

          {/* Descrição */}
          <div className="border-t border-b py-6 space-y-3">
            <h2 className="font-semibold text-lg">Sobre o produto</h2>
            <p className="text-gray-600 leading-relaxed">
              Produto de alta qualidade da linha High Vision. 
              Confeccionado com materiais premium e design exclusivo. 
              Perfeito para quem busca estilo e conforto no dia a dia.
            </p>
          </div>

          {/* Características */}
          <div className="space-y-2">
            <h3 className="font-semibold">Características:</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-black rounded-full"></span>
                Material de primeira qualidade
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-black rounded-full"></span>
                Design exclusivo High Vision
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-black rounded-full"></span>
                Conforto e durabilidade
              </li>
            </ul>
          </div>

          {/* Botões de ação */}
          <div className="flex gap-3 pt-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleAddToCart}
              className={`flex-1 py-4 rounded-lg font-semibold text-base flex items-center justify-center gap-2 transition-all ${
                isAdded
                  ? 'bg-green-600 text-white'
                  : 'bg-black text-white hover:bg-gray-800 hover:shadow-lg'
              }`}
            >
              {isAdded ? (
                <>
                  <Check size={20} />
                  Adicionado!
                </>
              ) : (
                <>
                  <ShoppingCart size={20} />
                  Adicionar ao Carrinho
                </>
              )}
            </motion.button>

            <Link to="/cart">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-4 border-2 border-black text-black rounded-lg font-semibold hover:bg-black hover:text-white transition-all"
              >
                Ver Carrinho
              </motion.button>
            </Link>
          </div>

          {/* Informações de entrega */}
          <div className="bg-gray-50 rounded-xl p-4 space-y-2 text-sm">
            <p className="flex items-center gap-2">
              <span className="font-semibold">📦 Entrega:</span>
              Receba em até 7 dias úteis
            </p>
            <p className="flex items-center gap-2">
              <span className="font-semibold">🔒 Segurança:</span>
              Compra 100% protegida
            </p>
            <p className="flex items-center gap-2">
              <span className="font-semibold">↩️ Devolução:</span>
              30 dias para trocar ou devolver
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default ProductDetails