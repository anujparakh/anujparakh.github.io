import React, { Component } from 'react';
import './About.scss'
import myphoto from '../../img/me_newyork.png'

const aboutMeText = "I am a Computer Engineering Student at Texas A&M University, graduating in May 2021. I have experience in different levels of software development both through internships and projects. I am a fast learner and I love learning new technologies and programming languages. Also, I work well in a team because I think you learn faster and much more. As the saying goes, \"Two heads are better than one\"." +
                    "<br /><br />When I'm not coding I like to play guitar, sing, read, travel, hang out with friends and watch a ton of movies and TV shows. I also enjoy playing and watching sports like soccer, badminton, racquetball, and cricket."

export default class About extends React.Component {
    render() {
        return <div className="about">
            <div className="left-bar" style={{backgroundColor: 'gold'}}></div>
            <p className="heading">About Me</p>
            {/* <p className="subheading">I'm a Computer Engineering Student</p> */}
            {/* <div id="content-container"> */}
            <img id="aboutMeImg" src={myphoto}></img>
            <p id="about-me-text" className="description" dangerouslySetInnerHTML={{__html: aboutMeText}}></p>
            {/* </div> */}
        </div>;
    }
}