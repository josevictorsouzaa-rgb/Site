import React from 'react';

const LOGO_URL = "https://i.ibb.co/XrcQW0f4/lubelcortada.png";

const ComingSoon: React.FC = () => {
  const mapLink = "https://www.google.com/maps/search/?api=1&query=R.+Fernando+Lopes,+n°+111+-+Paulicéia,+Piracicaba+-+SP,+13424-060";
  const phoneLink = "tel:1925347300";

  return (
    <div className="min-h-screen bg-[#0f172a] flex flex-col items-center justify-center relative overflow-hidden font-sans text-white">
        
        {/* --- Background Elements --- */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1e2843] via-[#0f172a] to-black opacity-80 z-0"></div>
        {/* Animated Orbs */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[100px] animate-pulse delay-700"></div>

        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 py-12 flex flex-col items-center">
            
            {/* --- Brand Section --- */}
            <div className="mb-12 animate-fade-in-up">
                <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl shadow-2xl relative group">
                    <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <img src={LOGO_URL} alt="Lubel Auto Peças" className="h-20 md:h-24 w-auto object-contain relative z-10 drop-shadow-lg" />
                </div>
            </div>

            {/* --- Text Content --- */}
            <div className="text-center max-w-3xl mb-16 animate-fade-in-up delay-100 space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-widest">
                    <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                    Em Construção
                </div>
                
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1]">
                    Nova experiência <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">em breve</span>
                </h1>
                
                <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
                   A Lubel Auto Peças está atualizando sua plataforma digital. 
                   Enquanto preparamos o novo catálogo, nosso atendimento continua normalmente através dos canais abaixo.
                </p>
            </div>

            {/* --- Cards Grid --- */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl animate-fade-in-up delay-200">
                
                {/* Phone Card */}
                <a 
                    href={phoneLink}
                    className="group relative flex flex-col items-center justify-center p-8 rounded-3xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 hover:border-green-500/30 transition-all duration-300 hover:-translate-y-1"
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
                    
                    <div className="size-16 rounded-2xl bg-[#1e2843] border border-white/10 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <span className="material-symbols-outlined text-3xl text-green-400">call</span>
                    </div>
                    
                    <h3 className="text-slate-400 text-sm font-bold uppercase tracking-wider mb-2">Central de Atendimento</h3>
                    <p className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-green-300 transition-colors">
                        (19) 2534-7300
                    </p>
                    
                    <div className="flex items-center gap-2 text-xs font-bold text-green-400 bg-green-400/10 px-4 py-2 rounded-full group-hover:bg-green-400 group-hover:text-black transition-colors">
                        <span className="material-symbols-outlined text-sm">touch_app</span>
                        Clique para Ligar
                    </div>
                </a>

                {/* Address Card */}
                <a 
                    href={mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex flex-col items-center justify-center p-8 rounded-3xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1"
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>

                    <div className="size-16 rounded-2xl bg-[#1e2843] border border-white/10 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <span className="material-symbols-outlined text-3xl text-blue-400">location_on</span>
                    </div>
                    
                    <h3 className="text-slate-400 text-sm font-bold uppercase tracking-wider mb-2">Nossa Loja</h3>
                    <div className="text-center mb-4">
                        <p className="text-lg text-white font-medium group-hover:text-blue-300 transition-colors">
                            R. Fernando Lopes, 111
                        </p>
                        <p className="text-slate-400 text-sm">Paulicéia, Piracicaba - SP</p>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-bold text-blue-400 bg-blue-400/10 px-4 py-2 rounded-full group-hover:bg-blue-400 group-hover:text-black transition-colors">
                        <span className="material-symbols-outlined text-sm">map</span>
                        Ver no Google Maps
                    </div>
                </a>

            </div>

            {/* --- Footer --- */}
            <footer className="mt-20 pt-8 border-t border-white/5 w-full flex flex-col md:flex-row items-center justify-center gap-4 text-slate-500 text-sm animate-fade-in-up delay-300">
                <p>&copy; 2024 Lubel Auto Peças.</p>
                <span className="hidden md:block w-1 h-1 bg-slate-700 rounded-full"></span>
                <p>Todos os direitos reservados.</p>
            </footer>

        </div>
    </div>
  );
};

export default ComingSoon;