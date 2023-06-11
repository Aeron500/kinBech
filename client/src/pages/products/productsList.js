import React,{ useState, useEffect } from "react";
import { Skeleton } from 'antd';
import Card from '../../components/Card'

const ProductList = () => {
  const [listOfProducts, setlistOfProducts] = useState([]);
  const getProductLists = async () => {
    try{
    const res = await fetch("http://127.0.0.1:4000/products/");
    const data = await res.json();
    if (data){
      setlistOfProducts(data.listOfProducts);
    }
    console.log("listOfProducts", listOfProducts);
    console.log(listOfProducts)
  }catch(e)
  {
    console.error(e)
  }
  };
  useEffect(() => {
    getProductLists();
  }, []);
  
  return (
    <div className="main-card">
      <h1 style={{textAlign:'center'}}>Product List</h1>
      {listOfProducts.length> 0 ? listOfProducts.map((item)=>{
            return( <Card item={item}/>)
          }) : <Skeleton />}
      </div>
  );
};

export default ProductList;
