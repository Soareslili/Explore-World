import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

const galleryImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop',
    alt: 'Montanhas nevadas',
    category: 'Aventura',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=400&fit=crop',
    alt: 'Praia tropical',
    category: 'Relaxamento',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=400&h=600&fit=crop',
    alt: 'Arquitetura histórica',
    category: 'Cultural',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=400&h=400&fit=crop',
    alt: 'Lago sereno',
    category: 'Natureza',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=600&fit=crop',
    alt: 'Cidade moderna',
    category: 'Urbano',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=400&fit=crop',
    alt: 'Floresta mística',
    category: 'Aventura',
  },
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Galeria de <span className="text-primary">Aventuras</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Momentos únicos capturados ao redor do mundo pelos nossos viajantes
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[200px] md:auto-rows-[300px]">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className={`group relative overflow-hidden rounded-lg cursor-pointer hover:scale-105 transition-all duration-500 scroll-reveal ${
                index === 0 || index === 2 || index === 4 ? 'row-span-2' : 'row-span-1'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                  <ZoomIn className="h-8 w-8 text-white mx-auto mb-2" />
                  <span className="text-white font-medium">{image.category}</span>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {image.category}
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-primary transition-colors"
              >
                <X className="h-8 w-8" />
              </button>
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                <h3 className="text-white text-xl font-semibold mb-1">{selectedImage.alt}</h3>
                <p className="text-white/80">{selectedImage.category}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;