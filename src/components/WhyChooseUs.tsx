import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Users, FolderKanban, ThumbsUp, Clock } from "lucide-react";

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
    <span ref={ref} className="font-heading text-4xl md:text-5xl font-bold gradient-text">
      {count}{suffix}
    </span>
  );
};

const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-secondary/50" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Why Choose Us</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-3 mb-6">
              Why Businesses Trust <span className="gradient-text">UHV Solutions</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We combine technical excellence with a client-first approach. Our proven track record, dedicated team, and commitment to innovation make us the ideal technology partner for businesses of all sizes.
            </p>
            <ul className="space-y-3 text-foreground">
              {["Expert team of certified professionals", "Agile methodology for faster delivery", "Cost-effective & scalable solutions", "End-to-end project management"].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full gradient-bg flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, i) => (
              <div key={i} className="bg-card rounded-2xl p-6 card-shadow text-center">
                <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center mx-auto mb-3">
                  <stat.icon size={22} className="text-primary-foreground" />
                </div>
                <Counter target={stat.value} suffix={stat.suffix} />
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
