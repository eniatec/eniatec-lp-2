import React from 'react';
import { User, MessageCircle, HelpCircle, XCircle, TrendingUp, Bot, Database, Smartphone, DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';
import { Reveal } from './ui/Reveal';

// Custom Icons for Brands
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M21.35 11.1h-9.17v2.73h6.51c-.33 3.81-3.5 5.44-6.5 5.44C8.36 19.27 5 16.25 5 12c0-4.1 3.2-7.27 7.2-7.27 3.09 0 4.9 1.97 4.9 1.97L19 4.72S16.56 2 12.1 2C6.42 2 2.03 6.8 2.03 12c0 5.05 4.13 10 10.22 10 5.38 0 9.25-4.07 9.25-9.51 0-.48-.07-1.11-.15-1.39z"/>
  </svg>
);

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const trafficSources = [
    { name: 'Instagram', icon: InstagramIcon, color: 'text-pink-400', bg: 'bg-pink-900/20', border: 'border-pink-500/20' },
    { name: 'Google', icon: GoogleIcon, color: 'text-red-400', bg: 'bg-red-900/20', border: 'border-red-500/20' },
    { name: 'TikTok', icon: TikTokIcon, color: 'text-white', bg: 'bg-slate-800', border: 'border-slate-700' },
];

export const FunnelComparison: React.FC = () => {
  return (
    <section id="evolucao" className="py-24 bg-white overflow-hidden relative border-t border-slate-100">
       {/* Background Grid Pattern - Light Mode */}
       <div className="absolute inset-0 z-0 opacity-[0.4]" 
            style={{ backgroundImage: 'radial-gradient(#e2e8f0 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
       </div>

       {/* Ambient Glows - Light Mode */}
       <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-brand-100/40 rounded-full blur-[100px] pointer-events-none"></div>
       <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <Reveal width="100%">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
              <motion.span 
                className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-brand-500 to-slate-900"
                style={{ backgroundSize: "200% auto" }}
                animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                A Evolução do seu Funil de Vendas
              </motion.span>
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">
              Veja a diferença entre depender da sorte e ter um ecossistema previsível trabalhando por você.
            </p>
          </Reveal>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          
          {/* SCENARIO 1: MANUAL (OLD WAY) - LIGHT CARD */}
          <Reveal width="100%">
            <div className="bg-white h-full rounded-3xl p-8 border border-slate-200 relative overflow-hidden flex flex-col group hover:border-slate-300 hover:shadow-xl transition-all shadow-sm">
                <div className="flex items-center gap-4 mb-12">
                    <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center text-red-500 shrink-0 border border-red-100">
                        <XCircle size={24} />
                    </div>
                    <h3 className="font-bold text-xl text-slate-700">O JEITO ANTIGO (MANUAL)</h3>
                </div>

                <div className="flex-1 flex flex-col items-center relative">
                    
                    {/* Vertical Dashed Line Background */}
                    <div className="absolute top-10 bottom-10 w-px border-l-2 border-dashed border-slate-300 left-1/2 -translate-x-1/2"></div>

                    {/* Step 1: Input */}
                    <div className="relative z-10 flex flex-col items-center mb-16">
                        <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center text-slate-500 border border-slate-200 shadow-sm">
                            <User size={30} strokeWidth={1.5} />
                        </div>
                        <span className="mt-3 px-3 py-1 bg-white border border-slate-200 rounded-md text-xs font-medium text-slate-500 shadow-sm">
                            Indicação / Boca a boca
                        </span>
                    </div>

                    {/* Step 2: Bottleneck */}
                    <div className="relative z-10 flex flex-col items-center mb-16">
                        <div className="w-2 h-2 rounded-full bg-slate-400 mb-2"></div>
                         {/* Slow Particle Animation */}
                         <motion.div 
                            className="absolute -top-12 w-1.5 h-1.5 bg-slate-400 rounded-full"
                            animate={{ top: ["-40px", "0px"] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                         />

                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-slate-400 border border-slate-200 shadow-sm relative">
                            <MessageCircle size={28} strokeWidth={1.5} />
                            {/* Alert Badge */}
                            <div className="absolute top-0 right-0 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-[10px] font-bold animate-bounce shadow-md border-2 border-white">!</div>
                        </div>
                        <span className="mt-3 px-3 py-1 bg-white border border-slate-200 rounded-md text-xs font-bold text-slate-700 shadow-sm">
                            WhatsApp Lotado
                        </span>
                        <span className="text-[10px] text-red-500 font-medium mt-1">Demora na resposta</span>

                        {/* Leaking Leads Animation */}
                        <motion.div 
                            className="absolute top-10 right-[-20px] w-2 h-2 bg-red-500/50 rounded-full opacity-0"
                            animate={{ opacity: [0, 1, 0], x: [0, 20], y: [0, 20] }}
                            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                         />
                         <motion.div 
                            className="absolute top-12 left-[-20px] w-2 h-2 bg-red-500/50 rounded-full opacity-0"
                            animate={{ opacity: [0, 1, 0], x: [0, -20], y: [0, 20] }}
                            transition={{ duration: 2, repeat: Infinity, delay: 1.2 }}
                         />
                    </div>

                    {/* Step 3: Result */}
                    <div className="relative z-10 flex flex-col items-center opacity-60">
                         <motion.div 
                            className="absolute -top-12 w-1.5 h-1.5 bg-slate-400 rounded-full opacity-50"
                            animate={{ top: ["-40px", "0px"] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 1.5 }}
                         />
                        <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 border border-slate-300 border-dashed">
                            <HelpCircle size={30} strokeWidth={1.5} />
                        </div>
                        <span className="mt-3 text-xs font-medium text-slate-500">
                            Venda Incerta
                        </span>
                    </div>

                </div>
            </div>
          </Reveal>

          {/* SCENARIO 2: AUTOMATIC (ENIATEC WAY) - DARK CARD (To represent Software/Tech) */}
          <Reveal width="100%" delay={0.2}>
            <div className="bg-slate-900 h-full rounded-3xl p-8 border border-brand-500/30 shadow-2xl shadow-brand-500/20 relative overflow-hidden flex flex-col">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-500 to-emerald-500"></div>
                
                <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center text-emerald-400 shrink-0 border border-emerald-500/20">
                        <TrendingUp size={24} />
                    </div>
                    <h3 className="font-bold text-xl text-white">METODOLOGIA ENIATEC</h3>
                </div>

                <div className="flex-1 flex flex-col relative">
                    
                    {/* 1. SOURCES ROW (Meta, Google, TikTok) */}
                    <div className="flex justify-center relative z-20 mt-12 mb-8">
                        
                        {/* Wrapper to tightly wrap icons */}
                        <div className="relative flex items-center gap-6">

                            {/* LABEL: CANAIS DE AQUISIÇÃO (Always Top) */}
                            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-max flex flex-col items-center">
                                <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest bg-slate-800 px-3 py-1 rounded-full border border-slate-700 shadow-sm z-10">
                                    CANAIS DE AQUISIÇÃO
                                </span>
                                <div className="w-px h-3 bg-slate-700 -mt-0.5"></div>
                            </div>

                            {trafficSources.map((source, i) => (
                                <div key={i} className="flex flex-col items-center group">
                                    <div className={`w-10 h-10 ${source.bg} rounded-full flex items-center justify-center ${source.color} border ${source.border} transition-transform transform group-hover:scale-110 shadow-sm`}>
                                        <source.icon />
                                    </div>
                                    <div className="h-6 w-0.5 bg-emerald-500/20 mt-2 relative overflow-hidden">
                                        <motion.div 
                                            className="absolute top-0 w-full h-1/2 bg-emerald-500"
                                            animate={{ top: ["-100%", "100%"] }}
                                            transition={{ duration: 1, repeat: Infinity, ease: "linear", delay: i * 0.2 }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* 2. LANDING PAGE ROW */}
                    <div className="flex flex-col items-center relative z-20 mb-6">
                        <div className="w-full max-w-[280px] bg-slate-800 border border-slate-700 shadow-lg rounded-xl p-3 flex items-center gap-3 relative">
                            <Smartphone className="text-slate-400" size={20} />
                            <span className="text-sm font-bold text-slate-200">Página de Alta Conversão</span>
                            {/* Ping Animation */}
                            <span className="absolute -top-1 -right-1 flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                            </span>
                        </div>
                        <div className="h-8 w-0.5 bg-emerald-500/20 relative overflow-hidden">
                             <motion.div 
                                className="absolute top-0 w-full h-full bg-emerald-500"
                                animate={{ top: ["-100%", "100%"] }}
                                transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                             />
                        </div>
                    </div>

                    {/* 3. MIDDLEWARE (WHATSAPP + BOT + CRM TEXT) */}
                    <div className="flex justify-center items-center gap-3 relative z-20 mb-2">
                        <div className="flex items-center bg-emerald-900/10 rounded-2xl p-2 pr-6 border border-emerald-500/20 gap-3 shadow-sm">
                            <div className="flex items-center gap-2">
                                <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-emerald-400 shadow-sm border border-slate-700">
                                    <MessageCircle size={24} />
                                </div>
                                <div className="h-0.5 w-3 bg-emerald-500/50"></div>
                                <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-emerald-500/20">
                                    <Bot size={24} />
                                </div>
                            </div>
                            <span className="font-extrabold text-sm text-emerald-400 tracking-tight">CRM + IA</span>
                        </div>
                    </div>

                    {/* 4. BRANCHING & RESULTS (CONTINUOUS FLOW) */}
                    <div className="relative mt-2 h-32 w-full max-w-md mx-auto">
                        
                        {/* Animated SVG Flux */}
                        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                            {/* Background Tracks (Faint) */}
                            {/* Center */}
                            <path d="M50 0 L50 45" stroke="#1e293b" strokeWidth="4" fill="none" vectorEffect="non-scaling-stroke" strokeLinecap="round" />
                            {/* Left */}
                            <path d="M50 15 Q 16 15 16 55" stroke="#1e293b" strokeWidth="4" fill="none" vectorEffect="non-scaling-stroke" strokeLinecap="round" />
                            {/* Right */}
                            <path d="M50 15 Q 84 15 84 55" stroke="#1e293b" strokeWidth="4" fill="none" vectorEffect="non-scaling-stroke" strokeLinecap="round" />

                            {/* Active Flow Tracks (Moving Beam) */}
                            
                            {/* Center Beam */}
                            <motion.path 
                                d="M50 0 L50 45" 
                                stroke="#10b981" 
                                strokeWidth="4" 
                                fill="none"
                                strokeLinecap="round"
                                strokeDasharray="20 40" 
                                vectorEffect="non-scaling-stroke"
                                animate={{ strokeDashoffset: [0, -60] }}
                                transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
                            />

                            {/* Left Beam */}
                            <motion.path 
                                d="M50 15 Q 16 15 16 55" 
                                stroke="#34d399" 
                                strokeWidth="4" 
                                fill="none"
                                strokeLinecap="round"
                                strokeDasharray="20 40"
                                vectorEffect="non-scaling-stroke"
                                animate={{ strokeDashoffset: [0, -60] }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                            />

                            {/* Right Beam */}
                            <motion.path 
                                d="M50 15 Q 84 15 84 55" 
                                stroke="#34d399" 
                                strokeWidth="4" 
                                fill="none"
                                strokeLinecap="round"
                                strokeDasharray="20 40"
                                vectorEffect="non-scaling-stroke"
                                animate={{ strokeDashoffset: [0, -60] }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                            />
                        </svg>


                        <div className="absolute top-14 w-full flex justify-between items-start px-2">
                            
                            {/* Left: Reactivation */}
                            <div className="flex flex-col items-center w-1/3 opacity-50">
                                <div className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center text-slate-500 border border-slate-700 mb-2">
                                    <Database size={16} />
                                </div>
                                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wide">Reativação</span>
                            </div>

                            {/* Center: SALE */}
                            <div className="flex flex-col items-center w-1/3 -mt-2">
                                <motion.div 
                                    whileHover={{ scale: 1.05 }}
                                    className="bg-emerald-500 text-white px-6 py-3 rounded-full font-bold shadow-lg shadow-emerald-500/20 flex items-center gap-2 z-10 cursor-pointer relative overflow-hidden"
                                >
                                    {/* Shimmer effect inside button */}
                                    <div className="absolute inset-0 bg-white/20 translate-x-[-100%] animate-[shimmer_2s_infinite]"></div>
                                    
                                    <DollarSign size={18} strokeWidth={3} />
                                    VENDA
                                </motion.div>
                                <span className="text-xs font-bold text-emerald-400 mt-2">Agendamento Realizado</span>
                            </div>

                             {/* Right: Follow-up */}
                             <div className="flex flex-col items-center w-1/3 opacity-50">
                                <div className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center text-slate-500 border border-slate-700 mb-2">
                                    <Database size={16} />
                                </div>
                                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wide">Follow-up</span>
                            </div>

                        </div>

                    </div>
                    
                </div>
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  );
};