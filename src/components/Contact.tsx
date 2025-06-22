import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Contact = () => {
  const contactInfo = [
    {
      icon: "Phone",
      title: "Телефон",
      info: "+7 919 165 18 91",
      description: "Звоните с 9:00 до 21:00",
    },
    {
      icon: "Mail",
      title: "Email",
      info: "info@windowspro.ru",
      description: "Ответим в течение часа",
    },
    {
      icon: "MapPin",
      title: "Адрес",
      info: "Москва, ул. Тверская, 15",
      description: "Работаем по всей Москве",
    },
    {
      icon: "Clock",
      title: "Режим работы",
      info: "Ежедневно 9:00 - 21:00",
      description: "Выезд на дом и в офис",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-gray-900 mb-6">
            Свяжитесь с <span className="gradient-text">нами</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Готовы помочь с установкой Windows? Свяжитесь с нами любым удобным
            способом
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((item, index) => (
              <Card
                key={item.title}
                className="hover-lift animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon
                        name={item.icon as any}
                        size={20}
                        className="text-white"
                      />
                    </div>
                    <div>
                      <h3 className="font-montserrat font-bold text-lg mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-900 font-semibold mb-1">
                        {item.info}
                      </p>
                      <p className="text-gray-600 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="lg:col-span-2">
            <Card className="hover-lift">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl font-montserrat font-bold text-center">
                  Заказать обратный звонок
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Ваше имя
                      </label>
                      <Input
                        placeholder="Введите ваше имя"
                        className="border-2 border-gray-200 focus:border-electric-blue rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Телефон
                      </label>
                      <Input
                        placeholder="+7 (___) ___-__-__"
                        className="border-2 border-gray-200 focus:border-electric-blue rounded-lg"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Какую версию Windows нужно установить?
                    </label>
                    <select className="w-full p-3 border-2 border-gray-200 focus:border-electric-blue rounded-lg bg-white">
                      <option>Выберите версию Windows</option>
                      <option>Windows 11</option>
                      <option>Windows 10</option>
                      <option>Windows 8.1</option>
                      <option>Windows 7</option>
                      <option>Нужна консультация</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Дополнительная информация
                    </label>
                    <Textarea
                      placeholder="Расскажите о вашей проблеме или дополнительных требованиях..."
                      className="border-2 border-gray-200 focus:border-electric-blue rounded-lg min-h-[100px]"
                    />
                  </div>

                  <Button className="w-full bg-gradient-primary hover:opacity-90 text-white font-semibold py-4 text-lg rounded-lg transition-all">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
