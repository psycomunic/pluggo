
import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-pluggo-darkGray text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <img src="/images/pluggo-logo.png" alt="PlugGo Logo" className="h-12" />
            </div>
            <p className="text-gray-300 mb-4">
              Soluções inovadoras de pagamento para impulsionar o seu negócio com a sorte do sucesso.
            </p>
            <div className="flex space-x-4">
              {/* Social Media Icons Placeholder */}
              <a href="#" className="w-8 h-8 rounded-full bg-pluggo-green flex items-center justify-center hover:bg-pluggo-gold transition-colors">
                <span className="sr-only">Facebook</span>
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-pluggo-green flex items-center justify-center hover:bg-pluggo-gold transition-colors">
                <span className="sr-only">Instagram</span>
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-pluggo-green flex items-center justify-center hover:bg-pluggo-gold transition-colors">
                <span className="sr-only">LinkedIn</span>
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 heading-underline">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-pluggo-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-pluggo-gold transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-gray-300 hover:text-pluggo-gold transition-colors">
                  Soluções
                </Link>
              </li>
              <li>
                <Link to="/advantages" className="text-gray-300 hover:text-pluggo-gold transition-colors">
                  Vantagens
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-pluggo-gold transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 heading-underline">Serviços</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-pluggo-gold transition-colors">
                  Pagamentos Online
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-pluggo-gold transition-colors">
                  Maquininhas
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-pluggo-gold transition-colors">
                  Link de Pagamento
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-pluggo-gold transition-colors">
                  Checkout Transparente
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-pluggo-gold transition-colors">
                  Recorrência
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 heading-underline">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone size={18} className="text-pluggo-gold mr-2 mt-1" />
                <span className="text-gray-300">(11) 9999-9999</span>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="text-pluggo-gold mr-2 mt-1" />
                <span className="text-gray-300">contato@pluggo.com.br</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="text-pluggo-gold mr-2 mt-1" />
                <span className="text-gray-300">
                  Av. Paulista, 1000 - Bela Vista, São Paulo - SP
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} PlugGo. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
