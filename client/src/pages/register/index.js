import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import {message} from "antd";


const SignupSchema = Yup.object().shape({
  FullName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  phoneNumber: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  address: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  password: Yup.string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
    ConfirmPassword: Yup.string()
     .oneOf([Yup.ref('password'), null], 'Passwords must match'),
  email: Yup.string().email("Invalid email").required("Required"),
});


const Register = () =>{
  const [messageApi, contextHolder] = message.useMessage();
const registerUser=async(values)=>{
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify( values)
};
try {
  const res = await fetch('http://localhost:4000/register', requestOptions)
  console.log(res)
  const data = await res.json()
  console.log(data)
  if (res&&data.success) {
    message.success(data.msg);
  } else {
    message.error(data.msg);
  }
} catch (err) {
  messageApi.warning(data.msg);
}

}
return(
  <div className="register-container">
  <div className="form-container">
    <p className="form-title">Signup</p>
    <Formik
      initialValues={{
        FullName: "",
        phoneNumber: "",
        address: "",
        email: "",
        password: "",
        ConfirmPassword:""
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        // same shape as initial values
        registerUser(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Field name="FullName" placeholder="FullName" />
          {errors.FullName && touched.FullName ? (
            <div className="error-msg">{errors.FullName}</div>
          ) : null}
          <br />
          <Field name="phoneNumber" placeholder="phoneNumber" />
          {errors.phoneNumber && touched.phoneNumber ? (
            <div className="error-msg">{errors.phoneNumber}</div>
          ) : null}
          <br />
          <Field name="address" placeholder="address" />
          {errors.address && touched.address ? (
            <div className="error-msg">{errors.address}</div>
          ) : null}
          <br />
          <Field name="email" type="email" placeholder="E-mail" />
          {errors.email && touched.email ? <div className="error-msg">{errors.email}</div> : null}
          <br />
          <Field name="password" placeholder="password" />
          {errors.password && touched.password ? (
            <div className="error-msg">{errors.password}</div>
          ) : null}
          <br />
          <Field name="ConfirmPassword" placeholder="ConfirmPassword" />
          {errors.ConfirmPassword && touched.ConfirmPassword ? (
            <div className="error-msg">{errors.ConfirmPassword}</div>
          ) : null}<br/>
          <button type="submit" className="register-btn">Submit</button>
          <br/>
          Already have an account? <Link href="/">Login</Link> instead
        </Form>

        
      )}
      
    </Formik>
    </div>
  </div>
);}
export default Register;
