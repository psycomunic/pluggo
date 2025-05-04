
import React from "react";
import { Link } from "react-router-dom";
import { CreditCard, ShieldCheck, TrendingUp } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-gradient-to-b from-white to-green-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left content - Text */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Transforme seus negócios com{" "}
              <span className="text-pluggo-green">pagamentos</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Soluções completas para receber pagamentos online e presenciais com a
              segurança e eficiência que seu negócio precisa.
            </p>
            
            {/* Feature highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center p-3 bg-white/70 rounded-lg shadow-sm">
                <CreditCard className="text-pluggo-green mr-3" />
                <span className="font-medium">Métodos variados</span>
              </div>
              <div className="flex items-center p-3 bg-white/70 rounded-lg shadow-sm">
                <ShieldCheck className="text-pluggo-green mr-3" />
                <span className="font-medium">Pagamentos seguros</span>
              </div>
              <div className="flex items-center p-3 bg-white/70 rounded-lg shadow-sm">
                <TrendingUp className="text-pluggo-green mr-3" />
                <span className="font-medium">Dashboard analítico</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Link to="/solutions" className="btn-primary">
                Nossas Soluções
              </Link>
              <Link to="/contact" className="btn-outline">
                Fale Conosco
              </Link>
            </div>
          </div>
          
          {/* Right content - Image */}
          <div className="hidden lg:flex justify-center lg:col-span-5">
            <div className="relative">
              <div className="absolute -z-10 w-[500px] h-[500px] bg-green-100 rounded-full blur-3xl opacity-30 -top-20 -right-20"></div>
              <div className="w-full relative">
                <img 
                  src="/lovable-uploads/6e86fa39-6782-45ef-97b8-23f01ebd4a25.png" 
                  alt="Executivo PlugGo Capital" 
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-24 left-4 w-12 h-12 bg-green-200 rounded-full opacity-50"></div>
      <div className="absolute bottom-12 left-1/4 w-8 h-8 bg-pluggo-green rounded-full opacity-20"></div>
      <div className="absolute top-1/3 right-12 w-16 h-16 bg-green-100 rounded-full opacity-60"></div>
      
      {/* Wave separator */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="fill-white">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
};
