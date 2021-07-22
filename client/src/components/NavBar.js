import React, { useContext } from "react";
import { Context } from '../index';
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"

const NavBar = () => {
   const { user } = useContext(Context);

   return (
      <Navbar bg="dark" variant="dark">
         <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
               <Nav.Link href="#home">Home</Nav.Link>
               <Nav.Link href="#features">Features</Nav.Link>
               <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
         </Container>
      </Navbar>
   )
};

export default NavBar