import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


export default function Navbar32() {
  return (
    <div>
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

      
    </div>
  )
}
