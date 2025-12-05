import React from "react"

const Checkout: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8 text-gray-900">
        Finalizar Compra
      </h1>

      <p className="text-gray-600 mb-10">
        Em breve: integração com <strong>Vega Checkout</strong>, cálculo de frete, endereço automático e muito mais.
      </p>

      <form className="space-y-8">

        {/* Dados Pessoais */}
        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-800">Dados Pessoais</h2>

          <div className="space-y-2">
            <label className="font-medium text-gray-700">Nome completo</label>
            <input
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-gray-900 outline-none"
              placeholder="Ex: João Silva"
            />
          </div>

          <div className="space-y-2">
            <label className="font-medium text-gray-700">Telefone</label>
            <input
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-gray-900 outline-none"
              placeholder="Ex: (32) 99999-0000"
            />
          </div>
        </div>

        {/* Endereço */}
        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-800">Endereço de Entrega</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <div className="space-y-2">
              <label className="font-medium text-gray-700">CEP</label>
              <input
                className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-gray-900 outline-none"
                placeholder="Ex: 36000-000"
              />
            </div>

            <div className="space-y-2">
              <label className="font-medium text-gray-700">Cidade</label>
              <input
                className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-gray-900 outline-none"
                placeholder="Ex: Juiz de Fora"
              />
            </div>

            <div className="space-y-2">
              <label className="font-medium text-gray-700">Estado</label>
              <input
                className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-gray-900 outline-none"
                placeholder="Ex: MG"
              />
            </div>

            <div className="space-y-2">
              <label className="font-medium text-gray-700">Número</label>
              <input
                className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-gray-900 outline-none"
                placeholder="Ex: 120"
              />
            </div>

          </div>

          <div className="space-y-2">
            <label className="font-medium text-gray-700">Endereço</label>
            <input
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-gray-900 outline-none"
              placeholder="Ex: Rua Principal"
            />
          </div>

          <div className="space-y-2">
            <label className="font-medium text-gray-700">Complemento</label>
            <input
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-gray-900 outline-none"
              placeholder="Ex: Apt 203, Bloco B"
            />
          </div>
        </div>

        {/* Botão Final */}
        <button
          className="w-full bg-gray-900 text-white py-4 rounded-xl text-lg font-semibold shadow-md hover:bg-gray-800 transition"
        >
          Finalizar Pedido
        </button>
      </form>
    </div>
  )
}

export default Checkout
