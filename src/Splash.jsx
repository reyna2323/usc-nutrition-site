import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "./assets/logo.svg";

export default function Splash({ onFinish }) {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const textTimer = setTimeout(() => setShowText(true), 2200);
    const endTimer = setTimeout(() => onFinish(), 3800);

    return () => {
      clearTimeout(textTimer);
      clearTimeout(endTimer);
    };
  }, [onFinish]);

  return (
    <motion.div
      className="splash-container"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Multiple expanding ripples */}
      {[0, 1, 2].map((i) => (
        <motion.img
          key={i}
          src={logo}
          className="splash-ripple"
          initial={{ scale: 0.15, opacity: 0.5 }}
          animate={{ scale: 8, opacity: 0 }}
          transition={{
            duration: 2.5,
            delay: i * 0.4,
            ease: "easeOut"
          }}
        />
      ))}

      {/* Text emerges from center */}
      {showText && (
        <motion.div
          className="splash-text"
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <h1>USC Food SC’ience & Nutrition</h1>
        </motion.div>
      )}
    </motion.div>
  );
}