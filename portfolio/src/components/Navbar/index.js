import React from 'react';
import { Link } from "react-router-dom";

function Navbar() {
	return (
			<nav className="navbar navbar-expand-lg navbar-light bg-primary">
        {/*<h1>Nick's Personal</h1> */}
      <img src="assets/personallogo.png" alt="logo" className="logo" />
      <Link className="navbar-brand" to="/">
        Personal Portfolio
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
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
            <Link
              to="/work"
              className={window.location.pathname === "/work" ? "nav-link active" : "nav-link"}
            >
              Work 
            </Link>
          </li>
		  </ul>
		  </div>
      <img src="Assets/logoBackwards.png" alt="logo" className="backlogo" />
		  </nav>
		);
			}


export default Navbar;