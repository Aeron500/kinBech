import React,{ useState, useEffect } from "react";
import { Skeleton } from 'antd';
import Card from '../../components/Card'
import { Pagination } from 'antd';
import {AiOutlineSearch} from 'react-icons/ai'

const ProductList = () => {
  const [listOfProducts, setlistOfProducts] = useState([]);
  const[search,setSearch]=useState('')
  const getProductLists = async (page=1) => {
    try{
    const res = await fetch("http://127.0.0.1:4000/products?page="+page);
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
  const searchProduct =async(value)=>{
    try{
      const res = await fetch("http://127.0.0.1:4000/products?searchKey="+value);
    
    }catch(e)
    {
      console.error(e)
    }
  }
  
  return (
    
    <div className="main-card">
             <AiOutlineSearch style={{height:'3vh',width:'40px'}}/><input placeholder="Search for products" onChange={(e)=>searchProduct(e.target.value)} style={{width:"70%"}}/>
         
      
      {listOfProducts.length> 0 ? listOfProducts.map((item)=>{
            return( <Card item={item} getProductLists={getProductLists}/>)
          }) : <Skeleton />}
          <Pagination defaultCurrent={1} total={4} pageSize={3} onChange={(page)=>getProductLists(page)}/>
      </div>
  );
};

export default ProductList;
