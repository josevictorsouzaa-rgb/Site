import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-black text-text-main dark:text-white mb-4">Fale Conosco</h1>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Tem alguma dúvida sobre peças, compatibilidade ou pedidos? Nossa equipe de especialistas está pronta para ajudar.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="bg-white dark:bg-surface-dark rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-sm">
          <h2 className="text-2xl font-bold mb-6">Envie uma mensagem</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Nome</label>
                <input type="text" className="w-full rounded-lg border-gray-300 dark:bg-gray-800 dark:border-gray-600" placeholder="Seu nome" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input type="email" className="w-full rounded-lg border-gray-300 dark:bg-gray-800 dark:border-gray-600" placeholder="seu@email.com" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Assunto</label>
              <select className="w-full rounded-lg border-gray-300 dark:bg-gray-800 dark:border-gray-600">
                <option>Dúvida sobre Produto</option>
                <option>Status do Pedido</option>
                <option>Trocas e Devoluções</option>
                <option>Orçamento para Atacado</option>
                <option>Outros</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Mensagem</label>
              <textarea rows={5} className="w-full rounded-lg border-gray-300 dark:bg-gray-800 dark:border-gray-600" placeholder="Como podemos ajudar?"></textarea>
            </div>
            <button className="w-full bg-primary text-white py-3 rounded-lg font-bold hover:bg-primary-dark transition-colors">
              Enviar Mensagem
            </button>
          </form>
        </div>

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-6">Informações de Contato</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="size-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-primary dark:text-blue-400">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Nossa Loja</h3>
                  <p className="text-gray-500">Av. Paulista, 1000 - Bela Vista</p>
                  <p className="text-gray-500">São Paulo - SP, 01310-100</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="size-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-primary dark:text-blue-400">
                  <span className="material-symbols-outlined">call</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Telefone & WhatsApp</h3>
                  <p className="text-gray-500">(11) 9999-9999</p>
                  <p className="text-gray-500 text-sm mt-1">Segunda a Sexta: 08h às 18h</p>
                  <p className="text-gray-500 text-sm">Sábado: 08h às 12h</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="size-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-primary dark:text-blue-400">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Email</h3>
                  <p className="text-gray-500">vendas@lubel.com.br</p>
                  <p className="text-gray-500">sac@lubel.com.br</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-200 dark:bg-gray-800 h-64 rounded-2xl flex items-center justify-center">
             <span className="text-gray-500 flex flex-col items-center">
               <span className="material-symbols-outlined text-4xl mb-2">map</span>
               Mapa de Localização
             </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;