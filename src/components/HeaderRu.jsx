import React from "react";
import { FaInstagram } from "react-icons/fa";
import "../app.css";
import Navbar from "../components/Navbar/Navbar";
import FeedBackRu from "../components/Card/FeedBackRu";
function HeaderRu() {
  return (
    <div className="container">
      <div className="text-nav">
        <h3>Мармарис отель</h3>
      </div>
      <div className="navbar-menu">
        <Navbar />
      </div>
      <div className="main">
        <div className="feedback-menu">
          <FeedBackRu />
        </div>
      </div>
      <div className="social-media">
        <section className="text-content">
          <p>Социальные сети:</p>
        </section>
        <section className="icons">
          <FaInstagram size={25} />
        </section>
      </div>
    </div>
  );
}

export default HeaderRu;
