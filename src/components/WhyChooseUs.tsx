import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Users, FolderKanban, ThumbsUp, Clock } from "lucide-react";

import whyChooseUsImg from "@/assets/why-choose-us.png";

const stats = [
  { icon: Users, value: 100, suffix: "+", label: "Clients Served" },
  { icon: FolderKanban, value: 50, suffix: "+", label: "Projects Delivered" },
  { icon: ThumbsUp, value: 99, suffix: "%", label: "Client Satisfaction" },
  { icon: Clock, value: 3, suffix: "+", label: "Years Experience" },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1500;
    const step = Math.max(1, Math.ceil(target / (duration / 16)));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref} className="font-heading text-3xl md:text-4xl font-bold gradient-text">
      {count}{suffix}
    </span>
  );
};

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-20 lg:py-28 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 gradient-bg rounded-3xl rotate-3 opacity-10 blur-2xl" />
            <img 
              src={whyChooseUsImg} 
              alt="Why Choose UHV Solutions" 
              className="relative rounded-3xl shadow-2xl w-full object-cover aspect-[4/3] z-10" 
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 gradient-bg rounded-full opacity-10 blur-3xl" />
          </motion.div>

          {/* Right Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Why Choose Us</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-3 mb-6">
              Why Businesses Trust <span className="gradient-text">UHV Solutions</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We combine technical excellence with a client-first approach. Our proven track record, dedicated team, and commitment to innovation make us the ideal technology partner for businesses of all sizes.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, i) => (
                <div key={i} className="bg-card rounded-2xl p-5 card-shadow text-center border border-border/50">
                  <div className="w-10 h-10 gradient-bg rounded-lg flex items-center justify-center mx-auto mb-3 shadow-md">
                    <stat.icon size={20} className="text-primary-foreground" />
                  </div>
                  <Counter target={stat.value} suffix={stat.suffix} />
                  <p className="text-xs font-medium text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
