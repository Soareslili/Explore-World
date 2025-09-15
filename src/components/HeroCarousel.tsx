import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import machupicchu from "../assets/Machu Picchu.png";
import paris from "../assets/Paris.png";
import newyork from "../assets/Nova York.png";
import rome from "../assets/Roma.png";
import bali from "../assets/Bali.png";

type Destination = {
  id: number;
  name: string;
  location: string;
  description: string;
  image: string;
};

const DESTINATIONS: Destination[] = [
  { id: 1, name: "Machu Picchu", location: "Peru",  description: "Descubra as antigas ruínas incas no coração dos Andes peruanos", image: machupicchu },
  { id: 2, name: "Paris",        location: "França", description: "A cidade luz que encanta com sua romântica arquitetura e cultura", image: paris },
  { id: 3, name: "Nova York",    location: "EUA",    description: "A metrópole vibrante que nunca dorme, cheia de oportunidades e cultura", image: newyork },
  { id: 4, name: "Roma",         location: "Itália", description: "Mergulhe na história da cidade eterna e sua arquitetura milenar", image: rome },
  { id: 5, name: "Bali",         location: "Indonésia", description: "Paraíso tropical com templos sagrados e paisagens exuberantes", image: bali },
];

const HeroCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const d = DESTINATIONS[currentSlide];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((p) => (p + 1) % DESTINATIONS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((p) => (p + 1) % DESTINATIONS.length);
  const prevSlide = () => setCurrentSlide((p) => (p - 1 + DESTINATIONS.length) % DESTINATIONS.length);

  return (
    <section className="relative h-screen overflow-hidden group" id="home" aria-live="polite">
   
      <div className="absolute inset-0">
        {DESTINATIONS.map((s, i) => (
          <div
            key={s.id}
            className={`absolute inset-0 transition-opacity duration-700 ${i === currentSlide ? "opacity-100" : "opacity-0"}`}
            aria-hidden={i !== currentSlide}
          >
            <img src={s.image} alt={`${s.name} – ${s.location}`} className="w-full h-full object-cover" />
         
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/65 to-black/85" />
          </div>
        ))}
      </div>

  
      <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
        <div className="select-none">
      
          <span className="inline-block mb-3 px-3 py-1 rounded-full bg-black/50 text-orange-200 text-sm font-semibold tracking-widest uppercase">
            Destino em destaque
          </span>

         
          <h2 className="text-5xl md:text-7xl font-extrabold text-white">
            <span className=" rounded-lg px-3 md:px-4 py-1 inline-block">
              {d.name}
            </span>
          </h2>

        
          <span className="mt-2 block text-xl md:text-2xl text-white/90">
            <span className=" rounded px-2 py-0.5 inline-block">
              {d.location}
            </span>
          </span>

         
          <p className="mt-4 text-white/85 max-w-2xl mx-auto">
            {d.description}
          </p>

       
          <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity flex justify-center gap-3">
            <a
              href="#destinos"
              className="inline-flex justify-center rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 transition"
            >
              Explorar
            </a>
            <a
              href="#pacotes"
              className="inline-flex justify-center rounded-xl border border-white/30 text-white px-6 py-3 hover:bg-white/10 transition"
            >
              Saiba Mais
            </a>
          </div>
        </div>
      </div>

    
      <div className="absolute bottom-8 left-0 right-0 z-10 flex justify-center gap-2">
        {DESTINATIONS.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            aria-label={`Ir para slide ${i + 1}`}
            className={`w-2.5 h-2.5 rounded-full transition ${i === currentSlide ? "bg-white" : "bg-white/50"}`}
          />
        ))}
      </div>

    
      <button
        onClick={prevSlide}
        aria-label="Slide anterior"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-black/35 text-white hover:bg-black/55 transition"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        aria-label="Próximo slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-black/35 text-white hover:bg-black/55 transition"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </section>
  );
};

export default HeroCarousel;
