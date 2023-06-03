import styles from '@/styles/Home.module.css'

const productCard = (props) => {
 return(
    <div className='card'>
    <ul>
               {props.item.productName}
               <br/>
               {props.item.productPrice}
              {/* { <img src={`http://localhost:4000/productImage/+{props.item.productImage}`}/>} */}
            </ul>
              </div>
)}
export default productCard;