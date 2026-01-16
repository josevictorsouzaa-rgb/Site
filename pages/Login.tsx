import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const LOGO_URL = "https://i.ibb.co/XrcQW0f4/lubelcortada.png";

const Login: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  // Login Padrão (Cliente)
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      login('user');
      navigate('/catalogo');
    }, 1500);
  };

  // Login Administrativo (Simulado)
  const handleAdminLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      login('admin');
      navigate('/admin');
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#1e2843]">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1e2843] via-[#161d30] to-[#0a0a16] z-0"></div>
      <div className="absolute -top-[20%] -left-[10%] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute -bottom-[20%] -right-[10%] w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px]"></div>

      <div className="w-full max-w-md bg-white dark:bg-[#1a1a2e]/90 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-white/10 relative z-10 mx-4">
        <div className="flex flex-col items-center mb-8">
          
          <div className="mb-6 p-3 bg-[#1e2843] rounded-2xl shadow-xl border border-white/5 transform hover:scale-105 transition-transform duration-300">
             <img 
               src={LOGO_URL} 
               alt="Lubel Auto Peças" 
               className="h-12 w-auto object-contain" 
             />
          </div>

          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Acesse sua conta</h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">Gerencie suas compras e vendas com facilidade</p>
        </div>

        <form className="space-y-6" onSubmit={handleLogin}>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-2.5 text-gray-400">mail</span>
              <input 
                type="email" 
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary transition-all disabled:opacity-50" 
                placeholder="seu@email.com" 
                required 
                disabled={isLoading}
              />
            </div>
          </div>
          
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Senha</label>
              <a href="#" className="text-xs text-primary hover:text-blue-400 hover:underline transition-colors">Esqueceu a senha?</a>
            </div>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-2.5 text-gray-400">lock</span>
              <input 
                type="password" 
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary transition-all disabled:opacity-50" 
                placeholder="••••••••" 
                required 
                disabled={isLoading}
              />
            </div>
          </div>

          <button 
            type="submit" 
            disabled={isLoading}
            className={`w-full bg-primary text-white font-bold py-3 rounded-lg shadow-lg transition-all transform flex items-center justify-center gap-2
              ${isLoading ? 'cursor-not-allowed opacity-90 scale-[0.98]' : 'hover:bg-[#2a3655] hover:shadow-primary/30 active:scale-[0.98]'}
            `}
          >
            {isLoading ? (
              <>
                <div className="size-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                <span>Acessando...</span>
              </>
            ) : (
              "Entrar"
            )}
          </button>
        </form>

        <div className="mt-6 flex flex-col gap-4">
           <p className="text-center text-sm text-gray-500">
             Não tem uma conta? <Link to="/cadastro" className={`text-primary font-bold hover:text-blue-400 hover:underline transition-colors ${isLoading ? 'pointer-events-none opacity-50' : ''}`}>Cadastre-se</Link>
           </p>

           <div className="relative flex py-2 items-center">
              <div className="flex-grow border-t border-gray-200 dark:border-gray-700"></div>
              <span className="flex-shrink-0 mx-4 text-xs text-gray-400">OU</span>
              <div className="flex-grow border-t border-gray-200 dark:border-gray-700"></div>
           </div>

           <button 
             type="button"
             onClick={handleAdminLogin}
             disabled={isLoading}
             className="w-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 font-bold py-3 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-sm flex items-center justify-center gap-2"
           >
             <span className="material-symbols-outlined text-lg">admin_panel_settings</span>
             Acesso Administrativo
           </button>
        </div>
      </div>
    </div>
  );
};

export default Login;