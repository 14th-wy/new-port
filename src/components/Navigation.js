import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../style/Navigation.css';

export default function Navigation() {
  return (
      <Navbar expand="lg" variant="light" bg="light" fixed="top" className="myNav">
        <Container>
          <Navbar.Brand href="#" className='myBrand'>14Th-WY</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav className='myLink'>
                    <Nav.Link className='link'>
                        Home
                    </Nav.Link>
                    <Nav.Link className='link'>
                        About
                    </Nav.Link>
                    <Nav.Link className='link'>
                        Project
                    </Nav.Link>
                    <Nav.Link className='link'>
                        Resume
                    </Nav.Link>
                    <Nav.Link className='link'>
                        Contact
                    </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}