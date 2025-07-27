import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      title: "Founder, Bloom Fitness",
      content: "Havitbuild transformed our lead generation completely. We went from 5 leads per month to 150+ qualified leads. The automated workflows saved us 30 hours per week!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b577?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Michael Rodriguez",
      title: "CEO, TechFlow Solutions",
      content: "The AI chatbot they built handles 80% of our customer inquiries automatically. Our team can now focus on high-value activities instead of repetitive tasks.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Emma Thompson",
      title: "Owner, Artisan Bakery",
      content: "Their social media automation increased our online orders by 250%. The content calendar and automated posting freed up so much of my time to focus on baking.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "David Park",
      title: "Director, GreenSpace Consulting",
      content: "The workflow automation platform they created streamlined our entire client onboarding process. What used to take 3 days now happens in 30 minutes.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Lisa Kumar",
      title: "Founder, Digital Nomad Hub",
      content: "Our new website converts 5x better than our old one. The lead capture forms and automated email sequences have been game-changing for our business.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "James Wilson",
      title: "Owner, Wilson Law Firm",
      content: "The automated appointment booking and client communication system has revolutionized how we handle new client inquiries. Highly professional and efficient.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671d66?w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-20 bg-gradient-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            What Our Clients Say About 
            <span className="bg-gradient-accent bg-clip-text text-transparent"> Their Growth</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what small business owners are saying about their transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.name} 
              className="hover:shadow-medium transition-all duration-300 animate-scale-in border-0 shadow-soft"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className="w-8 h-8 text-accent mb-4" />
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.title}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;