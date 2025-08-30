import React from "react";
import { Link } from "react-router-dom";
const Certificates = () => {
  const certs = [
    {
      title: "IBM Full Stack Software Developer",
      provider: "Coursera",
      link: "https://www.coursera.org/account/accomplishments/specialization/O55TABAI1AF2",
    },
    {
      title: "AWS Generative AI Applications",
      provider: "Coursera",
      link: "https://www.coursera.org/account/accomplishments/specialization/YIN5C5ITZPXD",
    },
    {
      title: "IBM AI Developer",
      provider: "Coursera",
      link: "https://www.coursera.org/account/accomplishments/specialization/EE57OLBLNYF1",
    },
    {
      title: "Generative AI for Software Developers",
      provider: "Coursera",
      link: "https://www.coursera.org/account/accomplishments/specialization/N8HB5KKEO6LY",
    },
    {
      title: "Generative AI Fundamentals",
      provider: "Coursera",
      link: "https://www.coursera.org/account/accomplishments/specialization/NTI540R1MQ6D",
    },
    {
      title: "Prompt Engineering",
      provider: "Coursera",
      link: "https://www.coursera.org/account/accomplishments/specialization/LFSCP021K53C",
    },
    {
      title: "Full Stack Application Development Capstone Project",
      provider: "Coursera",
      link: "https://www.coursera.org/account/accomplishments/verify/U8K7W1QBYL7M",
    },
    {
      title: "Developing Back-End Apps with Node.js and Express",
      provider: "Coursera",
      link: "https://www.coursera.org/account/accomplishments/verify/YYCQRLX2FU0X",
    },
    {
      title: "Google Cloud Database Engineer",
      provider: "Coursera",
      link: "https://www.coursera.org/account/accomplishments/specialization/36SIVMVQ6BKI",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-md">
            <h1 className="text-xl font-bold"><Link to="/">Nirmal Barot</Link></h1>
            <div className="space-x-6">
              <a href="/" className="hover:text-teal-400">Home</a>
              <Link to="/certificates" className="hover:text-teal-400">Certificates</Link>
            </div>
          </nav>
    <section className="cert-section" id="certificates">
      <h2>Certificates</h2>
      <div className="cert-grid">
        {certs.map((cert, index) => (
          <div key={index} className="cert-card">
            <h3>{cert.title}</h3>
            <p>{cert.provider}</p>
            <a href={cert.link} target="_blank" rel="noopener noreferrer">
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
};

export default Certificates;
