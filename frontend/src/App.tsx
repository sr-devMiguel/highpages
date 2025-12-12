import { Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import { CartProvider } from "./components/context/CartContext"
import { ToastProvider } from "./components/context/ToastContext"
import Home from "./pages/Home"
import Products from "./pages/Products"
import ProductDetails from "./pages/ProductDetails"
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout"
import Login from "./pages/Login"
import Register from "./pages/Register"
import PrivacyPolicy from "./pages/PrivacyPolicy"
import TermsOfUse from "./pages/TermsOfUse"
import Returns from "./pages/Returns"
import Shipping from "./pages/Shipping"
import About from "./pages/About"
import Layout from "./components/templates/Layout"
import ScrollToTop from "./components/context/ScrollToTop" 

const App: React.FC = () => {
  const location = useLocation()

  return (
    <ToastProvider>
      <CartProvider>
        <ScrollToTop /> 
        <Layout>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/privacidade" element={<PrivacyPolicy />} />
              <Route path="/termos" element={<TermsOfUse />} />
              <Route path="/trocas" element={<Returns />} />
              <Route path="/envio" element={<Shipping />} />
              <Route path="/sobre" element={<About />} />
            </Routes>
          </AnimatePresence>
        </Layout>
      </CartProvider>
    </ToastProvider>
  )
}

export default App