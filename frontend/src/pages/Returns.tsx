import { motion } from "framer-motion"
import { RefreshCw } from "lucide-react"

const Returns = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto py-8 md:py-12 px-4"
    >
      <div className="flex items-center gap-3 mb-6">
        <RefreshCw className="text-black" size={32} />
        <h1 className="text-3xl md:text-4xl font-bold">Trocas e Devoluções</h1>
      </div>

      <div className="prose prose-gray max-w-none space-y-6 text-gray-700">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Prazo para Trocas e Devoluções</h2>
          <p>
            Você tem até <strong>30 dias</strong> após o recebimento do produto para solicitar troca ou devolução, 
            conforme o Código de Defesa do Consumidor.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Condições para Troca/Devolução</h2>
          <p>O produto deve estar:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Em perfeito estado, sem sinais de uso</li>
            <li>Com todas as etiquetas originais</li>
            <li>Na embalagem original</li>
            <li>Acompanhado da nota fiscal</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Como Solicitar</h2>
          <div className="bg-gray-50 rounded-lg p-6 space-y-4">
            <div>
              <h3 className="font-semibold text-lg mb-2">Passo 1: Entre em Contato</h3>
              <p>
                WhatsApp: <a href="https://wa.me/5532988192438" className="text-blue-600 hover:underline">(32) 98819-2438</a><br />
                Email: <a href="mailto:trocas@highvision.com.br" className="text-blue-600 hover:underline">trocas@highvision.com.br</a>
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">Passo 2: Informe</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Número do pedido</li>
                <li>Motivo da troca/devolução</li>
                <li>Produto que deseja trocar (se aplicável)</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">Passo 3: Envie o Produto</h3>
              <p>
                Após aprovação, você receberá instruções para postagem. O frete de devolução 
                é por conta do cliente, exceto em casos de defeito ou erro no envio.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">Passo 4: Aguarde</h3>
              <p>
                Após recebermos e analisarmos o produto (até 7 dias úteis), processaremos sua 
                troca ou reembolso.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Reembolso</h2>
          <p>
            O reembolso será processado na mesma forma de pagamento utilizada na compra e pode 
            levar até 2 faturas para aparecer no cartão de crédito, conforme política do banco.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Produtos com Defeito</h2>
          <p>
            Se o produto apresentar defeito de fabricação, entre em contato imediatamente. 
            Cobrimos o frete de devolução e processamos a troca ou reembolso com prioridade.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Casos Não Aceitos</h2>
          <p>Não aceitamos trocas/devoluções de:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Produtos usados ou lavados</li>
            <li>Produtos sem etiquetas ou embalagem</li>
            <li>Produtos personalizados ou sob encomenda</li>
            <li>Produtos em promoção (exceto defeito)</li>
          </ul>
        </section>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-8">
          <p className="text-blue-900">
            <strong>Dúvidas?</strong> Nossa equipe está pronta para ajudar! Entre em contato 
            via WhatsApp ou email.
          </p>
        </div>

        <p className="text-sm text-gray-500 mt-8 pt-6 border-t">
          Última atualização: {new Date().toLocaleDateString('pt-BR')}
        </p>
      </div>
    </motion.div>
  )
}

export default Returns