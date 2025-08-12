import React from "react";
import "../styles/home.css";
import devImage from "../images/cartoon-removebg-preview.png";

import { FaHome, FaRegStickyNote, FaGraduationCap, FaRegAddressCard, FaPhoneAlt } from "react-icons/fa";

function Home() {
  return (
    <div className="whole-page">
      <div className="left-section">
        <h1 className="name">MANIMOZHIYAN</h1>
        <h2 className="role">FULL STACK WEB DEVELOPER</h2>
        <p className="about">
          I’m a passionate Full Stack Developer specializing in building dynamic,
          responsive, and scalable applications. With experience in React,
          Java/Spring Boot, Python, and MySQL, I create efficient digital
          solutions that combine functionality with modern design.
        </p>
      </div>

      <div className="right-section">
        <img src={devImage} alt="Developer" className="dev-img" />

        <div className="icon-bar">
          <FaHome className="icon" />
          <FaRegStickyNote className="icon" />
          <FaGraduationCap className="icon" />
          <FaRegAddressCard className="icon" />
          <FaPhoneAlt className="icon" />
        </div>
      </div>
    </div>
  );
}

export default Home;
