import React from "react";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaJava } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";
// import { FaBootstrap } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiMysql } from "react-icons/si";
// import { FaGitSquare } from "react-icons/fa";
import "../style/skill.css";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
const Skills = () => {

    const mode = useSelector((state) => state.theme.darkMode);

  return (
    <div className="skills"
    style={{
      background: mode ? "#000" : "#fff",
      color: mode ? "#fff" : "#000",
    }}
    >
      <div className="skill-sections">
        <div className="heading">Skills</div>
        <motion.div className="skill-section"
        initial={{opacity:0,y:40}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:1.5}}
        >
          <FaHtml5 className="skill-icon" style={{color:"#E44D26"}}/>
          <FaCss3 className="skill-icon" style={{color:"#1572B6"}} />
          <IoLogoJavascript className="skill-icon"  style={{color:"#F7DF1E"}}/>
          {/* <FaBootstrap className="skill-icon" /> */}
          <FaReact className="skill-icon"style={{color:"#61DAFB"}} />
          <FaWordpress className="skill-icon" style={{color:"#21759B"}}/>
        </motion.div>
        <motion.div className="skill-section"
         initial={{opacity:0,y:-40}}
         whileInView={{opacity:1,y:0}}
         transition={{duration:1.5}}
         >
          <TbBrandCSharp className="skill-icon" style={{color:"#9B4993"}}/>
          <FaJava className="skill-icon" style={{color:"#007396"}}/>
          <FaAws className="skill-icon" style={{color:"#FF9900"}}/>
          <SiMysql className="skill-icon" style={{color:"#4479A1"}}/>
          <DiMongodb className="skill-icon" style={{color:"#47A248"}}/>
          {/* <FaGitSquare className="skill-icon" /> */}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
