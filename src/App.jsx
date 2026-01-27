import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Splash from "./Splash";
import Navbar from "./Navbar";
import Home from "./Home";
import "./style.css";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <AnimatePresence>
      {showSplash ? (
        <Splash key="splash" onFinish={() => setShowSplash(false)} />
      ) : (
        <>
          <Navbar />
          <Home />
        </>
      )}
    </AnimatePresence>
  );
}

export default App;