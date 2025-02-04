import React from "react";
import "../style/about.css";
import dash from "../assets/about2-removebg-preview.png";
import { FaArrowRight } from "react-icons/fa6";
import {easeOut, motion} from 'framer-motion'
import { useSelector } from "react-redux";


const About = () => {
    const mode = useSelector((state) => state.theme.darkMode);
  
  return (
    <div className="about" id="about"
    style={{
      background: mode ? "#000" : "#fff",
      color: mode ? "#fff" : "#000",
    }}
    >
      <div className="about1">
        <div className="about-img">
          <motion.img src={dash} alt=""
            initial={{opacity:0 ,x:-50}}
            whileInView={{opacity:1,x:0}}
            viewport={{amount:0.5}}
            transition={{duration:1.1 ,ease:easeOut}}
          />
        </div>
      </div>
      <motion.div className="about2"
       initial={{opacity:0 ,x:-50}}
       whileInView={{opacity:1,x:0}}
       viewport={{amount:0.5}}
       transition={{duration:1.1 ,ease:easeOut}}
      >
        <h2>I'm a Web Developer</h2>
        <span>I Can Design Anything You Want</span>
        <p>
          Hello there! I'm a web developer, and I'm very passionate and
          dedicated to my work. With 2 years' experience as a professional web
          developer, I have acquired the skills and knowledge necessary to make
          your project a success. I enjoy every step of the devloping process, from
          discussion and collaboration.
        </p>
        <a href="#contactform"
         style={{
          background: mode ? "#000" : "#fff",
          color: mode ? "#fff" : "#000",
        }}
        >Hire Me <FaArrowRight/></a>
      </motion.div>
    </div>
  );
};

export default About;
