import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-primary via-primary-dark to-[#0f0f2a] pt-20 pb-32 px-4 relative overflow-hidden min-h-[80vh] flex items-center justify-center">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 pointer-events-none animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/20 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center">
          
          <span className="inline-block px-4 py-1.5 bg-blue-500/20 text-blue-200 rounded-full text-xs font-bold uppercase tracking-wider mb-8 border border-blue-400/20 animate-fade-in-up">
            Especialistas em Autopeças desde 1998
          </span>
          
          <h1 className="text-white text-5xl lg:text-7xl font-black mb-8 leading-tight tracking-tight animate-fade-in-up delay-100">
            Lubel Auto Peças <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">Sua Distribuidora de Confiança</span>
          </h1>
          
          <p className="max-w-2xl text-lg text-gray-300 mb-12 leading-relaxed animate-fade-in-up delay-200">
            Oferecemos um catálogo completo com as melhores marcas do mercado para oficinas e autocenters. 
            Cadastre-se para acessar preços exclusivos e disponibilidade em tempo real.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-fade-in-up delay-300">
            <Link 
              to="/login"
              className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-white/10 transition-all transform hover:-translate-y-1 hover:shadow-2xl"
            >
              Acessar Catálogo
            </Link>
            <Link 
              to="/contato"
              className="bg-transparent border-2 border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105"
            >
              Fale Conosco
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center p-6 rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors duration-300 group cursor-default">
              <div className="size-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl group-hover:scale-110 transition-transform duration-300">
                <span className="material-symbols-outlined">inventory_2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Estoque Variado</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Mais de 20.000 itens em estoque, cobrindo linha leve, pesada e utilitários.
              </p>
            </div>
            <div className="text-center p-6 rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors duration-300 group cursor-default">
              <div className="size-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl group-hover:scale-110 transition-transform duration-300">
                <span className="material-symbols-outlined">local_shipping</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Logística Rápida</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Entregas agilizadas para toda a região metropolitana e despacho imediato para todo o Brasil.
              </p>
            </div>
            <div className="text-center p-6 rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors duration-300 group cursor-default">
              <div className="size-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl group-hover:scale-110 transition-transform duration-300">
                <span className="material-symbols-outlined">verified</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Qualidade Garantida</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Trabalhamos apenas com peças originais e de reposição das marcas mais conceituadas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quem Somos */}
      <section className="py-24 bg-gray-50 dark:bg-surface-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Quem Somos</h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                A Lubel Auto Peças iniciou suas atividades em 1998 com o objetivo de fornecer soluções de qualidade para o mercado de reposição automotiva.
              </p>
              <p>
                Ao longo dos anos, consolidamos parcerias com os principais fabricantes mundiais, garantindo aos nossos clientes acesso às melhores tecnologias e peças do mercado.
              </p>
              <p>
                Nossa missão é manter seu negócio e seu veículo em movimento, oferecendo um atendimento técnico especializado e uma plataforma de compras ágil e segura.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 bg-gray-200 dark:bg-gray-800 rounded-2xl h-[400px] flex items-center justify-center relative overflow-hidden group shadow-xl">
             {/* Placeholder for an image */}
             <span className="material-symbols-outlined text-9xl text-gray-400 dark:text-gray-600 opacity-20 group-hover:scale-110 transition-transform duration-700">storefront</span>
             <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
             <div className="absolute bottom-6 left-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <p className="font-bold text-lg">Sede Administrativa</p>
                <p className="text-sm opacity-80">São Paulo, SP</p>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;