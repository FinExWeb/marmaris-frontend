import React from "react";
import { FaInstagram } from "react-icons/fa";
import "../app.css";
import Navbar from "../components/Navbar/Navbar";
import FeedBack from "../components/Card/FeedBack";
function Header() {
  return (
    <div className="container">
      <div className="text-nav">
        <h3>marmaris hotel</h3>
      </div>
      <div className="navbar-menu">
        <Navbar />
      </div>
      <div className="main">
        <div className="feedback-menu">
          <FeedBack />
        </div>
      </div>
      <div className="social-media">
        <section className="text-content">
          <p>Ijtimoiy tarmoqlar:</p>
        </section>
        <section className="icons">
          <FaInstagram size={25} />
        </section>
      </div>
    </div>
  );
}

export default Header;
