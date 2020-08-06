import React, { Component } from 'react';
import ProjectView from './ProjectView'
import '../css/Projects.css'
import mitsPlaceholder from '../img/Mits.png'
import mitsVideo from '../img/MitsVid.mp4'
import phantomGuitarImage from '../img/lightbluebean.jpg'
import packadvisorImage from '../img/packadvisorLogo.png'
import speakerImage from '../img/threeStageSpeaker.png'
import blendingImage from '../img/blendingImage.jpg'

const mitsDescription = "MITS is a pair of gloves that can be used to create different kinds of music. We used Arduino Nano 33 BLEs/LightBlue Bean to connect over bluetooth to a MacOS application that sends MIDI signals to a Digital Audio Workstation (DAW) like Reaper to change instruments and play the notes as required." +
                        "<br /><br />The glove has flex sensors and a force sensor to implement all the features of the glove. There are several modes currently: Strings, Piano and Drums.";
const packadvisorDescription = "Packadvisor is a web application created to help people pack for trips. The app can help a user pack by providing information about the destination and the trip including weather, timezone change, currency conversions, translations etc. The user can also create packing lists and login using Google to save information." + 
                               "<br /><br />I was the lead frontend developer on the four person team that created this application. The app uses Node.js and MongoDB for the backend and utilizes several REST APIs to get details about a user's trips.";
const phantomGuitarDescription = "The Phantom Guitar is the perfect mix of two of my childhood hobbies: playing guitar, and arduinos/embedded development. I used the LightBlue Bean, which is a bluetooth Arduino-style device with an acceloremeter." +
                                 "<br /><br />I wrote Android and MacOS apps where the user can select guitar chords to play, and then use the Bean like a guitar pick, strumming in air while getting the feeling and sound of playing a guitar. The idea was to recreate playing Air Guitar."
const imageBlendingDescription = "Image blending is the process of blending a source onto a target image with a mask such that it appears that the source is blending nicely into the target image's background. It can be implemented in a variety of ways. I implemented Pyramid Blending and Poisson Blending." +
                                 "<br /><br />I wrote scripts in python as part of a college class to blend images using both methods. The image on the left is a good example of image blending by blending an apple and an orange."
const threeStageSpeakerDescription = "As a final project for an Electrical Engineering course, me and my partner created a three stage amplifier speaker. We used our knowledge of BJTs (Bipolar Junction Transistors) and were able to design an amplifier capable of playing loud-ish music for a long time.";
const ultimateTTTDescription = "This is a project";

export default class Projects extends React.Component {
    render() {
        return <div className="projects">
            <div className="left-bar" style={{backgroundColor:'gold'}}></div>
            <p className="heading">Projects</p>
            <p className="subheading">
                <i>(Checkout my <a href="https://www.github.com/anujparakh" target="_blank">GitHub</a> for all of my projects)</i>
            </p>
            <div className="projects-collection">
                <ProjectView title={"Multi-Instrumental-Tactile-Synthesizer"}
                description={mitsDescription}
                githubLink="https://www.github.com/anujparakh/multi-instrumental-tactile-synthesizer"
                demoLink="https://www.youtube.com/watch?v=J3ghWZDBjV0&feature=youtu.be"
                demoText="to see a full demo."
                placeholderImage={mitsPlaceholder}
                date="April 2020"
                video={mitsVideo}>
                </ProjectView>

                <ProjectView title="Packadvisor"
                description={packadvisorDescription}
                githubLink="https://github.com/pablosay54/CSCE_315_HCI"
                placeholderImage={packadvisorImage}
                demoLink="http://packadvisor.herokuapp.com/"
                date="March 2020"
                demoText="to try out Packadvisor.">
                </ProjectView>

                {/* <ProjectView title="Three Stage Speaker Amplifier"
                description={threeStageSpeakerDescription}
                date="November 2019"
                placeholderImage={speakerImage}
                demoLink="https://www.youtube.com/watch?v=v25CMmxGf4E&feature=youtu.be"
                demoText=" to see a demo of the amplifier."
                ></ProjectView> */}

                <ProjectView title="Image Blending"
                description={imageBlendingDescription}
                githubLink="https://github.com/anujparakh/image-blending"
                placeholderImage={blendingImage}
                date='March 2020'
                >
                </ProjectView>

                <ProjectView title="Phantom Guitar"
                description={phantomGuitarDescription}
                githubLink="https://www.github.com/anujparakh/phantom-guitar"
                date="August 2016"
                placeholderImage={phantomGuitarImage}
                ></ProjectView>

            </div>

            {/* Add more projects on github thing */}
        </div>;
    }
}


{/* <ProjectView title="PackAdvisor"
                description={packadvisorDescription}
                githubLink="github.com/anujparakh/multi-instrumental-tactile-synthesizer"
                image=""
                placeholderImage=""
                productLink="packadvisor.herokuapp.com">
                </ProjectView>

                <ProjectView title="Phantom Guitar"
                description={phantomGuitarDescription}
                githubLink="github.com/anujparakh/multi-instrumental-tactile-synthesizer"
                image=""
                placeholderImage=""
                >
                    
                </ProjectView>

                


                <ProjectView title="Ultimate Tic Tac Toe"
                description={ultimateTTTDescription}
                githubLink="github.com/anujparakh/multi-instrumental-tactile-synthesizer"
                placeholderImage=""
                image="">
                </ProjectView> */}