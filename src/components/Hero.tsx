import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-primary overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Декоративные элементы */}
      <div className="absolute top-20 left-20 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-bright-orange/20 rounded-full blur-2xl animate-pulse delay-1000"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-montserrat font-bold text-white mb-6 leading-tight">
            Профессиональная
            <br />
            <span className="text-bright-orange">установка Windows</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Быстро, надежно и с гарантией. Устанавливаем все версии Windows от
            Vista до Windows 11
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-bright-orange hover:bg-bright-orange/90 text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all hover-lift"
            >
              <Icon name="Download" size={20} className="mr-2" />
              Заказать установку
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-electric-blue px-8 py-4 text-lg font-semibold rounded-xl transition-all"
            >
              <Icon name="PlayCircle" size={20} className="mr-2" />
              Посмотреть видео
            </Button>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 text-white/80">
            <div className="flex items-center gap-2">
              <Icon name="Clock" size={20} />
              <span>Установка за 1-2 часа</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Shield" size={20} />
              <span>Гарантия 1 год</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Users" size={20} />
              <span>5000+ довольных клиентов</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
