import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/uhv-logo.jpeg";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background/80 pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* About */}
          <div>
            <img src={logo} alt="UHV Software Solutions" className="h-10 mb-4 brightness-0 invert" />
            <p className="text-sm leading-relaxed opacity-70">
              Delivering innovative technology solutions that drive growth and digital transformation for businesses worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-background mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {["Home", "About", "Services", "Process", "Testimonials"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="opacity-70 hover:opacity-100 transition-opacity">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-background mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              {["IT Consulting", "Cloud Computing", "Cyber Security", "Web Development", "AI & Automation"].map((s) => (
                <li key={s} className="opacity-70">{s}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-background mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 opacity-70">
                <Mail size={14} /> info@uhvsoftware.com
              </li>
              <li className="flex items-center gap-2 opacity-70">
                <Phone size={14} /> +91 123 456 7890
              </li>
              <li className="flex items-start gap-2 opacity-70">
                <MapPin size={14} className="mt-0.5" /> India
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 pt-6 text-center text-sm opacity-50">
          © {new Date().getFullYear()} UHV Software Solutions Pvt Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
