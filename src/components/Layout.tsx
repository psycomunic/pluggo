
import React, { useEffect, useState } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Toaster } from "./ui/toaster";
import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";
import { initializeTheme, toggleTheme, listenForThemeChanges } from "../utils/themeUtils";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  // Estado para controlar o modo escuro
  const [darkMode, setDarkMode] = useState(false);

  // Atualiza o título da página e configura o tema quando o componente é montado
  useEffect(() => {
    document.title = "PlugGo Capital - Soluções de Pagamento";
    
    // Initialize theme based on saved preferences
    const isDarkMode = initializeTheme();
    setDarkMode(isDarkMode);
    
    // Listen for system theme changes
    const cleanup = listenForThemeChanges(setDarkMode);
    return cleanup;
  }, []);
  
  // Função para alternar entre modo claro e escuro
  const handleToggleDarkMode = () => {
    const newDarkMode = toggleTheme();
    setDarkMode(newDarkMode);
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Button
        onClick={handleToggleDarkMode}
        variant="outline"
        size="icon"
        className="fixed right-4 top-20 z-50 rounded-full glass-button hover:scale-110 transition-transform duration-300"
        aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      >
        {darkMode ? (
          <Sun className="h-5 w-5 text-yellow-400 animate-spin-slow" />
        ) : (
          <Moon className="h-5 w-5 text-gray-600 animate-pulse-subtle" />
        )}
      </Button>
      <main className="flex-grow">{children}</main>
      <Footer />
      <Toaster />
    </div>
  );
};
