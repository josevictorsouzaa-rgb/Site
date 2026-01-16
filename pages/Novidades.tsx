import React from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../mockData';

const Novidades: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-gradient-to-r from-purple-900 to-primary rounded-2xl p-8 mb-12 text-white relative overflow-hidden">
        <div className="relative z-10 max-w-2xl">
          <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-bold mb-4">Lançamentos da Semana</span>
          <h1 className="text-4xl font-black mb-4">Novidades em Tecnologia Automotiva</h1>
          <p className="text-blue-100 text-lg mb-8">
            Confira as últimas chegadas em nosso estoque. Peças de alta performance e acessórios exclusivos para o seu carro.
          </p>
        </div>
        <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-black/20 to-transparent"></div>
        <span className="material-symbols-outlined absolute -right-10 -bottom-20 text-[300px] text-white/5 rotate-12">new_releases</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {PRODUCTS.map((product) => (
          <div key={product.id} className="bg-white dark:bg-surface-dark rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-lg transition-all group relative">
            <div className="absolute top-3 left-3 bg-green-500 text-white text-[10px] font-bold px-2 py-1 rounded uppercase z-10">Novo</div>
            <div className="relative aspect-square p-4 bg-gray-50 dark:bg-gray-800 flex items-center justify-center">
              <img src={product.image} alt={product.name} className="w-full h-full object-contain group-hover:scale-105 transition-transform mix-blend-multiply dark:mix-blend-normal" />
            </div>
            <div className="p-4">
              <p className="text-xs text-gray-500 mb-1">{product.brand}</p>
              <h3 className="font-semibold text-text-main dark:text-white text-sm mb-2 line-clamp-2 min-h-[40px]">{product.name}</h3>
              <div className="flex items-center justify-between mt-4">
                <span className="text-lg font-bold text-primary dark:text-blue-400">R$ {product.price.toFixed(2).replace('.', ',')}</span>
                <Link to={`/produto/${product.id}`} className="size-8 rounded-lg bg-primary text-white flex items-center justify-center hover:bg-primary-dark transition-colors">
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        ))}
        {/* Duplicating products to fill grid */}
        {PRODUCTS.slice(0, 3).map((product) => (
          <div key={`${product.id}-dup`} className="bg-white dark:bg-surface-dark rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-lg transition-all group relative">
             <div className="absolute top-3 left-3 bg-green-500 text-white text-[10px] font-bold px-2 py-1 rounded uppercase z-10">Novo</div>
            <div className="relative aspect-square p-4 bg-gray-50 dark:bg-gray-800 flex items-center justify-center">
              <img src={product.image} alt={product.name} className="w-full h-full object-contain group-hover:scale-105 transition-transform mix-blend-multiply dark:mix-blend-normal" />
            </div>
            <div className="p-4">
              <p className="text-xs text-gray-500 mb-1">{product.brand}</p>
              <h3 className="font-semibold text-text-main dark:text-white text-sm mb-2 line-clamp-2 min-h-[40px]">{product.name}</h3>
              <div className="flex items-center justify-between mt-4">
                <span className="text-lg font-bold text-primary dark:text-blue-400">R$ {product.price.toFixed(2).replace('.', ',')}</span>
                <Link to={`/produto/${product.id}`} className="size-8 rounded-lg bg-primary text-white flex items-center justify-center hover:bg-primary-dark transition-colors">
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Novidades;