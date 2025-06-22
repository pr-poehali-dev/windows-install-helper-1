import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Icon name="Monitor" size={24} className="text-white" />
            </div>
            <span className="text-xl font-montserrat font-bold text-gray-900">
              WindowsПро
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#services"
              className="text-gray-600 hover:text-electric-blue transition-colors"
            >
              Услуги
            </a>
            <a
              href="#about"
              className="text-gray-600 hover:text-electric-blue transition-colors"
            >
              О нас
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-electric-blue transition-colors"
            >
              Контакты
            </a>
          </nav>

          <Button className="bg-gradient-primary hover:opacity-90 text-white px-6 py-2 rounded-lg transition-all">
            <Icon name="Phone" size={16} className="mr-2" />
            Заказать звонок
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
