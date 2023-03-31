import { Container, Nav, Navbar, Row } from "react-bootstrap";

export default function ErrorPage() {

  return (
    <>
      <Navbar variant="light" bg="light">
        <Container>
          <Navbar.Brand href="/">Tinkergram</Navbar.Brand>
          <Nav>
            <Nav.Link href="/add">New Post</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container>
        <Row>
          "Error Encountered. Please call Support"
        </Row>
      </Container>
    </>
  );
}
