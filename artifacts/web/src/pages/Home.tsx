import { Link } from "wouter";
import { Phone, Mail, ChevronRight, CheckCircle2, Shield, Wrench, Building2, Flame } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-secondary text-secondary-foreground">
          <div className="absolute inset-0 opacity-20 bg-[url('/hero-bg.png')] bg-cover bg-center mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/80 to-transparent"></div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium mb-6">
                <Shield className="w-4 h-4" />
                <span>Victoria, BC • Electrical Contractor Licence LEL0212947</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight">
                Electrical mastery backed by <span className="text-primary">deep fire alarm expertise.</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
                Silver Peak is your local Victoria electrician for troubleshooting, maintenance, renovations, and remediation. We diagnose and fix it right the first time.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:2505076439" className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg shadow-primary/20">
                  <Phone className="w-5 h-5" />
                  Call 250-507-6439
                </a>
                <a href="mailto:christianhaug@silver-peak.ca" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all backdrop-blur-sm">
                  <Mail className="w-5 h-5" />
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section id="services" className="py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Comprehensive Electrical Services</h2>
                <p className="text-lg text-muted-foreground">From standard residential repairs to complex commercial fire alarm coordination, we have the expertise to handle it safely and correctly.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Troubleshooting & Service", desc: "Expert diagnosis and repair of electrical issues for both residential and commercial properties.", icon: Wrench },
                { title: "Fire Alarm Support", desc: "Specialized electrical support for fire alarm systems—a rare expertise among standard electricians.", icon: Flame },
                { title: "Maintenance & Repairs", desc: "Ongoing electrical maintenance and small repairs to keep your building safe and compliant.", icon: Shield },
                { title: "Renovation Wiring", desc: "Complete electrical support for renovations, from planning to final inspection.", icon: Building2 },
                { title: "Knob & Tube Remediation", desc: "Safe, code-compliant removal and replacement of outdated knob and tube wiring.", icon: CheckCircle2 },
                { title: "Project Coordination", desc: "Seamless coordination between owners, engineers, inspectors, and fire alarm providers.", icon: Building2 },
              ].map((service, i) => (
                <div key={i} className="bg-card border border-border p-8 rounded-2xl hover:shadow-lg transition-shadow group">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* THE ADVANTAGE / ABOUT SECTION */}
        <section id="about" className="py-24 bg-secondary text-secondary-foreground">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary font-semibold text-sm mb-6">Family-Owned • Est. 2022</div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">The Silver Peak Advantage</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Most electricians don't understand fire alarms. Most fire alarm technicians aren't licensed electricians. We bridge that gap. 
                </p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Starting in fire protection gave us a unique perspective on building safety. Today, we bring that meticulous, life-safety-first approach to all our electrical work—whether we're replacing a panel in a home or acting as technical representatives for a strata council.
                </p>
                
                <ul className="space-y-4">
                  {[
                    "Technical representation for property managers",
                    "Pre-as-built and as-built drawings",
                    "Consulting and technical advisory services",
                    "Documentation support for contractors"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                      <span className="text-lg text-white/90">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 translate-x-4 translate-y-4 rounded-3xl -z-10"></div>
                <img 
                  src="/panel-work.png" 
                  alt="Professional electrical panel work" 
                  className="rounded-3xl shadow-2xl object-cover aspect-[4/3]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* WHO WE WORK WITH */}
        <section className="py-24 bg-background border-t border-border">
          <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Who We Work With</h2>
            <p className="text-lg text-muted-foreground mb-12">
              We provide calm, capable problem-solving for the people responsible for keeping buildings running safely.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              {["Property Managers", "Strata Councils", "Homeowners", "Realtors", "Commercial Property Owners", "General Contractors", "Fire Alarm Providers"].map((client, i) => (
                <span key={i} className="px-6 py-3 bg-muted text-foreground rounded-full font-medium text-lg border border-border">
                  {client}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section id="contact" className="py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Need an electrical issue solved right?</h2>
            <p className="text-xl text-primary-foreground/90 mb-10">
              Get in touch to discuss your project, request a service call, or get expert troubleshooting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:2505076439" className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all">
                <Phone className="w-5 h-5" />
                250-507-6439
              </a>
              <a href="mailto:christianhaug@silver-peak.ca" className="inline-flex items-center justify-center gap-2 bg-white text-primary hover:bg-stone-50 px-8 py-4 rounded-lg font-semibold text-lg transition-all">
                <Mail className="w-5 h-5" />
                christianhaug@silver-peak.ca
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}