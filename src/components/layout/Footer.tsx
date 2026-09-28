import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter, BookOpen, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DEVREL_COMPASS_URL, DEVREL_ROADMAP_URL, SPEAKING_EMAIL } from "@/data/profile";

const socialLinks = [
  { name: "LinkedIn", href: "https://linkedin.com/in/anita-ihuman", icon: Linkedin },
  { name: "X", href: "https://twitter.com/Anita_Ihuman", icon: Twitter },
  { name: "GitHub", href: "https://github.com/Anita-ihuman", icon: Github },
  { name: "Medium", href: "https://medium.com/@Anita-ihuman", icon: BookOpen },
  { name: "YouTube", href: "https://www.youtube.com/@TechwithAnita", icon: Youtube },
];

const quickLinks = [
  { name: "About", href: "/about" },
  { name: "Work with me", href: "/work-with-me" },
  { name: "Writing", href: "/blog" },
  { name: "Talks", href: "/talks" },
  { name: "Contact", href: "/contact" },
];

const resourceLinks = [
  { name: "Research", href: "/research", external: false },
  { name: "DevRel Compass", href: DEVREL_COMPASS_URL, external: true },
  { name: "DevRel Roadmap", href: DEVREL_ROADMAP_URL, external: true },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
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
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {resourceLinks.map((link) =>
                link.external ? (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-background/70 hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ) : (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-background/70 hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Get in touch</h4>
            <p className="text-background/70 text-sm mb-4 max-w-xs">
              Want me to speak at your event, or need a hand with content and community?
            </p>
            <a href={`mailto:${SPEAKING_EMAIL}`}>
              <Button variant="orange" size="sm">
                Get in touch
              </Button>
            </a>

            <div className="flex flex-wrap gap-3 mt-6">
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
        </div>

        <div className="border-t border-background/10 mt-10 pt-8">
          <p className="text-background/50 text-sm">
            © {new Date().getFullYear()} Anita Ihuman. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
