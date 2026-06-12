import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Coffee, Award } from "lucide-react";

const stats = [
  { Icon: Briefcase, label: "Projects Built", value: "10+" },
  { Icon: Award, label: "Days of Coding", value: "180+" },
  { Icon: GraduationCap, label: "Degree", value: "B.Com" },
  { Icon: Coffee, label: "Tech Stack", value: "MERN" },
];

const About = () => {
  return (
    <section id="about" className="relative py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <span className="font-mono text-xs text-neon-cyan uppercase tracking-widest">
            01 — About
          </span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold tracking-tight">
            Engineer by craft, <span className="neon-text">creator</span> by
            passion.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="space-y-5 text-muted-foreground leading-relaxed text-lg"
          >
            <p>
              I'm a Full Stack Software Engineer with a passion for transforming
              complex problems into elegant, performant digital experiences. My
              journey started with a curiosity for how things work — and never
              stopped.
            </p>
            <p>
              I completed a{" "}
              <span className="text-foreground font-medium">
                Bachelor of Commerce
              </span>
              degree and later transitioned into software development through{" "}
              <span className="text-foreground font-medium">
                NxtWave’s CCBP 4.0 Intensive
              </span>{" "}
              program, where I built a strong foundation in frontend and backend
              technologies. Today, I develop end-to-end applications using
              React.js, Node.js, JavaScript, HTML, CSS, MongoDB, and REST APIs.
            </p>
            <p>
              I enjoy creating responsive interfaces, secure backend systems,
              and smooth user experiences. My recent work includes Razorpay
              payment integration, AWS EC2 deployment with Nginx reverse proxy
              and PM2 process management, and AI API integrations using Groq and
              Google Gemini. Through personal projects and consistent coding
              practice, I continue improving my problem-solving skills and
              development standards.
            </p>
            <p>
              When I'm not coding, you'll usually find me learning new
              technologies, refining projects, exploring AI tools, or working on
              ideas that combine design with engineering.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map(({ Icon, label, value }, i) => (
              <motion.div
                key={label}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group relative glass rounded-2xl p-6 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                <Icon className="w-7 h-7 text-neon-cyan mb-4 group-hover:text-neon-purple transition-colors duration-500" />
                <div className="font-display text-3xl font-bold">{value}</div>
                <div className="text-sm text-muted-foreground mt-1">
                  {label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
