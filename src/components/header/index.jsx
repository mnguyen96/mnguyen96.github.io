import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div>
        <Navbar color="dark" dark>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          {/* <NavbarBrand href="#" className="mr-auto">
            Michael Nguyen
          </NavbarBrand> */}
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="#/">
                  <FontAwesomeIcon icon="home" color="white" className="mr-1" />
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#/projects/">
                  <FontAwesomeIcon
                    icon="wrench"
                    color="white"
                    className="mr-1"
                  />
                  Projects
                </NavLink>
              </NavItem>
              <NavItem>
                <a
                  href="https://github.com/mnguyen96"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <NavLink>
                    <FontAwesomeIcon
                      icon={["fab", "github"]}
                      color="white"
                      className="mr-1"
                    />
                    GitHub
                  </NavLink>
                </a>
              </NavItem>
              <NavItem>
                <a
                  href="https://www.linkedin.com/in/michael-nguyen-955322a4/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <NavLink>
                    <FontAwesomeIcon
                      icon={["fab", "linkedin"]}
                      className="mr-1"
                      color="white"
                    />
                    LinkedIn
                  </NavLink>
                </a>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
