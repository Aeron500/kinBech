import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import UserNav from "@/components/nav/UserNav";
export default function Page() {
  const router = useRouter();
  const [product, setProduct] = useState({});
  const {token,id}=useSelector(state=>state.user)
  const { productId, productName } = router.query

  useEffect(() => {
    fetchProductDetails();
  }, [router.query.id]);
  const fetchProductDetails = async () => {
    try{
    const res = await fetch(
      `http://localhost:4000/products/` + router.query.id
    );
    const data = await res.json();
    if (data) {
      setProduct(data.productDetailList);
    }
  }catch(err){
    console.error(err)
  }
  };
  const handleAddtoCart = async () => {
    if (token) {
        try {
            const body = {
                productId: router.query.id,
                phoneNumber: router.query.phoneNumber,
                productName:router.query.productName,
                userId:id
          
            };
            const response = await fetch('http://localhost:4000/cart',
             {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            });

            if (response.ok) {
                console.log('product added to cart');
                alert("product added to cart");
            } else if (response.status === 409) {
                const data = await response.json();
                alert(data.error);
            } else if (response.status === 400) {
                alert("Item already exists in the cart")
            } else {
                console.error('Product add to cart failed');
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }
    } else {
        alert("Please login first, to add to cart")
        router.push('/login')
    }
}

  return (
  
    <div className="details-card">
    <UserNav/>
      <div style={{ flex: "0 0 300px", marginRight: "600px",marginTop:"50%",marginLeft:"-300px" }}>
        <img
          src={`http://localhost:4000/productImage/${product._id}`}
          width="220"
          height="120"
        />
      </div>
      <div style={{marginRight: "150px",marginTop:'-130px',marginLeft:"20px",marginBottom:'10px'}}>
        <h1>{product.productName}</h1>
      </div>
      <div style={{ flex: "1" }}>
        <p style={{ color: "red", fontSize: "24px", marginRight: "150px",marginTop:"10%",marginLeft:"50px",marginBottom:'-60px'}}>{product.productPrice}</p>
      
        <li style={{fontFamily:'cursive', fontSize: "18px", marginRight: "120px",marginTop:"30%",marginLeft:"20px" }}>{product.productDescription}</li>
      </div>

        <button type='submit' className="AddCart" onClick={handleAddtoCart}>Add to Cart</button>
     
    </div>
  );
}
