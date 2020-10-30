import React from "react";

function Work() {
  return (
    <>
      <div className="projects">
        <h5>Projects</h5>
        <div>
          <p>
            <a
              href="https://pettisnick.github.io/Food-Allergy-App/"
              target="_blank"
            >
              <strong>Can I Eat It?</strong>
            </a>{" "}
            is a kid-friendly app that allows kids and adults to check and see
            if a food item is safe from the child's allergies before consumption
            and suggests aleternatives if the item is not safe to consume.
          </p>
          {/* when you click on the picture, you are then taken to the repo */}
          <a
            href="https://github.com/pettisnick/Food-Allergy-App"
            target="_blank"
          >
            <img
              src="https://github.com/pettisnick/Food-Allergy-App/raw/master/Assets/screenshot.png"
              alt="Can I Eat It"
              class="foodAllergy"
              id="eatIt"
            />
          </a>
          <p>
            <a
              href="https://blooming-eyrie-04708.herokuapp.com/"
              target="_blank"
            >
              <strong>Client Contact Tracker</strong>
            </a>{" "}
            is an easy to use application that tracks the contact points made by
            employees of an organization. It allows the user to create new
            contacts, keep track of existing contacts, and stale inactive
            contacts.
          </p>
          {/*} when you click on the picture, you are then taken to the repo */}
          <a
            href="https://github.com/pettisnick/Client-Contact-Tracker"
            target="_blank"
          >
            <img
              src="Assets/login.png"
              alt="Client Contact Tracker"
              class="clientTracker"
              id="contact"
            />
          </a>
        </div>
        <hr>
          <div class="section">
            <h5>Assignments</h5>
            <p>
              <a
                href="https://floating-cliffs-80394.herokuapp.com/"
                target="_blank"
              >
                <strong>Note Taker</strong>
              </a>{" "}
              is an application that uses express to write, save, and delete
              notes.
            </p>
            <a
              href="https://github.com/pettisnick/HW-11-Express-Note-Taker"
              target="_blank"
            >
              <img
                src="Assets/NoteTaker.png"
                alt="Note Taker"
                class="noteTaker"
                id="notes"
              />
            </a>
            <p>
              <a
                href="https://pettisnick.github.io/HW-5-Work-Day-Scheduler/"
                target="_blank"
              >
                <strong>Work Day Scheduler</strong>
              </a>{" "}
              is a simple calendar application that allows the user to save
              events for any hour between 9am and 5pm.
            </p>
            <a
              href="https://github.com/pettisnick/HW-5-Work-Day-Scheduler"
              target="_blank"
            >
              <img
                src="Assets/5Day.PNG"
                alt="Work Day Scheduler"
                class="workDay"
                id="scheduler"
              />
            </a>
            <p>
              <a
                href="https://pettisnick.github.io/HW3-Javascript-Password-Generator/"
                target="_blank"
              >
                <strong>Password Generator</strong>
              </a>{" "}
              is an application that generates a random password based on
              user-selected criteria.
            </p>
            <a
              href="https://github.com/pettisnick/HW3-Javascript-Password-Generator"
              target="_blank"
            >
              <img
                src="Assets/passwordGen.PNG"
                alt="Password Generator"
                class="password"
                id="pword"
              />
            </a>
            <p>
              <a
                href="https://rocky-ridge-83019.herokuapp.com/"
                target="_blank"
              >
                <strong>Eat-Da-Burger</strong>
              </a>{" "}
              is a restaurant application that allows the names of new burgers
              to be suggested by users.
            </p>
            <a href="https://github.com/pettisnick/burger" target="_blank">
              <img
                src="Assets/burger.PNG"
                alt="Burgers"
                class="burgers"
                id="burger"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Work;
