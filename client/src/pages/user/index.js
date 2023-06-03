import { useDispatch, useSelector } from "react-redux";
import CustomDrawer from "@/components/drawer";
import { setToken, setRole } from "../redux/reducerSlice/userSlice";

import Link from "next/link";
import { useRouter } from "next/router";
import ProductList from "../products/productsList";
const UserDashboard = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = () => {
    dispatch(setToken(''))
    // router.push("./login");  
  };
  return (
    <>
      <CustomDrawer />
      <ProductList/>
   <button onClick={handleLogout}><Link href={'/'}>Logout</Link></button>
    </>
  );
};

export default UserDashboard;
