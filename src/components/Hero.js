import React from "react";
import Swal from "sweetalert2";
import SocialLinks from "./SocialLinks";

const Hero = () => {
  const handleDownload = (e) => {
    e.preventDefault(); // prevent default <a> action

    Swal.fire({
      title: "Downloading...",
      text: "Your resume will be downloaded shortly 🎉",
      icon: "success",
      timer: 1500, // closes after 2 seconds
      showConfirmButton: false,
      timerProgressBar: true,
    });

    // Trigger download after delay (same as timer)
    setTimeout(() => {
      const link = document.createElement("a");
      link.href = "/Nirmal-Barot-Resume.pdf";
      link.download = "Nirmal-Barot-Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 2000);
  };

  return (
    <section className="hero">
      <h1>Hi, I'm Nirmal Barot 👋</h1>
      <p>Full Stack Developer | MERN & MEAN | AI Enthusiast</p>
      <div className="btn-group">
        <a href="#projects" className="btn btn-primary">View Projects</a>
        <a
          href="/Nirmal-Barot-Resume.pdf"
          className="btn btn-outline"
          onClick={handleDownload}
        >
          Download Resume
        </a>
      </div>
      <SocialLinks />
    </section>
  );
};

export default Hero;
