import { MapPin, Phone, Mail, ExternalLink } from 'lucide-react';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const services = ['Abertura de Empresa', 'Departamento Pessoal', 'Fiscal e Contábil', 'Gestão Tributária', 'Gestão Financeira', 'Imposto de Renda', 'Assessoria de MEI', 'Regularização de Empresa'];
  const quickLinks = [{
    name: 'Início',
    href: '#inicio'
  }, {
    name: 'Sobre',
    href: '#sobre'
  }, {
    name: 'Serviços',
    href: '#servicos'
  }, {
    name: 'Localização',
    href: '#localizacao'
  }, {
    name: 'Contato',
    href: '#contato'
  }];
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <footer className="bg-primary text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img src="/lovable-uploads/13f726ce-769b-4559-9c80-1f692bfa06df.png" alt="OCTARE Contabilidade" className="h-12 w-auto mb-4" />
              <p className="text-white/80 text-sm leading-relaxed">
                Especialistas em contabilidade desde 2015. Oferecemos soluções 
                personalizadas para empresas de todos os portes em São José do Rio Preto e região.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center text-sm">
                <MapPin className="h-4 w-4 mr-3 text-accent flex-shrink-0" />
                <span className="text-white/80">
                  R. Afonso Guimarães Junior, 845<br />
                  São José do Rio Preto/SP
                </span>
              </div>
              <a href="tel:+5517991779710" className="flex items-center text-sm hover:text-accent transition-colors duration-200">
                <Phone className="h-4 w-4 mr-3 text-accent flex-shrink-0" />
                <span>(17) 99177-9710</span>
              </a>
              <a href="mailto:marcosponego@gmail.com" className="flex items-center text-sm hover:text-accent transition-colors duration-200">
                <Mail className="h-4 w-4 mr-3 text-accent flex-shrink-0" />
                <span>marcosponego@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Navegação</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => <li key={index}>
                  <button onClick={() => scrollToSection(link.href)} className="text-white/80 hover:text-accent transition-colors duration-200 text-sm">
                    {link.name}
                  </button>
                </li>)}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Nossos Serviços</h3>
            <ul className="space-y-3">
              {services.slice(0, 6).map((service, index) => <li key={index} className="text-white/80 text-sm">
                  {service}
                </li>)}
            </ul>
          </div>

          {/* Contact CTA */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Fale Conosco</h3>
            <p className="text-white/80 text-sm mb-6">
              Precisa de ajuda com sua contabilidade? Entre em contato conosco agora!
            </p>
            
            <div className="space-y-3">
              <a href="https://wa.me/5517991779710?text=Olá! Gostaria de saber mais sobre os serviços da OCTARE Contabilidade." target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-accent hover:bg-accent-dark text-accent-foreground font-semibold px-4 py-2 rounded-lg transition-colors duration-300 text-sm w-full justify-center">
                WhatsApp
                <ExternalLink className="h-4 w-4 ml-2" />
              </a>
              
              <button onClick={() => scrollToSection('#contato')} className="w-full border border-white/60 text-white bg-white/10 hover:bg-accent hover:text-accent-foreground hover:border-accent font-semibold px-4 py-2 rounded-lg transition-colors duration-300 text-sm">
                Formulário de Contato
              </button>
            </div>

            {/* Business Hours */}
            <div className="mt-6 p-4 bg-white/5 rounded-lg">
              <h4 className="font-semibold text-sm mb-2">Horário de Atendimento</h4>
              <p className="text-white/80 text-xs">
                Segunda a Sexta<br />
                08:00 às 18:00
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-white/60 text-sm">
                © {currentYear} OCTARE Contabilidade. Todos os direitos reservados.
              </p>
              
            </div>
            
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-xs text-white/60">
              <span>Desenvolvido com ❤️ para sua empresa</span>
              
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;