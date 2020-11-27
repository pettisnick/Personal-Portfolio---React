import React from "react";
import "./work.css";

const Work = () => {
  return (
    <>
      <div className="container">
        <div className="portfolio-bg"></div>
        <main className="pt-6">
          <div className="columns pl-2">
            <section className="work box column is-2 mx-4">
              <div className="card-image"></div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p>
                      <a href="https://pettisnick.github.io/Food-Allergy-App/">
                        <strong>Can I Eat It?</strong>
                      </a>{" "}
                      is a kid-friendly app that allows kids and adults to check
                      and see if a food item is safe from the child's allergies
                      before consumption and suggests alternatives if the item
                      is not safe to consume.
                    </p>
                    <figure>
                      <a href="https://github.com/pettisnick/Food-Allergy-App">
                        <img
                          src="https://github.com/pettisnick/Food-Allergy-App/raw/master/Assets/screenshot.png"
                          alt="Can I Eat It?"
                          className="eat"
                        />
                      </a>
                    </figure>
                  </div>
                </div>
              </div>
              <hr />
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p>
                      <a href="https://blooming-eyrie-04708.herokuapp.com/">
                        <strong>Client Contact Tracker</strong>
                      </a>{" "}
                      is an easy to use application that tracks the contact
                      points made by employees of an organization. It allows the
                      user to create new contacts, keep track of existing
                      contacts, and stale inactive contacts.{" "}
                    </p>
                    <figure>
                      <a href="https://github.com/pettisnick/Client-Contact-Tracker">
                        <img
                          src={
                            process.env.PUBLIC_URL + "/assets/images/login.png"
                          }
                          alt="Client Tracker"
                          className="tracker"
                        />
                      </a>
                    </figure>
                  </div>
                </div>
              </div>
              <hr />
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p>
                      <a href="https://lessonworks.herokuapp.com/">
                        <strong>LessonWorks</strong>
                      </a>{" "}
                      is a MERN (MongoDB, Express, React, and Nodejs)
                      application that allows the users to have an efficient
                      space to find, organize, and annotate their lesson plans.{" "}
                    </p>
                    <figure>
                      <a href="https://github.com/pettisnick/LessonWorks">
                        <img
                          src={
                            process.env.PUBLIC_URL + "/assets/images/lesson.png"
                          }
                          alt="LessonWorks"
                          className="lesson"
                        />
                      </a>
                    </figure>
                  </div>
                </div>
              </div>
              <hr />
              <div className="assignment card-content">
                <div className="media">
                  <div className="media-content">
                    <p>
                      <a href="https://pettisnick.github.io/React-Employee-Directory/#/">
                        <strong>Employee Directory</strong>
                      </a>{" "}
                      is a React application that allows the user to view the entire employee directory at once.
                    </p>
                    <figure>
                      <a href="https://github.com/pettisnick/React-Employee-Directory">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/employee.png"
                          } 
                          alt="Employee Directory"
                          className="directory"
                        />
                      </a>
                    </figure>
                  </div>
                </div>
              </div>
              <hr />
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p>
                      <a href="https://shielded-eyrie-58367.herokuapp.com/">
                        <strong>Budget Tracker</strong>
                      </a>{" "}
                      is a progressive web application that allows the user to
                      add expenses and deposits to their budget with or without
                      a connection.{" "}
                    </p>
                    <figure>
                      <a href="https://github.com/pettisnick/Budget-Trackers">
                        <img
                          src={
                            process.env.PUBLIC_URL + "/assets/images/budget.png"
                          }
                          alt="Budget Tracker"
                          className="budget"
                        />
                      </a>
                    </figure>
                  </div>
                </div>
              </div>
              <hr />
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p>
                      <a href="https://quiet-forest-42434.herokuapp.com/">
                        <strong>Google Books Search</strong>
                      </a>{" "}
                      is a full-stack apllication that uses MongoDB, Node,
                      Express, and React. This application requires the use of
                      React components, working with helper/util functions, and
                      utilizing React lifecycle methods to query and display
                      books based on user searches.{" "}
                    </p>
                    <figure>
                      <a href="https://github.com/pettisnick/Google-Search-using-React">
                        <img
                          src={
                            process.env.PUBLIC_URL + "/assets/images/google.png"
                          }
                          alt="Google Books Search"
                          className="books"
                        />
                      </a>
                    </figure>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>{" "}
      </div>
    </>
  );
};

export default Work;
