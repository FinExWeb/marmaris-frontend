import React from "react";
import { FaInstagram } from "react-icons/fa";
import "../app.css";
import Navbar from "../components/Navbar/Navbar";
import FeedBackEng from "../components/Card/FeedBackEng";
function HeaderEng() {
  return (
    <div className="container">
      <div className="text-nav">
        <h3>Marmaris hotel</h3>
      </div>
      <div className="navbar-menu">
        <Navbar />
      </div>
      <div className="main">
        <div className="feedback-menu">
          <FeedBackEng />
        </div>
      </div>
      <div className="social-media">
        <section className="text-content">
          <p>Social networks:</p>
        </section>
        <section className="icons">
          <FaInstagram size={25} />
        </section>
      </div>
    </div>
  );
}

export default HeaderEng;
