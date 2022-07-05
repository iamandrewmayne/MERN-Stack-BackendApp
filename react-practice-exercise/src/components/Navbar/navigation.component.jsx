import React from 'react'
import { Link } from "react-router-dom";
import { Navbar, Container,Nav } from 'react-bootstrap';
import { MdShoppingBag } from "react-icons/md";
import './navigation.styles.scss';

function Navigation() {
return (
<>
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="/"><strong> Shoppy </strong></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features"><MdShoppingBag className='logo'/></Nav.Link>
    </Nav>


    <Nav>
    <Link className='link' to="/"><strong>Home</strong></Link>
      <Link className='link' to="/sign-up">Signup</Link>
      <Link className='link' to="/login">
        Login
      </Link>
      <Link className='link' to="/Feature">Feature</Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
</>
  )
}

export default Navigation;




