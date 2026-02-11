import { useEffect, useRef, useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', phone: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section 
      id="contact"
      ref={sectionRef}
      className="relative py-24 sm:py-32 px-6 bg-dark-charcoal/50"
    >
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        {/* Section header */}
        <div 
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="font-serif text-amber text-sm tracking-[0.2em] uppercase mb-4 block">
            Контакты
          </span>
          <h2 className="text-4xl sm:text-5xl font-light text-warm-white mb-6">
            Начните свой <span className="font-serif italic text-amber">проект</span>
          </h2>
          <p className="text-warm-silver text-lg max-w-xl mx-auto">
            Оставьте заявку, и мы свяжемся с вами для обсуждения деталей
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact info */}
          <div 
            className={`transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h3 className="text-2xl font-light text-warm-white mb-8">
              Свяжитесь с нами
            </h3>

            <div className="space-y-6 mb-10">
              <a 
                href="tel:+79990000000" 
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-lg bg-amber/10 flex items-center justify-center group-hover:bg-amber/20 transition-colors">
                  <Phone className="w-5 h-5 text-amber" />
                </div>
                <div>
                  <div className="text-warm-silver text-sm mb-1">Телефон</div>
                  <div className="text-warm-white group-hover:text-amber transition-colors">+7 (999) 000-00-00</div>
                </div>
              </a>

              <a 
                href="mailto:info@nordicsauna.ru" 
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-lg bg-amber/10 flex items-center justify-center group-hover:bg-amber/20 transition-colors">
                  <Mail className="w-5 h-5 text-amber" />
                </div>
                <div>
                  <div className="text-warm-silver text-sm mb-1">Email</div>
                  <div className="text-warm-white group-hover:text-amber transition-colors">info@nordicsauna.ru</div>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-amber/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-amber" />
                </div>
                <div>
                  <div className="text-warm-silver text-sm mb-1">Адрес</div>
                  <div className="text-warm-white">Москва, ул. Примерная, 123</div>
                </div>
              </div>
            </div>

            {/* Working hours */}
            <div className="p-6 rounded-lg border border-dark-graphite bg-dark/50">
              <h4 className="text-warm-white font-medium mb-4">Часы работы</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-warm-silver">Пн — Пт</span>
                  <span className="text-warm-white">9:00 — 19:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-warm-silver">Сб</span>
                  <span className="text-warm-white">10:00 — 16:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-warm-silver">Вс</span>
                  <span className="text-warm-gray">Выходной</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div 
            className={`transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="card-dark glow-border">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-amber/10 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-amber" />
                  </div>
                  <h3 className="text-2xl font-light text-warm-white mb-3">
                    Спасибо!
                  </h3>
                  <p className="text-warm-silver">
                    Мы получили вашу заявку и свяжемся с вами в ближайшее время
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-warm-silver mb-2 block">
                      Ваше имя
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Иван Иванов"
                      required
                      className="bg-dark border-dark-graphite text-warm-white placeholder:text-warm-gray
                               focus:border-amber focus:ring-amber/20"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-warm-silver mb-2 block">
                      Телефон
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+7 (999) 000-00-00"
                      required
                      className="bg-dark border-dark-graphite text-warm-white placeholder:text-warm-gray
                               focus:border-amber focus:ring-amber/20"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-warm-silver mb-2 block">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="example@mail.ru"
                      className="bg-dark border-dark-graphite text-warm-white placeholder:text-warm-gray
                               focus:border-amber focus:ring-amber/20"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-warm-silver mb-2 block">
                      Сообщение
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Расскажите о вашем проекте..."
                      rows={4}
                      className="bg-dark border-dark-graphite text-warm-white placeholder:text-warm-gray
                               focus:border-amber focus:ring-amber/20 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full btn-primary flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Отправить заявку
                  </Button>

                  <p className="text-warm-gray text-xs text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
