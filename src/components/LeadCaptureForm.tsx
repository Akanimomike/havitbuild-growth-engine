import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, CheckCircle, User, Mail, Phone, Building } from "lucide-react";

const formSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phoneNumber: z.string().optional(),
  companyName: z.string().optional(),
  serviceInterest: z.string({
    required_error: "Please select a service",
  }),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

interface LeadCaptureFormProps {
  trigger?: React.ReactNode;
  variant?: "default" | "hero" | "cta";
}

export function LeadCaptureForm({ trigger, variant = "default" }: LeadCaptureFormProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      companyName: "",
      serviceInterest: "",
      message: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    setIsSubmitting(true);
    
    try {
      // TODO: Replace with actual webhook endpoint
      console.log("Form submission:", values);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsSubmitted(true);
      toast({
        title: "Thank you for your interest!",
        description: "We'll get back to you within 24 hours.",
      });
      
      // Reset form after successful submission
      setTimeout(() => {
        setIsSubmitted(false);
        setIsOpen(false);
        form.reset();
      }, 3000);
      
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const defaultTrigger = (
    <Button 
      variant={variant === "hero" ? "hero" : "cta"} 
      size="lg"
      className="group"
    >
      Get Started
      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
    </Button>
  );

  const services = [
    "Custom Chatbot",
    "Workflow Automation", 
    "Lead Generation",
    "AI Integration"
  ];

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger || defaultTrigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto bg-card">
        <DialogHeader className="space-y-3 pb-4">
          <DialogTitle className="text-2xl font-bold text-center bg-gradient-primary bg-clip-text text-transparent">
            Let's Transform Your Business
          </DialogTitle>
          <DialogDescription className="text-center text-muted-foreground text-base">
            Tell us about your project and we'll create a custom automation solution just for you. 
            Get a free consultation and see how we can help boost your efficiency.
          </DialogDescription>
        </DialogHeader>

        {isSubmitted ? (
          <div className="flex flex-col items-center justify-center py-8 space-y-4">
            <CheckCircle className="h-16 w-16 text-green-500" />
            <div className="text-center space-y-2">
              <h3 className="text-xl font-semibold text-foreground">Thank You!</h3>
              <p className="text-muted-foreground">
                We've received your information and will be in touch within 24 hours.
              </p>
            </div>
          </div>
        ) : (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem className="sm:col-span-2">
                      <FormLabel className="flex items-center gap-2 text-sm font-medium">
                        <User className="h-4 w-4" />
                        Full Name *
                      </FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Enter your full name" 
                          className="h-11" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2 text-sm font-medium">
                        <Mail className="h-4 w-4" />
                        Email Address *
                      </FormLabel>
                      <FormControl>
                        <Input 
                          type="email" 
                          placeholder="your@email.com" 
                          className="h-11" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2 text-sm font-medium">
                        <Phone className="h-4 w-4" />
                        Phone Number
                      </FormLabel>
                      <FormControl>
                        <Input 
                          type="tel" 
                          placeholder="(555) 123-4567" 
                          className="h-11" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="companyName"
                  render={({ field }) => (
                    <FormItem className="sm:col-span-2">
                      <FormLabel className="flex items-center gap-2 text-sm font-medium">
                        <Building className="h-4 w-4" />
                        Company Name
                      </FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Your company name" 
                          className="h-11" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="serviceInterest"
                  render={({ field }) => (
                    <FormItem className="sm:col-span-2">
                      <FormLabel className="text-sm font-medium">
                        What service are you interested in? *
                      </FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="h-11">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service} value={service}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="sm:col-span-2">
                      <FormLabel className="text-sm font-medium">
                        Message or Additional Info
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us more about your project goals, timeline, or any specific requirements..."
                          className="min-h-[100px] resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex flex-col space-y-4 pt-4">
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full h-12 bg-gradient-primary hover:shadow-glow transition-all duration-300"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send My Information"}
                  {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4" />}
                </Button>
                
                <p className="text-xs text-muted-foreground text-center">
                  By submitting this form, you agree to receive communication from our team. 
                  We respect your privacy and won't spam you.
                </p>
              </div>
            </form>
          </Form>
        )}
      </DialogContent>
    </Dialog>
  );
}