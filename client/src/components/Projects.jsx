// import React from "react";
// import Calculator from "./Calculator";

// function Projects() {
//   const projects = [
//     {
//       name: "ToDo App",
//       desc: "A simple task manager built with React",
//       link: "#",
//     },
//     {
//       name: "Weather App",
//       desc: "Weather data using API and React",
//       link: "#",
//     },
//     {
//       name: "Portfolio Site",
//       desc: "This portfolio built with React",
//       link: "#",
//     },
//   ];

//   return (
//     <section id="projects" className="projects" data-aos="fade-up">
//       <h2 className="section-title">🚀 Projects</h2>
//       <div className="project-list">
//         {projects.map((proj) => (
//           <div key={proj.name} className="project-card">
//             <h4>{proj.name}</h4>
//             <p>{proj.desc}</p>
//             <a href={proj.link} target="_blank" rel="noreferrer">
//               View Project
//             </a>
//           </div>
//         ))}
//       </div>
//       <div className="project-card">
//         <h3>🧮 React Calculator</h3>
//         <p>A responsive calculator built using React JS. Try it right here!</p>
//         <Calculator />
//       </div>
//     </section>
//   );
// }

// export default Projects;

// Projects.js
import React from "react";
// import './Projects.css';
import { Link } from "react-router-dom";

function Projects() {
  return (
    <section id="projects" className="projects" data-aos="fade-up">
      <h2 className="section-title">🚀 Featured Projects</h2>
      <div className="project-list">
        {/* 👉 First Card: Link to /calculator */}
        <div className="project-card">
          <h3>🧮 React Calculator</h3>
          <p>
            A responsive and fully functional calculator built using React JS.
            Supports basic arithmetic operations.
          </p>
          <Link to="/calculator" className="project-link">
            View Project
          </Link>
        </div>

        {/* 👉 Second Project Card */}
        {/* <div className="project-card">
          <h3>☁️ Weather App</h3>
          <p>
            Search for any city's weather using OpenWeatherMap API. Displays
            real-time temperature and condition.
          </p>
          <Link to="/weather">View Project</Link>
        </div> */}

        {/* 👉 Third Project Card */}
        <div className="project-card">
          <h3>✅ Creative To-Do App</h3>
          <p>
            A stylish and functional to-do app with animations, icons, and task
            management.
          </p>
          <Link to="/todo">View Project</Link>
        </div>

        <div className="project-card">
          <h3>🔢 Counter App</h3>
          <p>
            A clean and simple counter app with increase, decrease, and reset
            buttons — built in React.
          </p>
          <Link to="/counter">View Project</Link>
        </div>

        <div className="project-card">
          <h3>🧠 Quiz App</h3>
          <p>
            Test your knowledge with this interactive React quiz. Tracks score
            and supports restart!
          </p>
          <Link to="/quiz">View Project</Link>
        </div>
      </div>
    </section>
  );
}

export default Projects;
