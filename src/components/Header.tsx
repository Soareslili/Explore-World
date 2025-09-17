// src/components/Header.tsx
import { useState } from "react";
import { Menu, X, Plane } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

type Item = { name: string; href: string };

const menuItems: Item[] = [
  { name: "Home", href: "#home" },
  { name: "Destinos", href: "/destinos" },
  { name: "Tipos de Viagem", href: "/tipos-de-viagem" },
  { name: "Sobre Nós", href: "#sobre" },
  { name: "Pacotes", href: "#pacotes" },
  { name: "Depoimento", href: "#depoimento" },
];

const toUrl = (href: string) => (href.startsWith("#") ? `/${href}` : href);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-neutral-950/80 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">

          <Link to="/#home" className="flex items-center gap-2">
            <span className="p-2 rounded-lg bg-orange-500/20">
              <Plane className="h-6 w-6 text-orange-400" />
            </span>
            <span className="text-xl font-bold text-white">
              Explore <span className="text-orange-400">World</span>
            </span>
          </Link>


          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <NavLink
                key={item.name}
                to={toUrl(item.href)}
                className={({ isActive }) =>
                  `text-white/80 hover:text-orange-400 transition-colors font-medium ${isActive && !item.href.startsWith("#") ? "text-orange-400" : ""
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>


          <a
            href="https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20fazer%20uma%20reserva."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-2 transition"
          >
            Reservar Agora
          </a>




          <button
            onClick={() => setIsMenuOpen((v) => !v)}
            className="md:hidden p-2 text-white/90 hover:text-white"
            aria-label="Abrir menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>


        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-white/10">
            <nav className="flex flex-col gap-4">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={toUrl(item.href)}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white/90 hover:text-orange-400 transition-colors font-medium"
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20fazer%20uma%20reserva."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="inline-flex w-fit items-center rounded-xl bg-green-500 hover:bg-green-600 text-white font-semibold px-5 py-2 transition"
              >
                Reservar pelo WhatsApp
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
