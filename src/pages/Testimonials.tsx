import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Quote } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    quote: "Anita's ability to translate complex technical concepts into accessible content is remarkable. Her work significantly boosted our developer engagement and community growth. She brought a unique combination of technical depth and community empathy that made a real difference.",
    author: "Sarah Chen",
    role: "VP of Developer Relations",
    company: "UpCloud",
  },
  {
    quote: "Working with Anita transformed how we approach developer education. Her strategic insights and authentic communication style brought real results to our community initiatives. She has an incredible ability to connect with developers at all levels.",
    author: "Michael Okonkwo",
    role: "CTO",
    company: "HackMamba",
  },
  {
    quote: "Anita's technical writing elevated our documentation to a new level. She understands what developers need and delivers content that truly helps them succeed. The feedback from our developer community has been overwhelmingly positive.",
    author: "James Liu",
    role: "Head of Content",
    company: "API7",
  },
  {
    quote: "Her contributions to the CHAOSS community have been invaluable. Anita brings both passion and expertise to DEI initiatives, helping us create more inclusive standards for measuring community health.",
    author: "Dawn Foster",
    role: "Director",
    company: "CHAOSS",
  },
  {
    quote: "Anita's workshop at our conference was one of the highest-rated sessions. Her engaging presentation style and deep knowledge of cloud-native technologies made complex topics accessible to our diverse audience.",
    author: "Emma Rodriguez",
    role: "Conference Director",
    company: "Open Source Summit",
  },
  {
    quote: "As a mentor, Anita goes above and beyond. She helped me navigate my transition into Developer Relations with patience, practical advice, and genuine care for my growth. I couldn't have done it without her guidance.",
    author: "David Kalu",
    role: "Developer Advocate",
    company: "Tech Startup",
  },
];

export default function Testimonials() {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            tag="Testimonials"
            title="What People Say"
            description="Feedback from clients, collaborators, and mentees I've had the privilege of working with."
          />

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 bg-card rounded-2xl border border-border relative"
              >
                <Quote className="w-12 h-12 text-primary/10 absolute top-6 right-6" />
                <p className="text-foreground leading-relaxed mb-6 text-lg relative z-10">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold text-lg">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <p className="body-base mb-6">
              Ready to create your own success story? Let's work together.
            </p>
            <Link to="/contact">
              <Button variant="orange" size="lg">
                Start a Conversation
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
