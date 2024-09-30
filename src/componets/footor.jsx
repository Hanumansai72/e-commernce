import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './footor.css';

function Footer1() {
  return (
    <footer className="footer bg-dark text-white">
      <Container>
        <Row>
          {/* Footer Section 1 */}
          <Col md={4}>
            <h5>About Us</h5>
            <p>
              We are a company dedicated to providing the best services and
              products to our customers.
            </p>
          </Col>

          {/* Footer Section 2 */}
          <Col md={4}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#home" className="text-white">Home</a></li>
              <li><a href="#services" className="text-white">Services</a></li>
              <li><a href="#about" className="text-white">About Us</a></li>
              <li><a href="#contact" className="text-white">Contact</a></li>
            </ul>
          </Col>

          {/* Footer Section 3 */}
          <Col md={4}>
            <h5>Follow Us</h5>
            <ul className="list-unstyled social-icons">
              <li><a href="#facebook" className="text-white">Facebook</a></li>
              <li><a href="#twitter" className="text-white">Twitter</a></li>
              <li><a href="#instagram" className="text-white">Instagram</a></li>
              <li><a href="#linkedin" className="text-white">LinkedIn</a></li>
            </ul>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col className="text-center">
            <p>&copy; 2024 Your Company. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer1;
