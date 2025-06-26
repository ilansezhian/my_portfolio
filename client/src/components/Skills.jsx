import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJs,
  FaReact,
  FaGitAlt,
  FaPython,
} from "react-icons/fa";

const skillList = [
  { name: "HTML", icon: <FaHtml5 color="#e34c26" /> },
  { name: "CSS", icon: <FaCss3Alt color="#264de4" /> },
  { name: "Bootstrap", icon: <FaBootstrap color="#563d7c" /> },
  { name: "JavaScript", icon: <FaJs color="#f7df1e" /> },
  { name: "React JS", icon: <FaReact color="#61dafb" /> },
  { name: "Redux", icon: <FaReact color="#764abc" /> },
  { name: "GitLab", icon: <FaGitAlt color="#fc6d26" /> },
  { name: "React Bootstrap", icon: <FaBootstrap color="#6f42c1" /> },
  { name: "Python", icon: <FaPython color="#306998" /> },
];

function Skills() {
  return (
    <section id="skills" className="skills" data-aos="fade-up">
      <h2 className="section-title">💼 My Technical Skills</h2>
      <div className="skill-grid">
        {skillList.map((skill) => (
          <div key={skill.name} className="skill-card">
            <div className="icon">{skill.icon}</div>
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
