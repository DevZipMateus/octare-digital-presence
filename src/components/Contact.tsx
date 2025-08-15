import { useState } from 'react';
import { Phone, Mail, MessageCircle, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const services = [
    'Abertura de Empresa',
    'Departamento Pessoal',
    'Fiscal e Contábil',
    'Gestão Tributária',
    'Gestão Financeira',
    'Imposto de Renda',
    'Assessoria de MEI',
    'Regularização de Empresa',
    'Baixa de Empresa',
    'Consultoria Geral'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Formatação da mensagem para o WhatsApp
      const whatsappMessage = `*Nova solicitação de orçamento - OCTARE Contabilidade*

*Nome:* ${formData.name}
*E-mail:* ${formData.email}
*Telefone:* ${formData.phone}
${formData.company ? `*Empresa:* ${formData.company}` : ''}
${formData.service ? `*Serviço de interesse:* ${formData.service}` : ''}

*Mensagem:*
${formData.message}

---
Enviado pelo formulário do site`;

      // Encode da mensagem para URL
      const encodedMessage = encodeURIComponent(whatsappMessage);
      const whatsappUrl = `https://wa.me/5517991779710?text=${encodedMessage}`;
      
      // Simular processamento
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Abrir WhatsApp
      window.open(whatsappUrl, '_blank');
      
      toast({
        title: "Redirecionando para WhatsApp!",
        description: "Sua mensagem será enviada via WhatsApp.",
      });

      // Resetar formulário
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Erro ao processar",
        description: "Tente novamente ou entre em contato via WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: Phone,
      title: 'Telefone',
      description: 'Ligue agora e fale conosco',
      contact: '(17) 99177-9710',
      action: 'tel:+5517991779710',
      buttonText: 'Ligar Agora'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      description: 'Atendimento rápido e prático',
      contact: '(17) 99177-9710',
      action: 'https://wa.me/5517991779710?text=Olá! Gostaria de saber mais sobre os serviços da OCTARE Contabilidade.',
      buttonText: 'Conversar'
    },
    {
      icon: Mail,
      title: 'E-mail',
      description: 'Envie sua dúvida por e-mail',
      contact: 'marcosponego@gmail.com',
      action: 'mailto:marcosponego@gmail.com',
      buttonText: 'Enviar E-mail'
    }
  ];

  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Entre em Contato
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Estamos prontos para ajudar sua empresa. Entre em contato conosco e 
            receba atendimento personalizado e uma proposta sob medida.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Methods */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-semibold text-primary mb-8">
              Formas de Contato
            </h3>
            
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <Card key={index} className="border-none shadow-sm hover:shadow-md transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <method.icon className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-primary mb-1">{method.title}</h4>
                        <p className="text-muted-foreground text-sm mb-2">{method.description}</p>
                        <p className="text-foreground font-medium mb-3">{method.contact}</p>
                        <a 
                          href={method.action}
                          target={method.title === 'WhatsApp' ? '_blank' : undefined}
                          rel={method.title === 'WhatsApp' ? 'noopener noreferrer' : undefined}
                          className="inline-flex items-center text-primary hover:text-primary-hover font-medium text-sm transition-colors duration-200"
                        >
                          {method.buttonText}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Info */}
            <div className="mt-8 bg-secondary rounded-xl p-6">
              <h4 className="text-lg font-semibold text-primary mb-4">
                Atendimento Personalizado
              </h4>
              <div className="space-y-3 text-muted-foreground text-sm">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-accent mr-3 flex-shrink-0" />
                  <span>Resposta em até 24 horas</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-accent mr-3 flex-shrink-0" />
                  <span>Consultoria gratuita inicial</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-accent mr-3 flex-shrink-0" />
                  <span>Orçamento sem compromisso</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-accent mr-3 flex-shrink-0" />
                  <span>Atendimento especializado</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-primary">
                  Solicite um Orçamento
                </CardTitle>
                <p className="text-muted-foreground">
                  Preencha o formulário abaixo e entraremos em contato para apresentar 
                  a melhor solução para sua empresa.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Nome Completo *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Seu nome completo"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        E-mail *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="seu@email.com"
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Telefone/WhatsApp *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="(17) 99999-9999"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                        Nome da Empresa
                      </label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Nome da sua empresa"
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                      Serviço de Interesse
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring bg-background text-foreground"
                    >
                      <option value="">Selecione um serviço</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Mensagem *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Conte-nos sobre suas necessidades e como podemos ajudar..."
                      rows={4}
                      className="w-full"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full gradient-primary text-white font-semibold py-3 px-6 text-lg hover:shadow-lg transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Enviando...
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <Send className="h-5 w-5 mr-2" />
                        Enviar Mensagem
                      </div>
                    )}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Ao enviar este formulário, você concorda com nossa política de privacidade 
                    e autoriza o contato da OCTARE Contabilidade.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Bottom */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary to-primary-hover text-white rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Pronto para Simplificar sua Contabilidade?
            </h3>
            <p className="text-lg opacity-90 mb-6">
              Fale conosco agora mesmo pelo WhatsApp e receba atendimento imediato!
            </p>
            <a 
              href="https://wa.me/5517991779710?text=Olá! Visitei o site da OCTARE Contabilidade e gostaria de conversar sobre os serviços."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                size="lg"
                className="bg-accent hover:bg-accent-dark text-accent-foreground font-semibold px-8 py-4 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Conversar no WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;