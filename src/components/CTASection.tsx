import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, MessageCircle } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-hero text-primary-foreground">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Build Your 
            <span className="bg-gradient-accent bg-clip-text text-transparent"> Growth Engine?</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-primary-foreground/80 mb-8 leading-relaxed">
            Join 200+ small businesses that have already transformed their operations 
            and accelerated their growth with our proven solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button variant="cta" size="lg" className="bg-accent hover:bg-accent-glow">
              <Calendar className="mr-2 h-5 w-5" />
              Book a Free Strategy Call
            </Button>
            <Button variant="outline" size="lg" className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20">
              <MessageCircle className="mr-2 h-5 w-5" />
              Chat With Our Team
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-2xl font-bold text-accent mb-2">Free Consultation</div>
              <p className="text-primary-foreground/80 text-sm">
                30-minute strategy session to identify your growth opportunities
              </p>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-2xl font-bold text-accent mb-2">Custom Plan</div>
              <p className="text-primary-foreground/80 text-sm">
                Tailored roadmap based on your specific business needs and goals
              </p>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-2xl font-bold text-accent mb-2">Fast Implementation</div>
              <p className="text-primary-foreground/80 text-sm">
                Get started within 48 hours with our proven onboarding process
              </p>
            </div>
          </div>

          <p className="text-primary-foreground/60 text-sm mt-8">
            No long-term contracts • 30-day money-back guarantee • Free migration assistance
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;