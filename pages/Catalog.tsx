import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../mockData';

const Catalog: React.FC = () => {
  // Search Widget State
  const [plate, setPlate] = useState('');
  
  // Vehicle State
  const [selectedMake, setSelectedMake] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [selectedYearFrom, setSelectedYearFrom] = useState('');
  const [selectedYearTo, setSelectedYearTo] = useState('');
  const [selectedEngine, setSelectedEngine] = useState('');

  const [searchTerm, setSearchTerm] = useState('');
  
  // Catalog Logic State
  const [products, setProducts] = useState(PRODUCTS);
  const [expandedApps, setExpandedApps] = useState<Record<string, boolean>>({});
  const [quantities, setQuantities] = useState<Record<string, number | string>>({});
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [showMobileFilters, setShowMobileFilters] = useState(false); // New state for mobile filters
  
  // Ref for scrolling
  const resultsRef = useRef<HTMLDivElement>(null);

  // --- Catalog Functions (Quantity & Expand) ---
  const toggleExpand = (productId: string) => {
    setExpandedApps(prev => ({ ...prev, [productId]: !prev[productId] }));
  };

  const updateQuantity = (productId: string, delta: number) => {
    setQuantities(prev => {
      const val = prev[productId];
      const currentQty = (val === '' || val === undefined) ? 1 : Number(val);
      const newQty = Math.max(1, currentQty + delta);
      return { ...prev, [productId]: newQty };
    });
  };

  const handleManualChange = (productId: string, value: string) => {
    if (value === '' || /^\d*$/.test(value)) {
      setQuantities(prev => ({ ...prev, [productId]: value }));
    }
  };

  const handleBlur = (productId: string) => {
    setQuantities(prev => {
      const val = prev[productId];
      let newQty: number | string = val;
      if (val === '' || val === undefined || Number(val) < 1) {
        newQty = 1;
      } else {
        newQty = Number(val);
      }
      return { ...prev, [productId]: newQty };
    });
  };

  // --- Search & Filter Logic ---
  const handleSearch = () => {
    let filtered = PRODUCTS;

    // Priority 1: Search Term (Code/Name)
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = PRODUCTS.filter(p => 
        p.name.toLowerCase().includes(term) || 
        p.sku.toLowerCase().includes(term) ||
        (p.compatibleCars && p.compatibleCars.some(c => c.toLowerCase().includes(term)))
      );
    }
    // Priority 2: Vehicle Selection
    else if (selectedMake || selectedModel) {
        // Mock filter logic for demo
        const vehicleTerm = `${selectedMake} ${selectedModel}`.trim().toLowerCase();
        if (vehicleTerm) {
            filtered = PRODUCTS.filter(p => 
                p.compatibleCars && p.compatibleCars.some(c => c.toLowerCase().includes(vehicleTerm))
            );
        }
    }
    // Priority 3: Plate (Mock)
    else if (plate.length >= 7) {
        // Mock: Assume any plate searches for "Gol" or generic parts
        filtered = PRODUCTS; 
    }

    setProducts(filtered);
    
    // Smooth scroll to results
    if (resultsRef.current) {
      resultsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleClear = () => {
    setPlate('');
    setSelectedMake('');
    setSelectedModel('');
    setSelectedYearFrom('');
    setSelectedYearTo('');
    setSelectedEngine('');
    setSearchTerm('');
    setActiveFilters([]);
    setProducts(PRODUCTS);
  };

  const toggleCategoryFilter = (category: string) => {
    let newFilters = activeFilters.includes(category) 
      ? activeFilters.filter(f => f !== category)
      : [...activeFilters, category];
    
    setActiveFilters(newFilters);

    if (newFilters.length === 0) {
      setProducts(PRODUCTS);
    } else {
      setProducts(PRODUCTS.filter(p => newFilters.includes(p.category) || newFilters.includes(p.brand)));
    }
  };

  return (
    <div className="flex flex-col">
      {/* Header / Search Widget Section */}
      <section className="w-full bg-gradient-to-br from-primary via-primary-dark to-[#0f0f2a] pt-8 pb-16 px-4 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center">
          
          <div className="text-center max-w-3xl mb-8 animate-fade-in-up">
            <h1 className="text-white text-3xl font-bold">
              Catálogo de Peças
            </h1>
            <p className="text-blue-200 text-sm mt-2">Busque por veículo, placa ou código da peça.</p>
          </div>

          {/* Unified Horizontal Search Bar */}
          <div className="w-full max-w-7xl bg-white dark:bg-surface-dark rounded-2xl shadow-2xl p-2 lg:p-3 flex flex-col xl:flex-row items-center gap-2 lg:gap-0 border border-gray-100 dark:border-gray-700 animate-fade-in-up delay-100">
             
             {/* 1. Placa Input */}
             <div className="w-full xl:w-auto px-4 xl:border-r border-gray-200 dark:border-gray-700 py-2 xl:py-0 flex-shrink-0">
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Placa</label>
                <div className="flex items-center gap-2">
                   <div className="bg-blue-700 w-5 h-5 rounded-full flex items-center justify-center text-[8px] text-white font-bold">BR</div>
                   <input 
                      type="text" 
                      value={plate}
                      onChange={(e) => setPlate(e.target.value.toUpperCase())}
                      maxLength={7}
                      placeholder="ABC1D23" 
                      className="w-24 border-0 p-0 text-lg font-mono font-bold text-gray-800 dark:text-white placeholder:text-gray-300 bg-transparent focus:ring-0 uppercase"
                    />
                </div>
             </div>

             {/* 2. Vehicle Selects (Expanded) */}
             <div className="w-full xl:flex-1 px-4 xl:border-r border-gray-200 dark:border-gray-700 py-2 xl:py-0">
                 <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Veículo Completo</label>
                 <div className="flex flex-wrap lg:flex-nowrap gap-x-2 gap-y-2 items-center">
                    {/* Montadora */}
                    <select 
                      value={selectedMake}
                      onChange={(e) => setSelectedMake(e.target.value)}
                      className="w-full lg:w-auto min-w-[110px] border-0 p-0 text-sm font-semibold text-gray-700 dark:text-gray-200 bg-transparent focus:ring-0 cursor-pointer"
                    >
                       <option value="">Montadora</option>
                       <option value="Volkswagen">Volkswagen</option>
                       <option value="Fiat">Fiat</option>
                       <option value="Chevrolet">Chevrolet</option>
                       <option value="Ford">Ford</option>
                    </select>
                    
                    <span className="hidden lg:inline text-gray-300">/</span>

                    {/* Modelo */}
                    <select 
                       value={selectedModel}
                       onChange={(e) => setSelectedModel(e.target.value)}
                       className="w-full lg:w-auto min-w-[100px] border-0 p-0 text-sm font-semibold text-gray-700 dark:text-gray-200 bg-transparent focus:ring-0 cursor-pointer"
                    >
                       <option value="">Modelo</option>
                       <option value="Gol">Gol</option>
                       <option value="Onix">Onix</option>
                       <option value="Argo">Argo</option>
                       <option value="Ka">Ka</option>
                    </select>

                    <span className="hidden lg:inline text-gray-300">/</span>

                    {/* Range De (Manual Input) */}
                    <input
                       type="text"
                       value={selectedYearFrom}
                       onChange={(e) => {
                          const val = e.target.value;
                          if (val === '' || (/^\d+$/.test(val) && val.length <= 4)) setSelectedYearFrom(val);
                       }}
                       placeholder="De"
                       className="w-16 border-0 p-0 text-sm font-semibold text-gray-700 dark:text-gray-200 bg-transparent focus:ring-0 text-center placeholder:text-gray-400"
                    />

                    <span className="text-gray-300">-</span>

                    {/* Range Até (Manual Input) */}
                    <input
                       type="text"
                       value={selectedYearTo}
                       onChange={(e) => {
                          const val = e.target.value;
                          if (val === '' || (/^\d+$/.test(val) && val.length <= 4)) setSelectedYearTo(val);
                       }}
                       placeholder="Até"
                       className="w-16 border-0 p-0 text-sm font-semibold text-gray-700 dark:text-gray-200 bg-transparent focus:ring-0 text-center placeholder:text-gray-400"
                    />

                    <span className="hidden lg:inline text-gray-300">/</span>

                    {/* Motorização */}
                    <select 
                       value={selectedEngine}
                       onChange={(e) => setSelectedEngine(e.target.value)}
                       className="w-full lg:w-auto min-w-[100px] border-0 p-0 text-sm font-semibold text-gray-700 dark:text-gray-200 bg-transparent focus:ring-0 cursor-pointer"
                    >
                       <option value="">Motor</option>
                       <option value="1.0">1.0 Flex</option>
                       <option value="1.0 Turbo">1.0 Turbo</option>
                       <option value="1.6">1.6 16v</option>
                       <option value="2.0">2.0</option>
                    </select>
                 </div>
             </div>

             {/* 3. Keyword Input */}
             <div className="w-full xl:w-64 px-4 py-2 xl:py-0 flex-shrink-0">
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Código ou Peça</label>
                <div className="flex items-center gap-2">
                   <span className="material-symbols-outlined text-gray-400 text-lg">search</span>
                   <input 
                      type="text" 
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                      placeholder="Ex: Amortecedor..." 
                      className="w-full border-0 p-0 text-sm font-medium text-gray-700 dark:text-gray-200 bg-transparent focus:ring-0"
                    />
                </div>
             </div>

             {/* 4. Search Actions (Clear + Search) */}
             <div className="w-full xl:w-auto p-1 flex-shrink-0 flex gap-2">
                <button 
                  onClick={handleClear}
                  title="Limpar Filtros"
                  className="w-12 xl:w-auto xl:px-4 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-xl py-3 lg:py-4 font-bold transition-all active:scale-95 flex items-center justify-center"
                >
                   <span className="material-symbols-outlined">restart_alt</span>
                </button>
                <button 
                  onClick={handleSearch}
                  className="flex-1 xl:w-auto bg-primary hover:bg-primary-dark text-white rounded-xl px-8 py-3 lg:py-4 font-bold shadow-lg shadow-primary/30 transition-all active:scale-95 flex items-center justify-center gap-2 hover:shadow-xl"
                >
                   <span className="material-symbols-outlined">search</span>
                   <span className="xl:hidden">Buscar</span>
                </button>
             </div>
          </div>

        </div>
      </section>

      {/* Results Section (Unified Catalog) */}
      <section ref={resultsRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        
        {/* Mobile Filter Toggle */}
        <div className="lg:hidden mb-4">
          <button 
            onClick={() => setShowMobileFilters(!showMobileFilters)}
            className="w-full flex items-center justify-center gap-2 bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 p-3 rounded-xl shadow-sm text-sm font-bold text-gray-700 dark:text-gray-200 active:scale-[0.98] transition-transform"
          >
            <span className="material-symbols-outlined">{showMobileFilters ? 'close' : 'filter_list'}</span>
            {showMobileFilters ? 'Ocultar Filtros' : 'Filtrar Resultados'}
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 relative items-start">
          
          {/* Filters Sidebar (Sticky & Card Style) */}
          <aside className={`w-full lg:w-72 flex-shrink-0 space-y-8 lg:sticky lg:top-24 lg:h-fit bg-white dark:bg-surface-dark p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm z-10 ${showMobileFilters ? 'block animate-fade-in-up' : 'hidden'} lg:block transition-all`}>
            <div className="pb-4 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-lg font-bold text-text-main dark:text-white flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">filter_list</span>
                Filtros
              </h2>
            </div>
            
            <div className="space-y-3">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-text-main dark:text-white">Categorias</h3>
              <div className="space-y-2">
                {['Freios', 'Suspensão', 'Motor', 'Elétrica', 'Óleos'].map(cat => (
                  <label key={cat} className="flex items-center gap-3 cursor-pointer group hover:bg-gray-50 dark:hover:bg-gray-800/50 p-2 rounded-lg -mx-2 transition-colors">
                    <input 
                      type="checkbox" 
                      className="rounded border-gray-300 text-primary focus:ring-primary size-4"
                      checked={activeFilters.includes(cat)}
                      onChange={() => toggleCategoryFilter(cat)}
                    />
                    <span className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-primary transition-colors font-medium">{cat}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-text-main dark:text-white">Marca</h3>
              <div className="space-y-2">
                {['Bosch', 'Monroe', 'Moura', 'Lubrax', 'Fram'].map(brand => (
                  <label key={brand} className="flex items-center gap-3 cursor-pointer group hover:bg-gray-50 dark:hover:bg-gray-800/50 p-2 rounded-lg -mx-2 transition-colors">
                    <input 
                      type="checkbox" 
                      className="rounded border-gray-300 text-primary focus:ring-primary size-4"
                      checked={activeFilters.includes(brand)}
                      onChange={() => toggleCategoryFilter(brand)}
                    />
                    <span className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-primary transition-colors font-medium">{brand}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <button 
                  onClick={handleClear}
                  className="w-full py-2 text-sm text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors font-semibold"
                >
                  Limpar Filtros
                </button>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1 w-full">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6 bg-white dark:bg-surface-dark p-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm gap-4">
              <div>
                <h2 className="text-xl font-bold text-text-main dark:text-white">Resultados da Busca</h2>
                <span className="text-sm text-gray-500">{products.length} produtos encontrados</span>
              </div>
              <select className="w-full sm:w-auto border-gray-300 rounded-lg text-sm focus:ring-primary focus:border-primary dark:bg-gray-800 dark:border-gray-600">
                  <option>Relevância</option>
                  <option>Menor Preço</option>
                  <option>Maior Preço</option>
              </select>
            </div>

            {products.length === 0 ? (
              <div className="text-center py-20 bg-gray-50 dark:bg-gray-800 rounded-xl border border-dashed border-gray-300 dark:border-gray-700 animate-fade-in-up">
                <span className="material-symbols-outlined text-4xl text-gray-400 mb-2">search_off</span>
                <p className="text-gray-500">Nenhum produto encontrado com os filtros atuais.</p>
                <button onClick={handleClear} className="mt-4 text-primary font-bold hover:underline">
                  Limpar Filtros
                </button>
              </div>
            ) : (
              <div className="space-y-4 animate-fade-in-up">
                {products.map((product) => {
                  const isExpanded = expandedApps[product.id];
                  const cars = product.compatibleCars || [];
                  const showLimit = 4;
                  const hasMore = cars.length > showLimit;
                  const visibleCars = isExpanded ? cars : cars.slice(0, showLimit);
                  
                  const rawQty = quantities[product.id];
                  const qty = rawQty === undefined ? 1 : rawQty;

                  return (
                    <div key={product.id} className="bg-white dark:bg-surface-dark rounded-xl border border-gray-200 dark:border-gray-700 p-4 flex flex-col sm:flex-row gap-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <div className="w-full sm:w-48 aspect-square bg-gray-50 dark:bg-gray-800 rounded-lg flex items-center justify-center p-4">
                        <img src={product.image} alt={product.name} className="max-w-full max-h-full object-contain mix-blend-multiply dark:mix-blend-normal transition-transform hover:scale-105" />
                      </div>
                      <div className="flex-1 flex flex-col">
                        <div className="flex justify-between items-start">
                          <div className="flex-1 mr-4">
                            <span className="text-xs font-bold text-primary uppercase mb-1 block">{product.brand}</span>
                            <h3 className="text-lg font-bold text-text-main dark:text-white mb-2">{product.name}</h3>
                            <p className="text-sm text-gray-500 mb-2">SKU: {product.sku}</p>
                            
                            {/* Application List */}
                            {cars.length > 0 && (
                              <div className="mt-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg p-3 border border-gray-100 dark:border-gray-700/50">
                                <p className="text-xs font-bold text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-1">
                                  <span className="material-symbols-outlined text-[14px]">directions_car</span>
                                  Aplicações Compatíveis:
                                </p>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-1">
                                  {visibleCars.map((car, idx) => (
                                    <li key={idx} className="text-xs text-gray-600 dark:text-gray-400 flex items-start gap-1.5 leading-tight">
                                      <span className="material-symbols-outlined text-[10px] mt-0.5 text-green-500 flex-shrink-0">check</span>
                                      <span>{car}</span>
                                    </li>
                                  ))}
                                </ul>
                                {hasMore && (
                                  <button 
                                    onClick={(e) => {
                                      e.preventDefault();
                                      toggleExpand(product.id);
                                    }}
                                    className="mt-2 text-xs font-medium text-primary hover:text-primary-dark hover:underline flex items-center gap-1"
                                  >
                                    {isExpanded ? (
                                      <>
                                        Mostrar menos
                                        <span className="material-symbols-outlined text-[14px]">expand_less</span>
                                      </>
                                    ) : (
                                      <>
                                        Ver mais {cars.length - showLimit} veículos
                                        <span className="material-symbols-outlined text-[14px]">expand_more</span>
                                      </>
                                    )}
                                  </button>
                                )}
                              </div>
                            )}
                          </div>
                          
                          <div className="text-right flex-shrink-0">
                            {product.originalPrice && (
                              <span className="text-sm text-gray-400 line-through block">R$ {product.originalPrice.toFixed(2).replace('.', ',')}</span>
                            )}
                            <span className="text-2xl font-bold text-primary dark:text-blue-400">R$ {product.price.toFixed(2).replace('.', ',')}</span>
                            <p className="text-xs text-green-600 dark:text-green-400 font-medium mt-1">5% off no PIX</p>
                          </div>
                        </div>
                        
                        <div className="mt-auto flex flex-wrap gap-3 pt-4 border-t border-gray-100 dark:border-gray-800 mt-4 items-center">
                          {/* Quantity Selector */}
                          <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-lg h-10 w-24 bg-white dark:bg-surface-dark flex-shrink-0">
                            <button 
                              onClick={(e) => {
                                e.preventDefault();
                                updateQuantity(product.id, -1);
                              }}
                              className="w-8 h-full flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-l-lg"
                            >
                              -
                            </button>
                            <input 
                              type="text" 
                              value={qty} 
                              onChange={(e) => handleManualChange(product.id, e.target.value)}
                              onBlur={() => handleBlur(product.id)}
                              className="w-full text-center border-none focus:ring-0 h-full bg-transparent text-sm font-semibold p-0 text-text-main dark:text-white" 
                            />
                            <button 
                              onClick={(e) => {
                                e.preventDefault();
                                updateQuantity(product.id, 1);
                              }}
                              className="w-8 h-full flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-r-lg"
                            >
                              +
                            </button>
                          </div>

                          <Link to={`/produto/${product.id}`} className="flex-1 bg-primary text-white font-bold py-2 rounded-lg text-center hover:bg-primary-dark transition-all hover:shadow-lg active:scale-95 flex items-center justify-center gap-2 h-10">
                            <span className="material-symbols-outlined text-sm">shopping_cart</span>
                            Comprar
                          </Link>
                          <Link to={`/produto/${product.id}`} className="px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors h-10 flex items-center">
                            Detalhes
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Catalog;