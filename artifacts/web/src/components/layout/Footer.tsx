import { Zap, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground border-t border-secondary-foreground/10 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary text-white rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl leading-none text-white">Silver Peak</span>
                <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Electrical & Fire Alarm Ltd.</span>
              </div>
            </div>
            <p className="text-muted-foreground max-w-sm mb-6">
              A family-owned electrical contractor in Victoria, BC. Providing calm, capable problem-solving and deep fire alarm expertise.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/5 border border-white/10 text-sm font-mono text-white/80">
              ECL # LEL0212947
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:2505076439" className="flex items-center gap-3 text-muted-foreground hover:text-white transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                  250-507-6439
                </a>
              </li>
              <li>
                <a href="mailto:christianhaug@silver-peak.ca" className="flex items-center gap-3 text-muted-foreground hover:text-white transition-colors break-all">
                  <Mail className="w-5 h-5 text-primary shrink-0" />
                  christianhaug@silver-peak.ca
                </a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                Victoria, British Columbia
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-muted-foreground hover:text-white transition-colors">Services</a></li>
              <li><a href="#about" className="text-muted-foreground hover:text-white transition-colors">Our Advantage</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-white transition-colors">Get in Touch</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Silver Peak Electrical & Fire Alarm Ltd. All rights reserved.</p>
          <p>Established 2022 • Victoria, BC</p>
        </div>
      </div>
    </footer>
  );
}