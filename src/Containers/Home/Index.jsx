import React, { useState, useEffect } from "react";
import ParticlesBackground from "../../utils/Particles";
import { useNavigate } from "react-router-dom"; // ✅ import
import "./Style.scss";

const Home = () => {
  const [line1, setLine1] = useState("");
  const [line2, setLine2] = useState("");
  const [startLine2, setStartLine2] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const navigate = useNavigate(); // ✅ initialize

  const text1 = "Hello, I am Dagnew Mekasha";
  const text2 = "I am a Frontend Developer";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < text1.length) {
        setLine1(text1.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
        setTimeout(() => {
          setStartLine2(true);
        }, 3000);
      }
    }, 60);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!startLine2) return;
    let i = 0;
    const timer = setInterval(() => {
      if (i < text2.length) {
        setLine2(text2.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
        setTimeout(() => {
          setShowButton(true);
        }, 500);
      }
    }, 60);
    return () => clearInterval(timer);
  }, [startLine2]);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "calc(100vh - 80px)",
      }}
    >
      <ParticlesBackground />
      <section id="home" className="home">
        <div className="home__text-wraper">
          <h1 style={{ display: "block" }}>{line1}</h1>
          <h1 style={{ display: "block" }}>{line2}</h1>
          <div className={`home__btn-wrapper ${showButton ? "show" : ""}`}>
            <button
              className="home__btn"
              onClick={() => navigate("/Contact")} // ✅ navigates to Contact
            >
              Hire Me
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
