import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const models = [
    {
      name: "City Pro",
      image: "https://cdn.poehali.dev/projects/d2212c34-964e-4214-bb3b-c2e7b24d87f3/files/f7ebc009-409c-404d-98cb-cb2771b1072a.jpg",
      price: "45 000 ₽",
      maxSpeed: "25 км/ч",
      range: "30 км",
      power: "350W"
    },
    {
      name: "Sport X",
      image: "https://cdn.poehali.dev/projects/d2212c34-964e-4214-bb3b-c2e7b24d87f3/files/d4d6310f-0219-4dfe-97c6-5134859957ff.jpg",
      price: "65 000 ₽",
      maxSpeed: "35 км/ч",
      range: "50 км",
      power: "500W"
    },
    {
      name: "Urban Mini",
      image: "https://cdn.poehali.dev/projects/d2212c34-964e-4214-bb3b-c2e7b24d87f3/files/7495ad5a-b3bf-4420-8053-381ee753f328.jpg",
      price: "35 000 ₽",
      maxSpeed: "20 км/ч",
      range: "25 км",
      power: "250W"
    }
  ];

  const features = [
    {
      icon: "Zap",
      title: "Экономия",
      description: "Низкая стоимость эксплуатации и обслуживания"
    },
    {
      icon: "Battery",
      title: "Долгий заряд",
      description: "До 50 км на одном заряде батареи"
    },
    {
      icon: "Gauge",
      title: "Высокая скорость",
      description: "Развивает скорость до 35 км/ч"
    },
    {
      icon: "Shield",
      title: "Безопасность",
      description: "Надежная тормозная система и подсветка"
    }
  ];

  return (
    <div className="min-h-screen bg-background font-roboto">
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Zap" className="text-primary" size={32} />
            <span className="text-2xl font-montserrat font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              НаКолёсахРФ
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#hero" className="text-foreground hover:text-primary transition-colors">Главная</a>
            <a href="#models" className="text-foreground hover:text-primary transition-colors">Модели</a>
            <a href="#features" className="text-foreground hover:text-primary transition-colors">Характеристики</a>
          </div>
          <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
            Связаться
          </Button>
        </div>
      </nav>

      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20" />
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(14, 165, 233, 0.1) 0%, transparent 50%)',
          backgroundSize: '100px 100px'
        }} />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-montserrat font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-scale-in">
              Будущее передвижения
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-slide-up">
              Электроскутеры нового поколения для умных городов
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity text-lg px-8">
                <Icon name="Rocket" className="mr-2" size={20} />
                Выбрать модель
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 text-lg px-8">
                <Icon name="Play" className="mr-2" size={20} />
                Смотреть видео
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" className="text-primary" size={32} />
        </div>
      </section>

      <section id="models" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-montserrat font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Наши модели
            </h2>
            <p className="text-xl text-muted-foreground">
              Выберите идеальный скутер для ваших задач
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {models.map((model, index) => (
              <Card key={index} className="group overflow-hidden border-border bg-card hover:border-primary transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={model.image} 
                    alt={model.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-montserrat font-bold mb-2">{model.name}</h3>
                  <p className="text-3xl font-bold text-primary mb-4">{model.price}</p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Icon name="Gauge" size={18} />
                      <span>Макс. скорость: {model.maxSpeed}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Icon name="Battery" size={18} />
                      <span>Запас хода: {model.range}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Icon name="Zap" size={18} />
                      <span>Мощность: {model.power}</span>
                    </div>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                    Подробнее
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="py-20 relative bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-montserrat font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Характеристики
            </h2>
            <p className="text-xl text-muted-foreground">
              Почему выбирают электроскутеры
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 border-border bg-card hover:border-primary transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/10 group">
                <div className="mb-4 inline-flex p-3 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all">
                  <Icon name={feature.icon} className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-montserrat font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Icon name="Zap" className="text-primary" size={24} />
              <span className="text-xl font-montserrat font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                НаКолёсахРФ
              </span>
            </div>
            <p className="text-muted-foreground">© 2024 НаКолёсахРФ. Все права защищены.</p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Mail" size={24} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Phone" size={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;