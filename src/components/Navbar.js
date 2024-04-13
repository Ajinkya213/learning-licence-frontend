import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import './Navbar.css'
const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">
            <Image
              src="/logo.png" // Replace '/logo.png' with the path to your logo image
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Learning Licence Quiz Logo"
            />
            {' '}
          LLTest
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NavBar;
