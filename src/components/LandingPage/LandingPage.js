import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import './LandingPage.scss'
import myphoto from '../../img/me_newyork.png'

export default class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isAtTop: props.isAtTop,
        }
        this.getScrollDownArrow = this.getScrollDownArrow.bind(this)
    }

    componentWillReceiveProps(props) {
        this.setState({ isAtTop: props.isAtTop })
    }

    getScrollDownArrow = () => {
        // if (this.state.isAtTop)
            return <Link to="about"
                    spy={true}
                    smooth={true}
                    offset={-60}
                    duration={500}
                    className="fa fa-angle-down scrollDown">
                </Link>
    }

    render() {
        return <div className="landing" >
            <div className="left-bar" style={{backgroundColor: '#61dafb'}}></div>
            {/* <img src={myphoto}></img> */}
            <p className="mainheading">Hi, I'm Anuj Parakh</p>
            <p className="secondheading">A Computer Engineer</p>
            <div className="links-holder">
                <a href="https://www.github.com/anujparakh" target="_blank" className="fa fa-github"></a>
                <a href="https://www.linkedin.com/in/anuj-parakh" target="_blank" className="fa fa-linkedin-square"></a>
                <a href="mailto: anuj@anujinfotech.com" target="_blank" className="fa fa-envelope"></a>
            </div>
            { this.getScrollDownArrow() }
        </div>
    }
}