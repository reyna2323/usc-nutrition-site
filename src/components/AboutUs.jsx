import "./AboutUs.css";
import { FaEnvelope } from "react-icons/fa";

export default function AboutUs() {
  const board = [
    { name: "President Name", role: "President", email: "president@email.com" },
    { name: "Vice President Name", role: "Vice President", email: "vp@email.com" },
    { name: "Secretary Name", role: "Secretary", email: "secretary@email.com" },
    { name: "Treasurer Name", role: "Treasurer", email: "treasurer@email.com" },
    { name: "Outreach Chair Name", role: "Outreach Chair", email: "outreach@email.com" },
  ];

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

          <h2>Executive Board</h2>

          {/* Carousel */}
          <div className="microscope-carousel">
            <div className="carousel-track">
              {[...board, ...board].map((member, i) => (
                <div className="slide-card" key={i}>

                  <div className="scan-line"></div>

                  <div className="slide-label">
                    <span>{member.role}</span>
                  </div>

                  <div className="slide-glass">
                    <div className="slide-photo"></div>
                    <h3>{member.name}</h3>
                    <a href={`mailto:${member.email}`}>
                      <FaEnvelope />
                    </a>
                  </div>

                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}