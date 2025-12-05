import React from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

import ProductCard from "../components/molecules/ProductCard"
import Text from "../components/atoms/Text"

import MoletomAzul from "../assets/products/moletom-azul.png"
import MoletomVerde from "../assets/products/moletom-verde.png"
import CamisetaEstampa from "../assets/products/camiseta-estampa.png"

const featured = [
  { id: "1", name: "Moletom Azul Premium", price: 149.9, image: MoletomAzul, category: "Moletom" },
  { id: "2", name: "Moletom Verde Vision", price: 159.9, image: MoletomVerde, category: "Moletom" },
  { id: "3", name: "Camiseta Estampa Street", price: 79.9, image: CamisetaEstampa, category: "Camiseta" },
]

const Home: React.FC = () => {
  return (
    <div className="space-y-20 pb-10">

      {/* HERO */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-24 rounded-2xl shadow-xl text-center px-6"
      >
        <h1 className="text-5xl font-extrabold tracking-tight drop-shadow">
          High Vision Store
        </h1>
        <p className="text-lg mt-3 opacity-90">
          Moda Premium – Estilo | Qualidade | Exclusividade
        </p>

        <motion.div whileHover={{ scale: 1.05 }} className="mt-8">
          <Link
            to="/products"
            className="inline-block bg-white text-gray-900 px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-200 transition"
          >
            Ver Produtos
          </Link>
        </motion.div>
      </motion.section>

      {/* PRODUTOS EM DESTAQUE */}
      <section className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-8 text-center"
        >
          Produtos em Destaque
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {featured.map((p, index) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
            >
              <ProductCard {...p} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <motion.section
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center py-12 bg-gray-100 rounded-xl shadow-lg mx-4"
      >
        <Text as="h3" className="text-2xl font-bold">
          Quer ver mais?
        </Text>

        <motion.div whileHover={{ scale: 1.05 }}>
          <Link
            to="/products"
            className="mt-5 inline-block bg-gray-900 text-white px-8 py-3 rounded-full shadow-lg font-medium"
          >
            Explorar Catálogo Completo
          </Link>
        </motion.div>
      </motion.section>
    </div>
  )
}

export default Home
import React from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

import ProductCard from "../components/molecules/ProductCard"
import Text from "../components/atoms/Text"

import MoletomAzul from "../assets/products/moletom-azul.png"
import MoletomVerde from "../assets/products/moletom-verde.png"
import CamisetaEstampa from "../assets/products/camiseta-estampa.png"

const featured = [
  { id: "1", name: "Moletom Azul Premium", price: 149.9, image: MoletomAzul, category: "Moletom" },
  { id: "2", name: "Moletom Verde Vision", price: 159.9, image: MoletomVerde, category: "Moletom" },
  { id: "3", name: "Camiseta Estampa Street", price: 79.9, image: CamisetaEstampa, category: "Camiseta" },
]

const Home: React.FC = () => {
  return (
    <div className="space-y-20 pb-10">

      {/* HERO */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-24 rounded-2xl shadow-xl text-center px-6"
      >
        <h1 className="text-5xl font-extrabold tracking-tight drop-shadow">
          High Vision Store
        </h1>
        <p className="text-lg mt-3 opacity-90">
          Moda Premium – Estilo | Qualidade | Exclusividade
        </p>

        <motion.div whileHover={{ scale: 1.05 }} className="mt-8">
          <Link
            to="/products"
            className="inline-block bg-white text-gray-900 px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-200 transition"
          >
            Ver Produtos
          </Link>
        </motion.div>
      </motion.section>

      {/* PRODUTOS EM DESTAQUE */}
      <section className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-8 text-center"
        >
          Produtos em Destaque
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {featured.map((p, index) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
            >
              <ProductCard {...p} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <motion.section
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center py-12 bg-gray-100 rounded-xl shadow-lg mx-4"
      >
        <Text as="h3" className="text-2xl font-bold">
          Quer ver mais?
        </Text>

        <motion.div whileHover={{ scale: 1.05 }}>
          <Link
            to="/products"
            className="mt-5 inline-block bg-gray-900 text-white px-8 py-3 rounded-full shadow-lg font-medium"
          >
            Explorar Catálogo Completo
          </Link>
        </motion.div>
      </motion.section>
    </div>
  )
}

export default Home
