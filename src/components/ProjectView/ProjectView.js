import React, { Component } from 'react';
import './ProjectView.scss'

export default class ProjectView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fullScreen: (window.innerWidth >= this.props.mobileWidth)
        }
        this.handleResize = this.handleResize.bind(this)
        this.createVideoElement = this.createVideoElement.bind(this)
        this.createGithubLink = this.createGithubLink.bind(this)
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
        return <p id="demoLink" className="description">Click <a href={this.props.demoLink} className="description" target="_blank">here</a> {this.props.demoText}</p>
        }
    }

    render() {
        return <div className={this.state.fullScreen ? "project-view" : "smallscreen-project-view"}>
            <div className={this.state.fullScreen ? "imgCol" : "smallscreen-imgCol"}>
                <img src={this.props.placeholderImage} />
            </div>
            <div className={this.state.fullScreen ? "textCol" : "smallscreen-textCol"}>
                <div className={this.state.fullScreen ? "title-holder" : "smallscreen-title-holder"}>
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