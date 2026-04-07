import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle, Award, Headphones } from "lucide-react";
import teamWorking from "@/assets/team-working.jpg";
import officeMeeting from "@/assets/office-meeting.jpg";

const features = [
  { icon: CheckCircle, title: "Certified Company", desc: "ISO certified with industry-standard practices" },
  { icon: Award, title: "Scalable Solutions", desc: "Built to grow with your business needs" },
  { icon: Headphones, title: "24/7 Support", desc: "Round-the-clock technical assistance" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 lg:py-28" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Images */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img
              src={teamWorking}
              alt="Team collaboration"
              className="rounded-2xl shadow-lg w-full max-w-sm"
            />
            <img
              src={officeMeeting}
              alt="Office meeting"
              className="rounded-2xl shadow-xl absolute top-1/3 left-1/3 w-64 md:w-72 border-4 border-background hidden md:block"
            />
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute bottom-4 right-0 md:right-10 gradient-bg text-primary-foreground rounded-2xl px-6 py-4 shadow-xl"
            >
              <p className="font-heading font-bold text-2xl">10+</p>
              <p className="text-sm opacity-90">Years of Experience</p>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">About Us</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-3 mb-6">
              We Help Businesses Scale with{" "}
              <span className="gradient-text">Technology</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              At UHV Software Solutions, we combine deep technical expertise with strategic thinking to deliver solutions that transform businesses. Our team of skilled professionals is committed to excellence and innovation.
            </p>

            <div className="space-y-5">
              {features.map((f, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-11 h-11 gradient-bg rounded-xl flex items-center justify-center flex-shrink-0">
                    <f.icon size={20} className="text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-foreground">{f.title}</h4>
                    <p className="text-sm text-muted-foreground">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
