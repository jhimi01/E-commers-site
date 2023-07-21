import React, { useEffect, useState } from 'react';
import { BsFillCartFill, BsHeart } from 'react-icons/bs';
import { FaBalanceScale } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';

const Product = () => {
  const { id } = useParams();
  const { products } = useProducts();
  const product = products.filter((product) => product.id == id);

  // ... Rest of your component code ...

  // Function to handle the "Add To Cart" button click event
  const handleAddToCart = () => {
    // Get the existing cart items from localStorage (if any)
    const existingCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    // Check if the product is already in the cart based on its ID
    const productInCart = existingCartItems.find((item) => item.id === product[0].id);

    // If the product is already in the cart, you may update its quantity or perform any other action
    if (productInCart) {
      // Example: Increase the quantity by 1
      productInCart.quantity += 1;
    } else {
      // If the product is not in the cart, add it as a new item
      existingCartItems.push({ ...product[0], quantity: 1 });
    }

    // Store the updated cart items in localStorage
    localStorage.setItem('cartItems', JSON.stringify(existingCartItems));

    // You can show a success message or perform any other action here
    console.log('Product added to cart successfully!');
  };

  // ... Rest of your component code ...
};

// export default Product;




// ... Rest of your component code ...

<button className="add flex uppercase items-center gap-2 bg-blue-400 py-2 px-7 text-white font-normal" onClick={handleAddToCart}>
  Add To Cart <BsFillCartFill />
</button>

// ... Rest of your component code ...

