import { Navbar as BsNavbar, Nav, Container } from 'react-bootstrap';

export default function Navbar() {
  return (
    <BsNavbar expand="lg" className="pink-navbar">
      <Container>
        <BsNavbar.Brand href="#" className="brand">
          ShopKit ♡
        </BsNavbar.Brand>

        <BsNavbar.Toggle aria-controls="shop-navbar" />

        <BsNavbar.Collapse id="shop-navbar">
          <Nav className="ms-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#shop">Shop</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  );
}