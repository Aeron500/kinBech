import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";
import styles from "@/styles/Home.module.css";
import { Button, Checkbox, Input, message } from "antd";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { InputNumber } from "antd";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setToken, setRole } from "../redux/reducerSlice/userSlice";
import Link from "next/link";
import Footer from "@/components/footer";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
// import { useRouter } from "next/router";
// import logo from  '../../public/buysell.jpg'
const initialValues = {
  phoneNumber: "",
  password: "",
};
const SignupSchema = Yup.object().shape({
  phoneNumber: Yup.number()
    .typeError("must be a number")
    .test(
      "checkLength",
      "the number should exactly be 10 digits",
      (val) => val.toString().length == 10
    )
    .required("Required"),
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});
const Login = () => {
  const [messageApi, contextHolder] = message.useMessage();
  // const router = useRouter();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  const { token } = useSelector((state) => state.user);

  console.log(token);
  const toggle = () => {
    setOpen(!open);
  };
  const handleLogin = async (values) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        phoneNumber: values.phoneNumber,
        password: values.password,
      }),
    };
    try {
      const res = await fetch("http://127.0.0.1:4000/login", requestOptions);
      const data = await res.json();
      if (data.success) {
        message.success("login successful");
        dispatch(setToken(data.token));
        dispatch(setRole(data.role));
      } else {
        message.error("login failed, try again");
      }
    } catch (err) {
      messageApi.warning(data.message);
    }
  };
  // const handleRegister = () => {
  //   router.push("/register");
  // };

  return (
    
    <><div className="center">
      <header className="nav">
        <div className="title">
          {" "}
          <h1>KinBech</h1>
        </div>
        <div className="logo">
          <img
            src="https://e7.pngegg.com/pngimages/696/531/png-clipart-logo-brand-buy-and-sell-text-logo.png"
            className="logo" />
        </div>
      </header>
      <br />
      <div>
        <div>
          <p className="form-title">LOGIN</p>
        </div>
        <div className="text-field">
          <p>
            New?<Link href={"/register"}> Register</Link> here.
          </p>
        </div>
      </div>
      <div>
        <Formik
          initialValues={{
            phoneNumber: "",
            password: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={handleLogin}
        >
          {({ errors, touched }) => (
            <Form className="login">
              <label for="input-id" className="input-label">
                <span>phone number*</span>
              </label>
              <Field
                name="phoneNumber"
                placeholder="Please enter your phone number"
                className="input-field" />
              {errors.phoneNumber && touched.phoneNumber ? (
                <div className="error-msg">{errors.phoneNumber}</div>
              ) : null}
              <label for="input-id" className="input-label">
                password*
              </label>

              <Field
                name="password"
                type={open == false ? "password" : "text"}
                placeholder="Please enter your password"
                className="input-field" />
              <span className="showpass">
                {open == false ? (
                  <AiFillEyeInvisible onClick={toggle} />
                ) : (
                  <AiFillEye onClick={toggle} />
                )}
              </span>
              {errors.password && touched.password ? (
                <div className="error-msg">{errors.password}</div>
              ) : null}

              <br />
              {contextHolder}
              <button type="submit" className="login-btn">
                Login
              </button>

              {/* <button type="button" onClick={handleRegister}>Sign Up</button>instead */}
            </Form>
          )}

        </Formik>

      </div>
    </div><div><Footer /></div></>
    
  );
};
export default Login;
