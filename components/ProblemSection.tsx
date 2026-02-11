import React from 'react';
import { Clock, Armchair, UserX, AlertTriangle, ArrowDown, Timer } from 'lucide-react';
import { Reveal } from './ui/Reveal';
import { motion } from 'framer-motion';

export const ProblemSection: React.FC = () => {
  return (
    <section id="problema" className="py-24 bg-white relative overflow-hidden border-t border-slate-100">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-4xl mx-auto mb-16">
          <Reveal width="100%">
            <span className="text-red-600 font-bold tracking-wider uppercase text-xs mb-4 block">
                Custo da Porta Aberta
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
              O problema não é falta de Leads. <br className="hidden md:block"/>
              É o <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-purple-600">"Gargalo dos 5 Minutos"</span>.
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
               Você tem uma clínica excelente e uma equipe técnica impecável. Mas, no fim do mês, a conta não fecha como deveria. Por quê?
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Card 1 */}
            <Reveal delay={0.1} width="100%">
                <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:border-red-200 transition-all duration-300 group h-full">
                    <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                         <Clock className="text-red-600" size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">O Lead Esfria</h3>
                    <p className="text-slate-600 leading-relaxed text-sm">
                        Se um paciente pergunta o preço no WhatsApp e sua equipe demora 1 hora para responder, ele já agendou no concorrente.
                    </p>
                </div>
            </Reveal>

            {/* Card 2 */}
            <Reveal delay={0.2} width="100%">
                <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:border-purple-200 transition-all duration-300 group h-full">
                    <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                         <Armchair className="text-purple-600" size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">A Cadeira Vazia</h3>
                    <p className="text-slate-600 leading-relaxed text-sm">
                         Falta de leads entrando em contato. O custo fixo da sua sala (aluguel, ar-condicionado, equipe) é o mesmo se ela estiver cheia ou vazia. Cada horário vago é prejuízo irreversível.
                    </p>
                </div>
            </Reveal>

            {/* Card 3 */}
            <Reveal delay={0.3} width="100%">
                <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 group h-full">
                    <div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                         <UserX className="text-slate-600" size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">O No-Show Invisível</h3>
                    <p className="text-slate-600 leading-relaxed text-sm">
                        Pacientes confirmam e não aparecem. Sua equipe perde tempo tentando remarcar e você perde a hora clínica.
                    </p>
                </div>
            </Reveal>
        </div>
        
        {/* Agitation Box with Animated Border */}
        <Reveal width="100%" delay={0.4}>
            <div className="mt-16 relative group">
                
                {/* 1. Static Glow Background */}
                <div className="absolute -inset-[2px] bg-gradient-to-r from-brand-200 via-brand-500 to-brand-200 rounded-3xl opacity-50 blur-[8px] group-hover:opacity-75 transition-opacity duration-500 animate-pulse"></div>
                
                {/* 2. Rotating Gradient Border */}
                <div className="absolute -inset-[2px] rounded-3xl overflow-hidden z-0">
                    <motion.div 
                        className="w-[200%] h-[200%] absolute top-[-50%] left-[-50%]"
                        style={{ 
                            backgroundImage: 'conic-gradient(from 0deg, transparent 0 300deg, #22c55e 360deg)',
                        }}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    />
                </div>

                {/* 3. Content Container (Masks the center) */}
                <div className="bg-slate-50 rounded-3xl p-8 md:p-12 relative overflow-hidden z-10 border border-transparent">
                    {/* Decorative Icon Background */}
                    <div className="absolute top-0 right-0 opacity-5 pointer-events-none transform translate-x-10 -translate-y-10">
                        <Timer size={250} />
                    </div>
                    
                    <div className="flex flex-col md:flex-row items-start gap-8 relative z-10">
                        <div className="flex-shrink-0">
                             <div className="bg-white p-4 rounded-full text-brand-600 border border-slate-100 shadow-md">
                                <AlertTriangle size={32} />
                             </div>
                        </div>
                        <div>
                            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">
                                Consultórios com tempo de resposta inferior a 2 minutos no Whatsapp conseguem cerca de <span className="text-brand-600">3× mais conversões!</span>
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                                Não é culpa da sua secretária. Humanamente, é impossível atender telefone, recepcionar paciente, servir café e responder 50 leads do Instagram com agilidade e persuasão. Você está tentando resolver um problema de escala com esforço humano. E isso custa caro.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Reveal>

      </div>
    </section>
  );
};