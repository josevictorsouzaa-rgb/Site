import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../mockData';
import { Product, User } from '../types';

// Mock Initial Users
const INITIAL_USERS: User[] = [
  { id: '1', name: 'Ricardo Silva', email: 'ricardo@autocenter.com', companyName: 'Auto Center Silva', cnpj: '33.222.111/0001-90', status: 'pending', role: 'user', createdAt: '2023-10-24' },
  { id: '2', name: 'Ana Costa', email: 'ana@oficina.com', companyName: 'Oficina Mecânica Costa', cnpj: '12.345.678/0001-00', status: 'active', role: 'user', createdAt: '2023-09-10' },
  { id: '3', name: 'Carlos Oliveira', email: 'carlos@garage.com', companyName: 'Garage 99', cnpj: '98.765.432/0001-11', status: 'blocked', role: 'user', createdAt: '2023-08-15' },
];

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'users' | 'products'>('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // --- STATES DE DADOS ---
  const [users, setUsers] = useState<User[]>(INITIAL_USERS);
  const [products, setProducts] = useState<Product[]>(PRODUCTS);
  
  // --- STATES DE UI ---
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  // --- ACTIONS: USERS ---
  const handleUserAction = (userId: string, newStatus: 'active' | 'blocked' | 'rejected') => {
    if (newStatus === 'rejected') {
      setUsers(users.filter(u => u.id !== userId));
    } else {
      setUsers(users.map(u => u.id === userId ? { ...u, status: newStatus } : u));
    }
  };

  // --- ACTIONS: PRODUCTS ---
  const handleEditProduct = (product: Product) => {
    setEditingProduct(product);
    setIsProductModalOpen(true);
  };

  const handleNewProduct = () => {
    setEditingProduct(null); // Limpa para criar novo
    setIsProductModalOpen(true);
  };

  const handleSaveProduct = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica simplificada de salvar (Mock)
    setIsProductModalOpen(false);
    alert("Produto salvo com sucesso! (Simulação)");
  };

  const handleDeleteProduct = (productId: string) => {
    if(confirm("Tem certeza que deseja remover este produto?")) {
      setProducts(products.filter(p => p.id !== productId));
    }
  };

  // --- COMPONENTES INTERNOS ---

  const SidebarItem = ({ id, icon, label }: { id: typeof activeTab, icon: string, label: string }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
        activeTab === id 
          ? 'bg-primary text-white shadow-lg shadow-primary/30' 
          : 'text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-gray-400'
      }`}
    >
      <span className={`material-symbols-outlined transition-transform group-hover:scale-110 ${activeTab === id ? 'text-white' : 'text-gray-400'}`}>{icon}</span>
      <span className={`font-medium ${!sidebarOpen && 'hidden md:hidden'}`}>{label}</span>
      {id === 'users' && users.filter(u => u.status === 'pending').length > 0 && (
         <span className="ml-auto bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full animate-pulse">
            {users.filter(u => u.status === 'pending').length}
         </span>
      )}
    </button>
  );

  return (
    <div className="flex h-screen bg-[#f3f4f6] dark:bg-[#0a0a16] font-sans overflow-hidden">
      
      {/* SIDEBAR */}
      <aside className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-white dark:bg-[#1e1e2e] border-r border-gray-200 dark:border-gray-800 transition-all duration-300 flex flex-col z-20`}>
        <div className="h-20 flex items-center justify-center border-b border-gray-100 dark:border-gray-800 relative">
          <div className="flex items-center gap-2 overflow-hidden px-4">
             {sidebarOpen ? (
               <span className="text-xl font-black tracking-tight text-primary dark:text-white">LUBEL<span className="text-blue-500">.ADM</span></span>
             ) : (
               <span className="text-xl font-black text-primary dark:text-white">L</span>
             )}
          </div>
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="absolute -right-3 top-8 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-full p-1 shadow-sm hover:bg-gray-50 transition-colors"
          >
            <span className="material-symbols-outlined text-xs text-gray-500 block">chevron_left</span>
          </button>
        </div>

        <nav className="flex-1 p-4 space-y-2 overflow-y-auto no-scrollbar">
          <div className={`text-xs font-bold text-gray-400 uppercase mb-2 px-4 ${!sidebarOpen && 'hidden'}`}>Geral</div>
          <SidebarItem id="dashboard" icon="dashboard" label="Dashboard" />
          <SidebarItem id="users" icon="group" label="Controle de Acesso" />
          <SidebarItem id="products" icon="inventory_2" label="Produtos" />
          
          <div className={`mt-8 text-xs font-bold text-gray-400 uppercase mb-2 px-4 ${!sidebarOpen && 'hidden'}`}>Sistema</div>
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-gray-400 transition-all">
            <span className="material-symbols-outlined text-gray-400">settings</span>
            <span className={`${!sidebarOpen && 'hidden md:hidden'}`}>Configurações</span>
          </button>
        </nav>

        <div className="p-4 border-t border-gray-100 dark:border-gray-800">
           <Link to="/" className="flex items-center gap-3 px-4 py-3 rounded-xl text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 transition-all">
              <span className="material-symbols-outlined">logout</span>
              <span className={`${!sidebarOpen && 'hidden md:hidden'}`}>Sair do Sistema</span>
           </Link>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 flex flex-col overflow-hidden relative">
        
        {/* TOP HEADER */}
        <header className="h-20 bg-white dark:bg-[#1e1e2e]/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 flex items-center justify-between px-8 z-10">
          <div>
            <h2 className="text-xl font-bold text-gray-800 dark:text-white capitalize">
              {activeTab === 'users' ? 'Gestão de Usuários' : activeTab === 'products' ? 'Catálogo de Produtos' : 'Visão Geral'}
            </h2>
            <p className="text-xs text-gray-500 dark:text-gray-400">Bem-vindo ao painel administrativo</p>
          </div>
          <div className="flex items-center gap-4">
            <button className="size-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-200 transition-colors relative">
               <span className="material-symbols-outlined">notifications</span>
               <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border-2 border-white dark:border-gray-800"></span>
            </button>
            <div className="flex items-center gap-3 pl-4 border-l border-gray-200 dark:border-gray-700">
               <div className="text-right hidden md:block">
                 <p className="text-sm font-bold text-gray-900 dark:text-white">Admin Master</p>
                 <p className="text-xs text-gray-500">super@lubel.com.br</p>
               </div>
               <div className="size-10 rounded-full bg-primary text-white flex items-center justify-center font-bold shadow-lg shadow-blue-500/20">AD</div>
            </div>
          </div>
        </header>

        {/* CONTENT SCROLLABLE */}
        <main className="flex-1 overflow-auto p-8 scroll-smooth">
          
          {/* DASHBOARD VIEW */}
          {activeTab === 'dashboard' && (
            <div className="space-y-8 animate-fade-in-up">
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                  { label: 'Vendas Hoje', value: 'R$ 4.250', icon: 'payments', color: 'text-green-500', bg: 'bg-green-500/10' },
                  { label: 'Pedidos', value: '18', icon: 'shopping_bag', color: 'text-blue-500', bg: 'bg-blue-500/10' },
                  { label: 'Cadastros Pendentes', value: users.filter(u => u.status === 'pending').length, icon: 'group_add', color: 'text-orange-500', bg: 'bg-orange-500/10' },
                  { label: 'Alertas de Estoque', value: '5', icon: 'inventory', color: 'text-red-500', bg: 'bg-red-500/10' },
                ].map((stat, idx) => (
                  <div key={idx} className="bg-white dark:bg-[#1e1e2e] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{stat.label}</p>
                        <h3 className="text-3xl font-bold text-gray-900 dark:text-white mt-2">{stat.value}</h3>
                      </div>
                      <div className={`size-12 rounded-xl flex items-center justify-center ${stat.bg} ${stat.color}`}>
                        <span className="material-symbols-outlined">{stat.icon}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Recent Activity Graph Placeholder */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                 <div className="lg:col-span-2 bg-white dark:bg-[#1e1e2e] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 min-h-[300px] flex flex-col">
                    <h3 className="font-bold text-gray-900 dark:text-white mb-6">Desempenho de Vendas</h3>
                    <div className="flex-1 flex items-end justify-between gap-2 px-4">
                       {[40, 65, 34, 78, 56, 90, 81, 45, 60, 75, 50, 95].map((h, i) => (
                          <div key={i} className="w-full bg-blue-100 dark:bg-blue-900/20 rounded-t-lg relative group h-full flex items-end">
                             <div 
                               style={{ height: `${h}%` }} 
                               className="w-full bg-primary dark:bg-blue-500 rounded-t-lg transition-all duration-500 hover:bg-blue-400"
                             ></div>
                             <div className="absolute -bottom-6 left-0 right-0 text-center text-xs text-gray-400">{i + 1}h</div>
                          </div>
                       ))}
                    </div>
                 </div>
                 
                 <div className="bg-white dark:bg-[#1e1e2e] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
                    <h3 className="font-bold text-gray-900 dark:text-white mb-6">Últimos Cadastros</h3>
                    <div className="space-y-4">
                       {users.slice(0, 4).map(u => (
                         <div key={u.id} className="flex items-center gap-3 pb-3 border-b border-gray-100 dark:border-gray-800 last:border-0">
                            <div className="size-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center font-bold text-xs text-gray-600 dark:text-gray-300">
                              {u.name.substring(0,2).toUpperCase()}
                            </div>
                            <div className="flex-1 overflow-hidden">
                               <p className="font-bold text-sm text-gray-900 dark:text-white truncate">{u.companyName}</p>
                               <p className="text-xs text-gray-500 truncate">{u.email}</p>
                            </div>
                            <span className={`size-2 rounded-full ${u.status === 'active' ? 'bg-green-500' : u.status === 'pending' ? 'bg-yellow-500' : 'bg-red-500'}`}></span>
                         </div>
                       ))}
                    </div>
                 </div>
              </div>
            </div>
          )}

          {/* USERS VIEW */}
          {activeTab === 'users' && (
            <div className="animate-fade-in-up">
              <div className="bg-white dark:bg-[#1e1e2e] rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
                <div className="p-6 border-b border-gray-100 dark:border-gray-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex gap-4">
                     <button className="text-sm font-bold text-primary border-b-2 border-primary pb-1">Todos</button>
                     <button className="text-sm font-medium text-gray-500 hover:text-gray-700 pb-1">Pendentes</button>
                     <button className="text-sm font-medium text-gray-500 hover:text-gray-700 pb-1">Ativos</button>
                  </div>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-2.5 text-gray-400 text-lg">search</span>
                    <input type="text" placeholder="Buscar usuário..." className="pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-sm w-full sm:w-64" />
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-gray-50 dark:bg-gray-800/50 text-gray-500 dark:text-gray-400 font-medium">
                      <tr>
                        <th className="px-6 py-4">Empresa / Usuário</th>
                        <th className="px-6 py-4">CNPJ</th>
                        <th className="px-6 py-4">Status</th>
                        <th className="px-6 py-4">Data Cadastro</th>
                        <th className="px-6 py-4 text-right">Ações</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                      {users.map(user => (
                        <tr key={user.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                          <td className="px-6 py-4">
                            <div>
                              <p className="font-bold text-gray-900 dark:text-white">{user.companyName}</p>
                              <p className="text-xs text-gray-500">{user.name} | {user.email}</p>
                            </div>
                          </td>
                          <td className="px-6 py-4 font-mono text-xs">{user.cnpj}</td>
                          <td className="px-6 py-4">
                            <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold capitalize
                              ${user.status === 'active' ? 'bg-green-100 text-green-700' : 
                                user.status === 'pending' ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'}`}>
                               <span className={`size-1.5 rounded-full ${user.status === 'active' ? 'bg-green-500' : user.status === 'pending' ? 'bg-yellow-500' : 'bg-red-500'}`}></span>
                               {user.status === 'active' ? 'Ativo' : user.status === 'pending' ? 'Pendente' : 'Bloqueado'}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-gray-500">{user.createdAt}</td>
                          <td className="px-6 py-4 text-right">
                             {user.status === 'pending' ? (
                               <div className="flex items-center justify-end gap-2">
                                 <button onClick={() => handleUserAction(user.id, 'active')} className="bg-green-500 text-white p-1.5 rounded-lg hover:bg-green-600 transition-colors" title="Aprovar">
                                   <span className="material-symbols-outlined text-lg">check</span>
                                 </button>
                                 <button onClick={() => handleUserAction(user.id, 'rejected')} className="bg-red-500 text-white p-1.5 rounded-lg hover:bg-red-600 transition-colors" title="Rejeitar">
                                   <span className="material-symbols-outlined text-lg">close</span>
                                 </button>
                               </div>
                             ) : (
                               <button 
                                  onClick={() => handleUserAction(user.id, user.status === 'active' ? 'blocked' : 'active')}
                                  className="text-gray-400 hover:text-primary transition-colors"
                               >
                                  <span className="material-symbols-outlined">{user.status === 'active' ? 'lock' : 'lock_open'}</span>
                               </button>
                             )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* PRODUCTS VIEW */}
          {activeTab === 'products' && (
            <div className="animate-fade-in-up">
              <div className="bg-white dark:bg-[#1e1e2e] rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
                <div className="p-6 border-b border-gray-100 dark:border-gray-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white">Inventário ({products.length})</h3>
                  <div className="flex gap-3">
                     <div className="relative">
                       <span className="material-symbols-outlined absolute left-3 top-2.5 text-gray-400 text-lg">search</span>
                       <input type="text" placeholder="Buscar produto..." className="pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-sm" />
                     </div>
                     <button onClick={handleNewProduct} className="bg-primary hover:bg-primary-light text-white px-4 py-2 rounded-lg font-bold text-sm flex items-center gap-2 transition-colors shadow-lg shadow-primary/20">
                        <span className="material-symbols-outlined text-lg">add</span>
                        Novo Produto
                     </button>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-gray-50 dark:bg-gray-800/50 text-gray-500 dark:text-gray-400 font-medium">
                      <tr>
                        <th className="px-6 py-4">Produto</th>
                        <th className="px-6 py-4">SKU</th>
                        <th className="px-6 py-4">Categoria</th>
                        <th className="px-6 py-4">Preço</th>
                        <th className="px-6 py-4 text-right">Ações</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                      {products.map(product => (
                        <tr key={product.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                               <div className="size-10 bg-gray-100 rounded-lg p-1 flex-shrink-0">
                                  <img src={product.image} className="w-full h-full object-contain" />
                               </div>
                               <div>
                                  <p className="font-bold text-gray-900 dark:text-white line-clamp-1">{product.name}</p>
                                  <p className="text-xs text-gray-500">{product.brand}</p>
                               </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 font-mono text-xs text-gray-600 dark:text-gray-400">{product.sku}</td>
                          <td className="px-6 py-4">
                             <span className="bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 px-2 py-1 rounded text-xs font-bold">
                                {product.category}
                             </span>
                          </td>
                          <td className="px-6 py-4 font-bold text-gray-900 dark:text-white">R$ {product.price.toFixed(2)}</td>
                          <td className="px-6 py-4 text-right">
                             <div className="flex items-center justify-end gap-2">
                               <button onClick={() => handleEditProduct(product)} className="text-blue-600 hover:bg-blue-50 p-1.5 rounded-lg transition-colors">
                                  <span className="material-symbols-outlined text-lg">edit</span>
                               </button>
                               <button onClick={() => handleDeleteProduct(product.id)} className="text-red-500 hover:bg-red-50 p-1.5 rounded-lg transition-colors">
                                  <span className="material-symbols-outlined text-lg">delete</span>
                               </button>
                             </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

        </main>
      </div>

      {/* PRODUCT MODAL (Simulated) */}
      {isProductModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white dark:bg-[#1e1e2e] rounded-2xl w-full max-w-2xl shadow-2xl overflow-hidden">
            <div className="p-6 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {editingProduct ? 'Editar Produto' : 'Novo Produto'}
              </h3>
              <button onClick={() => setIsProductModalOpen(false)} className="text-gray-400 hover:text-gray-600">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            
            <form onSubmit={handleSaveProduct} className="p-6 space-y-4 overflow-y-auto max-h-[70vh]">
              <div className="grid grid-cols-2 gap-4">
                 <div className="col-span-2">
                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">Nome do Produto</label>
                    <input type="text" defaultValue={editingProduct?.name} className="w-full rounded-lg border-gray-300 dark:border-gray-700 dark:bg-gray-800" required />
                 </div>
                 <div>
                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">Marca</label>
                    <input type="text" defaultValue={editingProduct?.brand} className="w-full rounded-lg border-gray-300 dark:border-gray-700 dark:bg-gray-800" required />
                 </div>
                 <div>
                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">SKU</label>
                    <input type="text" defaultValue={editingProduct?.sku} className="w-full rounded-lg border-gray-300 dark:border-gray-700 dark:bg-gray-800" required />
                 </div>
                 <div>
                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">Preço (R$)</label>
                    <input type="number" step="0.01" defaultValue={editingProduct?.price} className="w-full rounded-lg border-gray-300 dark:border-gray-700 dark:bg-gray-800" required />
                 </div>
                 <div>
                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">Categoria</label>
                    <select defaultValue={editingProduct?.category} className="w-full rounded-lg border-gray-300 dark:border-gray-700 dark:bg-gray-800">
                       <option>Óleos</option>
                       <option>Filtros</option>
                       <option>Freios</option>
                       <option>Suspensão</option>
                       <option>Elétrica</option>
                    </select>
                 </div>
                 <div className="col-span-2">
                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">URL da Imagem</label>
                    <input type="url" defaultValue={editingProduct?.image} className="w-full rounded-lg border-gray-300 dark:border-gray-700 dark:bg-gray-800" placeholder="https://..." />
                 </div>
                 <div className="col-span-2">
                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">Descrição</label>
                    <textarea rows={3} defaultValue={editingProduct?.description} className="w-full rounded-lg border-gray-300 dark:border-gray-700 dark:bg-gray-800"></textarea>
                 </div>
              </div>

              <div className="pt-4 flex justify-end gap-3">
                 <button type="button" onClick={() => setIsProductModalOpen(false)} className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">Cancelar</button>
                 <button type="submit" className="px-6 py-2 bg-primary text-white font-bold rounded-lg hover:bg-primary-light shadow-lg">Salvar Produto</button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};

export default AdminDashboard;