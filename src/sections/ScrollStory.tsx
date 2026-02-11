import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TreePine, Sparkles, Shield, Clock } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: TreePine,
    title: 'Натуральные материалы',
    description: 'Термодерево, кедр, лиственница — только лучшие породы для вашей бани',
  },
  {
    icon: Sparkles,
    title: 'Современный дизайн',
    description: 'Чистые линии, панорамное остекление, LED-подсветка',
  },
  {
    icon: Shield,
    title: 'Гарантия 5 лет',
    description: 'Полная гарантия на конструкцию и оборудование',
  },
  {
    icon: Clock,
    title: 'От 30 дней',
    description: 'Изготовление и монтаж вашей бани за один месяц',
  },
];

const stats = [
  { value: '150+', label: 'Построенных бань' },
  { value: '5', label: 'Лет гарантии' },
  { value: '30', label: 'Дней изготовления' },
  { value: '100%', label: 'Довольных клиентов' },
];

export default function ScrollStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const heroImageRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const aboutTitleRef = useRef<HTMLDivElement>(null);
  const aboutTextRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create main timeline for the pinned section
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=150%',
          pin: true,
          scrub: 2,
        },
      });

      // Phase 1: Hero elements split apart (0% - 20%)
      tl.to(heroImageRef.current, {
        x: '100%',
        opacity: 0,
        duration: 1,
        ease: 'power2.inOut',
      }, 0);

      tl.to(heroContentRef.current, {
        x: '-100%',
        opacity: 0,
        duration: 1,
        ease: 'power2.inOut',
      }, 0);

      // Phase 2: About title slides in from right (20% - 35%)
      tl.fromTo(aboutTitleRef.current,
        { x: '100vw', opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, ease: 'power3.out' },
        0.2
      );

      tl.fromTo(aboutTextRef.current,
        { x: '100vw', opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, ease: 'power3.out' },
        0.28
      );

      // Phase 3: Feature cards slide in from right (35% - 60%)
      const cards = cardsRef.current?.querySelectorAll('.feature-card');
      if (cards) {
        cards.forEach((card, index) => {
          tl.fromTo(card,
            { x: '100vw', opacity: 0 },
            { x: 0, opacity: 1, duration: 0.4, ease: 'power3.out' },
            0.4 + index * 0.05
          );
        });
      }

      // Phase 4: Stats slide up from bottom (60% - 85%)
      const statItems = statsRef.current?.querySelectorAll('.stat-item');
      if (statItems) {
        statItems.forEach((stat, index) => {
          tl.fromTo(stat,
            { y: '100vh', opacity: 0 },
            { y: 0, opacity: 1, duration: 0.4, ease: 'power3.out' },
            0.6 + index * 0.05
          );
        });
      }

      // Hold everything visible at the end
      tl.to({}, { duration: 0.15 }, 0.85);

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-screen overflow-hidden bg-dark">
      {/* Hero Section */}
      <div ref={heroRef} className="absolute inset-0 z-10">
        {/* Hero Background Image */}
        <div
          ref={heroImageRef}
          className="absolute inset-0"
        >
          <img
            src="/images/photo_2026-02-02_22-24-14.jpg"
            alt="Nordic Sauna"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/40 via-dark/60 to-dark" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,165,116,0.1)_0%,transparent_60%)]" />
        </div>

        {/* Hero Content */}
        <div
          ref={heroContentRef}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="text-center px-6 max-w-5xl mx-auto">
            <span className="font-serif text-amber text-lg tracking-[0.3em] uppercase mb-8 block">
              Nordic Craft
            </span>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-warm-white mb-6 leading-tight">
              <span className="block">Модульные</span>
              <span className="block font-serif italic text-amber mt-2">бани</span>
            </h1>
            <p className="text-lg sm:text-xl text-warm-silver max-w-2xl mx-auto mb-12 font-light leading-relaxed">
              Современный скандинавский дизайн, натуральные материалы
              <br className="hidden sm:block" />
              и уют тёплого света в вашем дворе
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#contact" className="btn-primary text-sm tracking-wide">
                Заказать консультацию
              </a>
              <a href="#gallery" className="btn-secondary text-sm tracking-wide">
                Смотреть проекты
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* About Section - Initially hidden off-screen */}
      <div ref={aboutRef} className="absolute inset-0 z-20 flex items-center justify-center px-6">
        <div className="max-w-6xl w-full">
          {/* About Title */}
          <div ref={aboutTitleRef} className="text-center mb-8 opacity-0">
            <span className="font-serif text-amber text-sm tracking-[0.2em] uppercase mb-4 block">
              О нас
            </span>
            <h2 className="text-4xl sm:text-5xl font-light text-warm-white">
              Баня, которая <span className="font-serif italic text-amber">вдохновляет</span>
            </h2>
          </div>

          {/* About Text */}
          <div ref={aboutTextRef} className="text-center mb-16 opacity-0">
            <p className="text-warm-silver text-lg max-w-3xl mx-auto leading-relaxed">
              Мы создаём модульные бани в скандинавском стиле — с чистыми линиями,
              натуральными материалами и уютной атмосферой. Каждая баня — это произведение
              архитектуры, которое гармонично впишется в ваш ландшафт.
            </p>
          </div>

          {/* Feature Cards */}
          <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="feature-card card-dark group glow-border opacity-0"
              >
                <div className="w-12 h-12 rounded-lg bg-amber/10 flex items-center justify-center mb-6 group-hover:bg-amber/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-amber" />
                </div>
                <h3 className="text-warm-white font-medium text-lg mb-3">
                  {feature.title}
                </h3>
                <p className="text-warm-silver text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div ref={statsRef} className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label} className="stat-item opacity-0">
                <div className="text-4xl sm:text-5xl font-light text-amber mb-2">
                  {stat.value}
                </div>
                <div className="text-warm-silver text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
