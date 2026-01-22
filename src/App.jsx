import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, 
  Layers, 
  Cpu, 
  Zap, 
  ShieldCheck, 
  UserX, 
  CheckCircle2, 
  ArrowRight, 
  Ghost, 
  Monitor, 
  Smartphone,
  Terminal,
  Clock,
  Briefcase,
  X,
  MessageCircle,
  Send
} from 'lucide-react';

// --- Configuração de Fontes e Estilos Globais ---
const App = () => {
  // Estado global para controlar o Modal de Contato (WhatsApp)
  const [isContactOpen, setIsContactOpen] = useState(false);

  const openContact = () => setIsContactOpen(true);
  const closeContact = () => setIsContactOpen(false);

  return (
    <div className="min-h-screen bg-[#0B0F14] text-[#CBD5E1] font-sans selection:bg-[#2563EB] selection:text-white overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@600;700&display=swap');
        
        body {
          font-family: 'Inter', sans-serif;
        }
        
        h1, h2, h3, h4, h5, h6 {
          font-family: 'Space Grotesk', sans-serif;
          letter-spacing: -0.02em;
        }

        .bg-grid-pattern {
          background-size: 50px 50px;
          background-image: linear-gradient(to right, rgba(37, 99, 235, 0.05) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(37, 99, 235, 0.05) 1px, transparent 1px);
        }
        
        .glass-card {
          background: rgba(18, 24, 38, 0.7);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(59, 130, 246, 0.1);
        }

        /* Estilo para inputs do formulário */
        .form-input {
          width: 100%;
          background: rgba(11, 15, 20, 0.6);
          border: 1px solid #1E293B;
          border-radius: 0.5rem;
          padding: 0.75rem 1rem;
          color: #F8FAFC;
          outline: none;
          transition: all 0.3s;
        }
        .form-input:focus {
          border-color: #2563EB;
          box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.2);
        }
      `}</style>
      
      <Navbar />
      <HeroSection onOpenContact={openContact} />
      <TargetAudience />
      <Services />
      <Process />
      <Confidentiality />
      <Benefits />
      <FooterCTA onOpenContact={openContact} />
      
      {/* Modal de Contato / WhatsApp */}
      <ContactModal isOpen={isContactOpen} onClose={closeContact} />
    </div>
  );
};

// --- Componente do Modal de Contato (WhatsApp Form) ---
const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    agency: '',
    service: 'Landing Page',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Formatação da mensagem para o WhatsApp
    const text = `*Olá Lucas! Vim pelo site e gostaria de uma parceria.* 👋\n\n` +
      `👤 *Nome:* ${formData.name}\n` +
      `🏢 *Agência:* ${formData.agency}\n` +
      `🚀 *Interesse:* ${formData.service}\n` +
      `📝 *Mensagem:* ${formData.message || "Gostaria de saber mais sobre os valores e prazos."}`;

    const encodedText = encodeURIComponent(text);
    const phoneNumber = "5542999231968";
    
    // Abre o WhatsApp em nova aba
    window.open(`https://wa.me/${phoneNumber}?text=${encodedText}`, '_blank');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />
          <motion.div 
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            className="relative w-full max-w-md glass-card p-8 rounded-2xl border border-[#2563EB]/30 shadow-2xl"
          >
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 text-[#94A3B8] hover:text-white transition-colors"
            >
              <X size={20} />
            </button>
            
            <div className="text-center mb-6">
              <div className="w-12 h-12 rounded-full bg-[#2563EB]/20 flex items-center justify-center mx-auto mb-4 text-[#3B82F6]">
                <MessageCircle size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white">Vamos conversar?</h3>
              <p className="text-[#94A3B8] text-sm mt-1">
                Preencha rapidinho para eu já entender sua demanda.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-[#94A3B8] mb-1">SEU NOME</label>
                <input 
                  type="text" 
                  name="name" 
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Ex: João Silva"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#94A3B8] mb-1">NOME DA AGÊNCIA / EMPRESA</label>
                <input 
                  type="text" 
                  name="agency" 
                  required
                  value={formData.agency}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Ex: Creative Agency"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#94A3B8] mb-1">O QUE VOCÊ PRECISA?</label>
                <select 
                  name="service" 
                  value={formData.service}
                  onChange={handleChange}
                  className="form-input cursor-pointer"
                >
                  <option value="Landing Page">Landing Page (Alta Conversão)</option>
                  <option value="Site Institucional">Site Institucional</option>
                  <option value="E-commerce">Loja Virtual / E-commerce</option>
                  <option value="Manutenção/Otimização">Manutenção ou Performance</option>
                  <option value="Outros">Outro Projeto</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#94A3B8] mb-1">MENSAGEM (OPCIONAL)</label>
                <textarea 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  className="form-input resize-none h-20"
                  placeholder="Algum detalhe específico? (Ex: Prazo curto, referência...)"
                />
              </div>

              <button 
                type="submit"
                className="w-full py-3 bg-[#25d366] hover:bg-[#128c7e] text-white font-bold rounded-lg shadow-lg flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-[1.02] mt-2"
              >
                <Send size={18} />
                Enviar no WhatsApp
              </button>
            </form>
            
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

// --- Navbar ---
const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 glass-card border-b border-[#1E40AF]/20">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-[#F8FAFC] font-bold text-xl tracking-tight flex items-center gap-2">
            <Terminal className="text-[#2563EB]" size={24} />
            <span>Lucas<span className="text-[#2563EB]">Cordeiro</span></span>
          </div>
          
          <button 
            onClick={() => setIsModalOpen(true)}
            className="px-5 py-2 text-sm font-medium text-[#F8FAFC] bg-[#2563EB]/10 border border-[#2563EB]/50 rounded-full hover:bg-[#2563EB] transition-all duration-300"
          >
            Área do Parceiro
          </button>
        </div>
      </nav>

      {/* Modal Popup "Em breve" */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-sm glass-card p-6 rounded-2xl border border-[#2563EB]/30 shadow-2xl"
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-[#94A3B8] hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
              
              <div className="flex flex-col items-center text-center pt-2">
                <div className="w-12 h-12 rounded-full bg-[#2563EB]/20 flex items-center justify-center mb-4 text-[#3B82F6]">
                  <Clock size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Em breve</h3>
                <p className="text-[#94A3B8] text-sm">
                  Esta funcionalidade estará disponível numa próxima atualização da plataforma.
                </p>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="mt-6 w-full py-2 bg-[#2563EB] text-white rounded-lg font-medium hover:bg-[#1E40AF] transition-colors"
                >
                  Entendi
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

// --- Hero Section ---
const HeroSection = ({ onOpenContact }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2563EB] rounded-full mix-blend-screen filter blur-[120px] opacity-10 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#3B82F6] rounded-full mix-blend-screen filter blur-[100px] opacity-10" />

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2563EB]/10 border border-[#2563EB]/20 text-[#3B82F6] text-sm mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Disponível para novos projetos
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold text-[#F8FAFC] leading-[1.1] mb-6">
            Você vende. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#60A5FA]">
              Eu construo.
            </span> <br />
            Seu cliente acha que foi você.
          </h1>
          
          <p className="text-xl text-[#CBD5E1] mb-8 max-w-lg leading-relaxed">
            Desenvolvimento profissional, confidencial e sob medida para agências. Sem meu nome, sem concorrência, sem dor de cabeça.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <motion.button 
              onClick={onOpenContact} // Aciona o modal aqui
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-[#2563EB] text-white rounded-lg font-semibold shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] transition-all flex items-center justify-center gap-2 group"
            >
              Quero uma parceria White Label
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </motion.button>
            <button 
              onClick={() => document.getElementById('tecnologias')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-transparent border border-[#334155] text-[#F8FAFC] rounded-lg font-medium hover:border-[#CBD5E1] transition-colors"
            >
              Ver tecnologias
            </button>
          </div>
        </motion.div>

        {/* Abstract Visual representation of Code/Building */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="relative hidden lg:block"
        >
          <div className="relative w-full h-[500px] glass-card rounded-2xl p-6 overflow-hidden border border-[#2563EB]/20 shadow-2xl">
            <div className="flex gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500/20" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
              <div className="w-3 h-3 rounded-full bg-green-500/20" />
            </div>
            <div className="space-y-3 font-mono text-sm">
              <div className="flex">
                <span className="text-[#3B82F6] w-8">01</span>
                <span className="text-purple-400">const</span> <span className="text-blue-300">Agencia</span> = <span className="text-yellow-300">"Vende Projeto"</span>;
              </div>
              <div className="flex">
                <span className="text-[#3B82F6] w-8">02</span>
                <span className="text-purple-400">const</span> <span className="text-blue-300">Partner</span> = <span className="text-yellow-300">"LucasCordeiro"</span>;
              </div>
              <div className="flex">
                <span className="text-[#3B82F6] w-8">03</span>
                <span className="text-purple-400">await</span> <span className="text-blue-300">Partner</span>.<span className="text-yellow-300">deliver</span>(<span className="text-green-300">WhiteLabel</span>);
              </div>
              <div className="flex">
                <span className="text-[#3B82F6] w-8">04</span>
                <span className="text-gray-500">// Cliente final 100% satisfeito</span>
              </div>
              
              {/* Simulated UI Blocks */}
              <div className="mt-8 grid grid-cols-2 gap-4 opacity-50">
                <div className="h-24 bg-[#1E293B] rounded animate-pulse" />
                <div className="h-24 bg-[#1E293B] rounded animate-pulse delay-75" />
                <div className="col-span-2 h-32 bg-[#1E293B] rounded animate-pulse delay-150" />
              </div>
            </div>
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F14] via-transparent to-transparent opacity-80" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// --- Target Audience ---
const TargetAudience = () => {
  const problems = [
    {
      icon: <Clock size={32} />,
      title: "Perde tempo com freelancers",
      desc: "Cansado de devs que somem ou entregam com atraso."
    },
    {
      icon: <Layers size={32} />,
      title: "Quer escalar a operação",
      desc: "Precisa entregar mais sites sem aumentar os custos fixos de CLT."
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Exige qualidade técnica",
      desc: "Seus clientes pedem performance e SEO que construtores visuais não entregam."
    },
    {
      icon: <Ghost size={32} />,
      title: "Precisa de discrição",
      desc: "O cliente é seu. O mérito é seu. Eu sou apenas seu braço técnico."
    }
  ];

  return (
    <section className="py-24 relative bg-[#0B0F14]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#F8FAFC] mb-4">Para quem é essa parceria?</h2>
          <p className="text-[#CBD5E1] max-w-2xl mx-auto">
            Focado exclusivamente em agências digitais, consultores de marketing e designers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-8 rounded-xl hover:border-[#2563EB]/40 transition-all duration-300 group cursor-default"
            >
              <div className="text-[#3B82F6] mb-6 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-[#F8FAFC] mb-3">{item.title}</h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Services (Tecnologias) ---
const Services = () => {
  const services = [
    {
      title: "Landing Pages de Alta Conversão",
      tech: "React / HTML + Tailwind",
      desc: "Páginas rápidas, focadas em venda, com código limpo e otimizado para campanhas de tráfego."
    },
    {
      title: "Sites Institucionais",
      tech: "Next.js / WordPress Headless",
      desc: "Estruturas robustas, painel administrativo fácil (se necessário) e animações modernas."
    },
    {
      title: "Otimização & Performance",
      tech: "Core Web Vitals",
      desc: "Transformo layouts pesados em sites que carregam instantaneamente. SEO técnico incluso."
    }
  ];

  return (
    <section id="tecnologias" className="py-24 bg-[#0F131A] relative overflow-hidden">
      <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-transparent via-[#2563EB] to-transparent opacity-50" />
      
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#F8FAFC]">O que eu construo</h2>
          <p className="text-[#2563EB] font-mono mt-2 text-sm">PRODUTOS ENTREGUES PRONTOS</p>
        </div>

        <div className="flex flex-col gap-6">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ x: 10 }}
              className="group relative p-8 glass-card rounded-xl border-l-4 border-l-transparent hover:border-l-[#2563EB] transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-[#F8FAFC] group-hover:text-[#3B82F6] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[#94A3B8] mt-2 max-w-2xl">
                    {service.desc}
                  </p>
                </div>
                <div className="md:text-right">
                  <span className="inline-block px-4 py-2 bg-[#1E293B] text-[#60A5FA] text-xs font-mono rounded border border-[#334155]">
                    {service.tech}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Process ---
const Process = () => {
  const steps = [
    { num: "01", title: "Briefing & Design", desc: "Você fecha com o cliente e me envia o layout (Figma/XD) ou briefing." },
    { num: "02", title: "Desenvolvimento", desc: "Eu codifico tudo em ambiente de homologação privado, sem acesso externo." },
    { num: "03", title: "Revisão Agência", desc: "Você valida, pede ajustes e garante que está perfeito para o cliente." },
    { num: "04", title: "Entrega White Label", desc: "Subo no servidor do cliente ou envio os arquivos. Ninguém sabe que existo." }
  ];

  return (
    <section className="py-24 relative bg-[#0B0F14]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-[#F8FAFC]">Como funciona</h2>
          <p className="text-[#CBD5E1]">Transparência com você, invisibilidade para seu cliente.</p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-px bg-[#1E293B]">
             <motion.div 
               className="w-full bg-[#2563EB]"
               initial={{ height: 0 }}
               whileInView={{ height: '100%' }}
               transition={{ duration: 1.5 }}
             />
          </div>

          <div className="space-y-12">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className={`flex flex-col md:flex-row items-start ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''} gap-8 relative`}
              >
                {/* Content */}
                <div className="flex-1 pl-12 md:pl-0 w-full">
                  <div className={`p-6 glass-card rounded-xl hover:shadow-[0_0_15px_rgba(37,99,235,0.15)] transition-all ${idx % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <h3 className="text-xl font-bold text-[#F8FAFC] mb-2">{step.title}</h3>
                    <p className="text-[#94A3B8]">{step.desc}</p>
                  </div>
                </div>

                {/* Center Marker */}
                <div className="absolute left-[11px] md:left-1/2 -translate-x-1/2 w-5 h-5 rounded-full border-4 border-[#0B0F14] bg-[#2563EB] shadow-[0_0_10px_#2563EB] z-10" />

                {/* Empty Space for Grid */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Confidentiality ---
const Confidentiality = () => {
  return (
    <section className="py-20 bg-[#121826] border-y border-[#1E293B]">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 text-[#3B82F6] font-bold mb-4">
            <ShieldCheck size={24} />
            <span>PROTEÇÃO TOTAL</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#F8FAFC] mb-6">
            Sua marca é a única que aparece.
          </h2>
          <p className="text-[#CBD5E1] mb-8 leading-relaxed">
            Entendo o jogo das agências. O ativo mais valioso é o relacionamento com o cliente.
            Minha estrutura é feita para proteger isso.
          </p>
          
          <ul className="space-y-4">
            {[
              "Assino NDA (Acordo de Confidencialidade)",
              "Não uso portfólio com seus clientes",
              "Não entro em contato com o cliente final",
              "Arquivos entregues sem metadados meus"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-[#94A3B8]">
                <CheckCircle2 size={18} className="text-[#2563EB]" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="relative p-8 glass-card rounded-2xl border border-[#334155]/50 flex flex-col items-center justify-center text-center">
            <UserX size={64} className="text-[#475569] mb-4" />
            <h3 className="text-2xl font-bold text-[#F8FAFC]">Modo "Fantasma" Ativo</h3>
            <p className="text-sm text-[#64748B] mt-2">
              Para o seu cliente, eu não existo. <br/>
              Eu sou apenas a qualidade do código que você entrega.
            </p>
            
            <div className="mt-8 w-full bg-[#0B0F14] rounded-lg p-4 font-mono text-xs text-left text-green-400 border border-[#1E293B]">
              <p>$ git commit -m "Site entregue pela Agência X"</p>
              <p>$ push origin production</p>
              <p className="text-blue-400">Status: Completed successfully.</p>
            </div>
        </div>
      </div>
    </section>
  );
};

// --- Benefits ---
const Benefits = () => {
  return (
    <section className="py-24 bg-[#0B0F14]">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-[#F8FAFC] mb-12">Por que trabalhar comigo?</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Falo língua de agência", text: "Entendo o que é 'pra ontem' e sei lidar com alterações de layout." },
            { title: "Código Limpo", text: "Estrutura organizada. Se outro dev pegar depois, vai te agradecer." },
            { title: "Previsibilidade", text: "Cumpro prazos religiosamente. Sem surpresas na véspera do launch." }
          ].map((benefit, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="p-6 rounded-lg bg-[#121826] border border-[#1E293B] hover:border-[#2563EB]/50 transition-colors"
            >
              <h3 className="text-xl font-bold text-[#F8FAFC] mb-3">{benefit.title}</h3>
              <p className="text-[#94A3B8]">{benefit.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- FooterCTA ---
const FooterCTA = ({ onOpenContact }) => {
  return (
    <footer className="relative py-24 bg-[#05080C] overflow-hidden">
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#2563EB] rounded-full mix-blend-screen filter blur-[150px] opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#F8FAFC] mb-6">
          Vamos escalar sua agência <br /> sem aumentar sua equipe?
        </h2>
        <p className="text-xl text-[#CBD5E1] mb-10 max-w-2xl mx-auto">
          Tenha um parceiro técnico sob demanda. Foque em vender, deixe o código comigo.
        </p>
        
        <motion.button 
          onClick={onOpenContact} // Aciona o modal aqui
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-10 py-5 bg-[#2563EB] text-white text-lg font-bold rounded-lg shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:shadow-[0_0_50px_rgba(37,99,235,0.6)] transition-all flex items-center justify-center gap-3 mx-auto"
        >
          <Zap size={24} />
          Solicitar Orçamento White Label
        </motion.button>
        
        <div className="mt-16 pt-8 border-t border-[#1E293B] flex flex-col md:flex-row justify-between items-center text-[#64748B] text-sm">
          <p>© 2026 Lucas Cordeiro.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span>Privacidade</span>
            <span>Termos</span>
            <span className="flex items-center gap-1"><Ghost size={14}/> Fantasma Mode</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default App;