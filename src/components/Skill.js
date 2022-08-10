import React from 'react'

export default function Skill() {


    const Progress = ({done,title}) =>{
        return(
            <div className="progress">
                <div className="progress-done" style={{opacity:1,width:`${done}%`}}>
                    <h4>{title}</h4>
                    {/* <h4>{done}%</h4> */}
                </div>
            </div>
        )
    }

  return (
    <>
        <section className="skill mtop">
            <div className="container flexSB">
                <div className="left row">
                    <h1>My Skills</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, fugit?</p>
                </div>

                <div className="right row">
                    <Progress done="50" title="React"/>
                    <Progress done="60" title="JavaScript"/>
                    <Progress done="50" title="Git"/>
                    <Progress done="60" title="CSS"/>
                    <Progress done="50" title="SCSS/SASS"/>
                    <Progress done="50" title="Bootstrap, Material UI"/>
                </div>
            </div>
        </section>
    </>
  )
}
