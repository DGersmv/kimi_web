import { Instagram, Send, Youtube } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 px-6 border-t border-dark-graphite">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo */}
          <div className="text-center md:text-left">
            <span className="font-serif text-amber text-xl tracking-wide">
              Nordic Craft
            </span>
            <p className="text-warm-gray text-sm mt-2">
              Модульные бани премиум-класса
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6">
            <a href="#about" className="text-warm-silver hover:text-amber transition-colors text-sm">
              О нас
            </a>
            <a href="#features" className="text-warm-silver hover:text-amber transition-colors text-sm">
              Характеристики
            </a>
            <a href="#gallery" className="text-warm-silver hover:text-amber transition-colors text-sm">
              Галерея
            </a>
            <a href="#contact" className="text-warm-silver hover:text-amber transition-colors text-sm">
              Контакты
            </a>
          </nav>

          {/* Social links */}
          <div className="flex gap-4">
            <a 
              href="#" 
              className="w-10 h-10 rounded-lg bg-dark-graphite flex items-center justify-center
                       text-warm-silver hover:text-amber hover:bg-amber/10 transition-all"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-lg bg-dark-graphite flex items-center justify-center
                       text-warm-silver hover:text-amber hover:bg-amber/10 transition-all"
              aria-label="Telegram"
            >
              <Send className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-lg bg-dark-graphite flex items-center justify-center
                       text-warm-silver hover:text-amber hover:bg-amber/10 transition-all"
              aria-label="Youtube"
            >
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-dark-graphite/50 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-warm-gray text-sm">
            © {currentYear} Nordic Craft. Все права защищены.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-warm-gray hover:text-amber transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="text-warm-gray hover:text-amber transition-colors">
              Договор оферты
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
