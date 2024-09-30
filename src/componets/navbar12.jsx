import React from 'react';
import { Navbar as BootstrapNavbar, Container} from 'react-bootstrap';
import style from './navbar.module.css';

export default function Navbarp() {
  return (
    <BootstrapNavbar bg="dark" variant="dark">
      <Container>
        <BootstrapNavbar.Brand href="/home" className={style.home}>Spendly</BootstrapNavbar.Brand>
      </Container>
    </BootstrapNavbar>
  );
}
