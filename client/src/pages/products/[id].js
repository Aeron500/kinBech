import { useRouter } from 'next/router';
 import { useEffect,useState } from 'react';
 export default function Page() {
  const router = useRouter();
  const [product, setProduct] = useState({});

  useEffect(()=>{
    fetchProductDetails()
  }, [router.query.id])
  const fetchProductDetails =async() => {
    const res = await fetch(`http://localhost:4000/products/`+router.query.id);
    const data = await res.json();
    if(data){
    setProduct(data.productDetailList);
    }

  }
  return (
    
       <div className='card'>
     
       <p>{product.productName}</p>
       <img src={`http://localhost:4000/productImage/${product._id}`} width="220" height="120" />
       <p>{product.productPrice}</p>
   </div>
       
  
  );
}
