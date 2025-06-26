import React from "react";
import "./Hero.css";
function Hero() {
  return (
    <section id="about" className="hero" data-aos="fade-up">
      <div className="hero-content">
        <div className="hero-text">
          <h2>
            Hi, I'm <span className="highlight">Ilansezhiane A</span>
          </h2>
          <p>
            A dedicated front-end developer with <strong>2 years</strong> of
            experience in building intuitive and high-performing web interfaces
            using <strong>React JS</strong>. I also have{" "}
            <strong>2 years</strong>
            of experience working with <strong>Python</strong> in the{" "}
            <strong>Odoo framework</strong>, giving me a well-rounded
            perspective of application development. With an overall{" "}
            <strong>4 years</strong> in the IT industry, I am committed to
            delivering beautiful and functional user experiences while seeking
            opportunities to grow as a front-end specialist.
          </p>
        </div>
        {/* <div className="hero-image">
          <img src="/profile.png" alt="Ilansezhiane A" />
        </div> */}
      </div>
    </section>
  );
}

export default Hero;
