import { Star, Calendar, Users, MapPin } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader } from './ui/card';

const packages = [
  {
    id: 1,
    title: 'Europa Clássica',
    destinations: ['Paris', 'Roma', 'Barcelona'],
    duration: '12 dias',
    people: '2-4 pessoas',
    price: 'R$ 8.999',
    originalPrice: 'R$ 10.999',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=400&h=250&fit=crop',
    features: ['Voos inclusos', 'Hotéis 4★', 'Guia local', 'Café da manhã'],
  },
  {
    id: 2,
    title: 'Aventura nos Andes',
    destinations: ['Machu Picchu', 'Cusco', 'Vale Sagrado'],
    duration: '8 dias',
    people: '2-6 pessoas',
    price: 'R$ 5.499',
    originalPrice: 'R$ 6.499',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=400&h=250&fit=crop',
    features: ['Trekking guiado', 'Hotéis 3★', 'Transporte', 'Refeições'],
  },
  {
    id: 3,
    title: 'Paraíso Tropical',
    destinations: ['Bali', 'Lombok', 'Gili Islands'],
    duration: '10 dias',
    people: '2-4 pessoas',
    price: 'R$ 6.799',
    originalPrice: 'R$ 7.999',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&h=250&fit=crop',
    features: ['Resort 5★', 'Spa incluído', 'Atividades aquáticas', 'Transfer VIP'],
  },
];

const PackagesSection = () => {
  return (
    <section id="pacotes" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Pacotes de <span className="text-primary">Viagem</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experiências cuidadosamente planejadas para criar memórias inesquecíveis
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <Card 
              key={pkg.id} 
              className="travel-card overflow-hidden group hover:scale-105 transition-all duration-500 scroll-reveal"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader className="p-0">
                <div className="relative">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    {Math.round(((parseFloat(pkg.originalPrice.replace('R$ ', '').replace('.', '')) - parseFloat(pkg.price.replace('R$ ', '').replace('.', ''))) / parseFloat(pkg.originalPrice.replace('R$ ', '').replace('.', ''))) * 100)}% OFF
                  </div>
                  <div className="absolute bottom-4 left-4 flex items-center space-x-1 bg-black/60 text-white px-2 py-1 rounded">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{pkg.rating}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-foreground">{pkg.title}</h3>
                <div className="flex items-center text-muted-foreground mb-3">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">{pkg.destinations.join(' • ')}</span>
                </div>
                
                <div className="flex items-center justify-between mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {pkg.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    {pkg.people}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 mb-4">
                  {pkg.features.map((feature, idx) => (
                    <div key={idx} className="text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded">
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-sm text-muted-foreground line-through">{pkg.originalPrice}</span>
                    <div className="text-2xl font-bold text-primary">{pkg.price}</div>
                    <span className="text-xs text-muted-foreground">por pessoa</span>
                  </div>
                </div>

                <Button className="w-full travel-button-primary font-semibold">
                  Reservar Agora
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;