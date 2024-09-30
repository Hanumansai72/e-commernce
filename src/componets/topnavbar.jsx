import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Carousel from 'react-bootstrap/Carousel';




export default function CombinedNavbar({ title, text, imageUrl, buttonText }) {

    return (
        <>
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
                        <Nav className="me-auto" style={{ position: "relative", left: "85%", }}>
                            <Nav.Link href="/">Login</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                            <Nav.Link href="/">Login</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar><br />
            <Nav
                activeKey="/home"
                onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                sticky="top">
                <Nav.Item>
          <Nav.Link href="/mobiles" style={{ color: "black", fontSize: "16px",  }}>Mobile & Wearable Tech</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/drones" style={{ color: "black", fontSize: "16px"}}>Drones & Cameras</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/speakers" style={{ color: "black", fontSize: "16px" }}>Headphones & Speakers</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/computer" style={{ color: "black", fontSize: "16px", marginLeft: "12px"}}>Computers</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/tablet" style={{ color: "black", fontSize: "16px" }}>Tablets</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/tv" style={{ color: "black", fontSize: "16px", position: "relative", left: "10%" }}>TV & Home Cinema</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <input type='search' placeholder='Search' style={{ position: "relative", left: "96%", marginLeft: "30px", width: "220px", borderRadius: "12px" }} />
        </Nav.Item></Nav>

            <Carousel data-bs-theme="dark">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://static.wixstatic.com/media/c837a6_00173c4a200f44269fa9acb29a36beaf~mv2.jpg/v1/fill/w_1899,h_1013,fp_0.49_0.52,q_85,usm_0.66_1.00_0.01,enc_auto/templatesdrive_3d_models_of_8_products_edited.jpg/100px50"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h5 style={{ fontSize: "85px", position: 'absolute', bottom: "890%", color: "white", left: "-14%" }}>Shop The Top <br />Brand Electronic</h5>
                        <h5 style={{ fontSize: "20px", position: 'absolute', bottom: "750%", color: "white", left: "-14%" }}>Get more for your money with every purchase!</h5>
                        <button type="button" style={{ fontSize: "20px", position: 'absolute', bottom: "560%", color: "white", left: "-14%", width: "130px", height: "50px", background: "rgb(41, 142, 201)", border: "none", borderRadius: "15px", fontWeight: "600" }}>Shop Now</button>

                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel><br /><br />
            <h2 style={{position:'absolute',left:'30px'}}>New Products</h2><br /><br /><br /><br /><br />
            




        </>
    );
}
