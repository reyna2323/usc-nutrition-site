import "./AboutUs.css";
import { FaEnvelope } from "react-icons/fa";

export default function AboutUs() {
  return (
    <div className="about-wrapper">
      <section className="about-container">

        <div className="about-content">

          {/* Intro */}
          <div className="about-intro">
            <h1>About Us</h1>
            <p>
              The USC Food Science & Nutrition Club provides social and educational
              opportunities for students interested in nutrition and food science.
              Our goal is to explore the science behind food, promote wellness, and
              engage with the Los Angeles community through outreach and service.
            </p>
          </div>

          {/* Board */}
          <h2>Executive Board</h2>

          <div className="board-grid">
            {[
              { name: "President Name", email: "president@email.com" },
              { name: "Vice President Name", email: "vp@email.com" },
              { name: "Secretary Name", email: "secretary@email.com" },
              { name: "Treasurer Name", email: "treasurer@email.com" },
              { name: "Outreach Chair Name", email: "outreach@email.com" },
            ].map((member, i) => (
              <div className="board-card" key={i}>
                <div className="photo-placeholder"></div>
                <h3>{member.name}</h3>
                <a href={`mailto:${member.email}`}>
                  <FaEnvelope />
                </a>
              </div>
            ))}
          </div>

        </div>

      </section>
    </div>
  );
}