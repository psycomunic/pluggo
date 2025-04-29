import React from "react";
import { Shield, Clock, Star, Award, Database, Monitor } from "lucide-react";

export const Benefits: React.FC = () => {
  const benefits = [
    {
      id: 1,
      title: "Segurança Garantida",
      description: "Transações protegidas com criptografia avançada e monitoramento constante.",
      icon: <Shield size={36} className="text-pluggo-gold" />,
    },
    {
      id: 2,
      title: "Recebimento Rápido",
      description: "Receba seus pagamentos em até 1 dia útil, sem complicações.",
      icon: <Clock size={36} className="text-pluggo-gold" />,
    },
    {
      id: 3,
      title: "Suporte Especializado",
      description: "Atendimento humanizado pronto para ajudar quando você precisar.",
      icon: <Star size={36} className="text-pluggo-gold" />,
    },
    {
      id: 4,
      title: "Melhor Custo-Benefício",
      description: "Taxas justas e transparentes para maximizar seus lucros.",
      icon: <Award size={36} className="text-pluggo-gold" />,
    },
  ];

  return (
    <section className="section-padding bg-gray-50 bg-clover-pattern">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Por Que Escolher a PlugGo?</h2>
          <div className="h-1 w-24 bg-pluggo-green mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Combinamos tecnologia, segurança e sorte para oferecer a melhor experiência
            em soluções de pagamento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-50 mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Nossa Tecnologia</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-green-50 p-2 rounded-full">
                  <Database size={24} className="text-pluggo-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Hub de Integração de Pagamentos</h4>
                  <p className="text-gray-600">Integração completa com os principais liquidantes do mercado, permitindo uma gestão centralizada.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-green-50 p-2 rounded-full">
                  <Shield size={24} className="text-pluggo-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Pix In e Pix Out</h4>
                  <p className="text-gray-600">Solução completa para recebimentos e pagamentos via Pix de forma rápida e segura.</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-green-50 p-2 rounded-full">
                  <Award size={24} className="text-pluggo-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Boleto Bancário</h4>
                  <p className="text-gray-600">Emissão e gestão de boletos bancários com compensação automática e relatórios detalhados.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-green-50 p-2 rounded-full">
                  <Monitor size={24} className="text-pluggo-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Dashboard Intuitivo</h4>
                  <p className="text-gray-600">Painel administrativo completo para gerenciamento de clientes, transações e relatórios financeiros.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-pluggo-darkGray mb-8 max-w-2xl mx-auto">
            "Encontre a sorte nos seus negócios com soluções de pagamento que realmente
            funcionam para você."
          </p>
          <div className="inline-flex items-center justify-center w-20 h-20">
            <img 
              src="/lovable-uploads/0afecb25-c6ca-42fe-a1f1-e2d5bf368139.png" 
              alt="PlugGo Leprechaun Mascot" 
              className="w-20 h-20 object-contain" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};
