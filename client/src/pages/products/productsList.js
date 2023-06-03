import React,{ useState, useEffect } from "react";
import { Skeleton } from 'antd';
import Card from '../../components/Card'
const ProductList = () => {
  const [listOfProducts, setlistOfProducts] = useState([]);
 
  const getProductLists = async () => {
    const res = await fetch("http://127.0.0.1:4000/products");
 
    const data = await res.json();
    if (data){
      setlistOfProducts(data.listOfProducts);
    }
    console.log("listOfProducts", listOfProducts);
    console.log(listOfProducts)
  };
  useEffect(() => {
    getProductLists();
  }, []);
  
  return (
    <>
      <h1>Product List</h1>
      <ul>
        {/* { listOfProducts.map((item) => (
         
        <><li key={item._id}></li>
        <li>{item.productName}</li>
        <div style={{ color: 'red' }}>Price: {item.productPrice}</div>
        <div><h1>{item.productDescription} </h1></div></>
      ))} */}
      {listOfProducts.length> 0 ? listOfProducts.map((item)=>{
            return( <Card item={item}/>)
          }) : <Skeleton />}
      </ul>
    </>
  );
};

export default ProductList;
