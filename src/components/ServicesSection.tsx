import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Globe, Users, Share2, Workflow, Bot } from 'lucide-react';
import websiteImg from '@/assets/website-creation.jpg';
import leadGenImg from '@/assets/lead-generation.jpg';
import socialImg from '@/assets/social-media.jpg';
import automationImg from '@/assets/automation.jpg';
import aiImg from '@/assets/ai-agents.jpg';

const ServicesSection = () => {
  const services = [
    {
      icon: Globe,
      title: "Website Creation",
      description: "Fully responsive, SEO-optimized websites built for conversion and lead capture.",
      image: websiteImg,
      features: ["Mobile-First Design", "SEO Optimization", "Lead Capture Forms", "Analytics Setup"],
      price: "Starting at $2,997"
    },
    {
      icon: Users,
      title: "Lead Generation",
      description: "High-converting lead capture funnels with automated email flows and CRM integration.",
      image: leadGenImg,
      features: ["Conversion Funnels", "Email Automation", "CRM Integration", "Lead Magnets"],
      price: "Starting at $1,997"
    },
    {
      icon: Share2,
      title: "Social Media Management",
      description: "Automated content scheduling with AI suggestions and detailed analytics tracking.",
      image: socialImg,
      features: ["Content Scheduling", "AI Content Ideas", "Multi-Platform", "Analytics Reports"],
      price: "Starting at $997/mo"
    },
    {
      icon: Workflow,
      title: "Workflow Automation",
      description: "Streamline operations with custom workflows for invoicing, onboarding, and more.",
      image: automationImg,
      features: ["Custom Workflows", "CRM Automation", "Invoice Generation", "Booking Systems"],
      price: "Starting at $1,497"
    },
    {
      icon: Bot,
      title: "AI Agents & Chatbots",
      description: "24/7 conversational AI agents for lead qualification and customer support.",
      image: aiImg,
      features: ["24/7 Support", "Lead Qualification", "Multi-Platform", "Custom Training"],
      price: "Starting at $797/mo"
    }
  ];

  return (
    <section className="py-24 bg-gradient-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Everything You Need to 
            <span className="bg-gradient-accent bg-clip-text text-transparent"> Scale Your Business</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From digital presence to backend automation, we provide comprehensive solutions 
            that help small businesses compete with enterprise-level efficiency.
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