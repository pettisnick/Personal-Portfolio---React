import React from "react";
import "./about.css";

const About = () => {
  return (
    <div>
      <div className="section">
        <h4 style={{ fontSize: "50px" }}>Reacting to one component at a time!</h4>
        <img src="../images/alaskacruise.jpg" alt="Alasksa" className="me" />
      </div>
      <div className="section">
        <h5 style={{ fontSize: "40px" }}>About Me</h5>
        <p>
          I am a full-stack web developer student with an interest in the
          healthcare computer science field. Prior to this I worked in public
          accounting for 6 years. In my free time I like to spend my time at the
          lake or golf course with family and friends. If you have any questions
          please feel free to contact me vie email or by phone. <br></br>
          <a className="email" href="mailto: pettisnick@gmail.com">
            <strong>
              <span style={{ color: "green" }}>Email</span>
            </strong>
          </a>{" "}, 
          <strong>
            <span style={{ color: "blue" }}>770-315-6076</span>
          </strong>{" "}
        </p>
      </div>
    </div>
  );
};

export default About;
