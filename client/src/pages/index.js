import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { Button, Checkbox, Form, Input } from "antd";
import { InputNumber } from "antd";
import Navbar from "@/components/nav";
import { useSelector } from "react-redux";
import Login from "./login";
import UserDashboard from "./user";
import AdminDashboard from "./admin";
import CustomDrawer from "@/components/drawer";
import ProductList from "./products/productsList";


const inter = Inter({ subsets: ["latin"] });

const Main = () => {
  const { token, role } = useSelector(state => state.user);


  const Dashboard = () => {
    switch (role) {
      case 'user':
        return <UserDashboard/>
      case 'admin':
        return <AdminDashboard/>
    }
    
  };
  // const Auth = () => {
  //   return <Login/>;
  // };
  
  return (
   
    <div>
   
 
       {/* {role ? <CustomDrawer/> : null} */}
   
      
      {token ?<Dashboard/> :<Login/>}
    </div>
  );
};

export default Main;
