import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

import html_tag from '../StaticFiles/html_tag.avif'


const NavbarComponent = ( ) => {


    return (
      <Navbar expand='lg' bg='light' collapseOnSelect className='responsive-navbar-nav'>
        <Container>
          <Navbar.Brand href='#'>
             <img src={ html_tag } alt='' className='w-28 h-16' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='ms-auto'>
              <Nav.Link>Home</Nav.Link>
              <Nav.Link>About</Nav.Link>
              <Nav.Link>Contact</Nav.Link>
              <Nav.Link>Services</Nav.Link>
              <Nav.Link>Projects</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>

      </Navbar>

    )
}



export default NavbarComponent