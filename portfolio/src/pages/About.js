import React from "react";

const About = () => {
  return (
    <div>
      <div className="section">
        <h4>Nick Pettis</h4>
        <img
          src="../assets/alaskacruise.jpg"
          alt="Alasksa"
          className="me"
        />
      </div>
      <div className="section">
        <h5>About Me</h5>
        <p>
          I am a full-stack web developer student with an interest in the
          healthcare computer science field. Prior to this I worked in public
          accounting for 6 years. In my free time I like to spend my time at the
          lake or golf course with family and friends. If you have any questions
          please feel free to contact me vie email or by phone.{" "}
          <span style={{ color: "blue" }}>770-315-6076</span>{" "}
        </p>
      </div>
    </div>
  );
};

export default About;
