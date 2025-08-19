import { Clock, TrendingUp, Shield, Zap, Brain, Rocket } from 'lucide-react';

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Save 40+ Hours Weekly",
      description: "Automate repetitive tasks and focus on strategic growth initiatives",
      color: "aqua"
    },
    {
      icon: TrendingUp,
      title: "Scale Without Limits",
      description: "AI-powered solutions that grow with your business demands",
      color: "primary"
    },
    {
      icon: Brain,
      title: "Intelligent Decision Making",
      description: "Data-driven insights powered by advanced AI algorithms",
      color: "accent"
    },
    {
      icon: Shield,
      title: "Enterprise-Grade Security",
      description: "Bank-level encryption and compliance protocols protect your data",
      color: "primary"
    },
    {
      icon: Rocket,
      title: "Lightning Fast ROI",
      description: "See measurable results within the first 30 days of implementation",
      color: "aqua"
    },
    {
      icon: Zap,
      title: "Zero Learning Curve",
      description: "Intuitive interfaces designed for non-technical business owners",
      color: "accent"
    }
  ];

  return (
    <section className="py-24 bg-gradient-section relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold font-orbitron mb-6 text-transparent bg-gradient-primary bg-clip-text">
            Why Choose
            <span className="text-neon"> Havit Build?</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto font-poppins leading-relaxed">
            Experience the next generation of business automation with AI solutions 
            that deliver measurable results and unprecedented efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index}
                className="group bg-gradient-card backdrop-blur-sm rounded-2xl p-8 border border-border/50 shadow-soft hover:shadow-glow transition-all duration-500 hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 bg-gradient-${benefit.color === 'aqua' ? 'accent' : 'primary'} rounded-2xl flex items-center justify-center mb-6 shadow-${benefit.color} group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className={`text-xl font-bold mb-4 font-poppins text-${benefit.color}`}>
                  {benefit.title}
                </h3>
                <p className="text-foreground/80 font-inter leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="animate-scale-in">
            <div className="text-4xl md:text-5xl font-bold font-orbitron text-transparent bg-gradient-primary bg-clip-text mb-2">
              40+
            </div>
            <div className="text-foreground/80 font-poppins">Hours Saved Weekly</div>
          </div>
          <div className="animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <div className="text-4xl md:text-5xl font-bold font-orbitron text-transparent bg-gradient-accent bg-clip-text mb-2">
              300%
            </div>
            <div className="text-foreground/80 font-poppins">Efficiency Increase</div>
          </div>
          <div className="animate-scale-in" style={{ animationDelay: '0.4s' }}>
            <div className="text-4xl md:text-5xl font-bold font-orbitron text-aqua mb-2">
              48hrs
            </div>
            <div className="text-foreground/80 font-poppins">Setup Time</div>
          </div>
          <div className="animate-scale-in" style={{ animationDelay: '0.6s' }}>
            <div className="text-4xl md:text-5xl font-bold font-orbitron text-transparent bg-gradient-primary bg-clip-text mb-2">
              99.9%
            </div>
            <div className="text-foreground/80 font-poppins">Uptime Guarantee</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;