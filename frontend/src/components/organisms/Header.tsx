import { useState } from "react"
import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext"
import { ShoppingCart, User, Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const Header = () => {
  const { totalItems } = useCart()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm py-3 md:py-4 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <nav className="container mx-auto flex justify-between items-center px-3 md:px-4">
        
        {/* LOGO */}
        <Link 
          to="/" 
          className="text-xl md:text-2xl font-bold tracking-tight hover:opacity-80 transition-opacity duration-300"
          onClick={() => setMobileMenuOpen(false)}
        >
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Catálogo
          </motion.span>
        </Link>

        {/* MENU DESKTOP */}
        <ul className="hidden md:flex items-center space-x-6 text-gray-800 font-medium">
          <Link 
            to="/products" 
            className="hover:text-black transition-all duration-300 hover:scale-105"
          >
            Produtos
          </Link>

          <Link 
            to="/register"
            className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 font-semibold"
          >
            <User size={18} />
            Criar Conta
          </Link>

          <Link 
            to="/cart" 
            className="relative flex items-center hover:text-black transition-all duration-300 hover:scale-110"
          >
            <ShoppingCart size={22} />
            {totalItems > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-2 -right-3 bg-black text-white text-xs font-semibold w-5 h-5 rounded-full flex items-center justify-center"
              >
                {totalItems}
              </motion.span>
            )}
          </Link>
        </ul>

        {/* MENU MOBILE - Botões */}
        <div className="flex md:hidden items-center gap-3">
          <Link to="/cart" className="relative">
            <ShoppingCart size={22} />
            {totalItems > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-2 -right-3 bg-black text-white text-xs font-semibold w-5 h-5 rounded-full flex items-center justify-center"
              >
                {totalItems}
              </motion.span>
            )}
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* MENU MOBILE - Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t bg-white overflow-hidden"
          >
            <div className="container mx-auto px-3 py-4 space-y-3">
              <Link
                to="/products"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors font-medium"
              >
                Produtos
              </Link>
              
              <Link
                to="/register"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 py-3 px-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-semibold"
              >
                <User size={18} />
                Criar Conta
              </Link>

              <Link
                to="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors font-medium text-center"
              >
                Já tenho conta
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header