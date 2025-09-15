import { useEffect } from 'react';
import Header from '../components/Header';
import HeroCarousel from '../components/HeroCarousel';
import PackagesSection from '../components/PackagesSection';
import AboutSection from '../components/AboutSection';
import GallerySection from '../components/GallerySection';
import TestimonialsSection from '../components/TestimonialsSection';
import Footer from '../components/Footer';


const Index = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, observerOptions);

    const scrollRevealElements = document.querySelectorAll('.scroll-reveal');
    scrollRevealElements.forEach((el) => observer.observe(el));

    return () => {
      scrollRevealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
     
      
      <main>
        <HeroCarousel />
        <PackagesSection />
        <AboutSection />
        <GallerySection />
        <TestimonialsSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;