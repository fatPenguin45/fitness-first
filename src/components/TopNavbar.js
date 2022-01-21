import { Navbar, Nav, Container } from "react-bootstrap";
import "../css/styles.css"

function TopNavbar() {
  return (
    <div>
      <Navbar collapseOnSelect fixed="top" expand="sm" variant="dark" style={{backgroundColor: "transparent"}}>
        <Container>
          <Navbar.Brand href="#home">
            <img src="/logos/logo1.png" className="navbar-logo"></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="m-auto">          {/*use m-auto to have Nav.Link items centered on the Navbar*/}
              <Nav.Link href="#home" className="nav-link">HOME</Nav.Link>
              <Nav.Link href="#features" className="nav-link">ABOUT US</Nav.Link>
              <Nav.Link href="#pricing" className="nav-link">COURSES</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default TopNavbar;
