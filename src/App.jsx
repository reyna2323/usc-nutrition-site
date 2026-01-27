import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Splash from "./Splash";
import Navbar from "./Navbar";
import "./style.css";
import Hero from "./components/Hero";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <AnimatePresence>
      {showSplash ? (
        <Splash key="splash" onFinish={() => setShowSplash(false)} />
      ) : (
        <>
          <Navbar />
          <Hero />
        </>
      )}
    </AnimatePresence>
  );
}

export default App;