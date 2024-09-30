import './Cards.css';
import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer1 from "./footor";
import { data1 } from './data/computers'; // assuming this is your data source
import { Link } from 'react-router-dom';

export default function Computer() {
  const [products, setProducts] = useState([]); // Initialize as an array
  const [filteredProducts, setFilteredProducts] = useState([]); // Filtered product list
  const [searchTerm, setSearchTerm] = useState(''); // Search query

  useEffect(() => {
    // Load the product data from data1
    const productList = data1.data.catalog.category.productsWithMetaData.list; 
    if (productList && productList.length > 0) {
      setProducts(productList); // Set the product list
      setFilteredProducts(productList); // Initialize filtered list with full list
    }
  }, []); // Empty dependency array to run only once on mount

  // Handle search input changes
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase(); // Convert to lowercase for case-insensitive search
    setSearchTerm(query);

    // Filter the products based on the search query
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(query)
    );
    setFilteredProducts(filtered); // Update the filtered product list
  };

  return (
    <div>
      {/* First Navbar */}
      <Navbar className="bg-body-tertiary" bg="dark" data-bs-theme="dark" sticky="top">
        <Container>
          <Navbar.Brand style={{ fontSize: '16px', position: "relative", left: "30%" }}>
            Free Shipping Over $50 Worldwide
          </Navbar.Brand>
        </Container>
      </Navbar>

      {/* Second Navbar */}
      <Navbar expand="lg" className="bg-body-tertiary" bg="light" sticky="top">
        <Container>
          <Navbar.Brand href="/home" style={{ position: "relative", left: "10px", fontSize: "25px" }}>Spendly</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" style={{ position: "relative", left: "85%" }}>
              <Nav.Link href="/">Login</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar><br />

      {/* Product Categories */}
      <Nav activeKey="/home" sticky="top">
        <Nav.Item>
          <Nav.Link href="/mobiles" style={{ color: "black", fontSize: "16px" }}>Mobile & Wearable Tech</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/drones" style={{ color: "black", fontSize: "16px" }}>Drones & Cameras</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/speakers" style={{ color: "black", fontSize: "16px" }}>Headphones & Speakers</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/computer" style={{ color: "blue", fontSize: "16px", marginLeft: "12px", textDecoration: "underline" }}>Computers</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/tablet" style={{ color: "black", fontSize: "16px" }}>Tablets</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/tv" style={{ color: "black", fontSize: "16px", position: "relative", left: "10%" }}>TV & Home Cinema</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          {/* Search Input */}
          <input 
            type='search' 
            placeholder='Search' 
            value={searchTerm}
            onChange={handleSearch} 
            style={{ position: "relative", left: "96%", marginLeft: "30px", width: "220px", borderRadius: "12px" }} 
          />
        </Nav.Item>
      </Nav><br /><br /><br />

      <h1 style={{ color: "black", textAlign: "center" }}>Product List</h1><br />
      
      {/* Render the Product List */}
      <Container>
        <Row>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4">
                <Link to={`/computer/${product.id}`} className="card-link" style={{ textDecoration: "none" }}>
                  <div className="card">
                    {product.media && product.media.length > 0 && (
                      <img
                        src={product.media[0].fullUrl}
                        alt={product.name}
                        className="card-img"
                      />
                    )}
                    <div className="card-body">
                      <h2 className="card-title">{product.name}</h2>
                      <h3 className="card-price">Price: ${product.price.toFixed(2)}</h3>
                      <button className="card-button">Buy Now</button>
                    </div>
                  </div>
                </Link>
              </Col>
            ))
          ) : (
            <Col xs={12}><p>No products available.</p></Col>
          )}
        </Row>
      </Container>
      
      <Footer1 />
    </div>
  );
}
