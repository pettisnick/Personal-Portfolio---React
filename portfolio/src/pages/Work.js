import React from "react";

const Work = () => {
  return (
    <>
      <div className="portfolio-bg"></div>
      <main className="pt-6">
        <div className="columns pl-2">
          <section className="box column is-2 mx-4">
            <div className="card-image"></div>
            <div className="card-content">
              <div className="media">
                <div className="media-content">
                  <p>
                    <a href="https://pettisnick.github.io/Food-Allergy-App/">
                      <strong>Can I Eat It?</strong>
                    </a>
                    is a kid-friendly app that allows kids and adults to check
                    and see if a food item is safe from the child's allergies
                    before consumption and suggests alternatives if the item is
                    not safe to consume.
                  </p>
                  <a href="https://github.com/pettisnick/Food-Allergy-App">
                    <img
                      src="https://github.com/pettisnick/Food-Allergy-App/raw/master/Assets/screenshot.png"
                      alt="Can I Eat It?"
                      className="foodAllergy"
                    />
                  </a>
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
                    </a>
                    is an easy to use application that tracks the contact points
                    made by employees of an organization. It allows the user to
                    create new contacts, keep track of existing contacts, and
                    stale inactive contacts.{" "}
                  </p>
                  <a href="https://github.com/pettisnick/Client-Contact-Tracker">
                    <img
                      src="./assets/login.png"
                      alt="Client Tracker"
                      className="tracker"
                    />
                  </a>
                </div>
              </div>
            </div>
            <hr></hr>
            <div className="card-content">
              <div className="media">
                <div className="media-content">
                  <p>
                    <a href="https://floating-cliffs-80394.herokuapp.com/">
                      <strong>Note Taker</strong>
                    </a>
                    is an application that uses express to write, save, and delete notes.</p>
                  <a href="https://github.com/pettisnick/Client-Contact-Tracker">
                    <img
                      src="./assets/NoteTaker.png"
                      alt="Note Taker"
                      className="notes"
                    />
                  </a>
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
                    </a>
                    is a simple calendar application that allows the user to save events for any hour between 9am and 5pm.{" "}
                  </p>
                  <a href="https://github.com/pettisnick/HW-5-Work-Day-Scheduler">
                    <img
                      src="./assets/5day.png"
                      alt="Work Scheduler"
                      className="schedule"
                    />
                  </a>
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
                    </a>
                    is an application that generates a random password based on user-selected criteria.{" "}
                  </p>
                  <a href="https://github.com/pettisnick/HW3-Javascript-Password-Generator">
                    <img
                      src="./assets/passwordGen.png"
                      alt="Password Generator"
                      className="password"
                    />
                  </a>
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
                    </a>
                    is a progressive web application that allows the user to add expenses and deposits to their budget with or without a connection.{" "}
                  </p>
                  <a href="https://github.com/pettisnick/Budget-Trackers">
                    <img
                      src="./assets/budget.png"
                      alt="Budget Tracker"
                      className="budTracker"
                    />
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/*
      <section className="box column is-2 mx-4">
        <div className="card-image">
          <figure className="image is-4by3">
            <a href="https://nataliegarcia-8.github.io/Domestic-Covid19-TravelApp/index.html"><img
                src="./assets/maskedwanderer.jpg" alt="covid-19app" /></a>
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">COVID-19 Travel App</p>
              <a href="https://github.com/nataliegarcia-8/Domestic-Covid19-TravelApp">Github
                Repository</a>
            </div>
          </div>
          <div className="content is-size-5">
            A domestic travel app that helps travelers make informed decisions on where to travel by providing them with
            COVID-19 data, and the cheapest flight to their desired destination.
          </div>
        </div>
      </section>


      <section className="box column is-2 mx-4">
        <div className="card-image">
          <figure className="image is-4by3">
            <a href="https://jacobhoss.github.io/car-trivia-quiz/"><img
                src="./assets/car-trivia-quiz.jpg" alt="car-trivia-quiz" /></a>
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">Car Trivia Quiz</p>
              <a href="https://github.com/JacobHoss/car-trivia-quiz">Github Repository</a>
            </div>
          </div>
          <div className="content is-size-5">
            A timed trivia-quiz based around mostly classNameic car knowledge. It was built with Javascript and Bootstrap.
            It also has lots of fun sound effects.
          </div>
        </div>
      </section>

      <section className="box column is-2 mx-4">
        <div className="card-image">
          <figure className="image is-4by3">
            <a href="https://jacobhoss.github.io/weather-dashboard/" className="deployed"><img
                src="./assets/weatherdashboard.jpg" alt="weather-dashboard" /></a>
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">Weather Dashboard</p>
              <a href="https://github.com/JacobHoss/weather-dashboard">Github Repository</a>
            </div>
          </div>

          <div className="content is-size-5">
            A weather forecast app that uses two API's to gather data on the inputted city. After the user inputs a
            city, it is stored in local storage, in a search history list.
          </div>
        </div>
      </section>


      <section className="box column is-2 mx-4">
        <div className="card-image">
          <figure className="image is-4by3">
            <a href="https://jacobhoss.github.io/random-password-generator/index.html"><img
                src="./assets/random-password-generator.jpg" alt="random-password-generator" /></a>
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">Password Generator</p>
              <a href="https://github.com/JacobHoss/random-password-generator">Github Repository</a>
            </div>
          </div>
          <div className="content is-size-5">
            A program that takes a user's inputs and outputs a random password. It uses a series of Javascript prompts
            to determine the strength and length of the password.
          </div>
        </div>
      </section>


     {/* <div className="social-media column">
        <a href="https://github.com/JacobHoss" target="_blank" className="button is-light is-large"><i className="fa fa-github"
            aria-hidden="true"></i></a>
        <a href="https://www.linkedin.com/in/jacob-hoss-00b431139" target="_blank" className="button is-light is-large"><i
            className="fa fa-linkedin" aria-hidden="true"></i></a>
    </div> */}
        </div>
      </main>{" "}
      */}
    </>
  );
};

export default Work;
