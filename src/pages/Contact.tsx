import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Twitter, Github, BookOpen, Youtube, Send, Check } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { SPEAKING_EMAIL } from "@/data/profile";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mgvgzllp";

const socialLinks = [
  { name: "LinkedIn", href: "https://linkedin.com/in/anita-ihuman", icon: Linkedin },
  { name: "X", href: "https://twitter.com/Anita_Ihuman", icon: Twitter },
  { name: "GitHub", href: "https://github.com/Anita-ihuman", icon: Github },
  { name: "Medium", href: "https://medium.com/@Anita-ihuman", icon: BookOpen },
  { name: "YouTube", href: "https://www.youtube.com/@TechwithAnita", icon: Youtube },
];

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setIsSubmitting(true);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });

      if (!response.ok) {
        throw new Error(`Formspree responded with ${response.status}`);
      }

      form.reset();
      setIsSubmitted(true);
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "That didn't go through",
        description: `Something went wrong sending your message. Email me directly at ${SPEAKING_EMAIL}.`,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            tag="Contact"
            title="Let's Connect"
            description="Working together, a speaking invite, a question, or just hello. I read everything that lands here."
          />

          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="heading-4 mb-6">Reach me directly</h3>

              <a href={`mailto:${SPEAKING_EMAIL}`} className="inline-block mb-8">
                <Button variant="orange" size="default">
                  <Mail className="w-4 h-4" />
                  Email me
                </Button>
              </a>

              <div className="mb-8">
                <p className="text-muted-foreground mb-4">Connect on social</p>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                    >
                      <link.icon className="w-5 h-5" />
                      <span className="text-sm font-medium">{link.name}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="p-6 bg-primary/5 rounded-2xl border border-primary/20">
                <h4 className="font-semibold mb-2">What I'm saying yes to</h4>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  {[
                    "Developer advocacy and DevRel consulting",
                    "Speaking at your event, podcast, or video series",
                    "Technical content and documentation projects",
                    "Community and program management",
                    "Research collaborations",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="p-8 bg-card rounded-2xl border border-border">
                <h3 className="heading-4 mb-6">Send me a message</h3>
                
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Check className="w-8 h-8 text-primary" />
                    </div>
                    <h4 className="font-semibold text-xl mb-2">Got it!</h4>
                    <p className="text-muted-foreground">
                      Thanks for reaching out. I'll get back to you as soon as I can.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    action={FORMSPREE_ENDPOINT}
                    method="POST"
                    className="space-y-6"
                  >
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        required
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        required
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell me what you're working on, or just say hello..."
                        required
                        rows={5}
                        className="resize-none"
                      />
                    </div>
                    <Button
                      type="submit"
                      variant="orange"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
