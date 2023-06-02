import { useState, useEffect } from "react";

const ProductList = () => {
  const [listOfProducts, setProducts] = useState([]);
 
  const getProductLists = async () => {
    const res = await fetch("http://127.0.0.1:4000/productsList");
    const data = res.json();
    if (data){
    setProducts(data.listOfProducts);
    }
    // console.log("productsList", products);
  };
  useEffect(() => {
    getProductLists();
  }, []);
  
  return (
    <>
      <h1>Product List</h1>
      <ul>
        {listOfProducts && listOfProducts.map((item) => (
         
          <>
          <li key={item._id}></li>
          <li>{item.productName}</li>
          <li> {item.productPrice}</li>
          <li>{item.productDescription} </li>
          </>
           
        
        ))}
      </ul>
    </>
  );
};

export default ProductList;
