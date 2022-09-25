import React from "react";

export default function Contact() {
  return (
    <>
      <section className="contact" id="contact">
        <div className="container flexSB">
          <div className="left row">
            <span className="baget baget-new">Contact</span>
            <h2 className="contact-me">You can reach me through:-</h2>
          </div>
          <div className="right row">
            <div className="box">
              <div className="details flex">
                <div className="name">
                  <div>
                    <h2>Email:</h2>
                    <h2 className="bland">pratikpr.official8@gmail.com</h2>
                  </div>
                  <div>
                    <h2>GitHub:</h2>
                    <h2 className="bland">
                      <a href="https://github.com/Pratikpr8" target="_blank" rel="noopener noreferrer">
                        Link to GitHub Page.
                      </a>
                    </h2>
                  </div>
                  <div>
                    <h2>Phone:</h2>
                    <h2 className="bland">+977 9863025519</h2>
                  </div>
                  <div>
                    <h2>Address:</h2>
                    <h2 className="bland">Mhepi,Samakhusi,Kathmandu</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
