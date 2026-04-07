import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, User } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const posts = [
  {
    title: "How Cloud Computing is Transforming Small Businesses",
    excerpt: "Discover how cloud solutions can reduce costs, improve scalability, and accelerate growth for small and medium enterprises.",
    date: "March 28, 2026",
    author: "UHV Team",
    category: "Cloud Computing",
    slug: "cloud-computing-small-business",
  },
  {
    title: "Top 5 Cybersecurity Threats in 2026 and How to Prevent Them",
    excerpt: "Stay ahead of cyber threats with our comprehensive guide to the most critical security challenges facing businesses today.",
    date: "March 15, 2026",
    author: "UHV Team",
    category: "Cyber Security",
    slug: "cybersecurity-threats-2026",
  },
  {
    title: "The Role of AI & Automation in Modern Software Development",
    excerpt: "Explore how artificial intelligence and automation are revolutionizing the way we build, test, and deploy software.",
    date: "February 22, 2026",
    author: "UHV Team",
    category: "AI & Automation",
    slug: "ai-automation-software-dev",
  },
  {
    title: "Why Every Business Needs a Custom Web Application",
    excerpt: "Off-the-shelf software can't match the efficiency and competitive edge of a custom-built web application tailored to your workflow.",
    date: "February 10, 2026",
    author: "UHV Team",
    category: "Web Development",
    slug: "custom-web-application",
  },
  {
    title: "Data Analytics: Turning Raw Data into Business Intelligence",
    excerpt: "Learn how modern analytics tools can help you make data-driven decisions and uncover hidden opportunities.",
    date: "January 30, 2026",
    author: "UHV Team",
    category: "Data Analytics",
    slug: "data-analytics-business-intelligence",
  },
  {
    title: "Digital Transformation: A Step-by-Step Guide for Enterprises",
    excerpt: "A practical roadmap for organizations looking to embrace digital transformation and stay competitive in the market.",
    date: "January 15, 2026",
    author: "UHV Team",
    category: "IT Consulting",
    slug: "digital-transformation-guide",
  },
];

const BlogPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-28 pb-16 gradient-bg text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-heading text-4xl md:text-5xl font-bold mb-4"
          >
            Blog & Insights
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg opacity-90 max-w-2xl mx-auto"
          >
            Stay updated with the latest trends, tips, and insights from the world of technology.
          </motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card rounded-2xl overflow-hidden card-shadow group"
              >
                <div className="h-48 gradient-bg flex items-center justify-center">
                  <span className="text-primary-foreground/80 text-sm font-semibold px-4 py-1.5 rounded-full bg-background/10 backdrop-blur-sm">
                    {post.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                    <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                    <span className="flex items-center gap-1"><User size={12} /> {post.author}</span>
                  </div>
                  <h3 className="font-heading font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-3 mb-4">{post.excerpt}</p>
                  <span className="text-sm font-semibold text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read More <ArrowRight size={14} />
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default BlogPage;
