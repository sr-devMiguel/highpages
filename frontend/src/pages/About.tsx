import { motion } from "framer-motion"
import { Heart, Target, Users, Sparkles } from "lucide-react"
import { Link } from "react-router-dom"

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-6xl mx-auto py-8 md:py-12 px-4"
    >
      {/* Hero Section */}
      <div className="text-center mb-12">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Sobre a High Vision
        </motion.h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Mais do que roupas, somos um estilo de vida que celebra a autenticidade 
          e a expressão individual.
        </p>
      </div>

      {/* Nossa História */}
      <section className="mb-16">
        <div className="bg-gradient-to-r from-gray-900 to-gray-700 text-white rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-4">Nossa História</h2>
          <p className="text-lg leading-relaxed mb-4">
            A High Vision nasceu em 2024 com um propósito claro: revolucionar o streetwear brasileiro. 
            Fundada por apaixonados por moda urbana, nossa marca combina design inovador com 
            qualidade excepcional.
          </p>
          <p className="text-lg leading-relaxed">
            Acreditamos que a moda é uma forma de expressão pessoal. Por isso, cada peça é 
            cuidadosamente desenvolvida para que você possa mostrar quem realmente é, com 
            confiança e estilo.
          </p>
        </div>
      </section>

      {/* Valores */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-10">Nossos Valores</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white border rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition-all"
          >
            <Heart className="w-12 h-12 mx-auto mb-4 text-red-500" />
            <h3 className="font-bold text-lg mb-2">Paixão</h3>
            <p className="text-gray-600 text-sm">
              Amamos o que fazemos e isso se reflete em cada detalhe
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white border rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition-all"
          >
            <Target className="w-12 h-12 mx-auto mb-4 text-blue-500" />
            <h3 className="font-bold text-lg mb-2">Qualidade</h3>
            <p className="text-gray-600 text-sm">
              Materiais premium e acabamento impecável
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white border rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition-all"
          >
            <Users className="w-12 h-12 mx-auto mb-4 text-green-500" />
            <h3 className="font-bold text-lg mb-2">Comunidade</h3>
            <p className="text-gray-600 text-sm">
              Construímos juntos uma família de estilo
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white border rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition-all"
          >
            <Sparkles className="w-12 h-12 mx-auto mb-4 text-purple-500" />
            <h3 className="font-bold text-lg mb-2">Inovação</h3>
            <p className="text-gray-600 text-sm">
              Sempre à frente, criando tendências
            </p>
          </motion.div>
        </div>
      </section>

      {/* Missão e Visão */}
      <section className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="bg-gray-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold mb-4">Nossa Missão</h3>
          <p className="text-gray-700 leading-relaxed">
            Fornecer peças de streetwear de alta qualidade que permitam às pessoas 
            expressarem sua individualidade e confiança através do estilo, enquanto 
            construímos uma comunidade autêntica e inspiradora.
          </p>
        </div>

        <div className="bg-gray-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold mb-4">Nossa Visão</h3>
          <p className="text-gray-700 leading-relaxed">
            Ser a marca de streetwear mais influente do Brasil, reconhecida pela 
            qualidade excepcional, design inovador e pelo impacto positivo na vida 
            de nossa comunidade.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center bg-black text-white rounded-2xl p-12">
        <h2 className="text-3xl font-bold mb-4">Faça Parte da High Vision</h2>
        <p className="text-lg mb-6 opacity-90">
          Explore nossa coleção e encontre peças que definem seu estilo
        </p>
        <Link
          to="/products"
          className="inline-block bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all hover:shadow-lg"
        >
          Ver Produtos
        </Link>
      </section>
    </motion.div>
  )
}

export default About