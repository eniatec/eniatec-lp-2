import React, { useEffect, useRef, useState } from 'react';
import { Calendar, Clock, Quote, Star } from 'lucide-react';
import { Reveal } from './ui/Reveal';
import { motion, useInView, useSpring, useMotionValue, useTransform, animate } from 'framer-motion';

// Componente para animar os números
const AnimatedCounter = ({ value, suffix = "", prefix = "" }: { value: number, suffix?: string, prefix?: string }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });
    
    useEffect(() => {
        if (inView && ref.current) {
            const node = ref.current;
            const controls = animate(0, value, {
                duration: 2.5,
                ease: "easeOut",
                onUpdate: (latest) => {
                    // Formata para milhar se necessário (ex: 5.000)
                    const formatted = Math.floor(latest).toLocaleString('pt-BR');
                    node.textContent = `${prefix}${formatted}${suffix}`;
                }
            });
            return () => controls.stop();
        }
    }, [inView, value, suffix, prefix]);

    return <span ref={ref} className="tabular-nums">{prefix}0{suffix}</span>;
};

export const SocialProof: React.FC = () => {
  return (
    <section id="resultados" className="py-24 relative overflow-hidden bg-slate-50">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
         <div className="absolute top-[10%] left-[-5%] w-[400px] h-[400px] bg-brand-200/40 rounded-full blur-[80px]" />
         <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] bg-sky-200/40 rounded-full blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <Reveal width="100%">
            <div className="text-center mb-20">
                <span className="text-brand-600 font-bold tracking-wider uppercase text-xs mb-3 block">
                    Resultados Reais
                </span>
                <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
                    Quem parou de depender da sorte:
                </h2>
                <p className="text-slate-500 max-w-2xl mx-auto text-lg">
                    Clínicas que trocaram o esforço manual pela inteligência de dados.
                </p>
            </div>
        </Reveal>

        {/* Testimonials - Grid with Stagger Animation */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
            {[
                {
                    quote: "Doutor, a agenda de terça lotou só com a campanha de reativação.",
                    author: "Gerente de Clínica Odontológica",
                    stars: 5
                },
                {
                    quote: "Reduzimos nosso Custo por Agendamento em 40% no primeiro mês.",
                    author: "Diretor Comercial, Estética",
                    stars: 5
                },
                {
                    quote: "Antes eu ficava em cima da secretária o dia todo. Hoje a IA faz o primeiro atendimento e eu tenho paz.",
                    author: "Dono de Clínica",
                    isOwner: true,
                    stars: 5
                }
            ].map((t, i) => (
                <Reveal key={i} delay={i * 0.15} width="100%">
                    <motion.div 
                        whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}
                        className={`bg-white p-8 rounded-[2rem] h-full flex flex-col justify-between shadow-lg border transition-all duration-300 relative group overflow-hidden ${t.isOwner ? 'border-brand-200 ring-4 ring-brand-50' : 'border-slate-100'}`}
                    >
                        {/* Quote Icon Background */}
                        <div className="absolute -right-4 -top-4 text-slate-50 opacity-50 group-hover:text-brand-50 transition-colors duration-500 transform rotate-12">
                            <Quote size={120} />
                        </div>

                        <div className="relative z-10">
                            {/* Stars */}
                            <div className="flex gap-1 mb-6">
                                {[...Array(t.stars)].map((_, idx) => (
                                    <Star key={idx} size={16} className="fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>

                            <p className="text-slate-700 font-medium italic leading-relaxed text-lg mb-8 relative">
                                <span className="text-brand-400 font-serif text-4xl absolute -top-4 -left-2 opacity-50">"</span>
                                {t.quote}
                            </p>
                        </div>

                        <div className="relative z-10 border-t border-slate-100 pt-6 mt-auto flex items-center gap-3">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${t.isOwner ? 'bg-brand-100 text-brand-700' : 'bg-slate-100 text-slate-600'}`}>
                                {t.author.charAt(0)}
                            </div>
                            <div>
                                <p className="text-xs font-bold uppercase tracking-wider text-slate-900">{t.author}</p>
                                <p className="text-[10px] text-slate-400">Cliente Verificado</p>
                            </div>
                        </div>
                    </motion.div>
                </Reveal>
            ))}
        </div>

        {/* Stats Bar */}
        <Reveal delay={0.4} width="100%">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100 relative overflow-hidden">
                {/* Background Shimmer */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-50 to-transparent opacity-50 animate-[shimmer_3s_infinite]"></div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-12 relative z-10">
                    
                    {/* Stat 1 */}
                    <div className="flex items-center gap-6 flex-1 w-full md:w-auto md:border-r border-slate-100 md:pr-12">
                        <div className="p-5 bg-sky-50 text-sky-600 rounded-2xl shadow-sm transform rotate-3 hover:rotate-0 transition-transform duration-300">
                            <Calendar size={48} strokeWidth={1.5} />
                        </div>
                        <div className="text-left">
                            <div className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                                <AnimatedCounter value={5000} prefix="+" />
                            </div>
                            <div className="text-slate-500 text-sm font-medium mt-1">Agendamentos Realizados via IA</div>
                        </div>
                    </div>
                    
                    {/* Stat 2 */}
                    <div className="flex items-center gap-6 flex-1 w-full md:w-auto md:pl-12">
                         <div className="p-5 bg-brand-50 text-brand-600 rounded-2xl shadow-sm transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                            <Clock size={48} strokeWidth={1.5} />
                        </div>
                        <div className="text-left">
                            <div className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight flex items-baseline gap-1">
                                <AnimatedCounter value={5} /> 
                                <span className="text-2xl text-slate-400 font-semibold">Segundos</span>
                            </div>
                            <div className="text-slate-500 text-sm font-medium mt-1">
                                Tempo Médio de Resposta <br/>
                                <span className="text-xs text-red-400">(Sua concorrente leva 4 horas)</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </Reveal>

      </div>
    </section>
  );
};