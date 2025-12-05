import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext"

const Header = () => {
  const { cartItems } = useCart()

  return (
    <header className="bg-white shadow-md py-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Catalago</Link>
        <ul className="flex space-x-6">
          <Link to="/products">Produtos</Link>
          <Link to="/cart">Carrinho ({cartItems.length})</Link>
        </ul>
      </nav>
    </header>
  )
}

export default Header
