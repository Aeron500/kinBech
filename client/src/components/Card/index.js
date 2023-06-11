import { useRouter } from 'next/router';

const productCard = (props) => {
  const router = useRouter();
  const handleClick=()=>{
    router.push('/products/'+props.item._id)
  }

  return (
 
    <div className="card">
    
      <img src={`http://localhost:4000/productImage/${props.item._id}`} onClick={handleClick} width="220" height="120" />

      <div className="product-name">{props.item.productName}</div>

      <div className="product-price">{props.item.productPrice}</div>
      
    </div>
    
    
   
   
  );
};
export default productCard;
