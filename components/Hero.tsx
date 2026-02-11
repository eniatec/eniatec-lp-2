import React, { useState, useEffect } from 'react';
import { Bot, Calendar, X, MessageCircle, CheckCircle2, Bell, Smartphone, Zap } from 'lucide-react';
import { Reveal } from './ui/Reveal';
import { motion, AnimatePresence } from 'framer-motion';

const LogoStrip = () => {
  // Logos definidos como componentes para facilitar a estilização única de cada um
  const logos = [
    // Tempo Odontologia: Moderno, Bold, Compacto
    <div key="tempo" className="flex flex-col items-start leading-none group cursor-default">
      <span className="text-2xl font-extrabold text-white tracking-tighter group-hover:text-brand-400 transition-colors">Tempo</span>
      <span className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-bold ml-0.5">Odontologia</span>
    </div>,

    // Instituto Umanizzare: Clássico, Serifa (System font), Elegante
    <div key="umanizzare" className="flex flex-col items-center leading-none group cursor-default">
      <span className="text-[8px] uppercase tracking-widest text-slate-500 mb-1">Instituto</span>
      <span className="text-2xl font-serif italic text-white group-hover:text-brand-400 transition-colors">Umanizzare</span>
    </div>,

    // Clínicas Cantares: Leve, Humanista
    <div key="cantares" className="flex items-baseline gap-1 leading-none group cursor-default">
      <span className="text-sm font-light text-slate-400">Clínicas</span>
      <span className="text-2xl font-medium text-white group-hover:text-brand-400 transition-colors">Cantares</span>
    </div>,

    // Clínica Imune Kids: Brincadeira com pesos, "Kids" em destaque
    <div key="imune" className="flex flex-col items-start leading-none group cursor-default">
       <div className="flex items-baseline gap-1">
          <span className="text-xl font-bold text-white tracking-tight group-hover:text-brand-400 transition-colors">Imune</span>
          <span className="text-xl font-black text-white bg-clip-text text-transparent bg-gradient-to-r from-brand-400 to-blue-400">Kids</span>
       </div>
       <span className="text-[9px] text-slate-500 font-medium tracking-wide">Vacinação</span>
    </div>,

    // Clínica Integrare: Minimalista, Espaçado, High-end
    <div key="integrare" className="flex flex-col items-center leading-none group cursor-default">
      <span className="text-[9px] text-slate-500 mb-0.5">Clínica</span>
      <span className="text-xl font-light uppercase tracking-[0.25em] text-white group-hover:text-brand-400 transition-colors border-b border-transparent group-hover:border-brand-400/50 pb-0.5">Integrare</span>
    </div>
  ];

  // Duplicamos a lista para criar o efeito de loop infinito sem buracos
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <div className="border-t border-slate-800 bg-slate-950 py-16 relative z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <p className="text-center text-slate-500 text-xs font-bold uppercase tracking-[0.2em]">
          Clínicas que automatizaram com ENIATEC
        </p>
      </div>

      <div className="relative w-full flex overflow-hidden mask-linear-gradient">
        {/* Máscaras de gradiente nas laterais para suavizar a entrada/saída */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none"></div>

        <motion.div 
            className="flex items-center gap-16 md:gap-24 min-w-max px-8"
            animate={{ x: "-50%" }} 
            transition={{ 
                duration: 40, 
                ease: "linear", 
                repeat: Infinity 
            }}
        >
            {duplicatedLogos.map((logo, index) => (
                <div key={index} className="opacity-50 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0">
                    {logo}
                </div>
            ))}
        </motion.div>
      </div>
    </div>
  );
};

