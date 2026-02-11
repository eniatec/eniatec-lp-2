import React from 'react';
import { ArrowRight, CheckCircle2, Linkedin, Instagram } from 'lucide-react';
import { Reveal } from './ui/Reveal';

export const Footer: React.FC = () => {
  return (
    <>
        {/* Support/CTA Section - DARK MODE */}
        <section id="cta" className="py-16 md:py-24 bg-slate-950 border-t border-slate-900 relative overflow-hidden">
            
            {/* Background Glows */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-brand-900/10 rounded-full blur-[120px]" />
                <div className="absolute top-[10%] right-[-5%] w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <Reveal width="100%">
                    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                        {/* Text Left */}
                        <div className="md:w-1/2">
                            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                                Vamos fazer um diagnóstico da sua operação e criar um plano de ação estratégico para a sua clínica.
                            </h2>
                            <p className="text-lg text-slate-400 mb-8">
                                Eu não quero te vender nada agora. Quero apenas te mostrar, na tela do computador, como o sistema funciona e fazer um Diagnóstico de Gargalo da operação da sua clínica.
                            </p>
                            
                            <div className="bg-red-900/10 border border-red-500/20 p-4 rounded-xl mb-8">
                                <p className="text-red-300 text-sm font-medium">
                                    <strong>Atenção:</strong> Devido à complexidade da implementação, aceitamos apenas 4 novas clínicas por mês para garantir a qualidade do acompanhamento.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <a 
                                    href="https://form.respondi.app/KKT545IP"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-brand-500 hover:bg-brand-400 text-white text-lg px-8 py-4 rounded-full font-bold transition-all shadow-lg shadow-brand-500/20 flex items-center justify-center gap-2 uppercase tracking-wide"
                                >
                                    QUERO O MEU DIAGNÓSTICO
                                    <ArrowRight size={20} />
                                </a>
                            </div>
                            <div className="mt-6 flex items-center gap-6 text-sm text-slate-500 font-medium">
                                <span className="flex items-center gap-1"><CheckCircle2 size={16} className="text-brand-500" /> Sem compromisso</span>
                                <span className="flex items-center gap-1"><CheckCircle2 size={16} className="text-brand-500" /> Duração: 45 min</span>
                            </div>
                        </div>

                        {/* Image Right */}
                        <div className="md:w-1/2 relative w-full">
                             <div className="relative bg-slate-900 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden h-[450px] md:h-auto md:min-h-[500px] border border-slate-800 shadow-2xl">
                                <img 
                                    src="https://eniatec.com.br/wp-content/uploads/2024/08/02-e1724532753818.png" 
                                    alt="Especialista em Inteligência Artificial da ENIATEC" 
                                    className="w-full h-full object-cover object-top absolute inset-0 opacity-90"
                                />
                                
                                {/* Gradient Overlay for Text Readability - Adjusted for Dark Theme integration */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"></div>

                                {/* Bio Content */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                                    <div className="mb-2 inline-block px-3 py-1 bg-brand-500 rounded-full text-[10px] font-bold uppercase tracking-widest text-white shadow-sm">
                                        Especialista
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">Engenheiro de Computação & Especialista em IA</h3>
                                    <p className="text-slate-300 text-sm leading-relaxed border-l-2 border-brand-500 pl-4">
                                        +10 anos transformando dados em faturamento. Ajudo negócios digitais a escalarem através de inteligência artificial estratégica e automação de alta performance.
                                    </p>
                                </div>
                             </div>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>

        {/* Footer (Simplified) - Dark Mode */}
        <footer className="bg-slate-950 py-12 border-t border-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-slate-600 text-sm">
                        © {new Date().getFullYear()} ENIATEC - Todos os direitos reservados.
                    </div>
                    
                    <div className="flex gap-6">
                        <a href="https://www.linkedin.com/company/eniatec" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-brand-500 transition-colors">
                            <Linkedin size={20} />
                        </a>
                        <a href="https://www.instagram.com/eniatecbr/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-brand-500 transition-colors">
                            <Instagram size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    </>
  );
};