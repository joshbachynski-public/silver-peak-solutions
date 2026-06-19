import { Link } from "wouter";
import { Phone, Zap } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary text-white rounded-lg flex items-center justify-center">
            <Zap className="w-6 h-6" />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-lg leading-none">Silver Peak</span>
            <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Electrical & Fire Alarm</span>
          </div>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-sm font-semibold text-foreground/80 hover:text-primary transition-colors">Services</a>
          <a href="#about" className="text-sm font-semibold text-foreground/80 hover:text-primary transition-colors">Advantage</a>
          <a href="#contact" className="text-sm font-semibold text-foreground/80 hover:text-primary transition-colors">Contact</a>
        </nav>

        <div className="flex items-center gap-4">
          <a href="tel:2505076439" className="hidden sm:flex items-center gap-2 text-sm font-bold text-foreground hover:text-primary transition-colors">
            <Phone className="w-4 h-4 text-primary" />
            250-507-6439
          </a>
          <a href="mailto:christianhaug@silver-peak.ca" className="bg-foreground hover:bg-foreground/90 text-background px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors">
            Email Us
          </a>
        </div>
      </div>
    </header>
  );
}