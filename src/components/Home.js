import React from "react";
import homepic from '../images/homepic.jpg';

export default function Home() {
  return (
    <>
      <section className="home" id="home">
        <div className="container flexSB">
          <div className="left row">
            <h1>
              pratik puri
            </h1>
            <h3>Front End Developer, Web Developer, Programmer</h3>
          </div>
          <div className="right row">
            <div className="img">
             <img src={homepic} alt="background-pic" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
