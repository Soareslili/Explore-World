import { useState } from 'react';
import { MapPin, Clock, Users, Star } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SocialMediaIcons from '../components/SocialMediaIcons';
import machupicchu from "../assets/Machu Picchu.png";
import paris from "../assets/Paris.png";
import newyork from "../assets/Nova York.png";
import rome from "../assets/Roma.png";
import bali from "../assets/Bali.png";

const destinations = [
  {
    id: 1,
    name: 'Machu Picchu',
    location: 'Peru',
    continent: 'América do Sul',
    description:
      'Descubra as antigas ruínas incas no coração dos Andes peruanos. Uma experiência única através da história milenar.',
    image: machupicchu,
    duration: '7 dias',
    groupSize: '8-12 pessoas',
    rating: 4.9,
    price: 'R$ 4.500',
    highlights: ['Trilha Inca', 'Nascer do sol', 'Guia especializado', 'Aguas Calientes'],
  },
  {
    id: 2,
    name: 'Paris',
    location: 'França',
    continent: 'Europa',
    description:
      'A cidade luz que encanta com sua romântica arquitetura, museus mundiais e gastronomia refinada.',
    image: paris,
    duration: '5 dias',
    groupSize: '10-15 pessoas',
    rating: 4.8,
    price: 'R$ 3.200',
    highlights: ['Torre Eiffel', 'Louvre', 'Champs-Élysées', 'Cruzeiro no Sena'],
  },
  {
    id: 3,
    name: 'Nova York',
    location: 'EUA',
    continent: 'América do Norte',
    description:
      'A metrópole que nunca dorme, repleta de energia, arranha-céus icônicos e diversidade cultural.',
    image: newyork,
    duration: '6 dias',
    groupSize: '12-18 pessoas',
    rating: 4.7,
    price: 'R$ 5.800',
    highlights: ['Times Square', 'Central Park', 'Estátua da Liberdade', 'Broadway'],
  },
  {
    id: 4,
    name: 'Roma',
    location: 'Itália',
    continent: 'Europa',
    description:
      'Mergulhe na história da cidade eterna com seus monumentos milenares e tradições preservadas.',
    image: rome,
    duration: '5 dias',
    groupSize: '8-14 pessoas',
    rating: 4.8,
    price: 'R$ 3.800',
    highlights: ['Coliseu', 'Vaticano', 'Fontana di Trevi', 'Gastronomia italiana'],
  },
  {
    id: 5,
    name: 'Bali',
    location: 'Indonésia',
    continent: 'Ásia',
    description:
      'Paraíso tropical com templos sagrados, paisagens exuberantes e cultura espiritual única.',
    image: bali,
    duration: '8 dias',
    groupSize: '6-10 pessoas',
    rating: 4.9,
    price: 'R$ 4.200',
    highlights: ['Templos hindus', 'Terraços de arroz', 'Praias paradisíacas', 'Yoga e wellness'],
  },
];

const continents = ['Todos', 'América do Sul', 'Europa', 'América do Norte', 'Ásia'];

export default function Destinos() {
  const [selectedContinent, setSelectedContinent] = useState('Todos');

  const filteredDestinations =
    selectedContinent === 'Todos'
      ? destinations
      : destinations.filter((d) => d.continent === selectedContinent);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <SocialMediaIcons />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-travel">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            Nossos <span className="text-primary">Destinos</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore destinos únicos ao redor do mundo, cuidadosamente selecionados para criar experiências inesquecíveis
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {continents.map((continent) => (
              <Button
                key={continent}
                variant={selectedContinent === continent ? 'default' : 'outline'}
                onClick={() => setSelectedContinent(continent)}
                className={
                  selectedContinent === continent
                    ? 'travel-button-primary'
                    : 'border-travel-border hover:bg-card'
                }
              >
                {continent}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDestinations.map((destination) => (
              <Card key={destination.id} className="travel-card group overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {destination.price}
                  </div>
                  <div className="absolute bottom-4 left-4 flex items-center text-white">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm font-medium">{destination.location}</span>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-2xl font-bold text-foreground">{destination.name}</h3>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-primary fill-current mr-1" />
                      <span className="text-sm font-medium text-foreground">
                        {destination.rating}
                      </span>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {destination.description}
                  </p>

                  <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {destination.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {destination.groupSize}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-foreground mb-2">Destaques:</h4>
                    <div className="flex flex-wrap gap-2">
                      {destination.highlights.map((h, i) => (
                        <span
                          key={`${destination.id}-${i}-${h}`}
                          className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button className="travel-button-primary flex-1">Reservar</Button>
                    <Button variant="outline" className="border-travel-border hover:bg-card">
                      Detalhes
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}