import React from "react";
import "./about.css";

const About = () => {
  return (
    <div>
      <div  className="section">
        <h4 style={{ fontSize: "50px" }}>
          Reacting to one component at a time!
        </h4>
        <img
          src={process.env.PUBLIC_URL + "/assets/images/alaskacruise.jpg"}
          alt="Alasksa"
          className="me"
        />
      </div>
      <div className="section">
        <h5 style={{ fontSize: "40px" }}>About Me</h5>
        <p>
          I am a full-stack web developer that is always eager to continue
          learning more code and expanding my knowledge. Prior to becoming a
          developer I worked in public account for nearly 6 years and have an
          MBA and BS in accounting. I decided to take the leap into this new
          career through the Georgia Tech Full-Stack Web Developer Bootcamp
          sponsored by the professional education department at GT. Coding has
          allowed me to dig into my more creative side while working on
          different projects and debugging code. I plan to put this new-found
          knowledge of web developing to use by starting a new career. In my
          free time I tend to spend my time at the lake with family or on the
          golf course with friends. If you have any questions please feel free
          to contact me vie email or by phone. <br></br>
          <a className="email" href="mailto: pettisnick@gmail.com">
            <strong>
              <span style={{ color: "green" }}>Email</span>
            </strong>
          </a>{" "}
          ,
          <strong>
            <span style={{ color: "blue" }}>770-315-6076</span>
          </strong>{" "}
        </p>
      </div>
    </div>
  );
};

export default About;
