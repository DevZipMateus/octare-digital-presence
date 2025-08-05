import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const benefits = [
    'Mais de 9 anos de experiência',
    'Profissionais qualificados',
    'Atendimento personalizado',
    'Tecnologia avançada'
  ];

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-hero"></div>
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8 fade-in">
            <span className="text-white text-sm font-medium">
              Fundada em 2015 • Especialistas em Contabilidade
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight slide-up">
            Sua Empresa em
            <span className="block text-accent"> Boas Mãos</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl lg:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed slide-up">
            Prestação de serviços contábeis, fiscais e trabalhistas com excelência. 
            Reduzimos riscos e custos para que você possa focar no seu negócio.
          </p>

          {/* Benefits */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 slide-up">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-lg py-3 px-4">
                <CheckCircle className="h-5 w-5 text-accent mr-2 flex-shrink-0" />
                <span className="text-white text-sm font-medium text-center">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center slide-up">
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="bg-accent hover:bg-accent-dark text-accent-foreground font-semibold px-8 py-4 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              Solicitar Orçamento
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <a 
              href="https://wa.me/5517991779710?text=Olá! Gostaria de saber mais sobre os serviços da OCTARE Contabilidade."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-accent hover:text-accent-foreground hover:border-accent backdrop-blur-sm font-semibold px-8 py-4 text-lg rounded-xl transition-all duration-300"
              >
                WhatsApp
              </Button>
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 pt-8 border-t border-white/20">
            <p className="text-white/80 text-sm mb-4">Atendemos empresas de diversos segmentos:</p>
            <div className="flex flex-wrap justify-center gap-6 text-white/70 text-sm">
              <span>• Comércio</span>
              <span>• Prestação de Serviços</span>
              <span>• Indústrias</span>
              <span>• Franchising</span>
              <span>• MEI</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;