import React from 'react';
import { Target, Bot, MessageSquare, CalendarCheck, ArrowRight } from 'lucide-react';
import { Reveal } from './ui/Reveal';

export const SolutionSection: React.FC = () => {
  const pillars = [
    {
      icon: Target,
      title: "Geração de Demanda High-Ticket",
      desc: "Não buscamos cliques baratos. Nossos anúncios filtram curiosos e atraem pacientes com capacidade financeira para seus protocolos mais rentáveis.",
    },
    {
      icon: Bot,
      title: "A I.A. \"Hunter\" (Triagem Imediata)",
      desc: "Uma inteligência artificial treinada para responder em segundos, 24/7. Ela tira dúvidas, quebra objeções de preço e só passa para sua humana quem está pronto para agendar.",
    },
    {
      icon: MessageSquare,
      title: "Infraestrutura de Atendimento Multicanal",
      desc: "Centralizamos sua comunicação, transformamos seu WhatsApp e Instagram em um funil organizado com triagem via IA 24/7 e organizamos seus leads em um CRM visual, eliminando a dependência da ‘’memória’’ da equipe.",
    },
    {
      icon: CalendarCheck,
      title: "Sistema Anti No-Show",
      desc: "Um fluxo automático de confirmação multicanal que reduz drasticamente as faltas e reativa pacientes sumidos há mais de 6 meses.",
    }
  ];

  return (
    <section id="solucao" className="py-24 bg-slate-950 relative overflow-hidden">
      
      {/* Dark Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-brand-900/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="mb-16">
            <Reveal width="100%">
                <div className="text-center">
                    <span className="bg-slate-900 text-brand-400 border border-brand-500/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 inline-block">
                        Mecanismo Único
                     </span>
                    <h2 className="text-xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                        Chega de "Agência de Marketing". <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-500">
                            Sua clínica precisa de uma Infraestrutura para Geração de Vendas Previsíveis.
                        </span>
                    </h2>
                </div>
                <p className="text-slate-400 max-w-4xl mx-auto text-lg text-left md:text-center">
                    A maioria das agências entrega planilhas com nomes (leads) e acha que o trabalho acabou. Nós entregamos pacientes qualificados.
                    Apresentamos um <strong className="text-white">Protocolo Validado</strong>: Uma fusão de Inteligência Artificial, Tráfego Pago e Processos Comerciais desenhada para agir como o "Braço Comercial" que sua clínica nunca teve.
                </p>
            </Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
            {pillars.map((feature, index) => (
                <Reveal key={index} delay={index * 0.1} width="100%">
                    <div className="bg-slate-900/50 backdrop-blur-sm p-10 rounded-2xl shadow-xl border border-slate-800 h-full hover:border-brand-500/30 hover:shadow-2xl transition-all duration-300 group hover:-translate-y-1">
                        <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-500 group-hover:text-white transition-colors text-brand-400 border border-slate-700 group-hover:border-brand-500">
                            <feature.icon size={28} />
                        </div>
                        <h3 className="font-bold text-xl text-white mb-4 group-hover:text-brand-400 transition-colors">{feature.title}</h3>
                        <p className="text-slate-400 leading-relaxed">{feature.desc}</p>
                    </div>
                </Reveal>
            ))}
        </div>
        
        <div className="mt-16 text-center">
            <a 
                href="https://form.respondi.app/KKT545IP"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-400 font-bold hover:text-brand-300 flex items-center justify-center gap-2 group mx-auto text-lg transition-colors"
            >
                AGENDAR DEMONSTRAÇÃO <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18}/>
            </a>
        </div>

      </div>
    </section>
  );
};