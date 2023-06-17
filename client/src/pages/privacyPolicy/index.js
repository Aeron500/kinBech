import React from "react";
import UserNav from "@/components/nav/UserNav";
import UserFooter from "@/components/footer/userFooter";
const Privacypolicy = () => {
  return (
    <div className="privacy">
      <UserNav />
      <h1>Privacy and Confidentiality</h1>
      <ol>
        This Privacy Policy describes how KinBech("we," "us," or "our")
        collects, uses, discloses, and protects the personal information of our
        users ("you" or "user") when you visit or make use of our e-commerce
        website <u>KinBech.com</u> (the "Website"). <br />
        <br />
        <h2>1.Information We Collect </h2>
        <h3>1.1 Personal Information:</h3>
        -Full name
        <br />
        -Email address
        <br />
        -Shipping address
        <br />
        -Billing address
        <br />
        -Phone number
        <br />
        -Payment information (credit card details, PayPal account, etc.)
        <br />
        <br />
        <h3>1.2 Non-Personal Information:</h3>
        -Browser type and version
        <br />
        -Device information
        <br />
        -Log data (IP address, pages visited,time spent, etc.)
        <br />
        -Cookies and similar technologies How We Use Your Information
        <br />
        <br/>
        <h2>2 How We Use Your Information</h2> 
        <h3>2.1 Personal Information:</h3>
        -Process and fulfill your orders 
        <br/>
        -Communicate with you regarding your orders, inquiries, and support requests 
        <br/>
        -Send you promotional offers, newsletters, and updates (with your consent)
        <br/>
        -Personalize your user experience 
        <br/>
        -Detect and prevent fraud and abuse
        <br/>
        <br/> 
        
       <h3>2.2 Non-Personal Information: </h3>
       -Analyze and improve our Website and services 
       <br/>
       -Monitor and measure the effectiveness of our marketing campaigns 
       <br/>
       -Enhance user experience and optimize content
      </ol>
      <UserFooter/>
    </div>
  );
};

export default Privacypolicy;
