
import React, { useEffect, useState } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Toaster } from "./ui/toaster";
import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  // Estado para controlar o modo escuro
  const [darkMode, setDarkMode] = useState(false);

  // Atualiza o título da página e configura o tema quando o componente é montado
  useEffect(() => {
    document.title = "PlugGo Capital - Soluções de Pagamento";
    
    // Verificar se o usuário já tinha uma preferência salva
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDarkMode);
    
    // Aplicar classe ao HTML para Dark Mode
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);
  
  // Função para alternar entre modo claro e escuro
  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    
    // Salva a preferência do usuário
    localStorage.setItem("darkMode", String(newDarkMode));
    
    // Atualiza o DOM
    if (newDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Button
        onClick={toggleDarkMode}
        variant="outline"
        size="icon"
        className="fixed right-4 top-20 z-50 rounded-full glass-button"
      >
        {darkMode ? (
          <Sun className="h-5 w-5 text-yellow-400" />
        ) : (
          <Moon className="h-5 w-5 text-gray-600" />
        )}
      </Button>
      <main className="flex-grow">{children}</main>
      <Footer />
      <Toaster />
    </div>
  );
};
