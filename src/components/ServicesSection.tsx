import { motion } from "framer-motion";
import { Monitor, Cloud, Shield, Globe, Bot, BarChart3, Users, GraduationCap, Laptop } from "lucide-react";
import webAppImg from "@/assets/services/web-app.png";
import softwareImg from "@/assets/services/software.png";
import consultingImg from "@/assets/services/consulting.png";
import recruitmentImg from "@/assets/services/recruitment.png";
import trainingImg from "@/assets/services/training.png";
import cloudImg from "@/assets/services/cloud.png";
import aiImg from "@/assets/services/ai.png";
import securityImg from "@/assets/services/security.png";
import customImg from "@/assets/services/custom.png";

const services = [
  { icon: Globe, title: "Web & App Development", image: webAppImg, desc: "Custom web and mobile applications built with cutting-edge technologies, including installation and maintenance." },
  { icon: Laptop, title: "Software Solutions", image: softwareImg, desc: "End-to-end software development and maintenance services tailored to your specific business requirements." },
  { icon: Monitor, title: "IT Consulting", image: consultingImg, desc: "Strategic technology consulting to align IT with your business goals and drive digital transformation." },
  { icon: Users, title: "IT Recruitment & Staffing", image: recruitmentImg, desc: "Domestic and US IT recruiting, technical support, and resource outsourcing to scale your team." },
  { icon: GraduationCap, title: "Training Programs", image: trainingImg, desc: "Specialized training programs designed to support skill development and digital transformation." },
  { icon: Cloud, title: "Cloud Computing", image: cloudImg, desc: "Scalable cloud solutions for migration, management, and optimization across major platforms." },
  { icon: Bot, title: "AI & Automation", image: aiImg, desc: "Intelligent automation solutions powered by AI and machine learning to streamline operations." },
  { icon: Shield, title: "Cyber Security", image: securityImg, desc: "Comprehensive security services to protect your data, infrastructure, and digital assets." },
  { icon: BarChart3, title: "Custom Technology Solutions", image: customImg, desc: "Bespoke technology solutions designed to support business growth across various industries." },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 lg:py-28 bg-secondary/50">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
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
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="gradient-border card-shadow bg-card rounded-2xl p-7 group cursor-pointer"
            >
              <div className="relative h-48 mb-6 overflow-hidden rounded-xl">
                <img 
                  src={s.image} 
                  alt={s.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute bottom-4 left-4 w-12 h-12 gradient-bg rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                  <s.icon size={22} className="text-primary-foreground" />
                </div>
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
