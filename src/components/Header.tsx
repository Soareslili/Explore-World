import { useState } from "react";
import { Menu, X, Plane } from "lucide-react";

const menuItems = [
  { name: "Home", href: "#home" },
  { name: "Tipos de Viagem", href: "#tipos" },
  { name: "Sobre Nós", href: "#sobre" },
  { name: "Pacotes", href: "#pacotes" },
  { name: "Depoimento", href: "#depoimento" },
  { name: "Contato", href: "#contato" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-neutral-950/80 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          
          <a href="#home" className="flex items-center gap-2">
            <span className="p-2 rounded-lg bg-orange-500/20">
              <Plane className="h-6 w-6 text-orange-400" />
            </span>
            <span className="text-xl font-bold text-white">
              Explore <span className="text-orange-400">World</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white/80 hover:text-orange-400 transition-colors font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA desktop */}
          <a
            href="#reserva"
            className="hidden md:inline-flex items-center rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-2 transition"
          >
            Reservar Agora
          </a>

          {/* Botão mobile */}
          <button
            onClick={() => setIsMenuOpen((v) => !v)}
            className="md:hidden p-2 text-white/90 hover:text-white"
            aria-label="Abrir menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Menu mobile */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-white/10">
            <nav className="flex flex-col gap-4">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white/90 hover:text-orange-400 transition-colors font-medium"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#reserva"
                onClick={() => setIsMenuOpen(false)}
                className="inline-flex w-fit items-center rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-2 transition"
              >
                Reservar Agora
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
