import React from 'react';
import { AlertTriangle, Calculator } from 'lucide-react';
import { Reveal } from './ui/Reveal';

export const PriceAnchoring: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-white relative overflow-hidden border-t border-slate-100">
      
      {/* Light Mode Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-brand-100/40 rounded-full blur-[100px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
            <Reveal width="100%">
                <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mt-6 mb-4">
                    Quanto custa <span className="text-red-600">não ter</span> esse sistema?
                </h2>
                <p className="text-slate-500 text-lg">A ineficiência é o imposto mais caro que sua clínica paga hoje.</p>
            </Reveal>
        </div>

        <Reveal delay={0.1} width="100%">
            <div className="max-w-5xl mx-auto bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-slate-200 flex flex-col md:flex-row relative group">
                
                {/* Left Side: Graphic/Calc */}
                <div className="p-10 md:w-1/2 bg-slate-50 flex flex-col justify-center items-center text-center border-b md:border-b-0 md:border-r border-slate-200 relative z-10">
                     <div className="w-20 h-20 bg-white rounded-2xl shadow-sm border border-slate-200 flex items-center justify-center mb-6">
                        <Calculator className="text-brand-600" size={40} />
                     </div>
                     <h3 className="text-2xl font-bold text-slate-900 mb-2">Faça a conta rápida</h3>
                     
                     <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm w-full max-w-xs space-y-4 mt-4 relative">
                        {/* Receipt Detail Top */}
                        <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-20 h-1.5 bg-slate-100 rounded-b-lg border border-t-0 border-slate-200"></div>

                        <div className="flex justify-between text-sm">
                            <span className="text-slate-500">Ticket Médio</span>
                            <span className="font-bold text-slate-900">R$ 850,00</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-slate-500">Faltas (no-show) / dia</span>
                            <span className="font-bold text-slate-900">3</span>
                        </div>
                        <div className="border-t border-slate-100 pt-4 flex justify-between items-center">
                             <span className="font-bold text-slate-600 text-sm">Prejuízo Mensal</span>
                             <span className="font-bold text-red-600 bg-red-50 px-2 py-1 rounded">- R$ 51.000,00</span>
                        </div>
                     </div>
                </div>

                {/* Right Side: Copy */}
                <div className="p-10 md:w-1/2 flex flex-col justify-center relative z-10 bg-white">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">O prejuízo da ineficiência</h3>
                    <p className="text-slate-600 leading-relaxed mb-8">
                        Faça a conta rápida: Se o seu ticket médio é R$ 850,00 e você tem apenas 3 faltas (no-show) por dia, você perde em média mais de <strong className="text-slate-900">R$ 50.000,00 por mês</strong>.
                    </p>
                    
                    <div className="flex items-start gap-4 bg-amber-50 border border-amber-100 p-5 rounded-xl">
                        <AlertTriangle className="text-amber-500 shrink-0 mt-0.5" size={20} />
                        <p className="text-sm text-amber-900/80 font-medium leading-relaxed">
                            O investimento na Infraestrutura se paga recuperando apenas <span className="text-amber-700 font-bold">alguns pacientes</span> que hoje ‘’vazam pelo ralo’’ da ineficiência. O resto é lucro puro, liberdade de tempo e paz!
                        </p>
                    </div>
                </div>
            </div>
        </Reveal>
      </div>
    </section>
  );
};