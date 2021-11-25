import Link from "next/link";
import { Container, Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        
        <Link href="/">
            <a>
                <Navbar.Brand>Biblioteca Digital</Navbar.Brand>
            </a>
        </Link>
        
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link href="/">
                <a>
                    <Nav.Link href="#action2">
                        Inicio
                    </Nav.Link>
                </a>
            </Link>

            <Link href="/users">
                <a>
                    <Nav.Link href="#action2">
                        Users
                    </Nav.Link>
                </a>
            </Link>

            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#">
              Link
            </Nav.Link>

          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
