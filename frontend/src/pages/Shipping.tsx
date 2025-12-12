import { motion } from "framer-motion"
import { Truck, Package, MapPin, Clock } from "lucide-react"

const Shipping = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto py-8 md:py-12 px-4"
    >
      <div className="flex items-center gap-3 mb-6">
        <Truck className="text-black" size={32} />
        <h1 className="text-3xl md:text-4xl font-bold">Política de Envio</h1>
      </div>

      <div className="prose prose-gray max-w-none space-y-6 text-gray-700">
        
        {/* Cards informativos */}
        <div className="grid sm:grid-cols-2 gap-4 my-8">
          <div className="bg-gray-50 p-6 rounded-xl">
            <Clock className="mb-3 text-black" size={28} />
            <h3 className="font-bold text-lg mb-2">Prazo de Envio</h3>
            <p className="text-sm">Processamento em até 2 dias úteis + prazo dos Correios</p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl">
            <Package className="mb-3 text-black" size={28} />
            <h3 className="font-bold text-lg mb-2">Embalagem Segura</h3>
            <p className="text-sm">Produtos protegidos e embalados com cuidado</p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl">
            <MapPin className="mb-3 text-black" size={28} />
            <h3 className="font-bold text-lg mb-2">Rastreamento</h3>
            <p className="text-sm">Código de rastreio enviado por email</p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl">
            <Truck className="mb-3 text-black" size={28} />
            <h3 className="font-bold text-lg mb-2">Frete Grátis</h3>
            <p className="text-sm">A partir de R$ 299 para todo Brasil</p>
          </div>
        </div>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Prazos de Entrega</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border rounded-lg">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 text-left font-semibold">Região</th>
                  <th className="px-6 py-3 text-left font-semibold">Prazo</th>
                  <th className="px-6 py-3 text-left font-semibold">Frete</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="px-6 py-4">Sudeste</td>
                  <td className="px-6 py-4">3 a 7 dias úteis</td>
                  <td className="px-6 py-4">A partir de R$ 15</td>
                </tr>
                <tr>
                  <td className="px-6 py-4">Sul</td>
                  <td className="px-6 py-4">5 a 10 dias úteis</td>
                  <td className="px-6 py-4">A partir de R$ 18</td>
                </tr>
                <tr>
                  <td className="px-6 py-4">Centro-Oeste</td>
                  <td className="px-6 py-4">7 a 12 dias úteis</td>
                  <td className="px-6 py-4">A partir de R$ 20</td>
                </tr>
                <tr>
                  <td className="px-6 py-4">Nordeste</td>
                  <td className="px-6 py-4">8 a 15 dias úteis</td>
                  <td className="px-6 py-4">A partir de R$ 22</td>
                </tr>
                <tr>
                  <td className="px-6 py-4">Norte</td>
                  <td className="px-6 py-4">10 a 20 dias úteis</td>
                  <td className="px-6 py-4">A partir de R$ 25</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            * Prazos podem variar conforme localidade e condições dos Correios
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Como Funciona</h2>
          <ol className="space-y-4">
            <li>
              <strong>1. Confirmação do Pedido</strong><br />
              Após confirmação do pagamento, seu pedido entra em processamento.
            </li>
            <li>
              <strong>2. Separação e Embalagem</strong><br />
              Seu produto é cuidadosamente separado e embalado (até 2 dias úteis).
            </li>
            <li>
              <strong>3. Postagem</strong><br />
              O pedido é enviado pelos Correios e você recebe o código de rastreio por email.
            </li>
            <li>
              <strong>4. Acompanhamento</strong><br />
              Use o código de rastreio para acompanhar sua entrega no site dos Correios.
            </li>
            <li>
              <strong>5. Recebimento</strong><br />
              Você recebe seu produto no endereço cadastrado!
            </li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Endereço de Entrega</h2>
          <p>
            Certifique-se de que o endereço de entrega está correto e completo, incluindo 
            número, complemento e CEP. Não nos responsabilizamos por atrasos causados por 
            informações incorretas.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Problemas na Entrega</h2>
          <p>Se você tiver problemas com sua entrega:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Entre em contato conosco imediatamente</li>
            <li>Tenha o código de rastreio em mãos</li>
            <li>Verifique se alguém recebeu em seu nome</li>
            <li>Consulte na agência dos Correios mais próxima</li>
          </ul>
        </section>

        <div className="bg-green-50 border-l-4 border-green-500 p-4 mt-8">
          <p className="text-green-900">
            <strong>🎁 Frete Grátis!</strong> Para compras acima de R$ 299, o frete é por nossa conta 
            para todo o Brasil.
          </p>
        </div>

        <p className="text-sm text-gray-500 mt-8 pt-6 border-t">
          Última atualização: {new Date().toLocaleDateString('pt-BR')}
        </p>
      </div>
    </motion.div>
  )
}

export default Shipping