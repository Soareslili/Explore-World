import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card'

const testimonials = [
  {
    id: 1,
    name: 'Marina Silva',
    location: 'São Paulo, SP',
    rating: 5,
    comment: 'A viagem para Machu Picchu foi simplesmente mágica! A organização foi perfeita e nossa guia local era extremamente conhecedora. Recomendo de olhos fechados!',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b900?w=150&h=150&fit=crop&crop=face',
    trip: 'Aventura nos Andes',
  },
  {
    id: 2,
    name: 'Carlos Mendes',
    location: 'Rio de Janeiro, RJ',
    rating: 5,
    comment: 'Lua de mel perfeita em Bali! Resorts incríveis, paisagens de tirar o fôlego e um atendimento que superou todas as expectativas. Voltaremos com certeza!',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    trip: 'Paraíso Tropical',
  },
  {
    id: 3,
    name: 'Ana Costa',
    location: 'Belo Horizonte, MG',
    rating: 5,
    comment: 'A Europa Clássica foi um sonho realizado! Paris, Roma e Barcelona foram ainda mais incríveis do que imaginávamos. Obrigada por essa experiência única!',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    trip: 'Europa Clássica',
  },
  {
    id: 4,
    name: 'Roberto Santos',
    location: 'Porto Alegre, RS',
    rating: 5,
    comment: 'Atendimento excepcional desde o primeiro contato. A viagem para Nova York foi planejada nos mínimos detalhes. Uma experiência inesquecível para toda família!',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    trip: 'Descobrindo NYC',
  },
  {
    id: 5,
    name: 'Juliana Oliveira',
    location: 'Salvador, BA',
    rating: 5,
    comment: 'Primeira vez viajando sozinha e me senti completamente segura! O suporte foi incrível e conheci pessoas maravilhosas. Já estou planejando a próxima aventura!',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
    trip: 'Solo Travel Tailândia',
  },
  {
    id: 6,
    name: 'Eduardo Lima',
    location: 'Brasília, DF',
    rating: 5,
    comment: 'Viagem de formatura inesquecível! O grupo todo ficou encantado com a organização e os destinos escolhidos. Valeu cada centavo investido!',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    trip: 'Formatura Europa',
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            O que Nossos <span className="text-primary">Clientes</span> Dizem
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Histórias reais de viajantes que confiaram em nós para criar memórias inesquecíveis
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id} 
              className="travel-card hover:scale-105 transition-all duration-300 scroll-reveal"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="h-8 w-8 text-primary/60" />
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.comment}"
                </p>

                {/* Trip */}
                <div className="text-sm text-primary font-medium mb-4 bg-primary/10 px-3 py-1 rounded-full w-fit">
                  {testimonial.trip}
                </div>

                {/* Author */}
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 scroll-reveal">
          <p className="text-lg text-muted-foreground mb-6">
            Quer fazer parte dessas histórias incríveis?
          </p>
          <button className="travel-button-primary px-8 py-3 text-lg font-semibold rounded-lg">
            Comece Sua Jornada
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;