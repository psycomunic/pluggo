
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          {/* Logo da PlugGo Capital */}
          <div className="flex items-center">
            <img src="/lovable-uploads/3d3e0fff-efd6-40f3-866e-383f28d3ca0c.png" alt="PlugGo Capital Logo" className="h-12" />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="font-medium text-pluggo-darkGray hover:text-pluggo-green transition-colors">
            Home
          </Link>
          <Link to="/about" className="font-medium text-pluggo-darkGray hover:text-pluggo-green transition-colors">
            Sobre Nós
          </Link>
          <Link to="/solutions" className="font-medium text-pluggo-darkGray hover:text-pluggo-green transition-colors">
            Soluções
          </Link>
          <Link to="/advantages" className="font-medium text-pluggo-darkGray hover:text-pluggo-green transition-colors">
            Vantagens
          </Link>
          <Link to="/contact" className="btn-primary">
            Contato
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-pluggo-darkGray focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 right-0 p-4 shadow-lg">
          <nav className="flex flex-col space-y-4">
            <Link
              to="/"
              className="font-medium text-pluggo-darkGray hover:text-pluggo-green transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="font-medium text-pluggo-darkGray hover:text-pluggo-green transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Sobre Nós
            </Link>
            <Link
              to="/solutions"
              className="font-medium text-pluggo-darkGray hover:text-pluggo-green transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Soluções
            </Link>
            <Link
              to="/advantages"
              className="font-medium text-pluggo-darkGray hover:text-pluggo-green transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Vantagens
            </Link>
            <Link
              to="/contact"
              className="btn-primary text-center"
              onClick={() => setIsOpen(false)}
            >
              Contato
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};
