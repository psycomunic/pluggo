
import React from "react";
import { Link } from "react-router-dom";

export const ContactCTA: React.FC = () => {
  return (
    <section className="py-16 bg-pluggo-green text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white opacity-10"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-pluggo-gold opacity-10"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para transformar suas vendas?
          </h2>
          <p className="text-lg mb-8 text-green-100">
            Fale com nossos consultores e descubra como a PlugGo pode impulsionar seu negócio
            com soluções personalizadas e muita sorte.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-secondary">
              Entre em Contato
            </Link>
            <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="bg-white text-pluggo-green hover:bg-green-100 font-medium py-2.5 px-5 rounded-full transition-all shadow-md hover:shadow-lg inline-flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.4054 3.4875C18.1607 1.2375 15.1714 0 11.9946 0C5.4375 0 0.101786 5.33571 0.101786 11.8929C0.101786 13.9875 0.648214 16.0339 1.6875 17.8339L0 24L6.30536 22.3446C8.03036 23.2839 9.99107 23.7857 11.9893 23.7857H11.9946C18.5464 23.7857 24 18.45 24 11.8929C24 8.71607 22.65 5.7375 20.4054 3.4875ZM11.9946 21.7875C10.2054 21.7875 8.45357 21.3053 6.93214 20.4V20.4L3.99643 21.3964L5.00893 18.5411C4.01786 16.9607 3.48214 15.1446 3.48214 13.2857C3.48214 6.47679 7.18929 0.991071 11.9893 0.991071C14.6357 0.991071 17.1321 2.02232 18.9857 3.88393C20.8393 5.74554 22.9286 8.24196 22.9286 11.8929C22.9339 18.7071 16.8 21.7875 11.9946 21.7875ZM17.4214 14.3893C17.1214 14.2339 15.6696 13.5214 15.3911 13.4179C15.1125 13.3143 14.9036 13.2625 14.6946 13.5625C14.4857 13.8625 13.9232 14.5232 13.7357 14.7321C13.5536 14.9411 13.3661 14.967 13.0661 14.8116C12.7661 14.6563 11.8125 14.3196 10.6875 13.3143C9.80893 12.5357 9.21429 11.5768 9.02679 11.2768C8.84464 10.9768 9.00536 10.8054 9.16071 10.6446C9.3 10.5 9.47143 10.2696 9.62679 10.0875C9.78214 9.90536 9.83393 9.77143 9.9375 9.5625C10.0411 9.35357 9.98929 9.17143 9.91607 9.01607C9.84286 8.86071 9.25357 7.40357 8.99464 6.80357C8.74107 6.21964 8.48214 6.30357 8.28929 6.29286H7.66607C7.45714 6.29286 7.125 6.36607 6.84643 6.66607C6.56786 6.96607 5.80357 7.67857 5.80357 9.13571C5.80357 10.5929 6.8625 12.0 7.01786 12.2089C7.17321 12.4179 9.19821 15.5196 12.2839 16.7893C13.0179 17.1161 13.5911 17.3036 14.0357 17.4429C14.7589 17.6786 15.4179 17.6464 15.9375 17.5732C16.5214 17.4911 17.7214 16.8643 17.9804 16.1625C18.2393 15.4607 18.2393 14.8607 18.1661 14.7321C18.0929 14.6036 17.8839 14.525 17.4214 14.3893Z"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
