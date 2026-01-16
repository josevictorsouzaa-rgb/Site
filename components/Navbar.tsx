import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

// LOGO
const LOGO_URL = "https://i.ibb.co/XrcQW0f4/lubelcortada.png";

export const Navbar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, role, logout } = useAuth();
  const isAdminRoute = location.pathname.startsWith('/admin');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const handleLogout = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    navigate('/sair');
  };

  // Se estivermos DENTRO da rota /admin, a navbar principal não aparece (o dashboard tem a dele)
  if (isAdminRoute) return null;

  // Determine where the logo should link to
  const logoLink = isAuthenticated ? '/catalogo' : '/';

  return (
    <header className="sticky top-0 z-50 bg-[#1e2843] border-b border-white/10 shadow-lg h-20 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full gap-4">
          
          {/* Logo & Mobile Menu Button */}
          <div className="flex items-center gap-2 md:gap-6">
             <button 
               className="md:hidden p-2 -ml-2 text-blue-100 hover:bg-white/10 rounded-lg transition-colors"
               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
             >
               <span className="material-symbols-outlined">menu</span>
             </button>
             
             <Link to={logoLink} className="flex items-center group py-2">
                <img 
                  src={LOGO_URL} 
                  alt="Lubel Auto Peças" 
                  className="h-14 md:h-16 w-auto object-contain transition-transform group-hover:scale-105" 
                />
             </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 ml-auto mr-8">
            {!isAuthenticated ? (
              <Link to="/" className="text-sm font-medium text-blue-100 hover:text-white hover:bg-white/10 px-3 py-2 rounded-lg transition-all">Sobre</Link>
            ) : (
              <>
                <Link to="/catalogo" className="text-sm font-medium text-blue-100 hover:text-white hover:bg-white/10 px-3 py-2 rounded-lg transition-all">Catálogo</Link>
                <Link to="/novidades" className="text-sm font-medium text-blue-100 hover:text-white hover:bg-white/10 px-3 py-2 rounded-lg transition-all">Novidades</Link>
                <Link to="/pedidos" className="text-sm font-medium text-blue-100 hover:text-white hover:bg-white/10 px-3 py-2 rounded-lg transition-all">Meus Pedidos</Link>
                
                {/* Link Visível apenas para Admins */}
                {role === 'admin' && (
                   <Link to="/admin" className="text-sm font-bold text-yellow-400 hover:text-yellow-300 bg-yellow-400/10 border border-yellow-400/20 px-3 py-2 rounded-lg transition-all flex items-center gap-1">
                      <span className="material-symbols-outlined text-xs">admin_panel_settings</span>
                      Painel Admin
                   </Link>
                )}
              </>
            )}
            
            <Link to="/contato" className="text-sm font-medium text-blue-100 hover:text-white hover:bg-white/10 px-3 py-2 rounded-lg transition-all">Fale Conosco</Link>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {isAuthenticated ? (
              <>
                <Link to="/carrinho" className="relative flex items-center justify-center size-10 rounded-full hover:bg-white/10 transition-colors text-blue-100 hover:text-white">
                  <span className="material-symbols-outlined">shopping_cart</span>
                  <span className="absolute top-0 right-0 size-2.5 bg-red-500 rounded-full border-2 border-[#1e2843]"></span>
                </Link>
                <button 
                  onClick={handleLogout}
                  className="hidden md:flex items-center justify-center size-10 rounded-full hover:bg-white/10 transition-colors text-blue-100 hover:text-white" 
                  title="Sair"
                >
                  <span className="material-symbols-outlined">logout</span>
                </button>
              </>
            ) : (
              <Link 
                to="/login" 
                className="bg-white hover:bg-blue-50 text-primary px-5 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all shadow-lg shadow-black/20 flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-[18px]">login</span>
                <span className="hidden sm:inline">Acessar Catálogo</span>
                <span className="sm:hidden">Entrar</span>
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#1e2843] absolute w-full shadow-2xl z-50 animate-in slide-in-from-top-2 duration-200">
          <div className="px-4 py-4 space-y-2">
            {!isAuthenticated ? (
              <Link onClick={() => setMobileMenuOpen(false)} to="/" className="block py-3 px-4 rounded-lg text-base font-medium text-gray-200 hover:bg-white/10 hover:text-white transition-colors">Sobre a Lubel</Link>
            ) : (
              <>
                <Link onClick={() => setMobileMenuOpen(false)} to="/catalogo" className="block py-3 px-4 rounded-lg text-base font-medium text-gray-200 hover:bg-white/10 hover:text-white transition-colors">Catálogo de Peças</Link>
                <Link onClick={() => setMobileMenuOpen(false)} to="/novidades" className="block py-3 px-4 rounded-lg text-base font-medium text-gray-200 hover:bg-white/10 hover:text-white transition-colors">Novidades</Link>
                <Link onClick={() => setMobileMenuOpen(false)} to="/ped