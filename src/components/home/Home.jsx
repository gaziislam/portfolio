import React from "react";
import { FaHome } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaSuitcase } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaPenFancy } from "react-icons/fa";
import "./home.css";

const Home = () => {
  return (
    <div className="home-bg">
      <div className="home-wraper">
        <div className="portfolio-img">
          {/* <img src="./home-assets/hardy.png" alt="" /> */}
        </div>
        <div className="home-text">
          <h1>- Hi, I'm Abhishek</h1>
          <p>Software Developer</p>
          <p>
            I'm a Tunisian based web designer & front‑end developer focused on
            crafting clean & user‑friendly experiences, I am passionate about
            building excellent software that improves the lives of those around
            me.
          </p>
          <button>More About Me</button>
        </div>
        <div className="menu">
          <ul>
            <li>
              <FaHome />
            </li>
            <li>
              <FaUserAlt />
            </li>
            <li>
              <FaSuitcase />
            </li>
            <li>
              <FaEnvelope />
            </li>
            <li>
              <FaPenFancy />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
