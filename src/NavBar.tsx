import React, { Component } from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
// import { Link, animateScroll as scroll } from "react-scroll";
import "./App.css";

export class NavBar extends Component {
  render() {
    return (
      <div className="dark-kaavi-color navBar NavBarZ">
        <Container>
          <Navbar className="NavBarFont" expand="md" sticky="top" fixed="top">
            <Navbar.Brand href="#home" style={{ color: "#fff" }}>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />

              <NavLink to="/">
                <Button variant="outline-dark" style={{ color: "#fff" }}>
                  {" "}
                  Home
                </Button>
              </NavLink>
            </Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
              {}
              
              <NavLink to="/donate">
                {" "}
                <Button variant="outline-success" style={{ color: "#fff" }}>
                  Donate
                </Button>
              </NavLink> 
            </Navbar.Collapse>
          </Navbar>
          {/* <Link activeClass='active'
            to='carousel'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>Scrolldown
            <Link/> */}
        </Container>
      </div>
    );
  }
}

export default NavBar;
