
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { 
  CreditCard, 
  Link as LinkIcon, 
  Smartphone, 
  Repeat, 
  Database, 
  Monitor 
} from "lucide-react";

export const Services: React.FC = () => {
  // Referência para elementos que terão animação ao scroll
  const animatedElsRef = useRef<HTMLDivElement[]>([]);

  // Effect para detectar quando elementos entram na viewport
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      elements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  const services = [
    {
      id: 1,
      title: "Maquininhas",
      description:
        "Aceite todos os cartões de débito, crédito e vouchers com as taxas mais competitivas do mercado.",
      icon: <CreditCard size={36} className="text-pluggo-green" />,
      link: "/solutions",
      image: "public/lovable-uploads/cd2251d7-d164-4669-898b-9299a1230603.png" 
    },
    {
      id: 2,
      title: "Link de Pagamento",
      description:
        "Envie cobranças por WhatsApp, e-mail ou SMS e receba pagamentos de forma rápida e segura.",
      icon: <LinkIcon size={36} className="text-pluggo-green" />,
      link: "/solutions",
      image: "public/lovable-uploads/2ab4582d-c35e-47d2-a94c-286dee456163.png"
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
    {
      id: 5,
      title: "Hub de Integração",
      description:
        "Integração completa com os principais liquidantes do mercado, facilitando a gestão de pagamentos.",
      icon: <Database size={36} className="text-pluggo-green" />,
      link: "/solutions",
    },
    {
      id: 6,
      title: "Painel Administrativo",
      description:
        "Dashboard intuitivo para gerenciamento completo de clientes, transações e relatórios financeiros.",
      icon: <Monitor size={36} className="text-pluggo-green" />,
      link: "/solutions",
    },
  ];

  return (
    <section className="section-padding bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
            Nossas Soluções de Pagamento
          </h2>
          <div className="h-1 w-24 bg-pluggo-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Conheça as diferentes formas de receber pagamentos e impulsionar seu
            negócio com a PlugGo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              ref={(el) => {
                if (el) animatedElsRef.current[index] = el;
              }}
              className={`animate-on-scroll glass-card rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-300`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="p-6 flex flex-col h-full">
                {service.image ? (
                  <div className="mb-5 overflow-hidden rounded-xl">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-48 object-contain animate-zoom dark:bg-white/5 rounded-xl p-2"
                    />
                  </div>
                ) : null}
                
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">{service.description}</p>
                <Link
                  to={service.link}
                  className="text-pluggo-green font-medium inline-flex items-center group-hover:underline hover:text-green-600 transition-colors duration-200"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
