import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Checkout: React.FC = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  const handleFinish = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      navigate('/rastreio/1');
    }, 1000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Steps */}
        <div className="flex items-center justify-center mb-8 animate-fade-in-up">
          <div className={`flex flex-col items-center transition-colors duration-300 ${step >= 1 ? 'text-primary' : 'text-gray-400'}`}>
            <div className={`size-10 rounded-full flex items-center justify-center font-bold mb-2 transition-colors duration-300 ${step >= 1 ? 'bg-primary text-white' : 'bg-gray-200'}`}>1</div>
            <span className="text-sm font-medium">Identificação</span>
          </div>
          <div className={`w-20 h-1 mx-2 transition-colors duration-300 ${step >= 2 ? 'bg-primary' : 'bg-gray-200'}`}></div>
          <div className={`flex flex-col items-center transition-colors duration-300 ${step >= 2 ? 'text-primary' : 'text-gray-400'}`}>
            <div className={`size-10 rounded-full flex items-center justify-center font-bold mb-2 transition-colors duration-300 ${step >= 2 ? 'bg-primary text-white' : 'bg-gray-200'}`}>2</div>
            <span className="text-sm font-medium">Endereço</span>
          </div>
          <div className={`w-20 h-1 mx-2 transition-colors duration-300 ${step >= 3 ? 'bg-primary' : 'bg-gray-200'}`}></div>
          <div className={`flex flex-col items-center transition-colors duration-300 ${step >= 3 ? 'text-primary' : 'text-gray-400'}`}>
            <div className={`size-10 rounded-full flex items-center justify-center font-bold mb-2 transition-colors duration-300 ${step >= 3 ? 'bg-primary text-white' : 'bg-gray-200'}`}>3</div>
            <span className="text-sm font-medium">Pagamento</span>
          </div>
        </div>

        <div className="bg-white dark:bg-surface-dark rounded-xl border border-gray-200 dark:border-gray-700 p-8 shadow-sm overflow-hidden">
          {step === 1 && (
            <div className="space-y-6 animate-slide-in-right">
              <h2 className="text-xl font-bold mb-4">Seus Dados</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-1">Nome Completo</label>
                  <input type="text" className="w-full rounded-lg border-gray-300 dark:bg-gray-800 dark:border-gray-600 focus:ring-primary focus:border-primary transition-shadow" defaultValue="Carlos Silva" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">CPF/CNPJ</label>
                  <input type="text" className="w-full rounded-lg border-gray-300 dark:bg-gray-800 dark:border-gray-600 focus:ring-primary focus:border-primary transition-shadow" defaultValue="123.456.789-00" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input type="email" className="w-full rounded-lg border-gray-300 dark:bg-gray-800 dark:border-gray-600 focus:ring-primary focus:border-primary transition-shadow" defaultValue="carlos@exemplo.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Telefone</label>
                  <input type="tel" className="w-full rounded-lg border-gray-300 dark:bg-gray-800 dark:border-gray-600 focus:ring-primary focus:border-primary transition-shadow" defaultValue="(11) 99999-9999" />
                </div>
              </div>
              <div className="flex justify-end pt-4">
                <button onClick={() => setStep(2)} className="bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-primary-dark transition-all transform active:scale-95">
                  Ir para Endereço
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6 animate-slide-in-right">
              <h2 className="text-xl font-bold mb-4">Endereço de Entrega</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                 <div className="md:col-span-1">
                   <label className="block text-sm font-medium mb-1">CEP</label>
                   <input type="text" className="w-full rounded-lg border-gray-300 dark:bg-gray-800 dark:border-gray-600 focus:ring-primary focus:border-primary transition-shadow" defaultValue="01452-001" />
                 </div>
                 <div className="md:col-span-2">
                   <label className="block text-sm font-medium mb-1">Rua</label>
                   <input type="text" className="w-full rounded-lg border-gray-300 dark:bg-gray-800 dark:border-gray-600 focus:ring-primary focus:border-primary transition-shadow" defaultValue="Rua das Flores" />
                 </div>
                 <div>
                   <label className="block text-sm font-medium mb-1">Número</label>
                   <input type="text" className="w-full rounded-lg border-gray-300 dark:bg-gray-800 dark:border-gray-600 focus:ring-primary focus:border-primary transition-shadow" defaultValue="123" />
                 </div>
                 <div>
                   <label className="block text-sm font-medium mb-1">Complemento</label>
                   <input type="text" className="w-full rounded-lg border-gray-300 dark:bg-gray-800 dark:border-gray-600 focus:ring-primary focus:border-primary transition-shadow" />
                 </div>
                 <div>
                   <label className="block text-sm font-medium mb-1">Bairro</label>
                   <input type="text" className="w-full rounded-lg border-gray-300 dark:bg-gray-800 dark:border-gray-600 focus:ring-primary focus:border-primary transition-shadow" defaultValue="Jardim Paulistano" />
                 </div>
                 <div>
                   <label className="block text-sm font-medium mb-1">Cidade</label>
                   <input type="text" className="w-full rounded-lg border-gray-300 dark:bg-gray-800 dark:border-gray-600 focus:ring-primary focus:border-primary transition-shadow" defaultValue="São Paulo" />
                 </div>
                 <div>
                   <label className="block text-sm font-medium mb-1">Estado</label>
                   <input type="text" className="w-full rounded-lg border-gray-300 dark:bg-gray-800 dark:border-gray-600 focus:ring-primary focus:border-primary transition-shadow" defaultValue="SP" />
                 </div>
              </div>
              <div className="flex justify-between pt-4">
                <button onClick={() => setStep(1)} className="text-gray-600 font-medium px-4 py-2 hover:underline">
                  Voltar
                </button>
                <button onClick={() => setStep(3)} className="bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-primary-dark transition-all transform active:scale-95">
                  Ir para Pagamento
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6 animate-slide-in-right">
              <h2 className="text-xl font-bold mb-4">Pagamento</h2>
              
              <div className="space-y-4">
                <label className="flex items-center gap-4 p-4 border border-primary bg-blue-50 dark:bg-blue-900/20 rounded-lg cursor-pointer transition-colors">
                  <input type="radio" name="payment" defaultChecked className="text-primary focus:ring-primary" />
                  <div className="flex-1">
                    <span className="font-bold block text-text-main dark:text-white">Cartão de Crédito</span>
                    <span className="text-sm text-gray-500">Parcelamento em até 10x sem juros</span>
                  </div>
                  <span className="material-symbols-outlined text-primary">credit_card</span>
                </label>

                <div className="pl-8 grid grid-cols-2 gap-4 animate-fade-in-up">
                  <div className="col-span-2">
                    <label className="block text-sm font-medium mb-1">Número do Cartão</label>
                    <input type="text" placeholder="0000 0000 0000 0000" className="w-full rounded-lg border-gray-300 dark:bg-gray-800 dark:border-gray-600 focus:ring-primary focus:border-primary transition-shadow" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Validade</label>
                    <input type="text" placeholder="MM/AA" className="w-full rounded-lg border-gray-300 dark:bg-gray-800 dark:border-gray-600 focus:ring-primary focus:border-primary transition-shadow" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">CVV</label>
                    <input type="text" placeholder="123" className="w-full rounded-lg border-gray-300 dark:bg-gray-800 dark:border-gray-600 focus:ring-primary focus:border-primary transition-shadow" />
                  </div>
                  <div className="col-span-2">
                    <label className="block text-sm font-medium mb-1">Nome no Cartão</label>
                    <input type="text" placeholder="COMO ESTÁ NO CARTÃO" className="w-full rounded-lg border-gray-300 dark:bg-gray-800 dark:border-gray-600 focus:ring-primary focus:border-primary transition-shadow" />
                  </div>
                </div>

                <label className="flex items-center gap-4 p-4 border border-gray-200 dark:border-gray-700 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  <input type="radio" name="payment" className="text-primary focus:ring-primary" />
                  <div className="flex-1">
                    <span className="font-bold block text-text-main dark:text-white">PIX</span>
                    <span className="text-sm text-gray-500">Aprovação imediata + 5% de desconto</span>
                  </div>
                  <span className="material-symbols-outlined text-gray-400">pix</span>
                </label>

                <label className="flex items-center gap-4 p-4 border border-gray-200 dark:border-gray-700 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  <input type="radio" name="payment" className="text-primary focus:ring-primary" />
                  <div className="flex-1">
                    <span className="font-bold block text-text-main dark:text-white">Boleto Bancário</span>
                    <span className="text-sm text-gray-500">Vencimento em 2 dias úteis</span>
                  </div>
                  <span className="material-symbols-outlined text-gray-400">description</span>
                </label>
              </div>

              <div className="flex justify-between pt-8 border-t border-gray-200 dark:border-gray-700 mt-8">
                <button onClick={() => setStep(2)} className="text-gray-600 font-medium px-4 py-2 hover:underline">
                  Voltar
                </button>
                <button onClick={handleFinish} className="bg-green-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-green-700 transition-all shadow-lg animate-pulse hover:animate-none hover:scale-105">
                  Confirmar Pedido - R$ 235,80
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Checkout;