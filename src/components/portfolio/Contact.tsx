import { motion } from "framer-motion";
import { useState } from "react";
import { Send, Mail, Github, Linkedin, MapPin, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handle = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
      toast.success("Message sent! I'll be in touch shortly.");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setSent(false), 3000);
    }, 1200);
  };

  return (
    <section id="contact" className="relative py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <span className="font-mono text-xs text-neon-cyan uppercase tracking-widest">05 — Contact</span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold tracking-tight">
            Let's build something <span className="neon-text">amazing</span>.
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Have a project in mind, or just want to say hi? My inbox is always open.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {[
              { Icon: Mail, label: "Email", value: "hello@alexchen.dev", href: "mailto:hello@alexchen.dev" },
              { Icon: MapPin, label: "Location", value: "San Francisco, CA", href: "#" },
              { Icon: Github, label: "GitHub", value: "@alexchen", href: "https://github.com" },
              { Icon: Linkedin, label: "LinkedIn", value: "in/alexchen", href: "https://linkedin.com" },
            ].map(({ Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 glass rounded-2xl p-5 hover:bg-muted/50 transition-all duration-300 hover:translate-x-1"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shrink-0 group-hover:shadow-neon-cyan transition-shadow">
                  <Icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <div className="min-w-0">
                  <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider">{label}</div>
                  <div className="font-medium truncate">{value}</div>
                </div>
              </a>
            ))}
          </motion.div>

          <motion.form
            onSubmit={handle}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="glass-strong rounded-2xl p-7 space-y-5"
          >
            {[
              { id: "name", label: "Your Name", type: "text", placeholder: "Jane Doe" },
              { id: "email", label: "Email Address", type: "email", placeholder: "jane@example.com" },
            ].map((f) => (
              <div key={f.id} className="group">
                <label className="block font-mono text-xs text-muted-foreground uppercase tracking-wider mb-2">
                  {f.label}
                </label>
                <input
                  required
                  type={f.type}
                  value={form[f.id as "name" | "email"]}
                  onChange={(e) => setForm({ ...form, [f.id]: e.target.value })}
                  placeholder={f.placeholder}
                  className="w-full bg-input/50 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-neon-cyan focus:shadow-neon-cyan transition-all duration-300"
                />
              </div>
            ))}

            <div>
              <label className="block font-mono text-xs text-muted-foreground uppercase tracking-wider mb-2">
                Message
              </label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me about your project..."
                className="w-full bg-input/50 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-neon-cyan focus:shadow-neon-cyan transition-all duration-300 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={sending || sent}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-primary text-primary-foreground font-semibold hover:shadow-neon-cyan transition-all duration-300 disabled:opacity-70 hover:scale-[1.01]"
            >
              {sent ? (
                <>
                  <CheckCircle2 className="w-4 h-4" /> Sent!
                </>
              ) : sending ? (
                <>
                  <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
