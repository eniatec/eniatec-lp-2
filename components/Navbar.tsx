import React, { useState, useEffect } from 'react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Função para rolagem suave com compensação do menu fixo
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      // 100px de offset para garantir que o título não fique escondido atrás do menu
      const offset = 100; 
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Dynamic text color classes
  const textColorClass = isScrolled ? 'text-slate-600 hover:text-slate-900' : 'text-slate-200 hover:text-white';

  return (
    <nav 
      className={`hidden md:block fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo - Left */}
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="flex items-center flex-shrink-0">
             <img 
               src={isScrolled 
                 ? "https://eniatec.com.br/wp-content/uploads/2020/05/logo_high_resolution.png" 
                 : "https://eniatec.com.br/wp-content/uploads/2020/05/logo_high_resolution_white.png"
               } 
               alt="ENIATEC - Inteligência Comercial e Automação" 
               className="h-6 w-auto object-contain transition-opacity duration-300"
             />
          </a>

          {/* Desktop Menu - Center */}
          <div className="flex items-center justify-center space-x-8">
            <a 
              href="#problema" 
              onClick={(e) => scrollToSection(e, 'problema')}
              className={`${textColorClass} font-medium transition-colors text-sm cursor-pointer`}
            >
              Vantagens
            </a>
            <a 
              href="#solucao" 
              onClick={(e) => scrollToSection(e, 'solucao')}
              className={`${textColorClass} font-medium transition-colors text-sm cursor-pointer`}
            >
              Funcionalidades
            </a>
            <a 
              href="#evolucao" 
              onClick={(e) => scrollToSection(e, 'evolucao')}
              className={`${textColorClass} font-medium transition-colors text-sm cursor-pointer`}
            >
              Como funciona
            </a>
          </div>

          {/* CTA Buttons - Right */}
          <div className="flex items-center space-x-4">
            <a 
              href="https://form.respondi.app/KKT545IP"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-500 hover:bg-brand-600 text-white px-6 py-2.5 rounded-full font-bold text-xs transition-all transform hover:scale-105 shadow-lg shadow-brand-500/20 uppercase tracking-wide"
            >
              AGENDAR DEMONSTRAÇÃO
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};