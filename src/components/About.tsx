import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const About = () => {
  const stats = [
    { number: "5000+", label: "Довольных клиентов", icon: "Users" },
    { number: "8", label: "Лет на рынке", icon: "Calendar" },
    { number: "99%", label: "Успешных установок", icon: "TrendingUp" },
    { number: "24/7", label: "Техподдержка", icon: "Clock" },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-gray-900 mb-6">
              О нашей <span className="gradient-text">компании</span>
            </h2>

            <p className="text-lg text-gray-600 mb-6">
              WindowsПро — это команда профессионалов с 8-летним опытом в
              области установки и настройки операционных систем Windows. Мы
              специализируемся на быстрой и качественной установке всех версий
              Windows с полной настройкой системы.
            </p>

            <p className="text-lg text-gray-600 mb-8">
              Наша миссия — сделать использование компьютера максимально
              комфортным для каждого клиента. Мы работаем только с лицензионным
              ПО и предоставляем гарантию на все выполненные работы.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                  <Icon name="Check" size={16} className="text-white" />
                </div>
                <span className="text-gray-700">
                  Сертифицированные специалисты Microsoft
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                  <Icon name="Check" size={16} className="text-white" />
                </div>
                <span className="text-gray-700">
                  Гарантия на все виды работ 1 год
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                  <Icon name="Check" size={16} className="text-white" />
                </div>
                <span className="text-gray-700">Выезд на дом или в офис</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card
                  key={stat.label}
                  className="text-center p-6 hover-lift animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-0">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon
                        name={stat.icon as any}
                        size={20}
                        className="text-white"
                      />
                    </div>
                    <div className="text-3xl font-montserrat font-bold gradient-text mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 text-sm">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-gradient-primary text-white p-8">
              <CardContent className="p-0">
                <div className="flex items-center gap-4 mb-4">
                  <Icon name="Award" size={32} />
                  <div>
                    <h3 className="font-montserrat font-bold text-xl">
                      Сертификация Microsoft
                    </h3>
                    <p className="text-white/90">
                      Официальные партнеры Microsoft
                    </p>
                  </div>
                </div>
                <p className="text-white/90">
                  Мы являемся сертифицированными партнерами Microsoft и имеем
                  все необходимые лицензии для работы с продуктами компании.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
