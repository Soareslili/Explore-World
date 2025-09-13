import { Award, Globe, Users, Heart } from 'lucide-react';

const stats = [
  { icon: Globe, value: '120+', label: 'Destinos' },
  { icon: Users, value: '50K+', label: 'Clientes Felizes' },
  { icon: Award, value: '15', label: 'Anos de Experiência' },
  { icon: Heart, value: '98%', label: 'Satisfação' },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="scroll-reveal">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Sobre a <span className="text-primary">ExploreWorld</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Há mais de 15 anos, transformamos sonhos em realidade através de experiências de viagem únicas e inesquecíveis. Nossa paixão por explorar o mundo nos impulsiona a criar jornadas personalizadas que conectam você aos destinos mais incríveis do planeta.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Com uma equipe de especialistas apaixonados por viagens, oferecemos desde aventuras épicas até escapadas relaxantes, sempre com o mais alto padrão de qualidade e atendimento personalizado.
            </p>

            {/* Mission Values */}
            <div className="space-y-4">
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-semibold text-foreground mb-1">Nossa Missão</h3>
                <p className="text-muted-foreground">Inspirar e facilitar conexões autênticas entre pessoas e culturas através do turismo responsável.</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-semibold text-foreground mb-1">Nossos Valores</h3>
                <p className="text-muted-foreground">Excelência, autenticidade, sustentabilidade e o compromisso de superar expectativas.</p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="scroll-reveal">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="travel-card p-6 text-center group hover:scale-105 transition-all duration-300"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                    <div className="text-muted-foreground font-medium">{stat.label}</div>
                  </div>
                );
              })}
            </div>

            {/* Team Image */}
            <div className="mt-8 relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                alt="Nossa equipe"
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg" />
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="font-semibold">Nossa Equipe Especializada</h4>
                <p className="text-sm opacity-90">Prontos para tornar sua viagem inesquecível</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;