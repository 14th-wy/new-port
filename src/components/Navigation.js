import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../style/Navigation.css';
import About from './About';
import { Routes, Route, Link } from 'react-router-dom';

export default function Navigation() {
  return (
      <Navbar expand="lg" variant="light" bg="light" fixed="top" className="myNav">
        <Container>
          <Navbar.Brand href="#" className='myBrand'>14Th-WY</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav className='myLink'>
                    <Link to='/' className='link'>
                        Home
                    </Link>
                    <Link to='/about' className='link'>
                        About
                    </Link>
                    <Link className='link'>
                        Project
                    </Link>
                    <Link className='link'>
                        Resume
                    </Link>
                    <Link className='link'>
                        Contact
                    </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}