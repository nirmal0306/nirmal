// src/components/Projects.jsx
import React from 'react';
import './projects.css';

const Projects = ({ darkMode }) => {
  const projects = [
    {
      title: 'Society Management System',
      description: 'Society Management system using Angular (MEAN).',
      link: 'https://github.com/nirmal0306/SMS.git',
      type: 'Full Stack Project',
    },
    {
      title: 'Event Management System',
      description: 'Event management system made by React (MERN).',
      link: 'https://github.com/nirmal0306/EVENT_MANAGEMENT_SYSTEM.git',
      type: 'Full Stack Project',
    },
    {
      title: 'Lib-X Management System',
      description: 'Library Management system using Django.',
      link: 'https://github.com/nirmal0306/Lib-x_management_system.git',
      type: 'Full Stack Project',
    },
    
    {
      title: 'Kavi Narmad Central Library',
      description: 'A library management project made with Laravel.',
      link: 'https://github.com/nirmal0306/Lib.git',
      type: 'Full Stack Project',
    },
    {
      title: 'Cricket',
      description: 'Cricket-score mobile application using Kotlin.',
      link: 'https://github.com/nirmal0306/Cricket-Score.git',
      type: 'Android Project',
    },
    {
      title: 'Admission Bot',
      description: 'Admission Bot is created by python.',
      link: 'https://github.com/nirmal0306/Addmission_Bot.git',
      type: 'Data Science Project',
    },
    {
      title: 'Chess',
      description: 'Chess is created by python a fun game with uniquess.',
      link: 'https://github.com/nirmal0306/nirmal_chess.git',
      type: 'Python Project',
    },
    {
      title: 'Customer Churn Prediction',
      description: 'Customer Churn Prediction using python / jupyter book.',
      link: 'https://github.com/nirmal0306/customer-churn-prediction.git',
      type: 'Data Science Project',
    },
  ];

  return (
    <section id="projects" className={`projects-section ${darkMode ? 'dark' : 'light'}`}>
      <h2 className="section-title">🚀 My Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <br/>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project
            </a>
             <span className={`project-type ${darkMode ? 'dark' : 'light'}`}>
                {project.type}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;