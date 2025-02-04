import React from "react";
import "../style/portfolio.css";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";


const Portfolio = () => {
  const mode = useSelector((state) => state.theme.darkMode);

  return (
    <>
      <div className="Portfolio" id="portfolio"
      style={{
        background: mode ? "#000" : "#fff",
        color: mode ? "#fff" : "#000",
      }}
      >
        <motion.div
          className="port"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <div className="heading">Portfolio</div>
          <div className="sub-heading">My Amazing Works</div>
          <p>
            Most commom methods for Developing website that works well on <br />
            both desktop as well as mobile responsive and adaptive design
          </p>
        </motion.div>
       

      </div>
    </>
  );
};

export default Portfolio;

// rgb(232, 48, 48)
