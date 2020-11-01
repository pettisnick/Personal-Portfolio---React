import React from 'react';
import "./style.css";

function Footer() {
    return (
		<footer className="footer bg-primary">
      <span style={{ fontSize: 25, color: "white", textAlign: "center"}}>Created by: Nick Pettis { new Date().getFullYear() }</span>
    </footer>
    )
}

export default Footer;