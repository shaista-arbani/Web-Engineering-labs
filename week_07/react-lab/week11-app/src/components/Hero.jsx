import { Container, Button } from 'react-bootstrap';

export default function Hero() {
  const heading = "Your Style, Your Story ♡";
  const description = "Discover lovely little things that make every day feel special.";

  return (
    <section className="hero">
      <Container>
        <div className="hero-content">
          <p className="tagline">WELCOME TO SHOPKIT ✨</p>

          <h1>{heading}</h1>

          <p>{description}</p>

          <Button className="shop-btn" href="#shop">
            Explore Collection ♡
          </Button>
        </div>
      </Container>
    </section>
  );
}