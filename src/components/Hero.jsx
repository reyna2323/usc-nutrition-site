import { motion, animate, useMotionValue, useSpring } from "framer-motion";
import { useRef, useState } from "react";
import "./Hero.css";
import logo from "../assets/logo.svg";

export default function Hero() {
  const containerRef = useRef(null);
  const [page, setPage] = useState(0);
  const [arrowActive, setArrowActive] = useState(false);

  const scrollY = useMotionValue(0);
  const threshold = 140;

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const x = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const y = useSpring(mouseY, { stiffness: 100, damping: 20 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;

    mouseX.set(mx);
    mouseY.set(my);

    e.currentTarget.style.setProperty("--x", `${mx}px`);
    e.currentTarget.style.setProperty("--y", `${my}px`);
  };

  const handleWheel = (e) => {
    e.preventDefault();

    scrollY.set(scrollY.get() + e.deltaY);
    setArrowActive(true);

    setTimeout(() => setArrowActive(false), 500);

    if (scrollY.get() > threshold && page === 0) {
      goToMission();
    }

    if (scrollY.get() < -threshold && page === 1) {
      goToHero();
    }
  };

  const goToMission = () => {
    setPage(1);
    scrollY.set(0);
    animate(containerRef.current, { y: "-100vh" }, { duration: 1, ease: "easeInOut" });
  };

  const goToHero = () => {
    setPage(0);
    scrollY.set(0);
    animate(containerRef.current, { y: "0vh" }, { duration: 1, ease: "easeInOut" });
  };

  return (
    <div className="hero-wrapper" onWheel={handleWheel}>
      <motion.div className="hero-stack" ref={containerRef}>
        
        {/* HERO SCREEN */}
        <section className="hero-container" onMouseMove={handleMouseMove}>
          
          {/* Ripple */}
          <motion.div
          className="ripple"
          style={{ left: x, top: y }}
            animate={{ scale: [1, 4], opacity: [0.4, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeOut" }}
          />

          <motion.div
            className="hero-content"
            initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.5 }}
          >
            <motion.img
              src={logo}
              alt="Logo"
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
              transition={{ duration: 4, repeat: Infinity }}
            />

            <h2 className="welcome-text">Welcome to</h2>
            <h1>USC Food SC’ience & Nutrition Club</h1>
          </motion.div>

          <button
            className={`arrow down ${arrowActive ? "active" : ""}`}
            onClick={goToMission}
          >
            ↓
          </button>
        </section>

        {/* MISSION SCREEN */}
        <section className="mission-screen">
          <button
            className={`arrow up ${arrowActive ? "active" : ""}`}
            onClick={goToHero}
          >
            ↑
          </button>

          <motion.div
            className="mission-content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: page === 1 ? 1 : 0, y: page === 1 ? 0 : 40 }}
            transition={{ duration: 1 }}
          >
            <h1>Our Mission</h1>
            <p>
              This club will provide social and educational opportunities for those interested in nutrition and food science.
              Some activities will include talks from professionals, demonstrations, and outreach combatting food insecurity right here in LA!
            </p>

            <button className="mission-button">
              Learn More About Us
            </button>
          </motion.div>
        </section>

      </motion.div>
    </div>
  );
}