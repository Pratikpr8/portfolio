import React from "react";
import mypic from '../images/mypic.jpg';
import cv from '../files/CV-Pratik-Puri.pdf';


export default function About() {
  return (
    <>
      <section className="about" id="about">
        <div className="container flex"> 
          <div className="left row">
            <img src={mypic} alt="my pic" />
          </div> 
          <div className="right row">
            <span className="baget">ABOUT ME</span>
            <h2> Front End Developer based in Kathmandu, Nepal</h2>
            <p>
              I'm a developer and I'm very passionate and dedicated to what I
              do. Everyday I try to acquire and update myself with the knowledge
              and skills necessary to have a better career and develop myself.
            </p>
                <a href={cv} target="_blank" rel="noopener noreferrer"> 
                <button className="primary-btn"> 
                  View CV 
               </button>
                </a>
          </div>
        </div>
      </section>
    </>
  );
}
 