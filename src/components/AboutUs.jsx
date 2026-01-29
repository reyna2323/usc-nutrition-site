import "./AboutUs.css";
import { FaEnvelope, FaTimes } from "react-icons/fa";
import { useState } from "react";

export default function AboutUs() {
  const board = [
    { name: "Deshan Weeraratne", role: "Co-President", email: "dweerara@usc.edu" },
    { name: "Mohamed Abdul-Saoud", role: "Vice President", email: "maboulsa@usc.edu" },
    { name: "Jeff Karnsomprot", role: "Secretary", email: "karnsomp@usc.edu" },
    { name: "George Zhou", role: "Treasurer", email: "treasurer@email.com" },
    { name: "Aditya Seetharaman", role: "Programming Chair", email: "aseethar@usc.edu" },
  ];

  const [activeMember, setActiveMember] = useState(null);

  return (
    <div className="about-wrapper">
      <section className="about-container">
        <div className="about-content">

          <div className="about-intro">
            <h1>About Us</h1>
            <p>
              The USC Food Science & Nutrition Club provides social and educational
              opportunities for students interested in nutrition and food science.
            </p>
          </div>

          <h2>Executive Board</h2>

          {/* Carousel */}
          <div className={`microscope-carousel ${activeMember ? "paused" : ""}`}>
            <div className="carousel-track">
              {[...board, ...board].map((member, i) => (
                <div
                  className="slide-card"
                  key={i}
                  onClick={() => setActiveMember(member)}
                >
                  <div className="scan-line"></div>

                  <div className="slide-label">
                    <span>{member.role}</span>
                  </div>

                  <div className="slide-glass">
                    <div className="slide-photo"></div>
                    <h3>{member.name}</h3>
                    <FaEnvelope />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* MODAL */}
          {activeMember && (
            <div className="slide-modal">
              <div className="modal-card">
                <button className="close-btn" onClick={() => setActiveMember(null)}>
                  <FaTimes />
                </button>

                <div className="modal-scan"></div>

                <div className="slide-label">
                  <span>{activeMember.role}</span>
                </div>

                <div className="slide-glass">
                  <div className="slide-photo large"></div>
                  <h2>{activeMember.name}</h2>
                  <a href={`mailto:${activeMember.email}`}>
                    <FaEnvelope />
                  </a>
                </div>
              </div>
            </div>
          )}

        </div>
      </section>
    </div>
  );
}