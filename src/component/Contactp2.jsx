import React, { useRef, useState } from "react";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import "../style/contact2.css";
import { useSelector } from "react-redux";

const Contactp2 = () => {
  const mode = useSelector((state) => state.theme.darkMode);
  const form = useRef();

  // State to handle the success/error message
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState(""); // 'success' or 'error'

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qx8eszn", // Your EmailJS service ID
        "template_6go0z4s", // Your EmailJS template ID
        form.current,
        "Pjy0Prq7UnX9eeyCS" // Your EmailJS public key
      )
      .then(
        (result) => {
          console.log(result.text);
          setAlertMessage("✅ Your message has been sent successfully!");
          setAlertType("success");
        },
        (error) => {
          console.log(error.text);
          setAlertMessage("❌ Failed to send your message. Please try again.");
          setAlertType("error");
        }
      );

    e.target.reset(); // Reset the form fields
    setTimeout(() => setAlertMessage(""), 8000); // Hide message after 3 sec
  };

  return (
    <div
      className="container-contact"
      style={{
        position: "relative",
        background: mode ? "#000" : "#fff",
        color: mode ? "#fff" : "#000",
      }}
    >
      {/* Left Section */}
      <motion.div
        className="contact1"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="icon-box">
          <FaLocationDot className="contact-icon" />
          <div className="box">
            <h3>Address</h3>
            Mumbai, Maharashtra
          </div>
        </div>
        <div className="icon-box">
          <MdEmail className="contact-icon" />
          <div className="box">
            <h3>Mail</h3>
            dashrathy2003@gmail.com
          </div>
        </div>
        <div className="icon-box">
          <FaPhone className="contact-icon" />
          <div className="box">
            <h3>Phone</h3>
            +91 9167583031
          </div>
        </div>
      </motion.div>

      {/* Right Section */}
      <motion.div
        className="contact2"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ amount: 0.5 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <form ref={form} onSubmit={sendEmail} id="contactform1">
          <div className="form-row">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="form-row">
            <input
              type="number"
              name="user_number"
              placeholder="Your Number"
              required
            />
            <input type="text" name="subject" placeholder="Company" required />
          </div>
          <div className="form-row">
            <textarea
              name="message"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          {/* Message Display (Above Button) */}
          {alertMessage && (
            <p
              style={{
                color: alertType === "success" ? "green" : "red",
                fontSize: "14px",
                marginBottom: "5px",
              }}
            >
              {alertMessage}
            </p>
          )}
          <div className="form-row">
            <button
              type="submit"
              style={{
                background: mode ? "rgb(232, 48, 48)" : "",
                color: mode ? "#fff" : "",
              }}
            >
              <span>Message Now</span>
            </button>
          </div>
        </form>
      </motion.div>

      <motion.div
        className="contact22"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.5 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <form ref={form} onSubmit={sendEmail} id="contactform">
          <div className="form-row">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="form-row">
            <input
              type="number"
              name="user_number"
              placeholder="Your Number"
              required
            />
            <input type="text" name="subject" placeholder="Company" required />
          </div>
          <div className="form-row">
            <textarea
              name="message"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          {/* Message Display (Above Button) */}
          {alertMessage && (
            <p
              style={{
                color: alertType === "success" ? "green" : "red",
                fontSize: "14px",
                marginBottom: "5px",
              }}
            >
              {alertMessage}
            </p>
          )}
          <div className="form-row">
            <button
              type="submit"
              style={{
                background: mode ? "rgb(232, 48, 48)" : "",
                color: mode ? "#fff" : "",
              }}
            >
              <span>Message Now</span>
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default Contactp2;
