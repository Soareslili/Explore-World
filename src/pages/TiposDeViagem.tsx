import { Mountain, Heart, Briefcase, Users, Camera, Waves } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card'
import { Button } from '../components/ui/button';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SocialMediaIcons from '../components/SocialMediaIcons';

const travelTypes = [
  {
    id: 1,
    title: 'Aventura e Natureza',
    description: 'Para os aventureiros que buscam adrenalina e contato com a natureza. Trilhas, escaladas, rafting e muito mais.',
    icon: Mountain,
    features: ['Trilhas em montanhas', 'Esportes radicais', 'Camping e glamping', 'Observação da vida selvagem'],
    destinations: ['Patagônia', 'Nova Zelândia', 'Nepal', 'Costa Rica'],
    duration: '7-14 dias',
    priceRange: 'R$ 3.500 - R$ 8.000',
    image: 'bg-gradient-to-br from-green-600 to-blue-600'
  },
  {
    id: 2,
    title: 'Romântica',
    description: 'Viagens perfeitas para casais que desejam momentos especiais e paisagens deslumbrantes.',
    icon: Heart,
    features: ['Hotéis boutique', 'Jantares especiais', 'Spa e relaxamento', 'Pôr do sol exclusivos'],
    destinations: ['Paris', 'Santorini', 'Maldivas', 'Toscana'],
    duration: '5-10 dias',
    priceRange: 'R$ 4.000 - R$ 12.000',
    image: 'bg-gradient-to-br from-pink-500 to-red-500'
  },
  {
    id: 3,
    title: 'Corporativa',
    description: 'Viagens de negócios e eventos corporativos com toda a infraestrutura necessária.',
    icon: Briefcase,
    features: ['Hotéis executivos', 'Salas de reunião', 'Transfer VIP', 'Concierge 24h'],
    destinations: ['São Paulo', 'Nova York', 'Londres', 'Dubai'],
    duration: '2-7 dias',
    priceRange: 'R$ 2.000 - R$ 6.000',
    image: 'bg-gradient-to-br from-gray-600 to-blue-900'
  },
  {
    id: 4,
    title: 'Família',
    description: 'Experiências pensadas para todas as idades, com atividades e acomodações familiares.',
    icon: Users,
    features: ['Hotéis family-friendly', 'Atividades para crianças', 'Segurança garantida', 'Entretenimento variado'],
    destinations: ['Orlando', 'Cancún', 'Portugal', 'Argentina'],
    duration: '7-12 dias',
    priceRange: 'R$ 3.000 - R$ 10.000',
    image: 'bg-gradient-to-br from-yellow-500 to-orange-500'
  },
  {
    id: 5,
    title: 'Cultural',
    description: 'Mergulhe na história, arte e tradições locais com guias especializados.',
    icon: Camera,
    features: ['Guias especializados', 'Museus e monumentos', 'Experiências autênticas', 'Gastronomia local'],
    destinations: ['Roma', 'Kyoto', 'Cusco', 'Marrakech'],
    duration: '8-15 dias',
    priceRange: 'R$ 4.500 - R$ 9.000',
    image: 'bg-gradient-to-br from-purple-600 to-indigo-600'
  },
  {
    id: 6,
    title: 'Praia e Relaxamento',
    description: 'Destinos paradisíacos para quem busca descanso, sol e mar cristalino.',
    icon: Waves,
    features: ['Resorts all-inclusive', 'Spa e wellness', 'Praias privativas', 'Esportes aquáticos'],
    destinations: ['Maldivas', 'Caribe', 'Bali', 'Seychelles'],
    duration: '5-12 dias',
    priceRange: 'R$ 5.000 - R$ 15.000',
    image: 'bg-gradient-to-br from-cyan-500 to-blue-500'
  },
];

const TiposDeViagem = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <SocialMediaIcons />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-travel">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            Tipos de <span className="text-primary">Viagem</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Encontre o estilo de viagem perfeito para você. Cada tipo foi cuidadosamente planejado para diferentes perfis e desejos
          </p>
        </div>
      </section>

      {/* Travel Types Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {travelTypes.map((type) => {
              const IconComponent = type.icon;
              return (
                <Card key={type.id} className="travel-card group overflow-hidden h-full">
                  <div className={`h-32 ${type.image} relative`}>
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute bottom-4 left-6">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  
                  <CardContent className="p-6 flex flex-col h-full">
                    <h3 className="text-2xl font-bold text-foreground mb-3">{type.title}</h3>
                    <p className="text-muted-foreground mb-4 flex-grow">
                      {type.description}
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-foreground mb-2">Inclui:</h4>
                      <ul className="space-y-1">
                        {type.features.map((feature, index) => (
                          <li key={index} className="text-sm text-muted-foreground flex items-center">
                            <div className="w-2 h-2 bg-primary rounded-full mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-foreground mb-2">Destinos populares:</h4>
                      <div className="flex flex-wrap gap-2">
                        {type.destinations.map((destination, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                          >
                            {destination}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                      <div>
                        <span className="font-medium text-foreground">Duração:</span>
                        <p className="text-muted-foreground">{type.duration}</p>
                      </div>
                      <div>
                        <span className="font-medium text-foreground">Preços:</span>
                        <p className="text-muted-foreground">{type.priceRange}</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-3 mt-auto">
                      <Button className="travel-button-primary flex-1">
                        Ver Pacotes
                      </Button>
                      <Button variant="outline" className="border-travel-border hover:bg-card">
                        Detalhes
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Não encontrou o que procura?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Nossa equipe de especialistas pode criar uma viagem personalizada especialmente para você
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="travel-button-primary px-8 py-3 text-lg">
              Viagem Personalizada
            </Button>
            <Button variant="outline" className="px-8 py-3 text-lg border-travel-border hover:bg-card">
              Falar com Consultor
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default TiposDeViagem;