
const productCard = (props) => {
  return (
 
    <div className="card">
      <img src={`http://localhost:4000/uploads/${props.item.productImage}`}  width="220" height="120" />

      <div className="product-name">{props.item.productName}</div>

      <div className="product-price">{props.item.productPrice}</div>
    </div>
    
   
   
  );
};
export default productCard;
