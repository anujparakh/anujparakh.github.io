import React from 'react';
import About from './components/About'
import Header from './components/Header'
import LandingPage from './components/LandingPage'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Service from './components/Service'
import Footer from './components/Footer'
import { Link, animateScroll as scroll } from "react-scroll";


import './App.css';

const mobileWidth = 700

class App extends React.Component {
  constructor() {
    super()
    this.state = { headerFixed: false }
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, {passive: true});
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = event => {
    if (window.scrollY <= 0 && this.state.headerFixed === true) {
      this.setState({ headerFixed: false });
    }
    else if (window.scrollY > 0 && this.state.headerFixed !== true) {
      this.setState({ headerFixed: true });
    }
  }

  render() {
    return (
      <div className="App" onScroll={this.handleScroll}>
        <Header isFixed={this.state.headerFixed} mobileWidth={mobileWidth}></Header>
        <LandingPage isAtTop={!this.state.headerFixed} mobileWidth={mobileWidth}></LandingPage>
        <Projects mobileWidth={mobileWidth}></Projects>
        <Experience mobileWidth={mobileWidth}></Experience>
        <About mobileWidth={mobileWidth}></About>
        <Footer mobileWidth={mobileWidth}></Footer>
      </div>
    );
  }
}

export default App;