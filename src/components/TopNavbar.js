import { Navbar, Nav, Container } from "react-bootstrap";
import{useHistory} from 'react-router-dom';
import "../css/styles.css"

function TopNavbar() {
  return (
    <div>
      <Navbar collapseOnSelect fixed="top" expand="sm" variant="dark" style={{backgroundColor: "transparent"}}>
        <Container>
          <Navbar.Brand href="/">
            <img src="/logos/logo1.png" className="navbar-logo"></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="m-auto">         
              <Nav.Link href="/" className="nav-link">HOME</Nav.Link>
              <Nav.Link href="/about" className="nav-link">ABOUT US</Nav.Link>
              <Nav.Link href="#pricing" className="nav-link">COURSES</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default TopNavbar;
