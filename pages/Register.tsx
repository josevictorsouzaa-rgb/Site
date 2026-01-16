import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register: React.FC = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    cpf: '',
    birthDate: '',
    email: '',
    phone: '',
    companyName: '',
    cnpj: '',
    password: '',
    confirmPassword: ''
  });

  // Password Validation State
  const [passwordCriteria, setPasswordCriteria] = useState({
    length: false,
    uppercase: false,
    number: false,
    special: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (name === 'password') {
      setPasswordCriteria({
        length: value.length >= 8,
        uppercase: /[A-Z]/.test(value),
        number: /[0-9]/.test(value),
        special: /[^A-Za-z0-9]/.test(value)
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validate password match
    if (formData.password !== formData.confirmPassword) {
      alert("As senhas não coincidem.");
      return;
    }
    
    // Check if password meets criteria
    if (!Object.values(passwordCriteria).every(Boolean)) {
      alert("A senha precisa atender a todos os requisitos de segurança.");
      return;
    }

    // Simulate API call and show success modal
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-[#0f0f2a] px-4 py-12">
      <div className="w-full max-w-2xl bg-white dark:bg-[#1a1a2e] rounded-2xl shadow-2xl p-8 border border-white/10 relative">
        
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Crie sua conta</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2">Junte-se a milhares de parceiros Lubel</p>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Dados Pessoais */}
          <div className="md:col-span-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">Dados Pessoais</h3>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Nome Completo</label>
            <input name="fullName" onChange={handleChange} required type="text" className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">CPF</label>
            <input name="cpf" onChange={handleChange} required type="text" placeholder="000.000.000-00" className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Data de Nascimento</label>
            <input name="birthDate" onChange={handleChange} required type="date" className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Telefone / WhatsApp</label>
            <input name="phone" onChange={handleChange} required type="tel" placeholder="(00) 00000-0000" className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary" />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
            <input name="email" onChange={handleChange} required type="email" className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary" />
          </div>

          {/* Dados da Empresa */}
          <div className="md:col-span-2 mt-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">Dados da Empresa</h3>
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Razão Social / Nome da Empresa</label>
            <input name="companyName" onChange={handleChange} required type="text" className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary" />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">CNPJ</label>
            <input name="cnpj" onChange={handleChange} required type="text" placeholder="00.000.000/0001-00" className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary" />
          </div>

          {/* Segurança */}
          <div className="md:col-span-2 mt-4">
             <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">Segurança</h3>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Senha</label>
            <input name="password" onChange={handleChange} required type="password" className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Confirmar Senha</label>
            <input name="confirmPassword" onChange={handleChange} required type="password" className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary" />
          </div>

          {/* Password Strength Indicators */}
          <div className="md:col-span-2 bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Requisitos da senha:</p>
            <ul className="grid grid-cols-2 gap-2 text-xs">
              <li className={`flex items-center gap-2 ${passwordCriteria.length ? 'text-green-600 dark:text-green-400 font-bold' : 'text-gray-500'}`}>
                <span className="material-symbols-outlined text-[16px]">{passwordCriteria.length ? 'check_circle' : 'radio_button_unchecked'}</span> Mínimo 8 caracteres
              </li>
              <li className={`flex items-center gap-2 ${passwordCriteria.uppercase ? 'text-green-600 dark:text-green-400 font-bold' : 'text-gray-500'}`}>
                <span className="material-symbols-outlined text-[16px]">{passwordCriteria.uppercase ? 'check_circle' : 'radio_button_unchecked'}</span> Letra Maiúscula
              </li>
              <li className={`flex items-center gap-2 ${passwordCriteria.number ? 'text-green-600 dark:text-green-400 font-bold' : 'text-gray-500'}`}>
                <span className="material-symbols-outlined text-[16px]">{passwordCriteria.number ? 'check_circle' : 'radio_button_unchecked'}</span> Número
              </li>
              <li className={`flex items-center gap-2 ${passwordCriteria.special ? 'text-green-600 dark:text-green-400 font-bold' : 'text-gray-500'}`}>
                <span className="material-symbols-outlined text-[16px]">{passwordCriteria.special ? 'check_circle' : 'radio_button_unchecked'}</span> Caractere Especial
              </li>
            </ul>
          </div>

          <div className="md:col-span-2 flex items-center gap-2 mt-2">
            <input required type="checkbox" id="terms" className="rounded text-primary focus:ring-primary" />
            <label htmlFor="terms" className="text-sm text-gray-600 dark:text-gray-400">
              Li e concordo com os <a href="#" className="text-primary hover:underline">Termos de Uso</a> e <a href="#" className="text-primary hover:underline">Política de Privacidade</a>.
            </label>
          </div>

          <div className="md:col-span-2 mt-4">
            <button type="submit" className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 rounded-lg shadow-lg transition-transform active:scale-95">
              Criar Conta
            </button>
          </div>
        </form>

        <p className="text-center text-sm text-gray-500 mt-8">
          Já tem uma conta? <Link to="/login" className="text-primary font-bold hover:underline">Faça Login</Link>
        </p>
      </div>

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white dark:bg-[#1a1a2e] rounded-2xl p-8 max-w-md w-full shadow-2xl text-center border border-white/10">
            <div className="size-20 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="material-symbols-outlined text-5xl">pending_actions</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Solicitação em Análise</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Obrigado pelo seu cadastro! Nossa equipe está analisando seus dados (CNPJ e informações comerciais).
            </p>
            <p className="text-sm bg-blue-50 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300 p-4 rounded-lg mb-8">
              Assim que aprovado, você receberá uma notificação no número <strong>WhatsApp/Telefone</strong> cadastrado para realizar seu primeiro acesso.
            </p>
            <button 
              onClick={handleCloseModal}
              className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 rounded-lg transition-colors"
            >
              Entendido, voltar ao início
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;