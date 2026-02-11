import { useEffect, useRef, useState } from 'react';
import { ChevronDown, Phone, Mail } from 'lucide-react';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen w-full overflow-hidden flex items-center justify-center"
    >
      {/* Background Image with Ken Burns effect */}
      <div className="absolute inset-0 z-0">
        <div 
          className={`absolute inset-0 transition-transform duration-[20000ms] ease-out ${
            isLoaded ? 'scale-110' : 'scale-100'
          }`}
        >
          <img
            src="/images/photo_2026-02-02_22-24-14.jpg"
            alt="Nordic Sauna"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark/40 via-dark/60 to-dark" />
        
        {/* Warm glow overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,165,116,0.1)_0%,transparent_60%)]" />
      </div>

      {/* LED strip decoration */}
      <div className="absolute inset-x-0 top-1/3 h-px">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber/40 to-transparent animate-glow-pulse" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Logo/Brand */}
        <div 
          className={`mb-8 transition-all duration-700 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="font-serif text-amber text-lg tracking-[0.3em] uppercase">
            Nordic Craft
          </span>
        </div>

        {/* Main Title */}
        <h1 
          className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-warm-white mb-6 leading-tight transition-all duration-700 delay-100 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="block">Модульные</span>
          <span className="block font-serif italic text-amber mt-2">бани</span>
        </h1>

        {/* Subtitle */}
        <p 
          className={`text-lg sm:text-xl text-warm-silver max-w-2xl mx-auto mb-12 font-light leading-relaxed transition-all duration-700 delay-200 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Современный скандинавский дизайн, натуральные материалы 
          <br className="hidden sm:block" />
          и уют тёплого света в вашем дворе
        </p>

        {/* CTA Buttons */}
        <div 
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 transition-all duration-700 delay-300 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <a 
            href="#contact" 
            className="btn-primary text-sm tracking-wide"
          >
            Заказать консультацию
          </a>
          <a 
            href="#gallery" 
            className="btn-secondary text-sm tracking-wide"
          >
            Смотреть проекты
          </a>
        </div>

        {/* Contact info */}
        <div 
          className={`flex flex-col sm:flex-row gap-6 justify-center items-center text-warm-silver text-sm transition-all duration-700 delay-400 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <a href="tel:+79990000000" className="flex items-center gap-2 hover:text-amber transition-colors">
            <Phone className="w-4 h-4" />
            <span>+7 (999) 000-00-00</span>
          </a>
          <a href="mailto:info@nordicsauna.ru" className="flex items-center gap-2 hover:text-amber transition-colors">
            <Mail className="w-4 h-4" />
            <span>info@nordicsauna.ru</span>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <button 
        onClick={scrollToAbout}
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 text-warm-silver hover:text-amber transition-all duration-500 animate-float ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </button>

      {/* Corner decorations */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l border-t border-amber/20" />
      <div className="absolute top-8 right-8 w-16 h-16 border-r border-t border-amber/20" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l border-b border-amber/20" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r border-b border-amber/20" />
    </section>
  );
}
