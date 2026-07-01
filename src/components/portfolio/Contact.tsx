import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useState } from "react";
import { CheckCircle2, Send, Sparkles } from "lucide-react";
import { toast } from "sonner";

import { contactContent, contactLinks } from "@/data/contact";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handle = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setSent(true);
      toast.success("Thanks for reaching out! I'll get back to you soon.");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setSending(false);
      setTimeout(() => setSent(false), 3000);
    }
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
          <span className="font-mono text-xs text-neon-cyan uppercase tracking-widest">
            {contactContent.label}
          </span>

          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold tracking-tight">
            Let's build something{" "}
            <span className="neon-text">together</span>.
          </h2>

          <p className="mt-4 text-muted-foreground text-lg">
            {contactContent.description}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1.35fr] gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="glass rounded-2xl p-5 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5 text-primary-foreground" />
              </div>

              <div>
                <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                  Availability
                </div>
                <div className="font-medium">{contactContent.availability}</div>
              </div>
            </div>

            {contactLinks.map(({ Icon, title, value, href }) => {
              const content = (
                <>
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shrink-0 group-hover:shadow-neon-cyan transition-shadow">
                    <Icon className="w-5 h-5 text-primary-foreground" />
                  </div>

                  <div className="min-w-0">
                    <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                      {title}
                    </div>
                    <div className="font-medium truncate">{value}</div>
                  </div>
                </>
              );

              if (!href) {
                return (
                  <div
                    key={title}
                    className="flex items-center gap-4 glass rounded-2xl p-5"
                  >
                    {content}
                  </div>
                );
              }

              return (
                <a
                  key={title}
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
                  className="group flex items-center gap-4 glass rounded-2xl p-5 hover:bg-muted/50 transition-all duration-300 hover:translate-x-1"
                >
                  {content}
                </a>
              );
            })}
          </motion.div>

          <motion.form
            onSubmit={handle}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="glass-strong rounded-2xl p-7 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                {
                  id: "name",
                  label: "Your Name",
                  type: "text",
                  placeholder: "Jane Doe",
                },
                {
                  id: "email",
                  label: "Email Address",
                  type: "email",
                  placeholder: "jane@example.com",
                },
              ].map((field) => (
                <div key={field.id} className="group">
                  <label className="block font-mono text-xs text-muted-foreground uppercase tracking-wider mb-2">
                    {field.label}
                  </label>

                  <input
                    required
                    type={field.type}
                    value={form[field.id as "name" | "email"]}
                    onChange={(e) =>
                      setForm({ ...form, [field.id]: e.target.value })
                    }
                    placeholder={field.placeholder}
                    className="w-full bg-input/50 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-neon-cyan focus:shadow-neon-cyan transition-all duration-300"
                  />
                </div>
              ))}
            </div>

            <div>
              <label className="block font-mono text-xs text-muted-foreground uppercase tracking-wider mb-2">
                Subject
              </label>

              <input
                required
                type="text"
                value={form.subject}
                onChange={(e) =>
                  setForm({ ...form, subject: e.target.value })
                }
                placeholder="Project collaboration / Hiring opportunity"
                className="w-full bg-input/50 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-neon-cyan focus:shadow-neon-cyan transition-all duration-300"
              />
            </div>

            <div>
              <label className="block font-mono text-xs text-muted-foreground uppercase tracking-wider mb-2">
                Message
              </label>

              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
                placeholder="Tell me about the opportunity or project..."
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