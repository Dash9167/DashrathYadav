import React from "react";
import "../style/portfolio.css";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import p4 from "../assets/p4.png";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const Portfolio2 = () => {
  const mode = useSelector((state) => state.theme.darkMode);

  // Array of project data
  const projects = [
    
    {
      img: p2,
      title: "Taja Khabar",
      description: "Web app designed to customize the category of news users want to read.",
      liveLink: "https://github.com/Dash9167/taza-Khabar-news-",
      codeLink: "https://github.com/Dash9167/taza-Khabar-news-",
    },
    {
      img: p3,
      title: "7up 7Down Game",
      description:
        "Users predict the dice sum, and if guesses are right, they win and earn points.",
      liveLink: "https://4883fw.csb.app/",
      codeLink: "https://github.com/Dash9167/7-up-7-Down-dice-Game-React.js-?tab=readme-ov-file",
    },
    {
      img: p4,
      title: "Clinic Management System",
      description: "Java web application designed to help the daily operations of a clinic.",
      liveLink: "https://github.com/Dash9167/Clinic-Management-System",
      codeLink: "https://github.com/Dash9167/Clinic-Management-System",
    },
    {
      img: p1,
      title: "Travel Website",
      description: "User can check the price of places they want to visit.",
      liveLink: "https://ddjpmx.csb.app/",
      codeLink: "https://github.com/Dash9167/travel-website-react-js",
    },
  ];

  return (
    <div
      className="portfolio2"
      style={{
        background: mode ? "#000" : "#fff",
      }}
    >
      <motion.div className="card-container">
        {projects.map((project, index) => (
          <motion.div
            className="card"
            key={index}
            initial={{ opacity: 0, y: 80 - index * 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 + index * 0.3 }}
          >
            <img src={project.img} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="card-buttons">
              <button
                className="btn"
                style={{
                  background: mode ? "rgb(232, 48, 48)" : "",
                  color: mode ? "#fff" : "",
                }}
                onClick={() => window.open(project.liveLink, "_blank")}
              >
                <span>Live</span>
              </button>
              <button
                className="btn"
                style={{
                  background: mode ? "rgb(232, 48, 48)" : "",
                  color: mode ? "#fff" : "",
                }}
                onClick={() => window.open(project.codeLink, "_blank")}
              >
                <span>Code</span>
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Portfolio2;
