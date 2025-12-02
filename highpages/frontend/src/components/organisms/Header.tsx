import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext"
import { ShoppingCart } from "lucide-react"

const Header = () => {
  const { totalItems } = useCart()

  return (
    <header className="bg-white shadow-sm py-4 sticky top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center px-4">
        
        {/* LOGO */}
        <Link 
          to="/" 
          className="text-2xl font-bold tracking-tight hover:opacity-80 transition"
        >
          Catálogo
        </Link>

        {/* MENU */}
        <ul className="flex items-center space-x-8 text-gray-800 font-medium">
          <Link 
            to="/products" 
            className="hover:text-black transition"
          >
            Produtos
          </Link>

          {/* CARRINHO COM BADGE */}
          <Link 
            to="/cart" 
            className="relative flex items-center hover:text-black transition"
          >
            <ShoppingCart size={22} />

            {totalItems > 0 && (
              <span 
                className="absolute -top-2 -right-3 bg-black text-white text-xs
                font-semibold w-5 h-5 rounded-full flex items-center justify-center animate-pulse"
              >
                {totalItems}
              </span>
            )}
          </Link>
        </ul>
      </nav>
    </header>
  )
}

export default Header
