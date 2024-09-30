import React from 'react';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import './Category.css';

function FluidExample({ Imageurl2 ,Text}) {
  return (
    <><h3>{Text}</h3>
    <div className="image-wrapper">
      <Image src={Imageurl2} fluid className="image" />

      <Button variant="primary" className="overlay-button">
        Shop Now
      </Button>

    </div></>
  );
}

export default FluidExample;
