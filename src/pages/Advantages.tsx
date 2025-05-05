
import React, { useEffect } from "react";
import { Layout } from "../components/Layout";
import { ContactCTA } from "../components/ContactCTA";
import { Shield, Clock, Star, Award, Check, ChevronRight } from "lucide-react";
import { observeScrollAnimations } from "../utils/animationUtils";

const Advantages = () => {
  useEffect(() => {
    const cleanup = observeScrollAnimations();
    return cleanup;
  }, []);

  const advantages = [
    {
      id: 1,
      title: "Segurança Garantida",
      description: "Protegemos cada transação com as mais avançadas tecnologias de segurança digital. Sua empresa e seus clientes sempre protegidos.",
      icon: <Shield size={48} className="text-pluggo-green" />,
      color: "bg-green-50 dark:bg-green-900/20",
      features: [
        "Criptografia de ponta a ponta",
        "Certificação PCI DSS",
        "Monitoramento contínuo",
        "Verificação em duas etapas"
      ]
    },
    {
      id: 2,
      title: "Recebimento Rápido",
      description: "Com a PlugGo, você recebe o pagamento de suas vendas em até 1 dia útil, melhorando seu fluxo de caixa.",
      icon: <Clock size={48} className="text-pluggo-green" />,
      color: "bg-yellow-50 dark:bg-yellow-900/20",
      features: [
        "D+1 para qualquer banco",
        "Antecipação automática",
        "Taxas competitivas",
        "Controle de recebíveis"
      ]
    },
    {
      id: 3,
      title: "Suporte Especializado",
      description: "Nossa equipe está pronta para te ajudar a qualquer momento. Atendimento humanizado e ágil, porque valorizamos seu tempo.",
      icon: <Star size={48} className="text-pluggo-green" />,
      color: "bg-blue-50 dark:bg-blue-900/20",
      features: [
        "Atendimento 7 dias por semana",
        "Consultores especializados",
        "Chat ao vivo",
        "Base de conhecimento completa"
      ]
    },
    {
      id: 4,
      title: "Melhor Custo-Benefício",
      description: "Taxas justas e transparentes que cabem no seu bolso, sem surpresas ou cobranças ocultas. Mais lucro para o seu negócio.",
      icon: <Award size={48} className="text-pluggo-green" />,
      color: "bg-purple-50 dark:bg-purple-900/20",
      features: [
        "Taxas competitivas",
        "Sem mensalidade",
        "Sem fidelidade",
        "Descontos progressivos"
      ]
    }
  ];

  const testimonials = [
    {
      id: 1,
      text: "A PlugGo revolucionou o sistema de pagamentos da minha empresa. Facilidade, rapidez e segurança em um só lugar.",
      author: "João Silva",
      position: "Proprietário de Restaurante",
      stars: 5
    },
    {
      id: 2,
      text: "Desde que começamos a usar a PlugGo, nossas vendas online aumentaram 30%. O link de pagamento é simplesmente fantástico!",
      author: "Maria Oliveira",
      position: "CEO de E-commerce",
      stars: 5
    },
    {
      id: 3,
      text: "O suporte da PlugGo é incrível. Sempre que precisei, fui atendido com rapidez e eficiência. Recomendo a todos!",
      author: "Carlos Mendes",
      position: "Gerente de Loja",
      stars: 4
    }
  ];

  return (
    <Layout>
      <div className="pt-24 md:pt-32">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-white to-green-50 dark:from-gray-900 dark:to-gray-800 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto animate-on-scroll">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white">Nossas Vantagens</h1>
              <div className="h-1 w-24 bg-pluggo-gold mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Descubra por que milhares de negócios escolhem a PlugGo para suas soluções de pagamento.
              </p>
            </div>
          </div>
        </section>

        {/* Main Advantages */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {advantages.map((advantage, index) => (
                <div 
                  key={advantage.id} 
                  className="glass-card rounded-2xl p-8 hover:border-l-4 hover:border-pluggo-green transition-all duration-300 animate-on-scroll hover:shadow-lg"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full ${advantage.color} mb-6 transform transition-transform hover:scale-110 hover:rotate-3`}>
                    {advantage.icon}
                  </div>
                  <h2 className="text-2xl font-bold mb-4 dark:text-white">{advantage.title}</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">{advantage.description}</p>
                  <ul className="space-y-3">
                    {advantage.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check size={20} className="text-pluggo-green mr-2 mt-1" />
                        <span className="dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800 bg-clover-pattern">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">Nossos Números</h2>
              <div className="h-1 w-24 bg-pluggo-green mx-auto mb-6"></div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center glass-card p-6 rounded-xl animate-on-scroll" style={{ animationDelay: "100ms" }}>
                <div className="text-4xl md:text-5xl font-bold text-pluggo-green mb-2">5mil+</div>
                <p className="text-gray-600 dark:text-gray-300">Clientes Satisfeitos</p>
              </div>
              <div className="text-center glass-card p-6 rounded-xl animate-on-scroll" style={{ animationDelay: "200ms" }}>
                <div className="text-4xl md:text-5xl font-bold text-pluggo-green mb-2">R$500M</div>
                <p className="text-gray-600 dark:text-gray-300">Transacionados</p>
              </div>
              <div className="text-center glass-card p-6 rounded-xl animate-on-scroll" style={{ animationDelay: "300ms" }}>
                <div className="text-4xl md:text-5xl font-bold text-pluggo-green mb-2">99.9%</div>
                <p className="text-gray-600 dark:text-gray-300">Uptime</p>
              </div>
              <div className="text-center glass-card p-6 rounded-xl animate-on-scroll" style={{ animationDelay: "400ms" }}>
                <div className="text-4xl md:text-5xl font-bold text-pluggo-green mb-2">4.9/5</div>
                <p className="text-gray-600 dark:text-gray-300">Avaliação de Clientes</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">O Que Nossos Clientes Dizem</h2>
              <div className="h-1 w-24 bg-pluggo-gold mx-auto mb-6"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id} 
                  className="glass-card rounded-2xl p-6 shadow-md hover:shadow-lg transition-all animate-on-scroll hover:-translate-y-1"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i} 
                        className={`w-5 h-5 ${i < testimonial.stars ? 'text-pluggo-gold' : 'text-gray-300 dark:text-gray-600'}`} 
                        fill="currentColor" 
                        viewBox="0 0 20 20" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 italic">"{testimonial.text}"</p>
                  <div>
                    <p className="font-medium text-pluggo-darkGray dark:text-white">{testimonial.author}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.position}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <a href="#" className="inline-flex items-center text-pluggo-green font-medium hover:underline">
                Ver mais depoimentos
                <ChevronRight size={16} className="ml-1" />
              </a>
            </div>
          </div>
        </section>

        {/* Compare Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">Por Que Escolher a PlugGo?</h2>
              <div className="h-1 w-24 bg-pluggo-green mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Compare e veja como nossa solução se destaca no mercado
              </p>
            </div>
            
            <div className="overflow-x-auto animate-on-scroll glass-card rounded-2xl shadow-lg">
              <table className="w-full min-w-[600px] bg-white/50 dark:bg-gray-900/50 rounded-2xl">
                <thead>
                  <tr>
                    <th className="py-4 px-6 text-left text-lg font-semibold border-b dark:border-gray-700 dark:text-white">Recursos</th>
                    <th className="py-4 px-6 text-center text-lg font-semibold border-b dark:border-gray-700 text-pluggo-green">PlugGo</th>
                    <th className="py-4 px-6 text-center text-lg font-semibold border-b dark:border-gray-700 text-gray-500 dark:text-gray-400">Concorrência</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                    <td className="py-3 px-6 border-b dark:border-gray-700 dark:text-white">Recebimento em 1 dia</td>
                    <td className="py-3 px-6 text-center border-b dark:border-gray-700">
                      <Check size={20} className="text-pluggo-green mx-auto" />
                    </td>
                    <td className="py-3 px-6 text-center border-b dark:border-gray-700 text-gray-400">
                      <span>Até 30 dias</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                    <td className="py-3 px-6 border-b dark:border-gray-700 dark:text-white">Suporte 7 dias por semana</td>
                    <td className="py-3 px-6 text-center border-b dark:border-gray-700">
                      <Check size={20} className="text-pluggo-green mx-auto" />
                    </td>
                    <td className="py-3 px-6 text-center border-b dark:border-gray-700 text-gray-400">
                      <span>Horário comercial</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                    <td className="py-3 px-6 border-b dark:border-gray-700 dark:text-white">Sem taxa de adesão</td>
                    <td className="py-3 px-6 text-center border-b dark:border-gray-700">
                      <Check size={20} className="text-pluggo-green mx-auto" />
                    </td>
                    <td className="py-3 px-6 text-center border-b dark:border-gray-700">
                      <Check size={20} className="text-gray-400 mx-auto" />
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                    <td className="py-3 px-6 border-b dark:border-gray-700 dark:text-white">Antecipação automática</td>
                    <td className="py-3 px-6 text-center border-b dark:border-gray-700">
                      <Check size={20} className="text-pluggo-green mx-auto" />
                    </td>
                    <td className="py-3 px-6 text-center border-b dark:border-gray-700 text-gray-400">
                      <span>Mediante solicitação</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                    <td className="py-3 px-6 border-b dark:border-gray-700 dark:text-white">Taxa de recorrência</td>
                    <td className="py-3 px-6 text-center border-b dark:border-gray-700 text-pluggo-green font-medium">
                      1,99%
                    </td>
                    <td className="py-3 px-6 text-center border-b dark:border-gray-700 text-gray-400">
                      3,99%
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                    <td className="py-3 px-6 dark:text-white">Consultoria especializada</td>
                    <td className="py-3 px-6 text-center">
                      <Check size={20} className="text-pluggo-green mx-auto" />
                    </td>
                    <td className="py-3 px-6 text-center text-gray-400">
                      <span>Apenas planos premium</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <ContactCTA />
      </div>
    </Layout>
  );
};

export default Advantages;
