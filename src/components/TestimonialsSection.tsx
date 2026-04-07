import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Sharma",
    role: "CTO, FinServe Ltd",
    text: "UHV Software Solutions transformed our legacy systems into a modern, scalable platform. Their team's expertise and dedication exceeded our expectations.",
    avatar: "RS",
  },
  {
    name: "Priya Mehta",
    role: "CEO, GrowthTech",
    text: "Working with UHV was a game changer. They delivered our e-commerce platform ahead of schedule with impeccable quality. Highly recommended!",
    avatar: "PM",
  },
  {
    name: "Arjun Patel",
    role: "Director, CloudNine Solutions",
    text: "Their cloud migration services saved us 40% on infrastructure costs. The team provided seamless transition with zero downtime. Outstanding work!",
    avatar: "AP",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section id="testimonials" className="py-20 lg:py-28" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Testimonials</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mt-3">What Our Clients Say</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-card rounded-3xl p-8 md:p-12 card-shadow relative">
            <Quote size={48} className="text-primary/10 absolute top-6 left-6" />
            <div className="text-center">
              <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8 relative z-10">
                "{testimonials[current].text}"
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-14 h-14 gradient-bg rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg">
                  {testimonials[current].avatar}
                </div>
                <div className="text-left">
                  <p className="font-heading font-semibold text-foreground">{testimonials[current].name}</p>
                  <p className="text-sm text-muted-foreground">{testimonials[current].role}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${i === current ? "gradient-bg" : "bg-border"}`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
