import styles from "../../styles/Home.module.css";
import { useRouter } from "next/router";
import ProductList from "@/pages/products/productsList";

const AdminNav = () => {
  const router = useRouter();
  return (
    <>
      <div className="nav-admin">
        <h1>Admin Panel</h1>
   
      </div>
    </>
  );
};

export default AdminNav;
