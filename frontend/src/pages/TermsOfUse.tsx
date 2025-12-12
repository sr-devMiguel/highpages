import { motion } from "framer-motion"
import { FileText } from "lucide-react"

const TermsOfUse = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto py-8 md:py-12 px-4"
    >
      <div className="flex items-center gap-3 mb-6">
        <FileText className="text-black" size={32} />
        <h1 className="text-3xl md:text-4xl font-bold">Termos de Uso</h1>
      </div>

      <div className="prose prose-gray max-w-none space-y-6 text-gray-700">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">1. Aceitação dos Termos</h2>
          <p>
            Ao acessar e usar o site da High Vision, você concorda com estes Termos de Uso. 
            Se não concordar, por favor, não utilize nossos serviços.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">2. Uso do Site</h2>
          <p>Você concorda em usar nosso site apenas para:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Visualizar produtos e realizar compras legítimas</li>
            <li>Criar uma conta com informações verdadeiras</li>
            <li>Respeitar os direitos de propriedade intelectual</li>
          </ul>
          <p className="mt-3">É proibido:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Usar o site para atividades ilegais</li>
            <li>Tentar acessar áreas restritas do sistema</li>
            <li>Copiar ou reproduzir conteúdo sem autorização</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">3. Conta de Usuário</h2>
          <p>
            Você é responsável por manter a confidencialidade de sua senha e por todas as atividades 
            realizadas em sua conta. Notifique-nos imediatamente sobre qualquer uso não autorizado.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">4. Produtos e Preços</h2>
          <p>
            Fazemos todo o possível para garantir que as informações de produtos e preços estejam corretas. 
            No entanto, erros podem ocorrer. Reservamo-nos o direito de corrigir preços e cancelar pedidos 
            em caso de erros evidentes.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">5. Pedidos e Pagamentos</h2>
          <p>
            Ao fazer um pedido, você está fazendo uma oferta de compra. Reservamo-nos o direito de recusar 
            qualquer pedido. O pagamento deve ser realizado através dos métodos disponíveis no site.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">6. Propriedade Intelectual</h2>
          <p>
            Todo o conteúdo do site (textos, imagens, logos, designs) é propriedade da High Vision e 
            protegido por leis de direitos autorais. O uso não autorizado é proibido.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">7. Limitação de Responsabilidade</h2>
          <p>
            A High Vision não se responsabiliza por danos indiretos, incidentais ou consequenciais 
            resultantes do uso ou impossibilidade de uso do site.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">8. Modificações</h2>
          <p>
            Reservamo-nos o direito de modificar estes termos a qualquer momento. 
            Alterações entram em vigor imediatamente após publicação no site.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">9. Lei Aplicável</h2>
          <p>
            Estes termos são regidos pelas leis brasileiras. Qualquer disputa será resolvida nos 
            tribunais do Brasil.
          </p>
        </section>

        <p className="text-sm text-gray-500 mt-8 pt-6 border-t">
          Última atualização: {new Date().toLocaleDateString('pt-BR')}
        </p>
      </div>
    </motion.div>
  )
}

export default TermsOfUse