import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
 import { Button, Checkbox, Input, message } from 'antd';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { InputNumber } from 'antd';
import { useDispatch } from 'react-redux'
import { useSelector } from "react-redux";
import { setToken } from "../redux/reducerSlice/userSlice";
// import logo from  '../../public/buysell.jpg'
const initialValues = {
    phoneNumber: '',
    password: ''
  }
  const SignupSchema = Yup.object().shape({
    phoneNumber: Yup.number()
    .typeError('must be a number')
    .test('checkLength', 'the number should exactly be 10 digits', val => val.toString().length == 10)
    .required('Required'),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  });
// const onFinish = (values) => {
//     console.log('Success:', values);
//   };
//   const onFinishFailed = (errorInfo) => {
//     console.log('Failed:', errorInfo);
//   };
const Login=()=>{
    const [messageApi, contextHolder] = message.useMessage();
const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch()

  const { token } = useSelector(state => state)
  
  console.log(token)


  const handleLogin = async (values) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phoneNumber: values.phoneNumber, password:values.password }),
    };
    try{
    const res = await fetch("http://127.0.0.1:4000/login", requestOptions);
    const data = await res.json()
        if (data.success) {
          message.success("login successful");
          dispatch(setToken(data.token))
        } else {
            message.error("login failed, try again");
        }
      } catch (err) {
          messageApi.warning(data.message); 
       
      }
  };
  return (
    <>
      <header className="nav">
      <div className="title"> <h1>KinBech</h1></div>
      <div className="logo">
    <img src='https://e7.pngegg.com/pngimages/696/531/png-clipart-logo-brand-buy-and-sell-text-logo.png' className="logo" />
      </div>
     
      </header>
      <br />
     
      {/* <Form className="container"
    name="basic"
    labelCol={{
      span: 5,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    // onFinish={onFinish}
    // onFinishFailed={onFinishFailed}
    // autoComplete="on"
  >
  
    <Form.Item
      label="Phone Number"
      name="PhoneNumber"

      onChange={(e) => setPhoneNumber(e.target.value)}
      rules={[
        {
          required: true,
          message: 'Please input your phone number!',

        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      onChange={(e) => setPassword(e.target.value)}
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item
      name="remember"
      valuePropName="checked"
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
    
      <Button type="primary" htmlType="submit" onClick={handleLogin} >
      
        Login
      </Button> */}
   <div>
     
     <Formik
       initialValues={{
         phoneNumber: '',
         password: ''
        
       }}
       validationSchema={SignupSchema}
       onSubmit={handleLogin}
     >
       {({ errors, touched }) => (
         <Form className="login">
         <p className="form-title">SignIn</p>
                <Field name="phoneNumber" placeholder="phone number"/>
           {errors.phoneNumber && touched.phoneNumber ? (
             <div className="error-msg">{errors.phoneNumber}</div>
           ) : null}
           
                <Field name="password"placeholder="password"/>
           {errors.password && touched.password ? (
             <div className="error-msg">{errors.password}</div>
           ) : null}
            <br/>
           <button type="submit" className="login-btn">Login</button>
           <br />
        Don't have an account yet? <Link href="/register">Sign Up</Link> instead
  
         </Form>
       )}
     </Formik>
   </div>
      {contextHolder}
     

    </>
  );
}
  export default Login