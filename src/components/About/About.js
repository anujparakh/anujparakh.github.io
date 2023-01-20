import React, { Component } from 'react';
import './About.scss'
import myphoto from '../../img/me_newyork.png'

const aboutMeText = "I am a Technical Consultant at Credera, primarily focused on full stack development. I have experience in a variety of technologies like React, Next.js, Spring Boot, Vue.js, Scala Play, iOS, Android etc. I am a fast learner and I love learning new technologies and programming languages. Also, I work well in a team because I think you learn faster and much more. As the saying goes, \"Two heads are better than one\"." +
                    "<br /><br />When I'm not coding I love to play pickleball, read, play guitar, travel, hang out with friends and watch movies and TV shows."

export default class About extends React.Component {
    render() {
        return <div className="about">
            <div className="left-bar" style={{backgroundColor: 'gold'}}></div>
            <p className="heading">About Me</p>
            {/* <div id="content-container"> */}
            <img id="aboutMeImg" src={myphoto}></img>
            <p id="about-me-text" className="description" dangerouslySetInnerHTML={{__html: aboutMeText}}></p>
            {/* </div> */}
        </div>;
    }
}