import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Icon name="Monitor" size={24} className="text-white" />
              </div>
              <span className="text-2xl font-montserrat font-bold">
                WindowsПро
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Профессиональная установка и настройка операционных систем
              Windows. Работаем быстро, качественно и с гарантией.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-electric-blue rounded-full flex items-center justify-center hover:bg-electric-blue/80 transition-colors"
              >
                <Icon name="Phone" size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-electric-blue rounded-full flex items-center justify-center hover:bg-electric-blue/80 transition-colors"
              >
                <Icon name="Mail" size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-electric-blue rounded-full flex items-center justify-center hover:bg-electric-blue/80 transition-colors"
              >
                <Icon name="MessageCircle" size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-montserrat font-bold text-lg mb-4">Услуги</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Установка Windows 11
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Установка Windows 10
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Установка Windows 8.1
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Установка Windows 7
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Настройка драйверов
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-montserrat font-bold text-lg mb-4">Контакты</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2">
                <Icon name="Phone" size={16} />
                +7 (495) 123-45-67
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Mail" size={16} />
                info@windowspro.ru
              </li>
              <li className="flex items-center gap-2">
                <Icon name="MapPin" size={16} />
                Москва, ул. Тверская, 15
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Clock" size={16} />
                Ежедневно 9:00 - 21:00
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© 2025 WindowsПро. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
