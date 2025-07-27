import { TrendingUp, Users, Clock, Star } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    {
      icon: TrendingUp,
      value: "300%",
      label: "Average Revenue Growth",
      description: "Our clients see significant growth within 6 months"
    },
    {
      icon: Users,
      value: "10,000+",
      label: "Leads Generated",
      description: "Qualified leads captured for our clients this year"
    },
    {
      icon: Clock,
      value: "40hrs",
      label: "Time Saved Weekly",
      description: "Average automation savings per business"
    },
    {
      icon: Star,
      value: "4.9/5",
      label: "Client Satisfaction",
      description: "Based on 200+ verified client reviews"
    }
  ];

  return (
    <section className="py-20 bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Proven Results That Speak for Themselves
          </h2>
          <p className="text-xl text-background/80 max-w-2xl mx-auto">
            Join hundreds of small businesses that have transformed their growth with our solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={stat.label} 
              className="text-center animate-fade-in" 
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-accent" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                {stat.value}
              </div>
              <div className="text-lg font-semibold mb-2">
                {stat.label}
              </div>
              <p className="text-background/70 text-sm">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;