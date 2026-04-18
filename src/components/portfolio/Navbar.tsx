import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState, type MouseEvent as ReactMouseEvent } from "react";
import { Menu, X, Code2 } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const navRef = useRef<HTMLElement | null>(null);

  const navigateToSection = (href: string) => {
    const target = document.querySelector(href) as HTMLElement | null;
    if (!target) return;

    const navOffset = 96;
    const top = Math.max(target.getBoundingClientRect().top + window.scrollY - navOffset, 0);

    window.scrollTo({ top, behavior: "smooth" });
    setActive(href);
  };

  const handleNavClick = (event: ReactMouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    setActive(href);
    window.history.replaceState(null, "", href);

    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    if (isMobile) {
      setOpen(false);
      // Wait for mobile menu collapse so scrolling lands on the right section.
      window.setTimeout(() => navigateToSection(href), 180);
      return;
    }

    navigateToSection(href);
  };

  useEffect(() => {
    if (window.location.hash && links.some((l) => l.href === window.location.hash)) {
      setActive(window.location.hash);
    }

    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const sections = links.map((l) => document.querySelector(l.href));
      const current = sections.findIndex((s) => {
        if (!s) return false;
        const r = (s as HTMLElement).getBoundingClientRect();
        return r.top <= 140 && r.bottom >= 140;
      });
      if (current !== -1) setActive(links[current].href);
    };

    const onHashChange = () => {
      if (window.location.hash && links.some((l) => l.href === window.location.hash)) {
        setActive(window.location.hash);
      }
    };

    window.addEventListener("scroll", onScroll);
    window.addEventListener("hashchange", onHashChange);
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("hashchange", onHashChange);
    };
  }, []);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: globalThis.MouseEvent | TouchEvent) => {
      const target = event.target as Node | null;
      if (navRef.current && target && !navRef.current.contains(target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("touchstart", onPointerDown);

    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
    };
  }, [open]);

  return (
    <motion.nav
      ref={navRef}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3 glass-strong shadow-glass" : "py-5 bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between">
        <a href="#home" onClick={(event) => handleNavClick(event, "#home")} className="flex items-center gap-2 group">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-primary blur-md opacity-60 group-hover:opacity-100 transition-opacity" />
            <div className="relative w-9 h-9 rounded-lg bg-background border border-border flex items-center justify-center">
              <Code2 className="w-5 h-5 text-neon-cyan" />
            </div>
          </div>
          <span className="font-display font-bold text-lg tracking-tight">
            <span className="neon-text">dev</span>.avanish
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={(event) => handleNavClick(event, l.href)}
                className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                  active === l.href ? "text-neon-cyan" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {l.label}
                {active === l.href && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-full bg-muted/60 -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          onClick={(event) => handleNavClick(event, "#contact")}
          className="hidden md:inline-flex items-center px-5 py-2 rounded-full bg-gradient-primary text-primary-foreground font-medium text-sm hover:shadow-neon-cyan transition-all duration-300 hover:scale-105"
        >
          Hire Me
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden w-10 h-10 rounded-lg glass flex items-center justify-center"
          aria-label="Menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden glass-strong"
          >
            <ul className="container py-4 flex flex-col gap-1">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={(event) => handleNavClick(event, l.href)}
                    className={`block px-4 py-3 rounded-lg transition-colors ${
                      active === l.href
                        ? "bg-muted text-neon-cyan border border-neon-cyan/30"
                        : "text-foreground hover:bg-muted"
                    }`}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
