import React from "react";
import "../style/home.css";
import { FaDownload } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import dash from "../assets/dash_Nero_AI_Photo_Face-removebg-preview.png";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";


const Home = () => {
  const resume="/Resume.pdf"
  const mode = useSelector((state) => state.theme.darkMode);

  return (
    <motion.div
      className="home"
      id="home"
      style={{
        background: mode ? "#000" : "#fff",
        color: mode ? "#fff" : "#000",
      }}
    >
      <motion.div
        className="home1"
        initial={{ opacity: 0, x: -50 }} // Start invisible and small
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h2>Hello I'm</h2>
        <h1>Dashrath Yadav </h1>
        <h3>A Creative Web Developer From Mumbai</h3>
        <p>
          {" "}
          I'm creative Developer based in maharashtra,and I'm very passionate
          and dedicated to my work.
        </p>
        <a href={resume} download='Dashrath_Yadav_Resume.pdf'>
        <button>
          <span>Download CV</span>
          <FaDownload className="icon-download" />
        </button>
        </a>
        <motion.div className="line">
          <a
            href="https://www.linkedin.com/in/dashrath-yadav-432a0124a/"
            style={{
              background: mode ? "#000" : "#fff",
              color: mode ? "#fff" : "#000",
              // border: mode ? "2px solid #fff " : "2px solid #000 ",
            }}
          >
            <FaLinkedinIn
              className="socail"
              style={{
                border: mode ? "2px solid #fff " : "2px solid #000 ",
              }}
            />
          </a>
          <a
            href="https://www.instagram.com/hritikx__45/profilecard/?igsh=d2cyc2hldDFzbng1"
            style={{
              background: mode ? "#000" : "#fff",
              color: mode ? "#fff" : "#000",
              // border: mode ? "2px solid #fff " : "2px solid #000 ",
            }}
          >
            <FaInstagram
              className="socail"
              style={{
                border: mode ? "2px solid #fff " : "2px solid #000 ",
              }}
            />
          </a>
          <a
            href="https://github.com/Dash9167"
            style={{
              background: mode ? "#000" : "#fff",
              color: mode ? "#fff" : "#000",
              // border: mode ? "2px solid #fff " : "2px solid #000 ",
            }}
          >
            <IoLogoTwitter
              className="socail"
              style={{
                border: mode ? "2px solid #fff " : "2px solid #000 ",
              }}
            />
          </a>
          <a
            href="https://github.com/Dash9167"
            style={{
              background: mode ? "#000" : "#fff",
              color: mode ? "#fff" : "#000",
              // border: mode ? "2px solid #fff " : "2px solid #000 ",
            }}
          >
            <FaGithub
              className="socail"
              style={{
                border: mode ? "2px solid #fff " : "2px solid #000 ",
              }}
            />
          </a>
        </motion.div>
      </motion.div>
      <div className="home2">
        <div className="dash-img">
          <motion.img
            src={dash}
            alt=""
            initial={{ opacity: 0, scale: 0.8 }} // Start invisible and small
            whileInView={{ opacity: 1, scale: 1 }} // Animate when in view
            transition={{ duration: 1 }}

            style={{background:mode?"aliceblue" :"#000"}}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
