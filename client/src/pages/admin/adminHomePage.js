import { useDispatch, useSelector } from "react-redux";
import AdminProductNav from "@/components/nav/adminProductNav";
import { setToken, setRole } from "../redux/reducerSlice/userSlice";
import Link from "next/link";
import { useRouter } from "next/router";
import ProductList from "../products/productsList";
const AdminDashboard = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = () => {
    dispatch(setToken(''))
    // router.push("./login");  
  };
  return (
    <>
   <AdminProductNav/>
      <ProductList/>
   <button onClick={handleLogout}><Link href={'/'}>Logout</Link></button>
    </>
  );
};

export default AdminDashboard;
