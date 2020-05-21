import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div>
      <Navbar color="dark" dark>
        <NavbarToggler
          onClick={() => setCollapsed((s) => !s)}
          className="mr-2"
        />
        <Collapse isOpen={collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="#/">
                <FontAwesomeIcon icon="home" color="white" className="mr-1" />
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#/projects/">
                <FontAwesomeIcon icon="wrench" color="white" className="mr-1" />
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
