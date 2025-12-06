import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter, BookOpen, Facebook, Youtube } from "lucide-react";

const socialLinks = [
  { name: "LinkedIn", href: "https://linkedin.com/in/anita-ihuman", icon: Linkedin },
  { name: "Twitter", href: "https://twitter.com/Anita_Ihuman", icon: Twitter },
  { name: "GitHub", href: "https://github.com/Anita-ihuman", icon: Github },
  { name: "Medium", href: "https://medium.com/@Anita-ihumann", icon: BookOpen },
  { name: "Youtube", href: "https://www.youtube.com/@TechwithAnita", icon: Youtube },
];

const quickLinks = [
  { name: "About", href: "/about" },
  { name: "Blogs", href: "/blog" },
  { name: "Talks", href: "/talks" },
  { name: "Contact", href: "/contact" },
];

const resourceLinks = [
  { name: "Community", href: "/community" },
  { name: "Research", href: "/research" },
  { name: "Testimonials", href: "/testimonials" },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="text-2xl font-bold">
              Anita<span className="text-primary">.</span>
            </Link>
            <p className="mt-4 text-background/70 text-sm leading-relaxed">
              Senior Developer Advocate building sustainable open-source communities and driving developer adoption.
            </p>
            <div className="flex gap-4 mt-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-background/10 hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                  aria-label={link.name}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-background/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Resources</h4>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-background/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Get in Touch</h4>
            <p className="text-background/70 text-sm mb-4">
              Open for Developer Relations roles and consulting opportunities.
            </p>
            <a
              href="mailto:charlesanita403@gmail.com"
              className="text-primary hover:underline text-sm"
            >
              Contact me
            </a>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">
            © {new Date().getFullYear()} Anita Ihuman. All rights reserved.
          </p>
          <p className="text-background/50 text-sm">
            Built with passion for the developer community
          </p>
        </div>
      </div>
    </footer>
  );
}
