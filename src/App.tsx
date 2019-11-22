import React from 'react';
import Intro from './components/intro/intro';
import FixedNavBar from './components/navbar/fixednavbar';
import About from './components/about';
import Skills from './components/skills';
import Works from './components/works';
import Contact from './components/contact';
import Footer from './components/footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { array } from 'prop-types';

interface Props {

}

interface State {

}

export default class App extends React.Component<Props, State> {
  render() {
    return (
      <>
        <FixedNavBar></FixedNavBar>
        <Intro></Intro>
        <div className="container">
          <About></About>
          <Skills></Skills>
          <Works></Works>
          <Contact></Contact>
        </div>
        <Footer></Footer>

        
      </>
    );
  }
}