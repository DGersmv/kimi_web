import { useEffect, useRef, useState } from 'react';
import { TreePine, Sparkles, Shield, Clock } from 'lucide-react';

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

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="about"
      ref={sectionRef}
      className="relative py-24 sm:py-32 px-6"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        {/* Section header */}
        <div 
          className={`text-center mb-20 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="font-serif text-amber text-sm tracking-[0.2em] uppercase mb-4 block">
            О нас
          </span>
          <h2 className="text-4xl sm:text-5xl font-light text-warm-white mb-6">
            Баня, которая <span className="font-serif italic text-amber">вдохновляет</span>
          </h2>
          <p className="text-warm-silver text-lg max-w-2xl mx-auto leading-relaxed">
            Мы создаём модульные бани в скандинавском стиле — с чистыми линиями, 
            натуральными материалами и уютной атмосферой. Каждая баня — это произведение 
            архитектуры, которое гармонично впишется в ваш ландшафт.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`card-dark group glow-border transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
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
        <div 
          className={`mt-20 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {[
            { value: '150+', label: 'Построенных бань' },
            { value: '5', label: 'Лет гарантии' },
            { value: '30', label: 'Дней изготовления' },
            { value: '100%', label: 'Довольных клиентов' },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-4xl sm:text-5xl font-light text-amber mb-2">
                {stat.value}
              </div>
              <div className="text-warm-silver text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
