import React from "react";
import "../style/experince.css";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const Experience = () => {
    const mode = useSelector((state) => state.theme.darkMode);
  
  const experience = [
    {
      name: "GB Digital",
      position: "Web Developer",
      date: "- December 2024",
      description: [
        "Create and Published the blog,Performed  SEO optimization to improve the site visibility",
        "igning, coding, and modifying websites to create visually appealing and user-friendly interfaces",
      ],
    },
    {
      name: "Magic Bus India",
      position: " Aws Tranning",
      date: "- September 2024",
      description: [
        "Proficient in core AWS services, including EC2, S3, RDS, and IAM, with a strong understanding of cloud architecture principles, scalability, and high availability.",
        "Skilled in implementing secure and cost-effective solutions, utilizing best practices in the AWS shared responsibility model, security, and operational excellence",
      ],
    },
  ];
  const certificate = [
    {
      name: "Amazon Web Service",
      position: "Aws re/Start Gradute ",
      date: "- December 2024",
      description: [
        "Knowledge of core AWS services like EC2, S3, and RDS with a focus on scalability and reliability.",
        " Hands-on experience in secure, cost-efficient cloud solutions and best practices.",
      ],
    },
    {
      name: "Amazon Web Service",
      position: "AWS Cloud Practitioner",
      date: "- January 2025",
      description: [
        "foundational knowledge of AWS services, cloud concepts, and security",
        "Skilled in implementing secure and cost-effective solutions, utilizing best practices in the AWS shared responsibility model, security, and operational excellence",
      ],
    },
  ];
  return (
    <div className="experience" id="Experience"
    style={{
      background: mode ? "#000" : "#fff",
      color: mode ? "#fff" : "#000",
    }}
    >
      <div className="experience-section">
        <h1>Experience</h1>
        {experience.map((item, index) => (
          <motion.div key={index} className="experience-box"
          initial={{opacity:0,y:40}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:1.3}}

          style={{
            background: mode ? "#000" : "#fff",
            color: mode ? "#fff" : "#000",
          }}
          >
            <h2>{item.name}</h2>
            <div className="expo"><h3>{item.position}</h3>
            <span>{item.date}</span></div>
            <ul>
              {item.description.map((desc,i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
      <div className="certificate-section">
        <h1>Certificate</h1>
        {certificate.map((item, index) => (
          <motion.div key={index} className="certificate-box"
          style={{
            background: mode ? "#000" : "#fff",
            color: mode ? "#fff" : "#000",
          }}
          initial={{opacity:0,y:40}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:1.3}}
          >
            <h2>{item.name}</h2>
            <div className="expo">
            <h3>{item.position}</h3>
            <span>{item.date}</span>
            </div>
           
           <ul>
            {
              item.description.map((desc,i)=>(
                <li key={i}>{desc}</li>
              ))
            }
           </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
