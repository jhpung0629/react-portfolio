import React from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap';

import './fixednavbar.css'

interface Props {

}

interface State {

}

export default class FixedNavBar extends React.Component {
  render() {
    return (
      <>
        <Navbar className="navbar" collapseOnSelect expand="md" variant="dark" fixed="top">
          <Container>
            <Navbar.Brand href="#root">P J H</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
              <Nav className="justify-content-center">
                <Nav.Item>
                  <Nav.Link href="#about">ABOUT</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#skills">SKILLS</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#works">WORKS</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#contact">CONTACT</Nav.Link>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Container>
            
          <script type="javascript">
            document
          </script>
        </Navbar>
      </>
    );
  }
}