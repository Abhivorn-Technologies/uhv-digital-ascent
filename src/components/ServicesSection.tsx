import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Monitor, Cloud, Shield, Globe, Bot, BarChart3 } from "lucide-react";

const services = [
  { icon: Monitor, title: "IT Consulting", desc: "Strategic technology consulting to align IT with your business goals and drive digital transformation." },
  { icon: Cloud, title: "Cloud Computing", desc: "Scalable cloud solutions for migration, management, and optimization across major platforms." },
  { icon: Shield, title: "Cyber Security", desc: "Comprehensive security services to protect your data, infrastructure, and digital assets." },
  { icon: Globe, title: "Web & App Development", desc: "Custom web and mobile applications built with cutting-edge technologies for optimal performance." },
  { icon: Bot, title: "AI & Automation", desc: "Intelligent automation solutions powered by AI and machine learning to streamline operations." },
  { icon: BarChart3, title: "Data Analytics", desc: "Transform raw data into actionable insights with our advanced analytics and visualization services." },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-20 lg:py-28 bg-secondary/50" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Services</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mt-3 mb-4">
            Custom IT Solutions for Your Business
          </h2>
          <p className="text-muted-foreground">
            We offer a comprehensive suite of technology services designed to empower your business.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="gradient-border card-shadow bg-card rounded-2xl p-7 group cursor-pointer"
            >
              <div className="w-14 h-14 gradient-bg rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <s.icon size={26} className="text-primary-foreground" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2 text-foreground">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
