import { Award, Globe, Users, Heart } from 'lucide-react';

const stats = [
  { icon: Globe, value: '120+', label: 'Destinos' },
  { icon: Users, value: '50K+', label: 'Clientes Felizes' },
  { icon: Award, value: '15', label: 'Anos de Experiência' },
  { icon: Heart, value: '98%', label: 'Satisfação' },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 bg-[#111111] text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
          <div className="scroll-reveal">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Sobre a <span className="text-primary">ExploreWorld</span>
            </h2>
            <p className="text-lg text-gray-400 mb-6 leading-relaxed">
              Há mais de 15 anos, transformamos sonhos em realidade através de experiências de viagem únicas e inesquecíveis. Nossa paixão por explorar o mundo nos impulsiona a criar jornadas personalizadas que conectam você aos destinos mais incríveis do planeta.
            </p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Com uma equipe de especialistas apaixonados por viagens, oferecemos desde aventuras épicas até escapadas relaxantes, sempre com o mais alto padrão de qualidade e atendimento personalizado.
            </p>

         
            <div className="space-y-4">
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-semibold text-white mb-1">Nossa Missão</h3>
                <p className="text-gray-400">Inspirar e facilitar conexões autênticas entre pessoas e culturas através do turismo responsável.</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-semibold text-white mb-1">Nossos Valores</h3>
                <p className="text-gray-400">Excelência, autenticidade, sustentabilidade e o compromisso de superar expectativas.</p>
              </div>
            </div>
          </div>

     
          <div className="scroll-reveal">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="bg-[#1e1e1e] border border-gray-700 p-6 text-center rounded-lg group hover:scale-[1.05] hover:border-primary/40 transition-all duration-300"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-gray-400 font-medium">{stat.label}</div>
                  </div>
                );
              })}
            </div>

         
            <div className="mt-8 relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                alt="Nossa equipe"
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-lg" />
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
