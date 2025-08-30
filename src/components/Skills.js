import React from "react";
import {
  FaReact,
  FaAngular,
  FaNodeJs,
  FaPython,
  FaWordpress,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiMongodb,
  SiDjango,
  SiJavascript,
  SiMysql,
  SiC,
} from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "HTML", icon: <FaHtml5 color="#E34F26" size={30} /> },
    { name: "CSS", icon: <FaCss3Alt color="#1572B6" size={30} /> },
    { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" size={30} /> },
    { name: "React", icon: <FaReact color="#61DBFB" size={30} /> },
    { name: "Angular", icon: <FaAngular color="#DD0031" size={30} /> },
    { name: "Node.js", icon: <FaNodeJs color="#3C873A" size={30} /> },
    { name: "MongoDB", icon: <SiMongodb color="#4DB33D" size={30} /> },
    { name: "Python", icon: <FaPython color="#3776AB" size={30} /> },
    { name: "Django", icon: <SiDjango color="#092E20" size={30} /> },
    { name: "C", icon: <SiC color="#00599C" size={30} /> },
    { name: "MySQL", icon: <SiMysql color="#4479A1" size={30} /> },
    { name: "WordPress", icon: <FaWordpress color="#21759B" size={30} /> },
  ];

  return (
    <section className="skills-section" id="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            {skill.icon}
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
