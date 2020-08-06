import React, { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import '../css/Header.css'

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isFixed: props.isFixed
        }
        this.addLeftBar = this.addLeftBar.bind(this)
    }

    componentWillReceiveProps(props) {
        this.setState({ isFixed: props.isFixed })
    }

    addLeftBar() {
        if (!this.state.isFixed)
            return <div className="left-bar" style={{backgroundColor: '#61dafb'}}></div>
    }

    render() {
        return <header className={this.state.isFixed ? 'navbar fixed' : 'navbar'}>
            {this.addLeftBar()}
            <div className='navbar__title'>Anuj Parakh</div>
            <Link to="landing"
                spy={true}
                smooth={true}
                duration={500}
                className='navbar__item'
            >Home</Link>
            <Link to="projects"
                spy={true}
                smooth={true}
                offset={-60}
                duration={500}
                className='navbar__item'
            >Projects</Link>
            <Link to="experience"
                spy={true}
                smooth={true}
                offset={-60}
                duration={500}
                className='navbar__item'
            >Experiences</Link>
            <Link to="about"
                spy={true}
                smooth={true}
                offset={-60}
                duration={500}
                className='navbar__item'
            >About</Link>
            <Link to="footer"
                spy={true}
                smooth={true}
                offset={-60}
                duration={500}
                className='navbar__item'
            >Contact</Link>
        </header>
    }
}