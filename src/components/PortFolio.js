import React from "react";
import projectImage1 from '../images/project1.png';
import projectImage2 from '../images/project2.png';
import projectImage3 from '../images/project3.png';

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
                  <img src={projectImage3} alt="project 3 ss" />
                </div>
                <div className="overlay">
                  <h1>
                  <a href="https://github.com/Pratikpr8/movie-finder" target="_blank" rel="noopener noreferrer">
                  Movie Finder
                  </a>                 
                    </h1>
                </div>
              </div>
              <p className="app-info">
                A Movie finder app which can help you to find any movies of your choice from the internet.
              </p>
            </div>
          </div>
        </div>
      </section>
  );
}
