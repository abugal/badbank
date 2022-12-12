
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button, Card } from 'react-bootstrap';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Router,
  Link
} from "react-router-dom";

import Home from './Home';


function NavbarComp() {
  return (

    <div>

      <Navbar className='navbar' expand="lg">

        <Container>
          <Navbar.Brand href="/home">Bank Pro</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href='/home'>Home</Nav.Link>
              <Nav.Link href='/newcustomer'>Create Account</Nav.Link>
              <NavDropdown title="Transactions" id="basic-nav-dropdown">
                <NavDropdown.Item href="/deposit">Make Deposit</NavDropdown.Item>
                <NavDropdown.Item href="/withdraw">Make Withdrawal</NavDropdown.Item>
                <NavDropdown.Item href="/transfer">Make Transfer</NavDropdown.Item>

                
                <NavDropdown.Divider />
                <NavDropdown.Item href="/balance">
                  Check Your Balance
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          
        </Container>


      </Navbar>
      

    </div>

  );
}

export default NavbarComp;