import React from "react";

export default function Skill() {
  const Skill = ({ title }) => {
    return (
      <div className="skills-list">
        <div>
          <h4>{title}</h4>
        </div>
      </div>
    );
  };

  return (
    <>
      <section className="skill mtop">
        <div className="container flexSB">
          <div className="left row">
            <span className="baget">My Skills</span>
            <h1>These are my skills:-</h1>
          </div>

          <div className="right row">
            <Skill title="React" />
            <Skill title="JavaScript" />
            <Skill title="HTML" />
            <Skill title="Git" />
            <Skill title="CSS" />
            <Skill title="SCSS/SASS" />
            <Skill title="Bootstrap" />
          </div>
        </div>
      </section>
    </>
  );
}
