import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative border-t border-border mt-12">
      <div className="absolute inset-0 bg-gradient-to-t from-neon-purple/5 to-transparent pointer-events-none" />
      <div className="container relative py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="font-mono text-sm text-muted-foreground text-center md:text-left">
          © {new Date().getFullYear()} <span className="neon-text font-semibold">Alex Chen</span>.
          Crafted with <Heart className="inline w-3.5 h-3.5 text-neon-pink fill-neon-pink mx-0.5" /> & lots of coffee.
        </div>

        <div className="flex items-center gap-3">
          {[
            { Icon: Github, href: "https://github.com" },
            { Icon: Linkedin, href: "https://linkedin.com" },
            { Icon: Mail, href: "mailto:hello@alexchen.dev" },
          ].map(({ Icon, href }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-lg glass flex items-center justify-center hover:text-neon-cyan transition-colors"
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
