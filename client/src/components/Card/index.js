import { useRouter } from "next/router";
import {AiFillDelete} from 'react-icons/ai'
import { useSelector } from "react-redux";
import axios from "axios";
const productCard = (props) => {
  const {role}=useSelector(state=>state.user)
  const router = useRouter();
  const handleClick = () => {
    router.push("/products/" + props.item._id);
  };
  const deleteProduct=async()=>{
    const headers = { 
      "Content-Type": "application/json",
  };
  const data = {
    id: props.item._id
  }
  const res =await axios.delete('http://localhost:4000/products', { headers, data })
  if(res) props.getProductLists()
   }

  return (
    <div className="card">
     <img
        src={`http://localhost:4000/productImage/${props.item._id}`}
        onClick={handleClick}
        width="220"
        height="120"
      />

      <div className="product-name">{props.item.productName}</div>

      <div className="product-price">{props.item.productPrice}</div>
    {role=="admin"?(<AiFillDelete onClick={deleteProduct}/>):null}
   

    </div>
  );
};
export default productCard;
