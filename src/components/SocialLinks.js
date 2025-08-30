import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const SocialLinks = () => {
  return (
    <div className="social-links">
      <a
        href="https://github.com/nirmal0306"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon"
      >
        <FaGithub size={28} />
      </a>
      <a
        href="https://www.linkedin.com/in/nirmalbarot/"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon"
      >
        <FaLinkedin size={28} color="#0A66C2" />
      </a>
      <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=nirmalbarot067@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="social-icon"
>
  <HiOutlineMail size={28} color="#EA4335" />
</a>

    </div>
  );
};

export default SocialLinks;
