import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Header() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div>
      <Navbar color="dark" dark fixed="top">
        <NavbarToggler onClick={() => setCollapsed((s) => !s)} className="mx-3" />
        <Collapse isOpen={collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink className="mx-3" href="#/">
                <FontAwesomeIcon icon="home" color="white" className="me-1" />
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="mx-3" href="#/projects/">
                <FontAwesomeIcon icon="wrench" color="white" className="me-1" />
                Projects
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="mx-3" href="https://github.com/mnguyen96" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={['fab', 'github']} color="white" className="me-1" />
                GitHub
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="mx-3"
                href="https://www.linkedin.com/in/michael-nguyen-955322a4/"
                style={{ textDecoration: 'none !important' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={['fab', 'linkedin']} className="me-1" color="white" />
                LinkedIn
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
