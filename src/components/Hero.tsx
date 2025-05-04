
import React from "react";
import { Link } from "react-router-dom";

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-gradient-to-b from-white to-green-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Transforme seus negócios com{" "}
              <span className="text-pluggo-green">pagamentos</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-4">
              Soluções completas para receber pagamentos online e presenciais com a
              segurança e eficiência que seu negócio precisa.
            </p>
            <p className="text-md md:text-lg text-gray-600 mb-8">
              Hub de integração com os principais liquidantes, Pix, boleto bancário e painel 
              administrativo intuitivo para gerenciar seus clientes.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Link to="/solutions" className="btn-primary">
                Nossas Soluções
              </Link>
              <Link to="/contact" className="btn-outline">
                Fale Conosco
              </Link>
            </div>
          </div>
          <div className="hidden lg:flex justify-center lg:justify-end animate-float">
            <div className="relative">
              <div className="w-72 h-72 bg-pluggo-green rounded-full opacity-10 absolute -top-10 -right-10"></div>
              <div className="w-80 h-80 relative overflow-hidden flex items-center justify-center">
                <img 
                  src="/lovable-uploads/fd993115-b9e3-4be4-8932-a43c8078ef83.png" 
                  alt="PlugGo Capital Mascote" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-24 left-4 w-12 h-12 bg-pluggo-gold rounded-full opacity-20"></div>
      <div className="absolute bottom-12 left-1/4 w-8 h-8 bg-pluggo-green rounded-full opacity-20"></div>
      <div className="absolute top-1/3 right-12 w-16 h-16 bg-pluggo-green rounded-full opacity-10"></div>
    </section>
  );
};
