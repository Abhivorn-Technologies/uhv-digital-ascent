import { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AboutSection from "@/components/AboutSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialsSection from "@/components/TestimonialsSection";
import { CheckCircle, Award, Headphones, Users, Target, Lightbulb } from "lucide-react";
import teamWorking from "@/assets/team-working.jpg";
import officeMeeting from "@/assets/office-meeting.jpg";

const values = [
  { icon: Target, title: "Mission-Driven", desc: "We are dedicated to empowering businesses through innovative and reliable technology solutions." },
  { icon: Users, title: "Client-Centric", desc: "Our clients are at the heart of everything we do. We build lasting partnerships." },
  { icon: Lightbulb, title: "Innovation First", desc: "We constantly explore new technologies to deliver cutting-edge solutions." },
  { icon: Award, title: "Quality Assured", desc: "Every project goes through rigorous quality checks before delivery." },
  { icon: CheckCircle, title: "Integrity", desc: "We operate with transparency, honesty, and ethical business practices." },
  { icon: Headphones, title: "Always Available", desc: "Our support team is available 24/7 to help you whenever you need it." },
];

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Banner */}
      <section className="pt-28 pb-16 gradient-bg text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-heading text-4xl md:text-5xl font-bold mb-4"
          >
            About UHV Software Solutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg opacity-90 max-w-2xl mx-auto"
          >
            3+ years of delivering innovative technology solutions that transform businesses worldwide.
          </motion.p>
        </div>
      </section>

      <AboutSection />

      {/* Our Values */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Values</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-3">What Drives Us</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card rounded-2xl p-7 card-shadow"
              >
                <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center mb-4">
                  <v.icon size={22} className="text-primary-foreground" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2 text-foreground">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <TestimonialsSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default AboutPage;
