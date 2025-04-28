
import React from "react";
import { Layout } from "../components/Layout";
import { ContactCTA } from "../components/ContactCTA";
import { CreditCard, Smartphone, Link as LinkIcon, Repeat, Tag, ShieldCheck } from "lucide-react";

const Solutions = () => {
  const solutions = [
    {
      id: 1,
      title: "Maquininhas",
      description:
        "Aceite pagamentos com cartões de crédito, débito e vouchers onde estiver. Nossas maquininhas são equipadas com a mais avançada tecnologia, proporcionando segurança, rapidez e praticidade.",
      features: [
        "Conexão Wi-Fi, 4G ou Bluetooth",
        "Recebimento em até 1 dia útil",
        "Comprovante digital",
        "Sem aluguel mensal",
        "Aceitação de todas as bandeiras"
      ],
      icon: <CreditCard size={48} className="text-pluggo-green" />,
      image: "maquininha.jpg"
    },
    {
      id: 2,
      title: "Link de Pagamento",
      description:
        "Crie e compartilhe links de pagamento personalizados em segundos. Ideal para vendas pelo WhatsApp, redes sociais ou e-mail, sem precisar de site ou loja virtual.",
      features: [
        "Links personalizados",
        "Compartilhamento fácil",
        "Notificações automáticas",
        "Pagamentos recorrentes",
        "Dashboard de controle"
      ],
      icon: <LinkIcon size={48} className="text-pluggo-green" />,
      image: "link.jpg"
    },
    {
      id: 3,
      title: "App Mobile",
      description:
        "Tenha o controle total de suas vendas na palma da mão. Nosso aplicativo permite monitorar transações, emitir cobranças, consultar extratos e muito mais, onde quer que você esteja.",
      features: [
        "Acompanhamento em tempo real",
        "Gestão de usuários",
        "Extrato detalhado",
        "Suporte integrado",
        "Notificações instantâneas"
      ],
      icon: <Smartphone size={48} className="text-pluggo-green" />,
      image: "app.jpg"
    },
    {
      id: 4,
      title: "Recorrência",
      description:
        "Automatize suas cobranças periódicas e nunca mais perca tempo com faturas manuais. Ideal para assinaturas, mensalidades e serviços continuados.",
      features: [
        "Cobranças automáticas",
        "Controle de inadimplência",
        "Flexibilidade de datas",
        "Relatórios detalhados",
        "Integração com sistemas"
      ],
      icon: <Repeat size={48} className="text-pluggo-green" />,
      image: "recorrencia.jpg"
    },
    {
      id: 5,
      title: "Checkout Transparente",
      description:
        "Ofereça uma experiência de compra perfeita aos seus clientes com nosso checkout integrado ao seu site. O cliente finaliza a compra sem sair da sua página.",
      features: [
        "Integração simplificada",
        "Experiência de compra fluida",
        "Personalização avançada",
        "Alta conversão de vendas",
        "Segurança PCI compliant"
      ],
      icon: <Tag size={48} className="text-pluggo-green" />,
      image: "checkout.jpg"
    },
    {
      id: 6,
      title: "Gateway de Pagamento",
      description:
        "Solução completa para e-commerces e marketplaces, com processamento de múltiplos meios de pagamento e antifraude integrado.",
      features: [
        "Múltiplas formas de pagamento",
        "Sistema antifraude",
        "APIs robustas",
        "Painel administrativo completo",
        "Relatórios customizáveis"
      ],
      icon: <ShieldCheck size={48} className="text-pluggo-green" />,
      image: "gateway.jpg"
    }
  ];

  return (
    <Layout>
      <div className="pt-24 md:pt-32">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-white to-green-50 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Nossas Soluções</h1>
              <div className="h-1 w-24 bg-pluggo-gold mx-auto mb-8"></div>
              <p className="text-xl text-gray-600">
                Conheça as ferramentas completas que a PlugGo oferece para 
                impulsionar seu negócio com segurança e praticidade.
              </p>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="space-y-24">
              {solutions.map((solution, index) => (
                <div
                  key={solution.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 !== 0 ? "lg:grid-flow-dense" : ""
                  }`}
                >
                  <div className={index % 2 !== 0 ? "lg:col-start-2" : ""}>
                    <div className="mb-6 flex items-center">
                      {solution.icon}
                      <h2 className="text-3xl font-bold ml-4">{solution.title}</h2>
                    </div>
                    <p className="text-lg text-gray-600 mb-6">{solution.description}</p>
                    <ul className="space-y-3 mb-8">
                      {solution.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <svg
                            className="w-5 h-5 text-pluggo-green mr-2 mt-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button className="btn-primary">Quero esta solução</button>
                  </div>
                  
                  <div className={index % 2 !== 0 ? "lg:col-start-1" : ""}>
                    <div className="relative rounded-2xl overflow-hidden shadow-xl h-80 bg-gradient-to-br from-pluggo-green to-green-700 flex items-center justify-center">
                      <div className="absolute inset-0 opacity-20 bg-clover-pattern"></div>
                      <div className="relative text-white text-center px-12">
                        <div className="text-4xl font-bold mb-4">{solution.title}</div>
                        <p className="text-lg">Solução PlugGo para seu negócio</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ContactCTA />
      </div>
    </Layout>
  );
};

export default Solutions;
