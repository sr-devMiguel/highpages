import { Link } from "react-router-dom"
import { useCart } from "../components/context/CartContext"
import { useToast } from "../components/context/ToastContext"
import { Trash2, ShoppingBag, Plus, Minus } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const Cart: React.FC = () => {
  const { cartItems, removeFromCart, addToCart, removeOneFromCart } = useCart()
  const { showToast } = useToast()

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const handleRemoveItem = (id: string, name: string) => {
    removeFromCart(id)
    showToast(`${name} removido do carrinho`, 'info')
  }

  return (
    <div className="max-w-4xl mx-auto py-6 md:py-10 px-3 md:px-4">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-xl md:text-2xl font-bold mb-4 md:mb-6"
      >
        Seu Carrinho
      </motion.h1>

      {cartItems.length === 0 ? (
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-12 md:py-20 bg-gray-50 rounded-xl"
        >
          <ShoppingBag size={64} className="mx-auto mb-4 text-gray-400" />
          <p className="text-gray-600 mb-4 text-lg">Seu carrinho está vazio</p>
          <Link
            to="/products"
            className="inline-block bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-all hover:shadow-lg hover:-translate-y-0.5 font-semibold"
          >
            Explorar Produtos
          </Link>
        </motion.div>
      ) : (
        <div className="space-y-4">
          <AnimatePresence mode="popLayout">
            {cartItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20, height: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="flex flex-col sm:flex-row sm:justify-between sm:items-center border rounded-xl p-4 gap-3 bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3">
                  <motion.img 
                    whileHover={{ scale: 1.1 }}
                    src={item.image} 
                    alt={item.name}
                    className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-lg"
                  />
                  <div>
                    <span className="font-semibold text-sm md:text-base block">{item.name}</span>
                    <span className="text-gray-600 text-sm">R$ {item.price.toFixed(2)}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-4">
                  {/* Controles de quantidade */}
                  <div className="flex items-center gap-2 border rounded-lg p-1">
                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      onClick={() => removeOneFromCart(item.id)}
                      className="p-1 hover:bg-gray-100 rounded transition-colors"
                      aria-label="Diminuir quantidade"
                    >
                      <Minus size={16} />
                    </motion.button>
                    
                    <span className="px-3 font-semibold text-sm">{item.quantity}</span>
                    
                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      onClick={() => addToCart(item)}
                      className="p-1 hover:bg-gray-100 rounded transition-colors"
                      aria-label="Aumentar quantidade"
                    >
                      <Plus size={16} />
                    </motion.button>
                  </div>

                  <strong className="text-base md:text-lg min-w-[80px] text-right">
                    R$ {(item.price * item.quantity).toFixed(2)}
                  </strong>
                  
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleRemoveItem(item.id, item.name)}
                    className="text-red-600 hover:text-red-800 hover:bg-red-50 transition-colors p-2 rounded-lg"
                    aria-label="Remover item"
                  >
                    <Trash2 size={20} />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="border-t pt-4 md:pt-6 mt-6"
          >
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-lg md:text-xl font-semibold text-right mb-4"
            >
              Total: R$ {total.toFixed(2)}
            </motion.p>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                to="/checkout"
                className="block w-full sm:w-auto sm:float-right bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-all hover:shadow-lg font-semibold text-center"
              >
                Finalizar Compra
              </Link>
            </motion.div>
          </motion.div>
        </div>
      )}
    </div>
  )
}

export default Cart