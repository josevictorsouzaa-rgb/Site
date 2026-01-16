import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Tipagem local para os pedidos (pode ser movida para types.ts futuramente)
interface OrderItem {
  name: string;
  quantity: number;
}

interface Order {
  id: string;
  date: string;
  status: 'Pendente' | 'Processando' | 'Em Trânsito' | 'Entregue' | 'Cancelado';
  total: number;
  itemsCount: number;
  previewItem: string; // Nome do primeiro item para exibição
}

const Orders: React.FC = () => {
  // MOCK DATA: Alterne para [] para testar o estado vazio
  const [orders] = useState<Order[]>([
    {
      id: 'LB-4923',
      date: '22 Out 2024',
      status: 'Em Trânsito',
      total: 450.00,
      itemsCount: 4,
      previewItem: 'Óleo de Motor 5W30 Sintético Premium'
    },
    {
      id: 'LB-4800',
      date: '15 Set 2024',
      status: 'Entregue',
      total: 1250.90,
      itemsCount: 12,
      previewItem: 'Kit Embreagem Completo'
    },
    {
      id: 'LB-4755',
      date: '02 Ago 2024',
      status: 'Cancelado',
      total: 89.90,
      itemsCount: 1,
      previewItem: 'Filtro de Ar Esportivo'
    }
  ]);

  // Função auxiliar para cores dos status
  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'Entregue':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
      case 'Em Trânsito':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400';
      case 'Processando':
      case 'Pendente':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400';
      case 'Cancelado':
        return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  // --- ESTADO VAZIO ---
  if (orders.length === 0) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center min-h-[60vh] px-4 py-12">
        <div className="size-32 bg-[#1e2843]/10 rounded-full flex items-center justify-center mb-6 animate-pulse">
           <span className="material-symbols-outlined text-6xl text-[#1e2843] dark:text-blue-400">shopping_bag</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3 text-center">
          Nenhum pedido encontrado
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-center max-w-md mb-8">
          Parece que você ainda não realizou nenhuma compra conosco. Explore nosso catálogo e encontre as melhores peças para seu veículo.
        </p>
        <Link 
          to="/catalogo" 
          className="bg-[#1e2843] hover:bg-[#2a3655] text-white px-8 py-3 rounded-xl font-bold shadow-lg transition-transform hover:-translate-y-1 flex items-center gap-2"
        >
          <span className="material-symbols-outlined">search</span>
          Ir para o Catálogo
        </Link>
      </div>
    );
  }

  // --- LISTA DE PEDIDOS ---
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div>
           <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
             <span className="material-symbols-outlined text-[#1e2843] dark:text-blue-400 text-4xl">list_alt</span>
             Meus Pedidos
           </h1>
           <p className="text-gray-500 mt-1">Acompanhe o histórico e status das suas compras</p>
        </div>
        
        {/* Filtro simples visual */}
        <select className="bg-white dark:bg-surface-dark border-gray-300 dark:border-gray-700 rounded-lg text-sm px-4 py-2 shadow-sm focus:ring-[#1e2843] focus:border-[#1e2843]">
          <option>Todos os pedidos</option>
          <option>Últimos 30 dias</option>
          <option>Em aberto</option>
        </select>
      </div>

      <div className="space-y-6">
        {orders.map((order) => (
          <div 
            key={order.id} 
            className="bg-white dark:bg-surface-dark rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
          >
            {/* Faixa decorativa lateral */}
            <div className={`absolute left-0 top-0 bottom-0 w-1 ${order.status === 'Cancelado' ? 'bg-red-500' : 'bg-[#1e2843]'}`}></div>

            <div className="flex flex-col lg:flex-row justify-between gap-6">
              
              {/* Info Principal */}
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-lg font-bold text-gray-900 dark:text-white">#{order.id}</span>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 ${getStatusStyle(order.status)}`}>
                    <span className="size-1.5 rounded-full bg-current"></span>
                    {order.status}
                  </span>
                </div>
                <p className="text-sm text-gray-500 mb-4 flex items-center gap-2">
                   <span className="material-symbols-outlined text-sm">calendar_today</span>
                   Realizado em {order.date}
                </p>

                <div className="flex items-start gap-3 bg-gray-50 dark:bg-gray-800/50 p-3 rounded-lg border border-gray-100 dark:border-gray-700">
                   <div className="size-10 bg-white dark:bg-gray-700 rounded flex items-center justify-center text-gray-400">
                      <span className="material-symbols-outlined">package_2</span>
                   </div>
                   <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">{order.previewItem}</p>
                      {order.itemsCount > 1 && (
                        <p className="text-xs text-gray-500">+ outros {order.itemsCount - 1} itens</p>
                      )}
                   </div>
                </div>
              </div>

              {/* Ações e Valores */}
              <div className="flex flex-col justify-between items-end gap-4 border-t lg:border-t-0 lg:border-l border-gray-100 dark:border-gray-700 pt-4 lg:pt-0 lg:pl-6 min-w-[200px]">
                 <div className="text-right">
                    <p className="text-xs text-gray-500 uppercase tracking-wider">Valor Total</p>
                    <p className="text-2xl font-bold text-[#1e2843] dark:text-blue-400">R$ {order.total.toFixed(2).replace('.', ',')}</p>
                 </div>
                 
                 <div className="flex flex-col w-full gap-2">
                   {order.status !== 'Cancelado' && (
                     <Link 
                       to={`/rastreio/${order.id}`}
                       className="w-full bg-[#1e2843] hover:bg-[#2a3655] text-white text-center py-2 rounded-lg font-bold text-sm transition-colors shadow-lg shadow-blue-900/20"
                     >
                       Rastrear Pedido
                     </Link>
                   )}
                   {/* MUDANÇA: Substituído button por Link para tornar funcional */}
                   <Link 
                     to={`/rastreio/${order.id}`}
                     className="w-full flex items-center justify-center bg-transparent border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300 py-2 rounded-lg font-medium text-sm transition-colors"
                   >
                     Ver Detalhes
                   </Link>
                 </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;