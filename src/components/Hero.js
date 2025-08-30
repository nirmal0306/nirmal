import React from "react";
import SocialLinks from "./SocialLinks";

const Hero = () => {
  return (
    <section className="hero">
      <h1>Hi, I'm Nirmal Barot 👋</h1>
      <p>Full Stack Developer | MERN & MEAN | AI Enthusiast</p>
      <div className="btn-group">
        <a href="#projects" className="btn btn-primary">View Projects</a>
        <a href="/Nirmal-Barot-Resume.pdf"  download="Nirmal-Barot-Resume.pdf" className="btn btn-outline">Download Resume</a>
      </div>
      <SocialLinks />
    </section>
  );
};

export default Hero;
