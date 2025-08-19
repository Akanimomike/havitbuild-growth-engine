import { CheckCircle, Zap, Cpu } from 'lucide-react';
import { LeadCaptureForm } from '@/components/LeadCaptureForm';
import heroBg from '@/assets/hero-bg.jpg';
import aiHeroBg from '@/assets/ai-hero-bg.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* AI Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={aiHeroBg} 
          alt="AI-powered business automation" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      </div>

      {/* Futuristic Background Pattern */}
      <div className="absolute inset-0 z-5">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-aqua/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,120,120,0.1)_1px,transparent_1px)] bg-[length:30px_30px] opacity-30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <div className="mb-8">
            <span className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-primary shadow-glow border border-primary/30 text-white text-sm font-medium font-poppins backdrop-blur-sm">
              <Cpu className="w-5 h-5 mr-2 text-aqua animate-pulse" />
              AI-Powered • Trusted by 200+ Businesses
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-orbitron text-transparent bg-gradient-primary bg-clip-text mb-8 leading-tight">
            The Future of
            <br />
            <span className="text-glow">
              Business Automation
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-4xl mx-auto leading-relaxed font-poppins">
            Harness the power of AI to automate workflows, deploy intelligent chatbots, 
            and create cutting-edge websites that drive exponential growth.
          </p>

          <div className="flex justify-center mb-12">
            <LeadCaptureForm variant="hero" />
          </div>

          {/* Futuristic Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-foreground/70 text-sm font-poppins">
            <div className="flex items-center gap-3 bg-card/20 backdrop-blur-sm px-4 py-2 rounded-full border border-border/50">
              <Zap className="w-4 h-4 text-aqua" />
              Instant Deployment
            </div>
            <div className="flex items-center gap-3 bg-card/20 backdrop-blur-sm px-4 py-2 rounded-full border border-border/50">
              <CheckCircle className="w-4 h-4 text-accent" />
              30-Day AI Guarantee
            </div>
            <div className="flex items-center gap-3 bg-card/20 backdrop-blur-sm px-4 py-2 rounded-full border border-border/50">
              <Cpu className="w-4 h-4 text-primary" />
              Zero-Code Setup
            </div>
          </div>
        </div>
      </div>

      {/* Futuristic Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-12 border-2 border-primary/50 rounded-full flex justify-center shadow-glow">
          <div className="w-1 h-4 bg-gradient-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;