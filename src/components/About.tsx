import { Award, Users, Target, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const stats = [
    { 
      icon: Award, 
      number: '9+', 
      label: 'Anos de Experiência',
      description: 'Fundada em 2015'
    },
    { 
      icon: Users, 
      number: '500+', 
      label: 'Empresas Atendidas',
      description: 'Diversos segmentos'
    },
    { 
      icon: Target, 
      number: '100%', 
      label: 'Foco no Cliente',
      description: 'Atendimento personalizado'
    },
    { 
      icon: TrendingUp, 
      number: '24h', 
      label: 'Suporte Ágil',
      description: 'Resposta rápida'
    }
  ];

  const values = [
    {
      title: 'Experiência Comprovada',
      description: 'Mais de 9 anos no mercado, atendendo empresas de diversos ramos e portes.'
    },
    {
      title: 'Profissionais Qualificados',
      description: 'Equipe formada por contadores experientes e sempre atualizados com a legislação.'
    },
    {
      title: 'Atendimento Individualizado',
      description: 'Cada cliente é único. Planejamos todo o trabalho visando reduzir riscos e custos.'
    },
    {
      title: 'Tecnologia Avançada',
      description: 'Investimos continuamente em conhecimento e tecnologia para oferecer o melhor serviço.'
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Sobre a OCTARE Contabilidade
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Situada na zona sul de São José do Rio Preto, somos especializados em 
            prestação de serviços contábeis, fiscais e trabalhistas.
          </p>
        </div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left content */}
          <div>
            <h3 className="text-2xl font-semibold text-primary mb-6">
              Nossa História e Missão
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Fundada em <strong className="text-primary">2015</strong>, a OCTARE Contabilidade 
                é uma empresa especializada em prestação de serviços contábeis, fiscais e 
                trabalhistas que atende empresas de diversos ramos como comércio, prestação 
                de serviços, indústrias e franchising.
              </p>
              <p>
                Nossa política é <strong className="text-primary">individualizar cada cliente</strong>, 
                planejando todo o trabalho visando reduzir riscos e custos para o empresário. 
                Acreditamos que cada negócio é único e merece uma abordagem personalizada.
              </p>
              <p>
                Estamos continuamente pesquisando o mercado com suas necessidades e expectativas, 
                investimos em conhecimento e tecnologia para acompanhar todas as mudanças contábeis 
                e a legislação brasileira para que você possa ter tranquilidade em focar no seu negócio.
              </p>
            </div>
          </div>

          {/* Right content - Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-light rounded-full mb-4">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="font-semibold text-foreground mb-1">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">{stat.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Values section */}
        <div>
          <h3 className="text-2xl font-semibold text-primary text-center mb-12">
            Por que Escolher a OCTARE?
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-accent-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-accent rounded-full"></div>
                </div>
                <h4 className="text-lg font-semibold text-primary mb-3">{value.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-primary text-white rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Pronto para ter tranquilidade na sua contabilidade?
            </h3>
            <p className="text-lg opacity-90 mb-6">
              Entre em contato conosco e descubra como podemos ajudar sua empresa a crescer.
            </p>
            <a 
              href="https://wa.me/5517991779710?text=Olá! Gostaria de conhecer os serviços da OCTARE Contabilidade."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-accent hover:bg-accent-dark text-accent-foreground font-semibold px-8 py-3 rounded-xl transition-colors duration-300"
            >
              Falar com Especialista
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;