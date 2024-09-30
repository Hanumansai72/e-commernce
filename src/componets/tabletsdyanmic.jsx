import React from 'react';
import Navbar32 from './navbar32';
import { useParams } from 'react-router-dom';
import {data1} from './data/tablets';
import "./Page.css";
import Footer1 from './footor';
const Mobilesinglepage1 = () => {
  const { id } = useParams();

  // Safely check if products exist in the data structure
  const products = data1?.data?.catalog?.category?.productsWithMetaData?.list || [];

  // Find the product based on the id
  const product = products.find((item) => item.id === id);

  // If product is not found, show a message
  if (!product) {
    return <h1>Product not found</h1>;
  }

  return (
    <>
    <Navbar32></Navbar32><br /><br /><br />
  
    <div>
      
      
      <img src={product.media[0]?.fullUrl} alt={product.name} className='image' />
      <h1 className='Name'>{product.name}</h1>
      <h2 className='price'>Price: {product.formattedPrice}</h2>
      <button className='bb'>Buy Now</button>
      {/* Add more product details here */}
    </div>
    <Footer1></Footer1>
    </>
  );
}

export default Mobilesinglepage1;
