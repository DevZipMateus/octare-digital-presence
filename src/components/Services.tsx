import { Building2, Users, Calculator, TrendingUp, FileText, Briefcase, ShieldCheck, DollarSign } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Services = () => {
  const mainServices = [
    {
      icon: Building2,
      title: 'Abertura de Empresa',
      description: 'Constituição de empresas com agilidade e segurança jurídica. Orientação completa desde a escolha do tipo societário até a obtenção do CNPJ.',
      features: ['Análise de viabilidade', 'Registro na Junta Comercial', 'Inscrições municipais e estaduais', 'Emissão de alvarás']
    },
    {
      icon: Users,
      title: 'Departamento Pessoal',
      description: 'Gestão completa de recursos humanos, folha de pagamento e obrigações trabalhistas. Mantenha sua empresa em conformidade.',
      features: ['Folha de pagamento', 'Admissões e demissões', 'Benefícios e férias', 'eSocial e FGTS']
    },
    {
      icon: Calculator,
      title: 'Fiscal e Contábil',
      description: 'Serviços contábeis completos com escrituração fiscal e contábil. Demonstrativos financeiros e análises gerenciais.',
      features: ['Escrituração contábil', 'Apuração de impostos', 'Balancetes e balanços', 'Demonstrações financeiras']
    },
    {
      icon: TrendingUp,
      title: 'Gestão Tributária',
      description: 'Planejamento tributário eficiente para redução de custos. Análise de regime tributário mais vantajoso para sua empresa.',
      features: ['Planejamento tributário', 'Análise de regime', 'Recuperação de créditos', 'Elisão fiscal']
    },
    {
      icon: DollarSign,
      title: 'Gestão Financeira',
      description: 'Consultoria financeira para otimização de resultados. Controles financeiros e análise de indicadores de desempenho.',
      features: ['Fluxo de caixa', 'Controles financeiros', 'Análise de indicadores', 'Consultoria financeira']
    },
    {
      icon: FileText,
      title: 'Imposto de Renda',
      description: 'Declaração de Imposto de Renda para pessoas físicas e jurídicas. Serviço completo com análise de possíveis restituições.',
      features: ['IRPF e IRPJ', 'Análise de restituições', 'Planejamento anual', 'Orientação fiscal']
    }
  ];

  const additionalServices = [
    {
      icon: ShieldCheck,
      title: 'Regularização de Empresa',
      description: 'Resolução de pendências fiscais e trabalhistas.'
    },
    {
      icon: Briefcase,
      title: 'Baixa de Empresa',
      description: 'Encerramento de atividades com segurança jurídica.'
    },
    {
      icon: Users,
      title: 'Assessoria de MEI',
      description: 'Suporte completo para Microempreendedores Individuais.'
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Nossos Serviços
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Oferecemos uma gama completa de serviços contábeis, fiscais e trabalhistas 
            para empresas de todos os portes e segmentos.
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {mainServices.map((service, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <CardHeader className="text-center pb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-light rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold text-primary">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="bg-secondary rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-semibold text-primary text-center mb-8">
            Serviços Adicionais
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="text-center bg-background rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-accent-light rounded-xl mb-4">
                  <service.icon className="h-6 w-6 text-accent-dark" />
                </div>
                <h4 className="text-lg font-semibold text-primary mb-2">{service.title}</h4>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-semibold text-primary mb-8">
            Como Trabalhamos
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h4 className="font-semibold text-primary mb-2">Diagnóstico</h4>
              <p className="text-sm text-muted-foreground">Analisamos sua empresa e necessidades específicas</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h4 className="font-semibold text-primary mb-2">Planejamento</h4>
              <p className="text-sm text-muted-foreground">Desenvolvemos estratégias personalizadas</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h4 className="font-semibold text-primary mb-2">Execução</h4>
              <p className="text-sm text-muted-foreground">Implementamos as soluções com excelência</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
              <h4 className="font-semibold text-primary mb-2">Acompanhamento</h4>
              <p className="text-sm text-muted-foreground">Monitoramos resultados e ajustamos quando necessário</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary to-primary-hover text-white rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Precisa de Ajuda com sua Contabilidade?
            </h3>
            <p className="text-lg opacity-90 mb-6">
              Entre em contato conosco e receba uma consultoria personalizada gratuita.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={scrollToContact}
                size="lg"
                className="bg-accent hover:bg-accent-dark text-accent-foreground font-semibold px-8 py-3"
              >
                Solicitar Orçamento Gratuito
              </Button>
              <a 
                href="https://wa.me/5517991779710?text=Olá! Gostaria de saber mais sobre os serviços contábeis da OCTARE."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  variant="outline"
                  size="lg"
                  className="bg-primary/10 text-primary border-primary/60 hover:bg-primary hover:text-primary-foreground hover:border-primary font-semibold px-8 py-3"
                >
                  WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;