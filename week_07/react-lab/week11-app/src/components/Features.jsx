import { Container, Row, Col, Card, Button } from 'react-bootstrap';

export default function Features() {
  return (
    <section className="features" id="shop">
      <Container>
        <h2 className="section-title">Our Lovely Collection ♡</h2>
        <p className="section-subtitle">
          Little things, lovely vibes!
        </p>

        <Row className="g-4 mt-3">

          <Col md={4}>
            <Card className="product-card">
              <Card.Body>
                <div className="product-icon">🧴</div>
                <Card.Title>Beauty</Card.Title>
                <Card.Text>
                  Your daily dose of self-care and glow.
                </Card.Text>
                <Button className="card-btn">Explore ♡</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="product-card">
              <Card.Body>
                <div className="product-icon">👗</div>
                <Card.Title>Fashion</Card.Title>
                <Card.Text>
                  Cute styles for every occasion.
                </Card.Text>
                <Button className="card-btn">Explore ♡</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="product-card">
              <Card.Body>
                <div className="product-icon">💍</div>
                <Card.Title>Accessories</Card.Title>
                <Card.Text>
                  Add a little sparkle to your look.
                </Card.Text>
                <Button className="card-btn">Explore ♡</Button>
              </Card.Body>
            </Card>
          </Col>

        </Row>
      </Container>
    </section>
  );
}