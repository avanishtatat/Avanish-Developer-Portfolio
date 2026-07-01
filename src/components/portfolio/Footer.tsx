import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative border-t border-border mt-12">
      <div className="absolute inset-0 bg-gradient-to-t from-neon-purple/5 to-transparent pointer-events-none" />
      <div className="container relative py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="font-mono text-sm text-muted-foreground text-center md:text-left">
          © {new Date().getFullYear()}{" "}
          <span className="neon-text font-semibold">Avanish Tiwari</span>.
          Designed and built with React & Tailwind CSS.
        </div>

        <div className="flex items-center gap-3">
          {[
            { Icon: Github, href: "https://github.com/avanishtatat", label: "Visit GitHub Profile" },
            { Icon: Linkedin, href: "https://linkedin.com/in/avanishtiwari18", label: "Visit LinkedIn Profile" },
            { Icon: Mail, href: "mailto:avanisht.at.at@gmail.com", label: "Send Email" },
          ].map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-lg glass flex items-center justify-center hover:text-neon-cyan transition-colors"
            >
              <Icon className="w-4 h-4" aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
