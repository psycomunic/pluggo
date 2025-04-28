
import React from "react";
import { Layout } from "../components/Layout";
import { ContactCTA } from "../components/ContactCTA";
import { CheckCircle } from "lucide-react";

const About = () => {
  return (
    <Layout>
      <div className="pt-24 md:pt-32">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-white to-green-50 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Sobre a PlugGo</h1>
              <div className="h-1 w-24 bg-pluggo-gold mx-auto mb-8"></div>
              <p className="text-xl text-gray-600">
                Conheça nossa história e como estamos transformando o mercado de pagamentos
                com inovação, segurança e um toque de sorte.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 heading-underline">Nossa História</h2>
                <p className="text-gray-600 mb-4">
                  A PlugGo nasceu da visão de empreendedores que acreditavam que o
                  mercado de pagamentos poderia ser mais simples, justo e acessível para
                  todos os tipos de negócios.
                </p>
                <p className="text-gray-600 mb-4">
                  Fundada em 2018, nossa empresa rapidamente se destacou por oferecer
                  soluções inovadoras e um atendimento diferenciado, sempre pensando nas
                  necessidades reais dos empreendedores brasileiros.
                </p>
                <p className="text-gray-600">
                  Hoje, atendemos milhares de clientes em todo o Brasil, ajudando
                  negócios de todos os tamanhos a prosperarem com nossas soluções de
                  pagamento online e presencial.
                </p>
              </div>
              <div className="flex justify-center">
                {/* Image placeholder */}
                <div className="relative">
                  <div className="w-72 h-72 bg-pluggo-gold rounded-full opacity-10 absolute -bottom-10 -left-10"></div>
                  <div className="w-80 h-80 bg-pluggo-green rounded-full relative flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-pluggo-green/80 to-pluggo-green/40"></div>
                    <div className="relative text-white text-center px-8">
                      <div className="text-3xl font-bold mb-4">Nossa Mascote</div>
                      <p>O leprechaun que traz sorte e sucesso para seu negócio</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision & Values */}
        <section className="py-16 bg-gray-50 bg-clover-pattern">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Missão, Visão e Valores
              </h2>
              <div className="h-1 w-24 bg-pluggo-green mx-auto mb-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-50 mb-4">
                  <svg className="w-8 h-8 text-pluggo-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4">Missão</h3>
                <p className="text-gray-600">
                  Simplificar a vida financeira dos empreendedores brasileiros através de
                  soluções de pagamento seguras, rápidas e acessíveis, promovendo o
                  crescimento dos negócios.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-50 mb-4">
                  <svg className="w-8 h-8 text-pluggo-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4">Visão</h3>
                <p className="text-gray-600">
                  Ser reconhecida como a principal empresa de soluções de pagamento do
                  Brasil, levando inovação e oportunidades para todos os cantos do país.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-50 mb-4">
                  <svg className="w-8 h-8 text-pluggo-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4">Valores</h3>
                <ul className="text-left space-y-2">
                  <li className="flex items-start">
                    <CheckCircle size={20} className="text-pluggo-green mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">Inovação constante</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={20} className="text-pluggo-green mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">Transparência nas relações</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={20} className="text-pluggo-green mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">Segurança em primeiro lugar</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={20} className="text-pluggo-green mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">Foco no cliente</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={20} className="text-pluggo-green mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">Compromisso com resultados</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Nossa Equipe
              </h2>
              <div className="h-1 w-24 bg-pluggo-gold mx-auto mb-6"></div>
              <p className="text-lg text-gray-600">
                Conheça os profissionais apaixonados por tecnologia e finanças que
                trabalham para tornar seu negócio mais próspero.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Team member cards placeholder */}
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all">
                  <div className="h-48 bg-pluggo-green"></div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-1">Nome do Profissional</h3>
                    <p className="text-pluggo-green mb-4">Cargo na Empresa</p>
                    <p className="text-gray-600">
                      Breve descrição sobre a experiência e especialidades do profissional.
                    </p>
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

export default About;
