import { useEffect, useRef, useState } from 'react';
import { 
  Maximize, 
  Thermometer, 
  GlassWater, 
  Lightbulb, 
  Wind, 
  Layers 
} from 'lucide-react';

const specifications = [
  {
    icon: Maximize,
    label: 'Размеры',
    value: '4×2.5 м',
    description: 'Компактный модуль для любого участка',
  },
  {
    icon: Thermometer,
    label: 'Температура',
    value: 'до 110°C',
    description: 'Парная с эффективной печью',
  },
  {
    icon: GlassWater,
    label: 'Душ',
    value: 'Включён',
    description: 'Полноценная моечная зона',
  },
  {
    icon: Lightbulb,
    label: 'Подсветка',
    value: 'LED',
    description: 'Тёплая ambient подсветка',
  },
  {
    icon: Wind,
    label: 'Вентиляция',
    value: 'Приточно-вытяжная',
    description: 'Свежий воздух без сквозняков',
  },
  {
    icon: Layers,
    label: 'Утепление',
    value: '200 мм',
    description: 'Экологичный утеплитель',
  },
];

export default function Features() {
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
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="features"
      ref={sectionRef}
      className="relative py-24 sm:py-32 px-6 bg-dark-charcoal/50"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div 
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="font-serif text-amber text-sm tracking-[0.2em] uppercase mb-4 block">
            Характеристики
          </span>
          <h2 className="text-4xl sm:text-5xl font-light text-warm-white mb-6">
            Всё, что нужно для <span className="font-serif italic text-amber">идеального пара</span>
          </h2>
        </div>

        {/* Specifications grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {specifications.map((spec, index) => (
            <div
              key={spec.label}
              className={`group relative p-6 rounded-lg border border-dark-graphite bg-dark/50 
                         hover:border-amber/30 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${(index + 1) * 80}ms` }}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-amber/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-amber/10 flex items-center justify-center flex-shrink-0 group-hover:bg-amber/20 transition-colors">
                  <spec.icon className="w-5 h-5 text-amber" />
                </div>
                <div>
                  <div className="text-warm-silver text-sm mb-1">{spec.label}</div>
                  <div className="text-warm-white text-xl font-medium mb-1">{spec.value}</div>
                  <div className="text-warm-gray text-sm">{spec.description}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div 
          className={`mt-16 text-center transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-warm-silver mb-6">
            Хотите узнать больше о комплектации?
          </p>
          <a href="#contact" className="btn-secondary text-sm inline-block">
            Получить полный каталог
          </a>
        </div>
      </div>
    </section>
  );
}
