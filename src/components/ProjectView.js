import React, { Component } from 'react';
import '../css/ProjectView.css'

export default class ProjectView extends React.Component {
    constructor(props) {
        super(props);
        this.createVideoElement = this.createVideoElement.bind(this)
        this.createGithubLink = this.createGithubLink.bind(this)

    }

    createVideoElement = () => {
        if (this.props.video) {
            console.log('HAS A VIDEO');
            return <video className='video' controls>
                <source src={this.props.video} type="video/mp4" />
            </video>
        }
    }

    createGithubLink = () => {
        if (this.props.githubLink) {
            return <a href={this.props.githubLink} className="fa fa-github" id="projectGithub" target="_blank"></a>
        }
    }

    createDemoLink = () => {
        if (this.props.demoLink) {
        return <p id="demoLink" className="description">Click <a href={this.props.demoLink} class="description" target="_blank">here</a> {this.props.demoText}</p>
        }
    }

    render() {
        return <div className="project-thumb-view">
            <div className="imgCol">
                <img src={this.props.placeholderImage} />
            </div>
            <div className="textCol">
                <div className='title-holder'>
                    {this.createGithubLink()}
                    <p className='title'>{this.props.title} </p>
                </div>
                <p className="project-date"><i>{this.props.date}</i></p>
                <p className='description' dangerouslySetInnerHTML={{ __html: this.props.description }}></p>
                {this.createDemoLink()}
            </div>
        </div>;
    }
}