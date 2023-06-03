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
    <div className="main-card">
      <h1 style={{textAlign:'center'}}>Product List</h1>
      
        {/* { listOfProducts.map((item) => (
         
        <><li key={item._id}></li>
        <li>{item.productName}</li>
        <div style={{ color: 'red' }}>Price: {item.productPrice}</div>
        <div><h1>{item.productDescription} </h1></div></>
      ))} */}
      {listOfProducts.length> 0 ? listOfProducts.map((item)=>{
            return( <Card item={item}/>)
          }) : <Skeleton />}
      
    </div>
  );
};

export default ProductList;
