import { motion, useMotionValue, useSpring } from "framer-motion";
import "./Hero.css";
import logo from "../assets/logo.svg";

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // smooth spring motion
  const x = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const y = useSpring(mouseY, { stiffness: 100, damping: 20 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);

    e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  return (
    <div className="hero-container" onMouseMove={handleMouseMove}>
      
      {/* Ripple */}
      <motion.div
        className="ripple"
        style={{ x, y }}
        animate={{ scale: [1, 4], opacity: [0.4, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeOut" }}
      />

      {/* Floating Icons */}
      <motion.div className="icon apple" animate={{ y: [0, 15, 0] }} transition={{ repeat: Infinity, duration: 12 }} />
      <motion.div className="icon flask" animate={{ y: [0, -15, 0] }} transition={{ repeat: Infinity, duration: 14 }} />
      <motion.div className="icon brain" animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 11 }} />
      <motion.div className="icon leaf" animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 13 }} />

      {/* Text */}
      <motion.div
      className="hero-content"
      initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      transition={{ duration: 1.5 }}
    >
      {/* Logo */}
      <motion.img
      src={logo}
      alt="FSN Logo"
      className="hero-logo"
      animate={{
        scale: [1, 1.08, 1],
        filter: [
          "drop-shadow(0 0 8px rgba(255,255,255,0.4))",
          "drop-shadow(0 0 18px rgba(255,255,255,0.8))",
          "drop-shadow(0 0 8px rgba(255,255,255,0.4))"
        ]
      }}
      whileHover={{
        scale: 1.12,
        filter: "drop-shadow(0 0 25px rgba(255,255,255,0.9))"
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />

      <h2 className="welcome-text">Welcome to</h2>
      <h1>USC Food SC’ience & Nutrition Club</h1>
      <button className="glow-button">Learn More</button>
    </motion.div>
    </div>
  );
}