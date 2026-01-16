import React from 'react';
import { Link, useParams } from 'react-router-dom';

const OrderTracking: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Mock de dados baseado no ID (na aplicação real, viria de uma API)
  const isCancelled = id === 'LB-4755';
  const isDelivered = id === 'LB-4800';
  
  const statusLabel = isCancelled ? 'Cancelado' : isDelivered ? 'Entregue' : 'Em Trânsito';
  const statusColor = isCancelled ? 'bg-red-100 text-red-800' : isDelivered ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800';

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
          <Link to="/pedidos" className="hover:text-primary flex items-center gap-1">
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            Voltar para Meus Pedidos
          </Link>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-text-main dark:text-white mb-2">Pedido #{id || 'N/A'}</h1>
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold ${statusColor}`}>
              {statusLabel}
            </span>
          </div>
          <div className="text-left md:text-right">
            {!isCancelled && !isDelivered && (
              <>
                <p className="text-sm text-gray-500">Previsão de entrega</p>
                <p className="font-bold text-lg text-text-main dark:text-white">24 de Outubro</p>
              </>
            )}
            {isDelivered && (
              <>
                 <p className="text-sm text-gray-500">Entregue em</p>
                 <p className="font-bold text-lg text-text-main dark:text-white">15 de Setembro</p>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          {/* Status Timeline */}
          <div className="bg-white dark:bg-surface-dark rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm">
            <h2 className="font-bold text-lg mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">timeline</span>
              Histórico do Pedido
            </h2>
            
            <div className="relative pl-4 border-l-2 border-gray-200 dark:border-gray-700 space-y-8">
              <div className="relative">
                <div className="absolute -left-[21px] bg-green-500 rounded-full p-1 text-white">
                  <span className="material-symbols-outlined text-sm block">check</span>
                </div>
                <div className="ml-4">
                  <p className="font-bold text-text-main dark:text-white">Pedido Confirmado</p>
                  <p className="text-sm text-gray-500">20 Out, 10:30</p>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -left-[21px] bg-green-500 rounded-full p-1 text-white">
                  <span className="material-symbols-outlined text-sm block">inventory_2</span>
                </div>
                <div className="ml-4">
                  <p className="font-bold text-text-main dark:text-white">Nota Fiscal Emitida</p>
                  <p className="text-sm text-gray-500">21 Out, 14:00</p>
                </div>
              </div>

              {!isCancelled && (
                <div className={`relative ${isDelivered ? '' : 'opacity-100'}`}>
                    <div className={`absolute -left-[21px] rounded-full p-1 text-white ring-4 ${isDelivered ? 'bg-green-500 ring-transparent' : 'bg-primary ring-blue-100 dark:ring-blue-900/30'}`}>
                    <span className={`material-symbols-outlined text-sm block ${!isDelivered && 'animate-pulse'}`}>local_shipping</span>
                    </div>
                    <div className="ml-4">
                    <p className={`font-bold ${isDelivered ? 'text-text-main dark:text-white' : 'text-primary dark:text-blue-400'}`}>
                        {isDelivered ? 'Saiu para Entrega' : 'Em Trânsito'}
                    </p>
                    <p className="text-sm text-gray-500">
                        {isDelivered ? '15 Set, 08:00' : '22 Out, 08:15 — Seu pedido está a caminho.'}
                    </p>
                    </div>
                </div>
              )}

              {isDelivered && (
                 <div className="relative">
                    <div className="absolute -left-[21px] bg-green-500 rounded-full p-1 text-white">
                    <span className="material-symbols-outlined text-sm block">home</span>
                    </div>
                    <div className="ml-4">
                    <p className="font-bold text-text-main dark:text-white">Entregue</p>
                    <p className="text-sm text-gray-500">15 Set, 14:30</p>
                    </div>
                </div>
              )}

              {isCancelled && (
                 <div className="relative">
                    <div className="absolute -left-[21px] bg-red-500 rounded-full p-1 text-white">
                    <span className="material-symbols-outlined text-sm block">cancel</span>
                    </div>
                    <div className="ml-4">
                    <p className="font-bold text-red-600">Cancelado</p>
                    <p className="text-sm text-gray-500">Motivo: Solicitação do cliente</p>
                    </div>
                </div>
              )}
            </div>
          </div>

          <div className="bg-white dark:bg-surface-dark rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm">
            <h2 className="font-bold text-lg mb-4">Itens do Pedido</h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="size-20 bg-gray-100 rounded-lg overflow-hidden">
                   <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgRBmwFbZJmxwQJHn5LZgEJEWC-6iBXy2kN4h2ifjnxzUZQM4qU15bcdmJ_-MRNGVWKUms08VvpkkZFrxnnqrrI8z5Qn1ssWJYGQYg2qGKk_-GOGcLKkHk-T1ZN_QL_rjoLRXfAYXkyXY6inVWoACNwBO4URYsieOk1MtFCZ16NRwGtuin-8UYr7m-yU5jVd98B46FqdrMJJqFTap9VT9ljcP1S-2sj4brNkAV2usphKn803KIYBSEsdIpuXgtMyPo3KQ38t5y9fvG" className="w-full h-full object-contain" />
                </div>
                <div>
                  <p className="font-bold text-sm">Óleo de Motor 5W30 Sintético Premium</p>
                  <p className="text-xs text-gray-500">SKU: OIL-5W30-SYN</p>
                  <p className="text-sm mt-1">4x R$ 89,90</p>
                </div>
                <div className="ml-auto font-bold text-sm">R$ 359,60</div>
              </div>
              
              {/* Mock items for variety */}
              {id === 'LB-4800' && (
                 <div className="flex gap-4 border-t border-gray-100 dark:border-gray-800 pt-4">
                    <div className="size-20 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
                        <span className="material-symbols-outlined text-gray-400">settings</span>
                    </div>
                    <div>
                    <p className="font-bold text-sm">Kit Embreagem Completo</p>
                    <p className="text-xs text-gray-500">SKU: KIT-CLUTCH-01</p>
                    <p className="text-sm mt-1">1x R$ 891,30</p>
                    </div>
                    <div className="ml-auto font-bold text-sm">R$ 891,30</div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white dark:bg-surface-dark rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm">
            <h3 className="font-bold text-sm uppercase tracking-wider text-gray-500 mb-4">Endereço de Entrega</h3>
            <p className="font-bold">Oficina do Carlos</p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Rua das Flores, 123</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Jardim Paulistano</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">São Paulo - SP, 01452-001</p>
          </div>

          <div className="bg-white dark:bg-surface-dark rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm">
            <h3 className="font-bold text-sm uppercase tracking-wider text-gray-500 mb-4">Resumo Financeiro</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Subtotal</span>
                <span>R$ 405,10</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Frete</span>
                <span>R$ 44,90</span>
              </div>
              <div className="border-t border-gray-100 dark:border-gray-700 my-2 pt-2 flex justify-between font-bold text-lg">
                <span>Total</span>
                <span className="text-primary dark:text-blue-400">R$ 450,00</span>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                <button className="w-full text-center text-sm text-primary hover:underline">Baixar Nota Fiscal (PDF)</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderTracking;