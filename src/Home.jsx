import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="container">

      <motion.section
        className="hero"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>USC Nutrition Club</h1>
        <p>qwertyuiop</p>
        <button>Join Us</button>
      </motion.section>

      <motion.section
        className="mission"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2>Our Mission</h2>
        <p>
        This club will provide social and educational opportunities for those interested in nutrition and food science. Some activities will include talks from professionals, demonstrations, and outreach combatting food insecurity right here in LA!
        </p>
      </motion.section>

    </div>
  );
}