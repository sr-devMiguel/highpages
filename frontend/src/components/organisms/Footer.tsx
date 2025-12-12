import { Instagram, MessageCircle, Facebook, Mail, MapPin, Phone } from "lucide-react"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="bg-[#000000] text-gray-300 mt-12">
      <div className="container mx-auto px-4 md:px-6 py-12">
        
        {/* Grid Principal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Seção 1 - Sobre */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-lg mb-4">NOSSA MISSÃO</h3>
            <p className="text-sm leading-relaxed">
              A High Vision nasceu para impulsionar a evolução da moda streetwear. 
              Criamos peças exclusivas que expressam personalidade e estilo.
            </p>
          </div>

          {/* Seção 2 - Links Rápidos */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-lg mb-4">LINKS RÁPIDOS</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/products" className="hover:text-white transition-colors">
                  Produtos
                </Link>
              </li>
              <li>
                <Link to="/cart" className="hover:text-white transition-colors">
                  Carrinho
                </Link>
              </li>
              <li>
                <Link to="/register" className="hover:text-white transition-colors">
                  Criar Conta
                </Link>
              </li>
              <li>
                <Link to="/login" className="hover:text-white transition-colors">
                  Login
                </Link>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  FAQ / Ajuda
                </a>
              </li>
            </ul>
          </div>

          {/* Seção 3 - Políticas */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-lg mb-4">INFORMAÇÕES</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/privacidade" className="hover:text-white transition-colors">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link to="/termos" className="hover:text-white transition-colors">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link to="/trocas" className="hover:text-white transition-colors">
                  Trocas e Devoluções
                </Link>
              </li>
              <li>
                <Link to="/envio" className="hover:text-white transition-colors">
                  Política de Envio
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="hover:text-white transition-colors">
                  Sobre Nós
                </Link>
              </li>
            </ul>
          </div>

          {/* Seção 4 - Contato */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-lg mb-4">CONTATO</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={18} className="flex-shrink-0 mt-0.5" />
                <span>São Paulo, SP<br/>Brasil</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="flex-shrink-0" />
                <a href="tel:+5532988192438" className="hover:text-white transition-colors">
                  (32) 98819-2438
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="flex-shrink-0" />
                <a href="mailto:contato@highvision.com.br" className="hover:text-white transition-colors">
                  contato@highvision.com.br
                </a>
              </li>
            </ul>

            {/* Redes Sociais */}
            <div className="pt-4">
              <p className="text-sm font-semibold text-white mb-3">Siga-nos:</p>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/highvisionoficial/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors hover:scale-110 transform duration-200"
                  aria-label="Instagram"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="https://wa.me/5532988192438"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors hover:scale-110 transform duration-200"
                  aria-label="WhatsApp"
                >
                  <MessageCircle size={24} />
                </a>
                <a
                  href="#facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors hover:scale-110 transform duration-200"
                  aria-label="Facebook"
                >
                  <Facebook size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Separador */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            
            {/* Copyright */}
            <div className="text-sm text-center md:text-left">
              <p>&copy; {new Date().getFullYear()} High Vision. Todos os direitos reservados.</p>
              <p className="text-gray-500 text-xs mt-1">
                CNPJ: XX.XXX.XXX/0001-XX
              </p>
            </div>

            {/* Métodos de Pagamento */}
            <div className="flex items-center gap-3">
              <span className="text-xs text-gray-500 hidden sm:inline">Aceitamos:</span>
              <div className="flex gap-2 items-center">
                <div className="bg-white rounded px-2 py-1 text-xs font-bold text-gray-800">
                  VISA
                </div>
                <div className="bg-white rounded px-2 py-1 text-xs font-bold text-gray-800">
                  MASTER
                </div>
                <div className="bg-white rounded px-2 py-1 text-xs font-bold text-gray-800">
                  PIX
                </div>
                <div className="bg-white rounded px-2 py-1 text-xs font-bold text-gray-800">
                  BOLETO
                </div>
              </div>
            </div>

            {/* Desenvolvido por */}
            <p className="text-sm opacity-80">
         <a href="https://elevatechhome.netlify.app/">
           Desenvolvido por <span className="font-semibold text-white">ElevaTech</span>
         </a>
        </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer