import "./AboutUs.css";
import { FaEnvelope, FaTimes } from "react-icons/fa";
import { useState } from "react";

export default function AboutUs() {
  const board = [
    { name: "Deshan Weeraratne", role: "Co-President", email: "dweerara@usc.edu" },
    { name: "Mohamed Abdul-Saoud", role: "Co-President", email: "maboulsa@usc.edu" },
    { name: "Jeff Karnsomprot", role: "Secretary", email: "karnsomp@usc.edu" },
    { name: "George Zhou", role: "Treasurer", email: "gwzhou@usc.edu" },
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
            <div className="slide-modal" onClick={() => setActiveMember(null)}>
              <div className="modal-card" onClick={(e) => e.stopPropagation()}>

                <div className="modal-scan"></div>

                <button className="close-btn" onClick={() => setActiveMember(null)}>
                  <FaTimes />
                </button>

                {/* LEFT SIDE */}
                <div className="modal-info">
                  <div className="slide-label">
                    <span>{activeMember.role}</span>
                  </div>

                  <div className="modal-text">
                    <h2>{activeMember.name}</h2>

                    <div className="modal-email">
                      <FaEnvelope />
                      <span>{activeMember.email}</span>
                    </div>
                  </div>
                </div>

                {/* RIGHT SIDE IMAGE */}
                <div className="modal-photo"></div>

              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}