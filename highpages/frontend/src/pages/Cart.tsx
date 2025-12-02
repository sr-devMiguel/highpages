import { Link } from "react-router-dom"
import { useCart } from "../components/context/CartContext"

const Cart: React.FC = () => {
  const { cartItems, removeFromCart } = useCart()

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="max-w-4xl mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6">Seu Carrinho</h1>

      {cartItems.length === 0 ? (
        <p className="text-center">Seu carrinho está vazio.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border-b py-4"
            >
              <span>{item.name} (x{item.quantity})</span>
              <strong>R$ {item.price}</strong>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-600"
              >
                Remover
              </button>
            </div>
          ))}

          <p className="text-xl font-semibold mt-6">Total: R$ {total.toFixed(2)}</p>

          <Link
            to="/checkout"
            className="mt-4 inline-block bg-green-600 text-white px-6 py-3 rounded-lg"
          >
            Finalizar Compra
          </Link>
        </div>
      )}
    </div>
  )
}

export default Cart
