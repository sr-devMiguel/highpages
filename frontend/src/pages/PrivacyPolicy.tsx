import { motion } from "framer-motion"
import { Shield } from "lucide-react"

const PrivacyPolicy = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto py-8 md:py-12 px-4"
    >
      <div className="flex items-center gap-3 mb-6">
        <Shield className="text-black" size={32} />
        <h1 className="text-3xl md:text-4xl font-bold">Política de Privacidade</h1>
      </div>

      <div className="prose prose-gray max-w-none space-y-6 text-gray-700">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">1. Informações que Coletamos</h2>
          <p>
            A High Vision coleta informações que você nos fornece diretamente, como nome, e-mail, 
            endereço de entrega e informações de pagamento quando você cria uma conta ou realiza uma compra.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">2. Como Usamos suas Informações</h2>
          <p>Utilizamos suas informações para:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Processar e entregar seus pedidos</li>
            <li>Enviar atualizações sobre seu pedido</li>
            <li>Melhorar nossos produtos e serviços</li>
            <li>Enviar ofertas e novidades (com seu consentimento)</li>
            <li>Prevenir fraudes e manter a segurança</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">3. Compartilhamento de Dados</h2>
          <p>
            Não vendemos suas informações pessoais. Compartilhamos dados apenas com prestadores de 
            serviços necessários (transportadoras, processadores de pagamento) para completar sua compra.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">4. Segurança</h2>
          <p>
            Utilizamos medidas de segurança técnicas e organizacionais para proteger suas informações 
            contra acesso não autorizado, perda ou alteração.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">5. Seus Direitos</h2>
          <p>Você tem direito a:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Acessar seus dados pessoais</li>
            <li>Corrigir informações incorretas</li>
            <li>Solicitar exclusão de seus dados</li>
            <li>Retirar consentimento para comunicações de marketing</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">6. Cookies</h2>
          <p>
            Utilizamos cookies para melhorar sua experiência de navegação, lembrar suas preferências 
            e analisar o tráfego do site. Você pode gerenciar cookies nas configurações do navegador.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">7. Contato</h2>
          <p>
            Para questões sobre privacidade, entre em contato: <br />
            <strong>Email:</strong> privacidade@highvision.com.br<br />
            <strong>WhatsApp:</strong> (32) 98819-2438
          </p>
        </section>

        <p className="text-sm text-gray-500 mt-8 pt-6 border-t">
          Última atualização: {new Date().toLocaleDateString('pt-BR')}
        </p>
      </div>
    </motion.div>
  )
}

export default PrivacyPolicy