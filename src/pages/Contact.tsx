
import React, { useState } from "react";
import { Layout } from "../components/Layout";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form validation
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      toast({
        title: "Erro no formulário",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive",
      });
      return;
    }
    
    // Form submission simulation
    console.log("Form data:", formData);
    toast({
      title: "Mensagem enviada!",
      description: "Agradecemos seu contato. Responderemos em breve!",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <Layout>
      <div className="pt-24 md:pt-32">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-white to-green-50 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Entre em Contato</h1>
              <div className="h-1 w-24 bg-pluggo-gold mx-auto mb-8"></div>
              <p className="text-xl text-gray-600">
                Estamos prontos para te ajudar a encontrar a melhor solução para o seu negócio.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Contact Form */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6">Envie uma mensagem</h2>
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Nome completo *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pluggo-green focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pluggo-green focus:border-transparent"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Telefone *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pluggo-green focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Assunto
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pluggo-green focus:border-transparent"
                      >
                        <option value="">Selecione um assunto</option>
                        <option value="Maquininhas">Maquininhas</option>
                        <option value="Link de Pagamento">Link de Pagamento</option>
                        <option value="Recorrência">Recorrência</option>
                        <option value="Suporte">Suporte</option>
                        <option value="Outros">Outros</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Mensagem *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pluggo-green focus:border-transparent"
                      required
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="btn-primary w-full">
                    Enviar Mensagem
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Informações de Contato</h2>
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="bg-green-50 rounded-full p-3 mr-4">
                      <Phone size={24} className="text-pluggo-green" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg mb-1">Telefone</h3>
                      <p className="text-gray-600 mb-1">(11) 9999-9999</p>
                      <p className="text-gray-600">0800 123 4567 (ligação gratuita)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-green-50 rounded-full p-3 mr-4">
                      <Mail size={24} className="text-pluggo-green" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg mb-1">Email</h3>
                      <p className="text-gray-600 mb-1">contato@pluggo.com.br</p>
                      <p className="text-gray-600">suporte@pluggo.com.br</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-green-50 rounded-full p-3 mr-4">
                      <MapPin size={24} className="text-pluggo-green" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg mb-1">Endereço</h3>
                      <p className="text-gray-600 mb-1">
                        Av. Paulista, 1000 - Bela Vista
                      </p>
                      <p className="text-gray-600">São Paulo - SP, 01310-000</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-green-50 rounded-full p-3 mr-4">
                      <Clock size={24} className="text-pluggo-green" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg mb-1">Horário de Atendimento</h3>
                      <p className="text-gray-600 mb-1">Segunda a Sexta: 9h às 18h</p>
                      <p className="text-gray-600">Sábado: 9h às 13h</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12">
                  <h3 className="font-medium text-lg mb-4">Siga-nos nas Redes Sociais</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="w-10 h-10 rounded-full bg-pluggo-green flex items-center justify-center text-white hover:bg-pluggo-gold transition-colors">
                      <span className="sr-only">Facebook</span>
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-pluggo-green flex items-center justify-center text-white hover:bg-pluggo-gold transition-colors">
                      <span className="sr-only">Instagram</span>
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-pluggo-green flex items-center justify-center text-white hover:bg-pluggo-gold transition-colors">
                      <span className="sr-only">LinkedIn</span>
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-pluggo-green flex items-center justify-center text-white hover:bg-pluggo-gold transition-colors">
                      <span className="sr-only">Twitter</span>
                      <i className="fab fa-twitter"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-center">Nossa Localização</h2>
            <div className="rounded-2xl overflow-hidden shadow-lg h-96 bg-white flex items-center justify-center">
              <div className="text-center px-8">
                <p className="text-2xl font-bold text-pluggo-green mb-4">Mapa da Localização</p>
                <p className="text-gray-600">Av. Paulista, 1000 - Bela Vista, São Paulo - SP</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">Perguntas Frequentes</h2>
              <div className="h-1 w-24 bg-pluggo-gold mx-auto mb-6"></div>
            </div>
            
            <div className="max-w-3xl mx-auto divide-y">
              <div className="py-6">
                <h3 className="text-xl font-medium mb-2">Quanto tempo leva para começar a usar os serviços da PlugGo?</h3>
                <p className="text-gray-600">
                  O cadastro é rápido e você pode começar a usar nossas soluções em até 24 horas após a aprovação.
                </p>
              </div>
              <div className="py-6">
                <h3 className="text-xl font-medium mb-2">Quais são as taxas cobradas?</h3>
                <p className="text-gray-600">
                  Nossas taxas são personalizadas de acordo com o volume e tipo de operação do seu negócio. Entre em contato para uma cotação específica.
                </p>
              </div>
              <div className="py-6">
                <h3 className="text-xl font-medium mb-2">Preciso ter CNPJ para usar os serviços?</h3>
                <p className="text-gray-600">
                  Não é obrigatório. Pessoas físicas também podem utilizar nossas soluções de pagamento.
                </p>
              </div>
              <div className="py-6">
                <h3 className="text-xl font-medium mb-2">A PlugGo oferece suporte técnico?</h3>
                <p className="text-gray-600">
                  Sim, oferecemos suporte técnico 7 dias por semana através de diversos canais de atendimento.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Contact;
