
import React from "react";
import { Link } from "react-router-dom";
import { CreditCard, Link as LinkIcon, Smartphone, Repeat } from "lucide-react";

export const Services: React.FC = () => {
  const services = [
    {
      id: 1,
      title: "Maquininhas",
      description:
        "Aceite todos os cartões de débito, crédito e vouchers com as taxas mais competitivas do mercado.",
      icon: <CreditCard size={36} className="text-pluggo-green" />,
      link: "/solutions",
    },
    {
      id: 2,
      title: "Link de Pagamento",
      description:
        "Envie cobranças por WhatsApp, e-mail ou SMS e receba pagamentos de forma rápida e segura.",
      icon: <LinkIcon size={36} className="text-pluggo-green" />,
      link: "/solutions",
    },
    {
      id: 3,
      title: "App Mobile",
      description:
        "Acompanhe suas vendas, extratos e relatórios em tempo real pelo aplicativo PlugGo.",
      icon: <Smartphone size={36} className="text-pluggo-green" />,
      link: "/solutions",
    },
    {
      id: 4,
      title: "Recorrência",
      description:
        "Ideal para assinaturas e mensalidades com cobrança automática e gestão facilitada.",
      icon: <Repeat size={36} className="text-pluggo-green" />,
      link: "/solutions",
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nossas Soluções de Pagamento
          </h2>
          <div className="h-1 w-24 bg-pluggo-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Conheça as diferentes formas de receber pagamentos e impulsionar seu
            negócio com a PlugGo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="card group hover:border-l-4 hover:border-pluggo-green hover:-translate-y-1"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link
                to={service.link}
                className="text-pluggo-green font-medium inline-flex items-center group-hover:underline"
              >
                Saiba mais
                <svg
                  className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
