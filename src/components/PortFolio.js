import React from "react";
import projectImage1 from '../images/project1.png';
import projectImage2 from '../images/project2.png';

export default function Portfolio() {
  return (
      <section className="portfolio mtop" id="portfolio">
        <div className="container">
          <div className="head flexSB">
            <div className="left">
              <span className="baget baget-new">Portfolio</span>
              <h1 className="title">My Projects</h1>
            </div>
          </div>

          <div className="content grid mtop">
            <div>
              <div className="box">
                <div className="img">
                  <img src={projectImage1} alt="project 1 ss" />
                </div>
                <div className="overlay">
                  <h1>
                      <a href="https://github.com/Pratikpr8/REACT-Todo" target="_blank" rel="noopener noreferrer">
                        A Todo App
                        </a>
                  </h1>
                </div>
              </div>
              <p className="app-info">
                A Todo App app to help you keep track of your things to do with
                function of adding, deleting, editing and completing your
                todos's.
              </p>
            </div>

            <div>
              <div className="box">
                <div className="img">
                  <img src={projectImage2} alt="project 2 ss" />
                </div>
                <div className="overlay">
                  <h1>
                  <a href="https://github.com/Pratikpr8/Tenzies-App" target="_blank" rel="noopener noreferrer">
                    Tenzies
                    </a>
                    </h1>
                </div>
              </div>
              <p className="app-info">
                A Tenzies game which keeps track of the number of rolls and time
                you take to complete the game so that you can play with your
                friends.
              </p>
            </div>

            <div>
              <div className="box">
                <div className="img">
                  <img src={projectImage1} alt="project 1 ss" />
                </div>
                <div className="overlay">
                  <h1>
                  <a href="https://github.com/Pratikpr8/" target="_blank" rel="noopener noreferrer">
                  Project 3
                  </a>                 
                    </h1>
                </div>
              </div>
              <p className="app-info">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. At
                dolorum fugit inventore aspernatur tenetur. Placeat, assumenda.
                Eos, nemo natus. Enim optio consequatur quisquam dignissimos
                non.
              </p>
            </div>
          </div>
        </div>
      </section>
  );
}
