import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Services = () => {
  const windowsVersions = [
    {
      name: "Windows 11",
      description: "Новейшая операционная система с улучшенным интерфейсом",
      price: "от 2500₽",
      features: [
        "Новый дизайн",
        "Улучшенная безопасность",
        "Microsoft Teams",
        "Виджеты",
      ],
      popular: true,
      gradient: "from-electric-blue to-vibrant-purple",
    },
    {
      name: "Windows 10",
      description: "Стабильная и проверенная система для работы и игр",
      price: "от 2000₽",
      features: ["Cortana", "Windows Hello", "Edge браузер", "Xbox интеграция"],
      popular: false,
      gradient: "from-vibrant-purple to-deep-purple",
    },
    {
      name: "Windows 8.1",
      description: "Оптимизированная версия для планшетов и ПК",
      price: "от 1800₽",
      features: [
        "Плитки",
        "Сенсорный интерфейс",
        "OneDrive",
        "Internet Explorer 11",
      ],
      popular: false,
      gradient: "from-deep-purple to-ocean-blue",
    },
    {
      name: "Windows 8.0",
      description: "Первая версия Windows с современным плиточным интерфейсом",
      price: "от 1700₽",
      features: [
        "Metro интерфейс",
        "Windows Store",
        "Быстрая загрузка",
        "Сенсорная поддержка",
      ],
      popular: false,
      gradient: "from-deep-purple to-ocean-blue",
    },
    {
      name: "Windows 7",
      description: "Классическая система, любимая многими пользователями",
      price: "от 1500₽",
      features: [
        "Aero интерфейс",
        "Панель задач",
        "HomeGroup",
        "Windows Media Center",
      ],
      popular: false,
      gradient: "from-ocean-blue to-electric-blue",
    },
    {
      name: "Windows Vista",
      description: "Система с улучшенной безопасностью и визуальными эффектами",
      price: "от 1200₽",
      features: [
        "Aero Glass",
        "User Account Control",
        "Windows Defender",
        "Боковая панель",
      ],
      popular: false,
      gradient: "from-electric-blue to-vibrant-purple",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-gray-900 mb-6">
            Установка версий <span className="gradient-text">Windows</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Профессиональная установка любой версии Windows с настройкой
            драйверов и необходимого ПО
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {windowsVersions.map((version, index) => (
            <Card
              key={version.name}
              className={`relative overflow-hidden hover-lift animate-scale-in ${version.popular ? "ring-2 ring-bright-orange" : ""}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {version.popular && (
                <div className="absolute top-0 right-0 bg-bright-orange text-white px-3 py-1 text-sm font-semibold rounded-bl-lg">
                  Популярно
                </div>
              )}

              <CardHeader
                className={`bg-gradient-to-br ${version.gradient} text-white p-6`}
              >
                <div className="flex items-center justify-between mb-4">
                  <Icon name="Monitor" size={32} />
                  <span className="text-2xl font-bold">{version.price}</span>
                </div>
                <CardTitle className="text-2xl font-montserrat font-bold">
                  {version.name}
                </CardTitle>
                <p className="text-white/90">{version.description}</p>
              </CardHeader>

              <CardContent className="p-6">
                <ul className="space-y-3 mb-6">
                  {version.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-gray-600"
                    >
                      <Icon name="Check" size={16} className="text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${
                    version.popular
                      ? "bg-bright-orange hover:bg-bright-orange/90"
                      : "bg-gradient-primary hover:opacity-90"
                  } text-white font-semibold py-3 rounded-lg transition-all`}
                >
                  Заказать установку
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Zap" size={24} className="text-white" />
                </div>
                <h3 className="font-montserrat font-bold text-lg mb-2">
                  Быстро
                </h3>
                <p className="text-gray-600">
                  Установка за 1-2 часа с полной настройкой
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Shield" size={24} className="text-white" />
                </div>
                <h3 className="font-montserrat font-bold text-lg mb-2">
                  Надежно
                </h3>
                <p className="text-gray-600">
                  Только лицензионное ПО с гарантией
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Wrench" size={24} className="text-white" />
                </div>
                <h3 className="font-montserrat font-bold text-lg mb-2">
                  Полная настройка
                </h3>
                <p className="text-gray-600">
                  Драйверы, антивирус и нужные программы
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