const ChatSimulation = () => {
  const [step, setStep] = useState(0);

  // Animation Sequence Loop
  useEffect(() => {
    const sequence = [
      { t: 1000, s: 1 }, // Show New Lead Notification
      { t: 3500, s: 2 }, // Lead Message appears in Chat
      { t: 4500, s: 3 }, // AI Typing
      { t: 6000, s: 4 }, // AI Response
      { t: 8000, s: 5 }, // User Confirm
      { t: 9500, s: 6 }, // Success Notification
      { t: 14000, s: 0 }, // Reset
    ];

    let timeouts: ReturnType<typeof setTimeout>[] = [];

    const runSequence = () => {
      setStep(0);
      sequence.forEach(({ t, s }) => {
        const timeout = setTimeout(() => setStep(s), t);
        timeouts.push(timeout);
      });
    };

    runSequence();
    
    // Loop based on total duration of last step
    const interval = setInterval(runSequence, 15000);

    return () => {
      timeouts.forEach(clearTimeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="bg-slate-900/80 backdrop-blur-md p-4 rounded-[2.5rem] shadow-2xl border border-slate-700 relative z-10 w-[360px] max-w-full mx-auto h-[550px] flex flex-col overflow-hidden">
        
        {/* Dynamic Island / Status Bar */}
        <div className="flex justify-between items-center px-4 pt-2 pb-4 border-b border-slate-800/50">
            <div className="text-xs font-medium text-white">09:41</div>
            <div className="w-20 h-5 bg-black/40 rounded-full absolute left-1/2 -translate-x-1/2 top-2"></div>
            <div className="flex gap-1.5">
                <div className="w-4 h-2.5 rounded-sm bg-white"></div>
                <div className="w-4 h-2.5 rounded-sm bg-white/50"></div>
            </div>
        </div>

        {/* Header - WhatsApp Style */}
        <div className="px-4 py-3 bg-slate-800/30 flex items-center gap-3 backdrop-blur-sm">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-brand-400 to-brand-600 flex items-center justify-center text-white shadow-lg shadow-brand-500/20">
                <Bot size={20} />
            </div>
            <div>
                <div className="font-semibold text-white text-sm">IA Atendimento</div>
                <div className="text-brand-400 text-[10px] font-medium flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse"></span>
                    Online
                </div>
            </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 p-4 flex flex-col gap-4 relative overflow-hidden bg-slate-950/30">
             <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
            
            <AnimatePresence>
                {/* User Message */}
                {step >= 2 && (
                    <motion.div 
                        initial={{ opacity: 0, x: -20, scale: 0.9 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        className="bg-slate-800 text-slate-200 p-3 rounded-2xl rounded-tl-none self-start max-w-[85%] text-sm shadow-sm border border-slate-700"
                    >
                        Olá, tem horário disponível para amanhã?
                        <div className="text-[10px] text-slate-500 text-right mt-1">09:42</div>
                    </motion.div>
                )}

                {/* AI Typing */}
                {step === 3 && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        className="bg-brand-600 text-white p-3 rounded-2xl rounded-tr-none self-end text-sm shadow-md flex gap-1 items-center h-10 w-16 justify-center"
                    >
                        <span className="w-1.5 h-1.5 bg-white rounded-full animate-bounce"></span>
                        <span className="w-1.5 h-1.5 bg-white rounded-full animate-bounce delay-100"></span>
                        <span className="w-1.5 h-1.5 bg-white rounded-full animate-bounce delay-200"></span>
                    </motion.div>
                )}

                {/* AI Message */}
                {step >= 4 && (
                    <motion.div 
                        initial={{ opacity: 0, x: 20, scale: 0.9 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        className="bg-brand-600 text-white p-3 rounded-2xl rounded-tr-none self-end max-w-[85%] text-sm shadow-md shadow-brand-900/20"
                    >
                        Olá! Temos sim. 
                        <br/>Segunda-feira às 14:00. Posso confirmar?
                        <div className="text-[10px] text-brand-200 text-right mt-1 flex items-center justify-end gap-1">
                            09:42 <CheckCircle2 size={10} />
                        </div>
                    </motion.div>
                )}

                {/* User Confirm */}
                {step >= 5 && (
                    <motion.div 
                        initial={{ opacity: 0, x: -20, scale: 0.9 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        className="bg-slate-800 text-slate-200 p-3 rounded-2xl rounded-tl-none self-start max-w-[85%] text-sm shadow-sm border border-slate-700"
                    >
                        Pode sim! Obrigado.
                    </motion.div>
                )}
            </AnimatePresence>
        </div>

        {/* Input Simulation */}
        <div className="p-3 bg-slate-900 border-t border-slate-800 flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center text-slate-500">
                <span className="text-lg">+</span>
            </div>
            <div className="flex-1 h-8 bg-slate-800 rounded-full border border-slate-700"></div>
            <div className="w-8 h-8 rounded-full bg-brand-600 flex items-center justify-center text-white">
                <Smartphone size={16} />
            </div>
        </div>

        {/* OVERLAYS: Notifications */}
        
        {/* 1. New Lead Notification */}
        <AnimatePresence>
            {step >= 1 && step < 6 && (
                <motion.div 
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -100, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="absolute top-14 left-4 right-4 bg-slate-800/95 backdrop-blur-md p-3 rounded-2xl border border-slate-700 shadow-2xl flex items-center gap-3 z-20 cursor-pointer"
                >
                    <div className="w-10 h-10 rounded-xl bg-green-500 flex items-center justify-center text-white shadow-lg shadow-green-500/20 relative">
                        <MessageCircle size={20} fill="white" />
                        <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border border-slate-800"></span>
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-baseline">
                            <h4 className="text-white font-semibold text-xs truncate">Novo Lead (WhatsApp)</h4>
                            <span className="text-[10px] text-slate-400">agora</span>
                        </div>
                        <p className="text-slate-400 text-xs truncate">Olá, tem horário disponível...</p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>

        {/* 2. Success Notification */}
        <AnimatePresence>
            {step >= 6 && (
                <motion.div 
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    className="absolute bottom-20 left-4 right-4 bg-slate-800/95 backdrop-blur-md p-4 rounded-2xl border border-brand-500/30 shadow-2xl flex items-center gap-3 z-30"
                >
                    <div className="w-10 h-10 rounded-full bg-brand-500 flex items-center justify-center text-white shadow-lg shadow-brand-500/40">
                        <CheckCircle2 size={24} />
                    </div>
                    <div>
                        <div className="text-white font-bold text-sm">Agendamento Realizado!</div>
                        <div className="text-brand-400 text-xs">Sincronizado na Agenda</div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>

    </div>
  );
};

export const Hero: React.FC = () => {
  const [currentBadge, setCurrentBadge] = useState(0);

  useEffect(() => {
    // Cycle through badges every 4 seconds
    const interval = setInterval(() => {
      setCurrentBadge((prev) => (prev + 1) % 3);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-950">
      
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-brand-900/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[100px]" />
          {/* Grid Overlay */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* Left Content */}
          <div className="max-w-2xl text-center lg:text-left">
             <div className="flex justify-center lg:justify-start w-full">
                 <Reveal>
                    {/* NEON BADGE */}
                    <div className="relative inline-block mb-6 group cursor-default">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-red-600 rounded-lg blur opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
                        <div className="relative px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg flex items-center justify-center overflow-hidden">
                            {/* Animated Border gradient lines */}
                            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-[shimmer_2s_infinite]"></div>
                            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-500 to-transparent animate-[shimmer_2s_infinite_reverse]"></div>
                            
                            <span className="bg-gradient-to-r from-purple-400 to-red-400 bg-clip-text text-transparent font-bold text-xs uppercase tracking-widest z-10">
                                Elimine a dependência do 'boca a boca'
                            </span>
                        </div>
                    </div>
                </Reveal>
             </div>

            <Reveal delay={0.1}>
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
                  Instale a Inteligência Comercial que <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-brand-500">preenche a agenda da sua clínica</span> com Pacientes Particulares.
                </h1>
            </Reveal>

            <Reveal delay={0.2}>
                <p className="text-lg text-slate-400 mb-8 leading-relaxed max-w-lg text-left lg:text-left font-light">
                    Dono(a) de clínica, enquanto sua recepção cuida de quem está dentro, nosso Ecossistema de Aquisição qualifica, agenda e confirma pacientes 24h por dia.
                </p>
            </Reveal>

            <Reveal delay={0.3}>
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 mb-6">
                    <a 
                        href="https://form.respondi.app/KKT545IP"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-brand-500 hover:bg-brand-400 text-white text-lg px-8 py-4 rounded-full font-bold transition-all shadow-[0_0_30px_-5px_rgba(34,197,94,0.4)] hover:shadow-[0_0_40px_-5px_rgba(34,197,94,0.6)] flex items-center justify-center gap-2 uppercase tracking-wide border border-brand-400/20"
                    >
                        QUERO GERAR MAIS LUCRO
                    </a>
                </div>
                <p className="text-sm font-bold uppercase italic text-brand-500 animate-pulse tracking-wide">
                    Ideal para clínicas com faturamento médio acima de R$ 50 mil
                </p>
            </Reveal>
          </div>

          {/* Right Visual - Interactive Simulation */}
          <div className="relative lg:h-[650px] flex items-center justify-center perspective-[1000px]">
             <Reveal delay={0.4} width="100%">
                <div className="relative transform transition-transform duration-700 lg:hover:rotate-y-2 lg:hover:rotate-x-2">
                    
                    {/* Floating Badge Left Top */}
                    <AnimatePresence>
                        {currentBadge === 0 && (
                            <motion.div 
                                key="badge-leads"
                                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.8, y: -10 }}
                                transition={{ duration: 0.6, ease: "easeInOut" }}
                                className="absolute -top-6 -left-4 md:-left-12 z-30"
                            >
                                <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-700 p-4 rounded-2xl shadow-2xl flex items-center gap-3">
                                    <div className="bg-brand-500/20 p-2 rounded-lg text-brand-400">
                                        <Bot size={24} />
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-white leading-none">+197</div>
                                        <div className="text-xs text-slate-400 font-medium uppercase tracking-wider mt-1">Novos Leads</div>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                     {/* Floating Badge Right Mid */}
                     <AnimatePresence>
                        {currentBadge === 1 && (
                            <motion.div 
                                key="badge-calendar"
                                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.8, y: -10 }}
                                transition={{ duration: 0.6, ease: "easeInOut" }}
                                className="absolute top-24 -right-4 md:-right-12 z-30"
                            >
                                <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-700 p-4 rounded-2xl shadow-2xl flex items-center gap-3">
                                    <div className="bg-blue-500/20 p-2 rounded-lg text-blue-400">
                                        <Calendar size={24} />
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-white leading-none">+47</div>
                                        <div className="text-xs text-slate-400 font-medium uppercase tracking-wider mt-1">Agendamentos</div>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Floating Badge Bottom Left - Response Time */}
                    <AnimatePresence>
                        {currentBadge === 2 && (
                            <motion.div 
                                key="badge-response"
                                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.8, y: -10 }}
                                transition={{ duration: 0.6, ease: "easeInOut" }}
                                className="absolute bottom-32 -left-4 md:-left-20 z-30"
                            >
                                <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-700 p-4 rounded-2xl shadow-2xl flex items-center gap-3">
                                    <div className="bg-amber-500/20 p-2 rounded-lg text-amber-400">
                                        <Zap size={24} />
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-white leading-none">5s</div>
                                        <div className="text-xs text-slate-400 font-medium uppercase tracking-wider mt-1">Tempo de resposta</div>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* MAIN SIMULATION COMPONENT */}
                    <ChatSimulation />

                    {/* Decorative Glows */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-brand-500/20 rounded-full blur-[80px] -z-10 pointer-events-none"></div>

                </div>
             </Reveal>
          </div>
        </div>
      </div>
    </section>
    <LogoStrip />
    </>
  );
};