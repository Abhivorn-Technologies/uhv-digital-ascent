import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Search, PenTool, Code, TestTube, Rocket } from "lucide-react";

const steps = [
  { icon: Search, title: "Requirement Analysis", desc: "Understanding your business needs" },
  { icon: PenTool, title: "Planning & Design", desc: "Crafting the perfect blueprint" },
  { icon: Code, title: "Development", desc: "Building robust solutions" },
  { icon: TestTube, title: "Testing", desc: "Ensuring quality & reliability" },
  { icon: Rocket, title: "Deployment", desc: "Launching your solution" },
];

const ProcessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="py-20 lg:py-28" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Process</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mt-3">How We Work</h2>
        </motion.div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent -translate-y-1/2 opacity-20" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="flex flex-col items-center text-center relative"
              >
                <div className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center mb-4 shadow-lg relative z-10">
                  <step.icon size={28} className="text-primary-foreground" />
                </div>
                <span className="text-xs font-bold text-primary mb-1">Step {i + 1}</span>
                <h4 className="font-heading font-semibold text-foreground text-sm mb-1">{step.title}</h4>
                <p className="text-xs text-muted-foreground">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
