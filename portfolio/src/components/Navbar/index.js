import React from 'react';
import { Link } from "react-router-dom";
import "./style.css";


function Navbar() {
	return (
			<nav className="d-flex justify-content-center navbar navbar-expand-lg bg-primary">
        {/*<h1>Nick's Personal</h1> */}
      <img src="Images/personallogo.png" alt="logo" className="logo" />
      <Link style={{ color: "white" }}className="navbar-brand" to="/">
        Personal Portfolio
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link style={{ color: "white" }}
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/about"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link style={{ color: "white" }}
              to="/work"
              className={window.location.pathname === "/work" ? "nav-link active" : "nav-link"}
            >
              Work 
            </Link>
          </li>
          <li className="nav-item">
            <Link style={{ color: "white" }}
              to="/resume"
              className={window.location.pathname === "/resume" ? "nav-link active" : "nav-link"}
            >
              Resume 
            </Link>
          </li>
          <li className="nav-item">
            <Link style={{ color: "white" }}
              to="http://www.github.com/pettisnick"
              className={window.location.pathname === "http://www.github.com/pettisnick" ? "nav-link active" : "nav-link"}
            >
              Github 
            </Link>
          </li>
		  </ul>
		  </div>
      <img src="Images/logoBackwards.png" alt="logo" className="backLogo" />
		  </nav>
		);
			}


export default Navbar;