import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const LOGO_URL = "https://i.ibb.co/XrcQW0f4/lubelcortada.png";

export const Footer: React.FC = () => {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');

  if (isAdmin) return null;

  return (
    // MUDANÇA: Footer agora usa a cor exata da logo (#1e2843)
    <footer className="bg-[#1e2843] border-t border-white/10 pt-16 pb-10 mt-auto text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="inline-block mb-6 group">
               {/* Logo em fundo exato - Sombra removida */}
               <img 
                 src={LOGO_URL} 
                 alt="Lubel Auto Peças" 
                 className="h-16 w-auto object-contain transition-transform group-hover:scale-105" 
               />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Especialistas em peças automotivas desde 1998. Qualidade original e confiança absoluta para o seu veículo.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white text-lg mb-6">Empresa</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-blue-400 transition-colors">Sobre Nós</Link></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Carreiras</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Blog Automotivo</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white text-lg mb-6">Ajuda</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/contato" className="hover:text-blue-400 transition-colors">Central de Suporte</Link></li>
              <li><Link to="/termos" className="hover:text-blue-400 transition-colors">Termos de Uso</Link></li>
              <li><Link to="/privacidade" className="hover:text-blue-400 transition-colors">Política de Privacidade</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white text-lg mb-6">Contato</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-center gap-3">
                <div className="size-8 rounded-full bg-white/10 flex items-center justify-center text-blue-400">
                  <span className="material-symbols-outlined text-sm">call</span>
                </div>
                (11) 9999-9999
              </li>
              <li className="flex items-center gap-3">
                <div className="size-8 rounded-full bg-white/10 flex items-center justify-center text-blue-400">
                  <span className="material-symbols-outlined text-sm">mail</span>
                </div>
                contato@lubel.com.br
              </li>
              <li className="flex items-center gap-3">
                <div className="size-8 rounded-full bg-white/10 flex items-center justify-center text-blue-400">
                  <span className="material-symbols-outlined text-sm">location_on</span>
                </div>
                São Paulo, SP
              </li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">© 2024 Lubel Auto Peças. Todos os direitos reservados.</p>
          <div className="flex gap-4 text-gray-400">
             <span className="material-symbols-outlined hover:text-white cursor-pointer transition-colors">public</span>
             <span className="material-symbols-outlined hover:text-white cursor-pointer transition-colors">photo_camera</span>
             <span className="material-symbols-outlined hover:text-white cursor-pointer transition-colors">alternate_email</span>
          </div>
        </div>
      </div>
    </footer>
  );
};