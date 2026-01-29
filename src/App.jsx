import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Splash from "./Splash";
import Navbar from "./Navbar";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import "./style.css";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  if (showSplash) {
    return <Splash onFinish={() => setShowSplash(false)} />;
  }

  return (
    <>
      <Navbar />

      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;