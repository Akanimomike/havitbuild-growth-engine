import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">H</span>
              </div>
              <span className="text-2xl font-bold">Havitbuild</span>
            </div>
            <p className="text-background/80 mb-6 max-w-md leading-relaxed">
              Smart Growth Solutions for Small Businesses. We help entrepreneurs scale faster 
              with marketing-focused websites, automation, and AI-powered tools.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-background/60 hover:text-accent transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-background/60 hover:text-accent transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-background/60 hover:text-accent transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-background/80 hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-background/80 hover:text-accent transition-colors">Services</Link></li>
              <li><Link to="/about" className="text-background/80 hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/case-studies" className="text-background/80 hover:text-accent transition-colors">Case Studies</Link></li>
              <li><Link to="/contact" className="text-background/80 hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-background/80">
                <Mail className="w-4 h-4 mr-3 text-accent" />
                hello@havitbuild.com
              </li>
              <li className="flex items-center text-background/80">
                <Phone className="w-4 h-4 mr-3 text-accent" />
                (555) 123-4567
              </li>
              <li className="flex items-center text-background/80">
                <MapPin className="w-4 h-4 mr-3 text-accent" />
                Austin, TX, USA
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-background/60 text-sm">
            © 2024 Havitbuild. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-background/60 hover:text-accent text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-background/60 hover:text-accent text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;