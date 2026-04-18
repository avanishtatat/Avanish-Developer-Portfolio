import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const LoadingScreen = () => {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1400);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] bg-background flex items-center justify-center"
        >
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="absolute w-96 h-96 rounded-full bg-gradient-primary opacity-20 blur-3xl animate-glow-pulse" />

          <div className="relative text-center">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="font-display text-5xl sm:text-7xl font-bold tracking-tight"
            >
              <span className="neon-text">{"<dev/>"}</span>
            </motion.div>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.2, delay: 0.2, ease: "easeInOut" }}
              className="h-0.5 bg-gradient-primary mt-6 rounded-full mx-auto max-w-[200px]"
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-4 font-mono text-xs text-muted-foreground uppercase tracking-widest"
            >
              Initializing experience...
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
