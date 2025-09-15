// src/components/Footer.tsx
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Destinos', href: '#destinos' },
      { name: "Tipos de Viagem", href: "/tipos-de-viagem" }, 
    { name: 'Sobre Nós', href: '#sobre' },
      { name: 'Pacotes', href: '#pacotes' },
     { name: "Depoimento", href: "#depoimento" },
  ];

  const services = [
    'Viagens Personalizadas',
    'Pacotes Familiares',
    'Lua de Mel',
    'Viagens Corporativas',
    'Intercâmbio',
    'Seguro Viagem',
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];


  const toUrl = (href: string) => (href.startsWith('#') ? `/${href}` : href);

  return (
    <footer className="bg-[#111111] border-t border-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Explore<span className="text-primary">World</span>
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Transformando sonhos em realidade através de experiências de viagem únicas e inesquecíveis há mais de 15 anos.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center text-gray-400">
                <MapPin className="h-4 w-4 mr-3 text-primary" />
                <span className="text-sm">Rua das Viagens, 123 - São Paulo, SP</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Phone className="h-4 w-4 mr-3 text-primary" />
                <a href="tel:+5511999999999" className="text-sm hover:text-primary transition-colors">
                  (11) 99999-9999
                </a>
              </div>
              <div className="flex items-center text-gray-400">
                <Mail className="h-4 w-4 mr-3 text-primary" />
                <a href="mailto:contato@exploreworld.com" className="text-sm hover:text-primary transition-colors">
                  contato@exploreworld.com
                </a>
              </div>
              <div className="flex items-center text-gray-400">
                <Clock className="h-4 w-4 mr-3 text-primary" />
                <span className="text-sm">Seg-Sex: 9h-18h | Sáb: 9h-14h</span>
              </div>
            </div>
          </div>

       
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={toUrl(link.href)}
                    className="text-gray-400 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

      
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Nossos Serviços</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-400 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

        
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Conecte-se Conosco</h4>

         
            <div className="mb-6">
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg transition-colors font-medium"
              >
                <Phone className="h-4 w-4 mr-2" />
                Fale pelo WhatsApp
              </a>
            </div>

         
            <div>
              <p className="text-gray-400 text-sm mb-4">Siga-nos nas redes sociais:</p>
              <div className="flex space-x-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="p-2 bg-[#1e1e1e] border border-gray-800 rounded-lg text-gray-400 hover:text-primary hover:border-primary transition-all duration-300"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  );
                })}
              </div>
            </div>

         
            <div className="mt-6">
              <p className="text-gray-400 text-sm mb-3">Receba ofertas exclusivas:</p>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex overflow-hidden rounded-lg border border-gray-800"
              >
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  className="flex-1 px-3 py-2 bg-[#1e1e1e] text-white text-sm focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-primary hover:bg-primary/90 text-orange-500 cursor-pointer px-4 py-2 text-sm font-medium"
                >
                  Assinar
                </button>
              </form>
            </div>
          </div>
        </div>

   
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} ExploreWorld. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                FAQ
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
