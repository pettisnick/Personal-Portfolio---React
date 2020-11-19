import React from "react";
import "./work.css";

const Work = () => {
  return (
    <>
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
                    before consumption and suggests alternatives if the item is
                    not safe to consume.
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
            <hr></hr>
            <div className="card-content">
              <div className="media">
                <div className="media-content">
                  <p>
                    <a href="https://blooming-eyrie-04708.herokuapp.com/">
                      <strong>Client Contact Tracker</strong>
                    </a>{" "}
                    is an easy to use application that tracks the contact points
                    made by employees of an organization. It allows the user to
                    create new contacts, keep track of existing contacts, and
                    stale inactive contacts.{" "}
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
            <hr></hr>
            <div className="assignment card-content">
              <div className="media">
                <div className="media-content">
                  <p>
                    <a href="https://floating-cliffs-80394.herokuapp.com/">
                      <strong>Note Taker</strong>
                    </a>{" "}
                    is an application that uses express to write, save, and
                    delete notes.
                  </p>
                  <figure>
                    <a href="https://github.com/pettisnick/Client-Contact-Tracker">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/NoteTaker.png"
                        }
                        alt="Note Taker"
                        className="notes"
                      />
                    </a>
                  </figure>
                </div>
              </div>
            </div>
            <hr></hr>
            <div className="card-content">
              <div className="media">
                <div className="media-content">
                  <p>
                    <a href="https://pettisnick.github.io/HW-5-Work-Day-Scheduler/">
                      <strong>Work Day Scheduler</strong>
                    </a>{" "}
                    is a simple calendar application that allows the user to
                    save events for any hour between 9am and 5pm.{" "}
                  </p>
                  <figure>
                    <a href="https://github.com/pettisnick/HW-5-Work-Day-Scheduler">
                      <img
                        src={process.env.PUBLIC_URL + "/assets/images/5day.png"}
                        alt="Work Scheduler"
                        className="schedule"
                      />
                    </a>
                  </figure>
                </div>
              </div>
            </div>
            <hr></hr>
            <div className="card-content">
              <div className="media">
                <div className="media-content">
                  <p>
                    <a href="https://pettisnick.github.io//HW3-Javascript-Password-Generator/">
                      <strong>Password Generator</strong>
                    </a>{" "}
                    is an application that generates a random password based on
                    user-selected criteria.{" "}
                  </p>
                  <figure>
                    <a href="https://github.com/pettisnick/HW3-Javascript-Password-Generator">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/passwordGen.png"
                        }
                        alt="Password Generator"
                        className="password"
                      />
                    </a>
                  </figure>
                </div>
              </div>
            </div>
            <hr></hr>
            <div className="card-content">
              <div className="media">
                <div className="media-content">
                  <p>
                    <a href="https://blooming-eyrie-04708.herokuapp.com/">
                      <strong>Budget Tracker</strong>
                    </a>{" "}
                    is a progressive web application that allows the user to add
                    expenses and deposits to their budget with or without a
                    connection.{" "}
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
            <hr></hr>
            <div className="card-content">
              <div className="media">
                <div className="media-content">
                  <p>
                    <a href="https://intense-dusk-18342.herokuapp.com/">
                      <strong>Google Books Search</strong>
                    </a>{" "}
                    is a full-stack apllication that uses MongoDB, Node,
                    Express, and React. This application requires the use of
                    React components, working with helper/util functions, and
                    utilizing React lifecycle methods to query and display books
                    based on user searches.{" "}
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
    </>
  );
};

export default Work;
