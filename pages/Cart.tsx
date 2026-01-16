import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../mockData';

const Cart: React.FC = () => {
  const navigate = useNavigate();
  // Mock cart data using first two products
  const [items, setItems] = useState([
    { ...PRODUCTS[0], quantity: 1 },
    { ...PRODUCTS[1], quantity: 2 }
  ]);

  const updateQuantity = (id: string, delta: number) => {
    setItems(items.map(item => {
      if (item.id === id) {
        const newQuantity = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQuantity };
      }
      return item;
    }));
  };

  const removeItem = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  };

  const subtotal = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const shipping = 45.90;
  const total = subtotal + shipping;

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 px-4 animate-fade-in-up">
        <span className="material-symbols-outlined text-6xl text-gray-300 mb-4">shopping_cart_off</span>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Seu carrinho está vazio</h2>
        <p className="text-gray-500 mb-8">Navegue pelo nosso catálogo e encontre as melhores peças.</p>
        <Link to="/catalogo" className="bg-primary text-white px-6 py-3 rounded-lg font-bold hover:bg-primary-dark transition-colors">
          Ir para o Catálogo
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold text-text-main dark:text-white mb-8 animate-fade-in-up">Meu Carrinho</h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Items List */}
        <div className="flex-1 bg-white dark:bg-surface-dark rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden animate-fade-in-up delay-100">
          <div className="hidden md:grid grid-cols-6 gap-4 p-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 text-sm font-medium text-gray-500">
            <div className="col-span-3">Produto</div>
            <div className="text-center">Qtd</div>
            <div className="text-right">Preço</div>
            <div className="text-right">Total</div>
          </div>

          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            {items.map(item => (
              <div key={item.id} className="p-4 flex flex-col md:grid md:grid-cols-6 gap-4 items-center transition-colors hover:bg-gray-50 dark:hover:bg-gray-800/30">
                <div className="col-span-3 flex items-center gap-4 w-full">
                  <div className="size-20 bg-gray-100 rounded-lg flex-shrink-0 p-2">
                    <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h3 className="font-bold text-text-main dark:text-white text-sm md:text-base">{item.name}</h3>
                    <p className="text-xs text-gray-500">{item.brand} | SKU: {item.sku}</p>
                    <button onClick={() => removeItem(item.id)} className="text-red-500 text-xs hover:underline mt-2 flex items-center gap-1 transition-colors hover:text-red-700">
                      <span className="material-symbols-outlined text-sm">delete</span> Remover
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <div className="flex items-center border border-gray-300 rounded-lg h-8">
                    <button onClick={() => updateQuantity(item.id, -1)} className="w-8 h-full flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">-</button>
                    <span className="w-8 text-center text-sm">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, 1)} className="w-8 h-full flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">+</button>
                  </div>
                </div>

                <div className="text-right text-sm text-gray-500">
                  R$ {item.price.toFixed(2).replace('.', ',')}
                </div>

                <div className="text-right font-bold text-text-main dark:text-white">
                  R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary */}
        <div className="w-full lg:w-96 animate-fade-in-up delay-200">
          <div className="bg-white dark:bg-surface-dark rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm sticky top-24">
            <h2 className="text-lg font-bold mb-6">Resumo do Pedido</h2>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-gray-600 dark:text-gray-400">
                <span>Subtotal ({items.reduce((a,i) => a + i.quantity, 0)} itens)</span>
                <span>R$ {subtotal.toFixed(2).replace('.', ',')}</span>
              </div>
              <div className="flex justify-between text-gray-600 dark:text-gray-400">
                <span>Frete Estimado</span>
                <span>R$ {shipping.toFixed(2).replace('.', ',')}</span>
              </div>
              <div className="pt-3 border-t border-gray-200 dark:border-gray-700 flex justify-between font-bold text-xl text-primary dark:text-blue-400">
                <span>Total</span>
                <span>R$ {total.toFixed(2).replace('.', ',')}</span>
              </div>
              <p className="text-xs text-gray-500 text-right mt-1">ou em até 10x de R$ {(total/10).toFixed(2).replace('.', ',')}</p>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Cupom de Desconto</label>
              <div className="flex gap-2">
                <input type="text" placeholder="Código" className="flex-1 rounded-lg border-gray-300 dark:border-gray-600 dark:bg-gray-800 text-sm focus:ring-primary focus:border-primary transition-all" />
                <button className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg font-medium text-sm hover:bg-gray-300 transition-colors">Aplicar</button>
              </div>
            </div>

            <button 
              onClick={() => navigate('/checkout')}
              className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 rounded-lg shadow-lg transition-transform active:scale-95 flex items-center justify-center gap-2 hover:shadow-xl"
            >
              Finalizar Compra
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
            
            <Link to="/catalogo" className="block text-center text-primary text-sm font-medium mt-4 hover:underline">
              Continuar Comprando
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;