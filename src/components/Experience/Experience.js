import React, { Component } from 'react';
import ExperienceView from '../ExperienceView/ExperienceView'
import './Experience.scss'
import boeingLogo from '../../img/boeinglogo.png'
import niLogo from '../../img/NILogo.jpg'
import bioEyeLogo from '../../img/BioEyeLogo.jpeg'
import tamuLogo from '../../img/tamuLogo.png'
import crederaLogo from '../../img/credera-logo.png'

const crederaDescription = "I worked with a home services client to unify and modernize two different business verticals' apps and sites by migrating to a React frontend using Next.js and porting APIs to Spring Boot and Scala Play. <br/><br/> I also worked with a eCommerce platform to help a client implement multiple eShops with a React/Next.js frontend and Spring Boot backend"
const boeingDescription = "I added features to a project that connects airplane systems to the ground using cloud technology while working in a team. I developed code in TypeScript working with Microsoft Azure and Cosmos DB using Node.js and restify."
const utfDescription = "I worked as a UTF for the Physics department, where I helped students with their Engineering Physics 1 courses by explaining topics and solving problems."
const niDescription = "I designed and developed a project from start to completion in C++ for an embedded system to save manufacturing time and cost. I also debugged both embedded code and driver level code to implement code fixes and enhancements."
const csptDescription = "I helped students in intro level computer science courses in labs by explaining concepts, debugging code and showing examples."
const bioEyeDescription = "I worked on a project involving machine learning to provide a mobile eye tracking solution to detect early onset dementia. I designed and developed the backend using Node.js and MongoDB. I also worked on build script fixes on Linux using CMake."

export default class Experience extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fullScreen: (window.innerWidth >= this.props.mobileWidth)
        }
        this.handleResize = this.handleResize.bind(this)
    }

    handleResize = (e) => {
        this.setState({ fullScreen: (window.innerWidth >= this.props.mobileWidth) })
    };

    componentDidMount() {
        window.addEventListener("resize", this.handleResize);
    }

    componentWillUnmount() {
        window.addEventListener("resize", this.handleResize);
    }

    render() {
        return <div className="experience">
            <div style={{backgroundColor: '#61dafb'}} className="left-bar"></div>
            <p className={this.state.fullScreen ? "heading" : "smallscreen-heading"}>Experience</p>
            <p className={this.state.fullScreen ? "subheading" : "smallscreen-subheading"} id="experience-subheading"><i>Click <a href="/Resume.pdf" target="_blank">here</a> to see my resume.</i></p>
            <ExperienceView jobTitle="Technical Consultant"
                companyName="Credera"
                fromDate="Sep 2021"
                toDate="Present"
                description={crederaDescription}
                image={crederaLogo}
            />


            <ExperienceView jobTitle="Cabin and Network Systems Engineering Intern"
                companyName="The Boeing Company"
                fromDate="May 2020"
                toDate="August 2020"
                description={boeingDescription}
                image={boeingLogo}>
            </ExperienceView>

            <ExperienceView jobTitle="Computer Science Peer Teacher"
                companyName="Texas A&M University"
                fromDate="December 2019"
                toDate="August 2019"
                description={csptDescription}
                image={tamuLogo}>
            </ExperienceView>

            <ExperienceView jobTitle="Software Engineering Intern"
                companyName="National Instruments"
                fromDate="May 2019"
                toDate="August 2019"
                description={niDescription}
                image={niLogo}>
            </ExperienceView>

            <ExperienceView jobTitle="Physics Undergraduate Teaching Fellow"
                companyName="Texas A&M University"
                fromDate="May 2019"
                toDate="January 2019"
                description={utfDescription}
                image={tamuLogo}>
            </ExperienceView>

            <ExperienceView jobTitle="Software Engineering Intern"
                companyName="BioEye"
                fromDate="May 2018"
                toDate="August 2018"
                description={bioEyeDescription}
                image={bioEyeLogo}>
            </ExperienceView>
        </div>
    }
}