import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
  return (
    <nav className="d-flex justify-content-center navbar navbar-expand-lg bg-primary">
      {/*<h1>Nick's Personal</h1> */}
      <img src={process.env.PUBLIC_URL + "/assets/images/personalLogo.png"} alt="logo" className="logo" />
      <Link style={{ color: "white" }} className="navbar-brand" to="/">
        Home
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              style={{ color: "white" }}
              to="/"
              className={
                window.location.pathname === "/About" ||
                window.location.pathname === "/about"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              style={{ color: "white" }}
              to="/work"
              className={
                window.location.pathname === "/work"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Work
            </Link>
          </li>
          <li className="nav-item">
            <a
              style={{ color: "white" }}
              className="nav-link"
              href={process.env.PUBLIC_URL + "/assets/Resume.pdf"}
            >
              Resume
            </a>
          </li>
          <li className="nav-item">
            <a
              style={{ color: "white" }}
              className="nav-link"
              href="https://github.com/pettisnick"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </li>
          <li className="nav-item">
            <a
              style={{ color: "white" }}
              className="nav-link"
              href="https://www.linkedin.com/in/nickpettis/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin
            </a>
          </li>
        </ul>
      </div>
      <img
        src={process.env.PUBLIC_URL + "/assets/Images/logoBackwards.png"}
        alt="logo"
        className="backLogo"
      />
    </nav>
  );
}

export default Navbar;
