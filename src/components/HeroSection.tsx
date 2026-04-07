import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import heroProfessional from "@/assets/hero-professional.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 -left-40 w-80 h-80 rounded-full bg-primary/10 animate-blob blur-3xl" />
        <div className="absolute bottom-20 right-0 w-96 h-96 rounded-full bg-accent/10 animate-blob blur-3xl" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/3 w-72 h-72 rounded-full bg-primary-light/5 animate-blob blur-3xl" style={{ animationDelay: '4s' }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-sm font-semibold text-primary tracking-wider uppercase mb-4">
              Optimize IT Systems
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Creating Better{" "}
              <span className="gradient-text">IT Solutions</span>{" "}
              for Your Business
            </h1>
            <p className="text-muted-foreground text-lg max-w-lg mb-8 leading-relaxed">
              We deliver innovative technology solutions that drive growth, efficiency, and digital transformation for businesses worldwide.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/services"
                className="gradient-bg text-primary-foreground px-8 py-3.5 rounded-lg font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity shadow-lg"
              >
                Start Now <ArrowRight size={18} />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-primary text-primary px-8 py-3.5 rounded-lg font-semibold flex items-center gap-2 hover:bg-primary/5 transition-colors"
              >
                <Phone size={18} /> Contact Us
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 gradient-bg rounded-3xl rotate-3 opacity-20 blur-xl" />
              <img
                src={heroProfessional}
                alt="IT Professional"
                className="relative rounded-3xl shadow-2xl w-full max-w-md lg:max-w-lg object-cover"
              />
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 md:-left-10 glass rounded-2xl p-4 shadow-xl border border-border/50"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center text-primary-foreground font-bold text-lg">
                    3+
                  </div>
                  <div>
                    <p className="font-heading font-bold text-foreground">Years</p>
                    <p className="text-sm text-muted-foreground">Experience</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
