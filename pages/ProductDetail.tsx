import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../mockData';

const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const product = PRODUCTS.find(p => p.id === id) || PRODUCTS[0];
  const [activeTab, setActiveTab] = useState<'descricao' | 'especificacoes' | 'aplicacoes'>('aplicacoes');
  const [qty, setQty] = useState(1);

  return (
    <div className="bg-gray-50 dark:bg-background-dark min-h-screen pb-12">
      {/* Breadcrumb */}
      <div className="bg-white dark:bg-surface-dark border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-12 flex items-center">
          <nav className="flex items-center text-xs text-gray-500 dark:text-gray-400">
            <Link to="/" className="hover:text-primary">Início</Link>
            <span className="material-symbols-outlined text-sm mx-2">chevron_right</span>
            <Link to="/catalogo" className="hover:text-primary">Catálogo</Link>
            <span className="material-symbols-outlined text-sm mx-2">chevron_right</span>
            <Link to="/catalogo" className="hover:text-primary">{product.category}</Link>
            <span className="material-symbols-outlined text-sm mx-2">chevron_right</span>
            <span className="text-text-main dark:text-white font-medium truncate max-w-[200px]">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Images */}
          <div className="lg:col-span-5">
            <div className="bg-white dark:bg-white/5 rounded-xl border border-gray-200 dark:border-gray-700 p-6 flex items-center justify-center aspect-square relative overflow-hidden group">
              <img 
                src={product.image} 
                alt={product.name} 
                className="max-w-full max-h-full object-contain mix-blend-multiply dark:mix-blend-normal hover:scale-110 transition-transform duration-500" 
              />
              <div className="absolute top-4 left-4">
                 <span className="bg-blue-100 text-primary text-xs font-bold px-2 py-1 rounded border border-blue-200">Original {product.brand}</span>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4 mt-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white dark:bg-white/5 border border-gray-200 dark:border-gray-700 rounded-lg aspect-square flex items-center justify-center p-2 cursor-pointer hover:border-primary transition-colors">
                  <img src={product.image} className="max-w-full max-h-full object-contain opacity-70 hover:opacity-100" />
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Info & Buy */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="mb-4">
              <h1 className="text-2xl md:text-3xl font-bold text-text-main dark:text-white mb-2 leading-tight">{product.name}</h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                <span className="flex items-center gap-1">
                  <span className="font-semibold text-gray-900 dark:text-gray-200">Marca:</span> {product.brand}
                </span>
                <span className="w-px h-4 bg-gray-300 dark:bg-gray-700"></span>
                <span className="flex items-center gap-1">
                  <span className="font-semibold text-gray-900 dark:text-gray-200">Cód. Peça:</span> {product.sku}
                </span>
                <span className="w-px h-4 bg-gray-300 dark:bg-gray-700"></span>
                <div className="flex items-center text-yellow-400">
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="ml-1 text-gray-700 dark:text-gray-300 font-medium">{product.rating}</span>
                  <span className="text-gray-400 ml-1">({product.reviews} avaliações)</span>
                </div>
              </div>
            </div>

            {/* Vehicle Compatibility Banner */}
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-3 flex items-start gap-3 mb-6">
              <span className="material-symbols-outlined text-green-600 dark:text-green-400 mt-0.5">check_circle</span>
              <div>
                <p className="text-sm font-bold text-green-800 dark:text-green-300">Verifique a compatibilidade</p>
                <p className="text-xs text-green-700 dark:text-green-400">Confira a lista de aplicações abaixo para garantir que esta peça serve no seu veículo.</p>
              </div>
            </div>

            <div className="bg-white dark:bg-surface-dark p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm mb-6">
              <div className="flex items-end gap-3 mb-2">
                 <span className="text-4xl font-bold text-primary dark:text-blue-400">R$ {product.price.toFixed(2).replace('.', ',')}</span>
                 {product.originalPrice && (
                   <span className="text-lg text-gray-400 line-through mb-1">R$ {product.originalPrice.toFixed(2).replace('.', ',')}</span>
                 )}
              </div>
              <p className="text-sm text-green-600 dark:text-green-400 font-medium mb-6">
                5% de desconto no PIX ou em até 12x no cartão
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-lg h-12 w-32 bg-white dark:bg-surface-dark">
                  <button onClick={() => setQty(Math.max(1, qty - 1))} className="w-10 h-full flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 text-lg">-</button>
                  <input type="text" value={qty} className="w-full text-center border-none focus:ring-0 h-full bg-transparent font-bold" readOnly />
                  <button onClick={() => setQty(qty + 1)} className="w-10 h-full flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 text-lg">+</button>
                </div>
                <button className="flex-1 bg-primary hover:bg-primary-dark text-white font-bold rounded-lg h-12 flex items-center justify-center gap-2 shadow-lg transition-all active:scale-95 text-lg">
                  <span className="material-symbols-outlined">shopping_cart</span>
                  Comprar Agora
                </button>
              </div>

              <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400 border-t border-gray-100 dark:border-gray-700 pt-4">
                 <span className="flex items-center gap-1"><span className="material-symbols-outlined text-base text-green-500">verified</span> Garantia de 3 meses</span>
                 <span className="flex items-center gap-1"><span className="material-symbols-outlined text-base text-green-500">local_shipping</span> Envio imediato</span>
                 <span className="flex items-center gap-1"><span className="material-symbols-outlined text-base text-green-500">sync_alt</span> Devolução grátis</span>
              </div>
            </div>

            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg flex gap-3 items-center">
               <span className="material-symbols-outlined text-gray-500">local_shipping</span>
               <div className="flex-1">
                 <p className="text-sm font-bold text-text-main dark:text-white">Calcule o Frete</p>
                 <div className="flex gap-2 mt-1">
                    <input type="text" placeholder="00000-000" className="h-8 w-32 rounded border-gray-300 text-sm focus:ring-primary focus:border-primary" />
                    <button className="text-xs bg-gray-200 dark:bg-gray-700 px-3 rounded font-medium hover:bg-gray-300 transition-colors">OK</button>
                 </div>
               </div>
            </div>
          </div>
        </div>

        {/* Technical Tabs Section */}
        <div className="mt-12">
          <div className="border-b border-gray-200 dark:border-gray-700 mb-6">
            <nav className="flex space-x-8" aria-label="Tabs">
              <button
                onClick={() => setActiveTab('aplicacoes')}
                className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center gap-2 ${
                  activeTab === 'aplicacoes'
                    ? 'border-primary text-primary'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <span className="material-symbols-outlined">directions_car</span>
                Aplicações (Veículos)
              </button>
              <button
                onClick={() => setActiveTab('especificacoes')}
                className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center gap-2 ${
                  activeTab === 'especificacoes'
                    ? 'border-primary text-primary'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <span className="material-symbols-outlined">settings</span>
                Especificações Técnicas
              </button>
              <button
                onClick={() => setActiveTab('descricao')}
                className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center gap-2 ${
                  activeTab === 'descricao'
                    ? 'border-primary text-primary'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <span className="material-symbols-outlined">description</span>
                Descrição Detalhada
              </button>
            </nav>
          </div>

          <div className="bg-white dark:bg-surface-dark rounded-xl border border-gray-200 dark:border-gray-700 p-8 shadow-sm min-h-[300px]">
            {activeTab === 'aplicacoes' && (
              <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                <h3 className="text-lg font-bold text-text-main dark:text-white mb-4">Este produto é compatível com os seguintes veículos:</h3>
                {product.compatibleCars && product.compatibleCars.length > 0 ? (
                  <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {product.compatibleCars.map((car, idx) => (
                      <li key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
                        <span className="material-symbols-outlined text-green-500">check_circle</span>
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-200">{car}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-500 italic">Consulte o manual do fabricante para confirmar a aplicação.</p>
                )}
                <div className="mt-6 bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-100 dark:border-blue-800 text-sm text-blue-800 dark:text-blue-300">
                  <strong>Nota:</strong> A lista de aplicações acima é apenas uma referência. Sempre verifique o código da peça original do seu veículo antes da compra.
                </div>
              </div>
            )}

            {activeTab === 'especificacoes' && (
              <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                <h3 className="text-lg font-bold text-text-main dark:text-white mb-6">Ficha Técnica</h3>
                <div className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700 bg-white dark:bg-surface-dark">
                      {product.technicalSpecs ? (
                        Object.entries(product.technicalSpecs).map(([key, value], idx) => (
                          <tr key={key} className={idx % 2 === 0 ? 'bg-gray-50 dark:bg-gray-800/50' : 'bg-white dark:bg-surface-dark'}>
                            <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white w-1/3">{key}</td>
                            <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">{value}</td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td className="px-6 py-4 text-sm text-gray-500" colSpan={2}>Nenhuma especificação técnica disponível.</td>
                        </tr>
                      )}
                      <tr className="bg-gray-50 dark:bg-gray-800/50">
                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white w-1/3">Código SKU</td>
                        <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">{product.sku}</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white w-1/3">Fabricante</td>
                        <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">{product.brand}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'descricao' && (
              <div className="animate-in fade-in slide-in-from-bottom-2 duration-300 prose dark:prose-invert max-w-none">
                <h3 className="text-lg font-bold text-text-main dark:text-white mb-4">Informações do Produto</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  {product.description || 'Descrição detalhada não disponível para este produto.'}
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Todos os nossos produtos são originais e acompanham nota fiscal. Garantia de procedência e qualidade para o seu veículo.
                  Em caso de dúvida sobre a aplicação, utilize o campo de perguntas ou consulte um mecânico de confiança.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
