import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Location = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Endereço',
      content: 'R. Afonso Guimarães Junior, 845',
      subtitle: 'Zona Sul - São José do Rio Preto/SP'
    },
    {
      icon: Phone,
      title: 'Telefone',
      content: '(17) 99177-9710',
      subtitle: 'WhatsApp disponível'
    },
    {
      icon: Mail,
      title: 'E-mail',
      content: 'marcosponego@gmail.com',
      subtitle: 'Resposta em até 24h'
    },
    {
      icon: Clock,
      title: 'Horário',
      content: 'Segunda a Sexta',
      subtitle: '08:00 às 18:00'
    }
  ];

  return (
    <section id="localizacao" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Nossa Localização
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Estamos estrategicamente localizados na zona sul de São José do Rio Preto, 
            oferecendo fácil acesso e atendimento de qualidade.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold text-primary mb-8">
              Informações de Contato
            </h3>
            
            <div className="grid gap-6 mb-8">
              {contactInfo.map((info, index) => (
                <Card key={index} className="border-none shadow-sm hover:shadow-md transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center">
                          <info.icon className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-primary mb-1">{info.title}</h4>
                        <p className="text-foreground font-medium mb-1">{info.content}</p>
                        <p className="text-muted-foreground text-sm">{info.subtitle}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Contact */}
            <div className="bg-primary text-white rounded-2xl p-6">
              <h4 className="text-xl font-semibold mb-4">Atendimento Personalizado</h4>
              <p className="text-white/90 mb-6">
                Nossa equipe está pronta para atender você. Entre em contato e tire suas dúvidas 
                sobre nossos serviços contábeis.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a 
                  href="https://wa.me/5517991779710?text=Olá! Gostaria de agendar uma visita na OCTARE Contabilidade."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-accent hover:bg-accent-dark text-accent-foreground font-semibold py-3 px-6 rounded-xl text-center transition-colors duration-300"
                >
                  Agendar Visita
                </a>
                <a 
                  href="tel:+5517991779710"
                  className="flex-1 bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-6 rounded-xl text-center transition-colors duration-300"
                >
                  Ligar Agora
                </a>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div>
            <h3 className="text-2xl font-semibold text-primary mb-8">
              Como Chegar
            </h3>
            
            {/* Map Container */}
            <div className="bg-background rounded-2xl shadow-lg overflow-hidden mb-6">
              <div className="aspect-video bg-muted flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-primary mb-2">
                    R. Afonso Guimarães Junior, 845
                  </h4>
                  <p className="text-muted-foreground mb-4">
                    Zona Sul - São José do Rio Preto/SP
                  </p>
                  <a 
                    href="https://maps.google.com/?q=R.+Afonso+Guimarães+Junior,+845+São+José+do+Rio+Preto+SP"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-hover transition-colors duration-300"
                  >
                    <MapPin className="h-4 w-4 mr-2" />
                    Ver no Google Maps
                  </a>
                </div>
              </div>
            </div>

            {/* Directions */}
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <h4 className="text-lg font-semibold text-primary mb-4">
                Pontos de Referência
              </h4>
              <div className="space-y-3 text-muted-foreground">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  <span>Região da Zona Sul de São José do Rio Preto</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  <span>Fácil acesso por transporte público</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  <span>Estacionamento disponível na região</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-16">
          <div className="bg-accent-light rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-primary mb-4">
              Atendemos Toda a Região
            </h3>
            <p className="text-muted-foreground mb-6">
              Além de São José do Rio Preto, atendemos empresas de toda a região noroeste paulista. 
              Consulte-nos sobre atendimento in loco.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span className="bg-background px-4 py-2 rounded-lg">São José do Rio Preto</span>
              <span className="bg-background px-4 py-2 rounded-lg">Mirassol</span>
              <span className="bg-background px-4 py-2 rounded-lg">Bady Bassitt</span>
              <span className="bg-background px-4 py-2 rounded-lg">Cedral</span>
              <span className="bg-background px-4 py-2 rounded-lg">Monte Aprazível</span>
              <span className="bg-background px-4 py-2 rounded-lg">Região Noroeste</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;