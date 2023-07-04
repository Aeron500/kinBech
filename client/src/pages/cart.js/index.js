import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await fetch(`http://localhost:4000/cart`);
        const data = await response.json();

        if (Array.isArray(data)) {
          setCartItems(data);
        } else {
          console.error('Received cart items data is not an array:', data);
        }

        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    fetchCartItems();
  }, []);

  return (
    <div>
      <div>
        <h1>Cart Items</h1>
        {cartItems.map((cartItem) => (
          <div key={cartItem._id}>
            <ul>
              {cartItem.userCarts.map((item) => (
                <li key={item._id}>
                  <h4>{item.productId.productName}</h4>
                  <p>Quantity: {item.productQuantity}</p>
                  <p>Price: {item.productId.productPrice}</p>
                  <p>Category: {item.productId.productCategory}</p>
                  <p>Description: {item.productId.productDescription}</p>
                </li>
              ))}
            </ul>
         
          </div>
   
        ))}
         
      </div>
      
    </div>
  );
};

export default Cart;