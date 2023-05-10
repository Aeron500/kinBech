import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { Button, Checkbox, Form, Input } from 'antd';
import { InputNumber } from 'antd';
import logo from  '../../public/buysell.jpg'

const inter = Inter({ subsets: ["latin"] });
const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phoneNumber: phoneNumber, password: password }),
    };
    const data = await fetch("http://localhost:4000/login", requestOptions);
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
      {/* <div className="container">
        <input
          placeholder="Phone Number"
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <br />
        <input
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br/>
        <button onClick={handleLogin}>Login</button>
        <br />
        Don't have an account yet? <Link href="/register">Sign Up</Link> instead
      </div> */}
      <Form className="container"
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
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Phone Number"
      name="Phone Number"

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
      </Button>
      <br />
        Don't have an account yet? <Link href="/register">Sign Up</Link> instead
    </Form.Item>
  </Form>

    </>
  );
};

export default Login;
