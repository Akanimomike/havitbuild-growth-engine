import { Button } from '@/components/ui/button';
import { Rocket, MessageCircle, Zap, Target, Clock } from 'lucide-react';
import { LeadCaptureForm } from '@/components/LeadCaptureForm';

const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Futuristic Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold font-orbitron mb-8 text-transparent bg-gradient-primary bg-clip-text">
            Start Automating with 
            <span className="text-neon"> AI Today</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-foreground/80 mb-12 leading-relaxed max-w-4xl mx-auto font-poppins">
            Join the AI revolution. Transform your business operations and scale beyond limits 
            with our cutting-edge automation solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <LeadCaptureForm 
              variant="cta"
              trigger={
                <Button 
                  variant="cta" 
                  size="lg" 
                  className="bg-gradient-primary shadow-accent hover:shadow-accent/80 text-white font-poppins font-semibold px-8 py-4 text-lg animate-glow-pulse"
                >
                  <Rocket className="mr-3 h-6 w-6" />
                  Launch Your AI Solution
                </Button>
              }
            />
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-card/20 border-primary/30 text-foreground hover:bg-card/30 backdrop-blur-sm font-poppins font-semibold px-8 py-4 text-lg"
            >
              <MessageCircle className="mr-3 h-6 w-6" />
              Schedule AI Demo
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-12">
            <div className="bg-gradient-card backdrop-blur-sm rounded-2xl p-8 border border-border/50 shadow-glow hover:shadow-accent/30 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-aqua mb-3 font-orbitron">AI Consultation</div>
              <p className="text-foreground/80 text-sm font-poppins leading-relaxed">
                Free 30-minute strategy session with our AI automation experts
              </p>
            </div>
            <div className="bg-gradient-card backdrop-blur-sm rounded-2xl p-8 border border-border/50 shadow-glow hover:shadow-accent/30 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                <Target className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-primary mb-3 font-orbitron">Custom Blueprint</div>
              <p className="text-foreground/80 text-sm font-poppins leading-relaxed">
                Tailored AI automation roadmap designed for your business goals
              </p>
            </div>
            <div className="bg-gradient-card backdrop-blur-sm rounded-2xl p-8 border border-border/50 shadow-glow hover:shadow-accent/30 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-accent mb-3 font-orbitron">Rapid Deployment</div>
              <p className="text-foreground/80 text-sm font-poppins leading-relaxed">
                AI solutions up and running within 48 hours of onboarding
              </p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-foreground/60 text-sm font-poppins">
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-aqua rounded-full animate-pulse"></div>
              No Long-term Contracts
            </span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              30-day AI Guarantee
            </span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              Free System Migration
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;