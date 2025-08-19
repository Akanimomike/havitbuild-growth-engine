import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Globe, Brain, Workflow, Bot, Zap } from 'lucide-react';
import websiteImg from '@/assets/website-creation.jpg';
import leadGenImg from '@/assets/lead-generation.jpg';
import automationImg from '@/assets/automation.jpg';
import aiImg from '@/assets/ai-agents.jpg';

const ServicesSection = () => {
  const services = [
    {
      icon: Brain,
      title: "AI-Powered Chatbots",
      description: "Intelligent conversational AI that handles customer support and lead qualification 24/7.",
      image: aiImg,
      features: ["Natural Language Processing", "Multi-Platform Integration", "Smart Lead Scoring", "Learning Algorithms"],
      price: "Starting at $997"
    },
    {
      icon: Workflow,
      title: "Workflow Automation",
      description: "Streamline operations with intelligent automation that eliminates manual tasks.",
      image: automationImg,
      features: ["Process Intelligence", "API Integrations", "Real-time Monitoring", "Scalable Architecture"],
      price: "Starting at $1,497"
    },
    {
      icon: Zap,
      title: "AI-Driven Lead Generation", 
      description: "Advanced targeting and conversion optimization powered by machine learning.",
      image: leadGenImg,
      features: ["Predictive Analytics", "Behavioral Targeting", "Automated Nurturing", "Performance Optimization"],
      price: "Starting at $1,997"
    },
    {
      icon: Globe,
      title: "Futuristic Web Development",
      description: "Next-generation websites with AI integration and advanced analytics.",
      image: websiteImg,
      features: ["AI Integration", "Progressive Web Apps", "Voice Interface", "Predictive UX"],
      price: "Starting at $2,997"
    }
  ];

  return (
    <section className="py-24 bg-gradient-section relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold font-orbitron mb-8 text-transparent bg-gradient-primary bg-clip-text">
            AI-Powered
            <span className="text-neon"> Solutions</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-4xl mx-auto leading-relaxed font-poppins">
            Transform your business with cutting-edge AI technologies designed for the future of automation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={service.title} className="group hover:shadow-medium transition-all duration-300 animate-scale-in border-0 shadow-soft" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="bg-primary/90 backdrop-blur-sm p-2 rounded-lg">
                      <service.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-accent/90 backdrop-blur-sm text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                      {service.price}
                    </span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl mb-3">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </CardDescription>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="default" className="w-full group-hover:bg-primary-glow transition-colors">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="cta" size="lg">
            Get a Free Strategy Call
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            No commitment required • 30-minute consultation • Custom growth plan included
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;