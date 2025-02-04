import React from "react";
import "../style/contact.css";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";


const Contact = () => {
  const mode = useSelector((state) => state.theme.darkMode);

  return (
    <>
      <div className="contact" id="contact"
      style={{
        background: mode ? "#000" : "#fff",
        color: mode ? "#fff" : "#000",
      }}
      >
        <motion.div
          className="contactt"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          
          Contact Me
          <span>I want to hear from you</span>
          <p>
            Please fill out the form on this section to contact me ,Or call
            between 9:00am and 8:00pm Monday throungh Friday
          </p>
        </motion.div>

       
      </div>
     
    </>
  );
};

export default Contact;
