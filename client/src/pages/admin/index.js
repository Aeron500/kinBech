import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import { message } from "antd";
import { useState } from "react";
import { setRole, setToken } from "../redux/reducerSlice/userSlice";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

import AdminNav from "@/components/nav/adminNav";
const registerProduct = Yup.object().shape({
  productName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  productPrice: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  productDescription: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),

});

const Admin = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [file, setFile] = useState(null);
  const dispatch= useDispatch()
  const router= useRouter();
  const handleLogout=()=>{
    dispatch(setToken(''))
    router.push('./')
  }
  const registerProduct = async (values) => {
  //     const requestOptions = {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify( values)
  //   };
  //   try {
  //     const res = await fetch('http://localhost:4000/products', requestOptions)
  //     console.log(res)
  //     const data = await res.json()
  //     console.log(data)
  //     if (res&&data.success) {
  //       message.success(data.msg);
  //     } else {
  //       message.error(data.msg);
  //     }
  //   } catch (err) {
  //   console.log(err);
  //   }
  // };
    var formData = new FormData();

    const keys = Object.keys(values);
    keys.forEach((item) => {
      formData.append(item, values[item]);
    });
    formData.append("productImage", file);
    const requestOptions = {
      method: "POST",
      body: formData,
    };
    try {
      const res = await fetch("http://localhost:4000/products", requestOptions);
    } catch (err) {
      // error tracking tools
      console.log(err);
    }
  };
  const handleFileSave = (e) => {
    console.log(e.target.files);
    setFile(e.target.files[0]);
  };
  return (
    <div className="register-container">
    <AdminNav/>
    
      <div className="form-admin">
        <p className="form-title">Product Details</p>
        <Formik
          initialValues={{
           productName:"",
           productPrice:"",
           productDescription:"",
          }}
          // validationSchema={registerProduct}
          onSubmit={(values) => {
            // same shape as initial values
            registerProduct(values);
          }}
        >
          {({ errors, touched }) => (
            <Form>
            <p for="productName" className="product" >
                <span>Product Name:</span>
              </p>
              <Field name="productName" className="input-admin"/>
              {errors.productName && touched.productName ? (
                <div className="error-msg">{errors.productName}</div>
              ) : null}
              
              <p for="productPrice"  className="product">
                <span>Product price:</span>
              </p>
              <Field name="productPrice" className="input-admin"/>
              {errors.productPrice && touched.productPrice ? (
                <div className="error-msg">{errors.productPrice}</div>
              ) : null}
              
              <p for="productDescription"  className="product">
                <span>Product Description:</span>
              </p>
              <Field name="productDescription" className="input-admin" />
              {errors.productDescription && touched.productDescription ? (
                <div className="error-msg">{errors.productDescription}</div>
              ) : null}
              <br/>
              
              <input type="file" onChange={handleFileSave} />
              <button type="submit" className="register-btn">
                Submit
              </button>
              <br/>
              <button onClick={handleLogout} className="admin-logout-btn">Logout</button>
             
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
export default Admin;
