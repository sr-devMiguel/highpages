import React from 'react'
import ProductCard from '../components/molecules/ProductCard'
import useProducts from '../hooks/useProducts'

const Products: React.FC = () => {
  const { products, loading, error } = useProducts()

  if (loading) return <p className="text-center mt-10">Carregando produtos...</p>
  if (error) return <p className="text-center text-red-600 mt-10">Erro ao carregar produtos.</p>

  return (
    <main aria-label="Produtos" className="px-6 py-10 max-w-7xl mx-auto">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight">Nossos Produtos</h1>
        <p className="text-gray-600 mt-2">Moda streetwear exclusiva da High Vision</p>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" aria-live="polite">
        {products.map((p) => (
          <ProductCard key={p.id} {...p} />
        ))}
      </section>
    </main>
  )
}

export default Products
