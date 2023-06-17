import React from 'react'
import UserNav from '@/components/nav/UserNav'
import UserFooter from '@/components/footer/userFooter'
const Help = () => {
  return (
    <div className='help'>
    <UserNav/>
      <h1>Help & Support</h1>
      <br/>
      <ol>
        <h2>1.Frequently Asked Questions (FAQs)</h2>
        -Visit our FAQs page KinBech.com/FAQs to find answers to common questions about ordering, shipping, returns, and more.
      <br/>
      <br/>
      <h2>2.Contact Us</h2>
      -If you need further assistance or have specific inquiries, our support team is ready to help. You can reach us through the following methods:
      <br/>
      --Email: <u>KinBech_support@gmail.com</u>
      <br/>
      --Phone: +977 9812345678
      <br/>
      <br/>
      <h2>3.Return and Refund Policy</h2>
      -For information regarding our return and refund policy, including eligibility, procedures, and any applicable fees or restrictions, please refer to our Return Policy <u>Kinbech.com/returnpolicy</u>
     <br/>
     <br/>
     <h2>4.Privacy and Data Security</h2>
     -We take your privacy and the security of your personal information seriously. For details on how we collect, use, and protect your data, please review our Privacy Policy <u>Kinbech.com/returnpolicy</u>
      <br/>
      <br/>
      <h2>5.Feedback and Suggestions</h2>
      -We value your feedback and suggestions to improve our services. If you have any ideas or suggestions, please let us know through the contact methods provided above.
      </ol>
      <UserFooter/>
    </div>
  )
}

export default Help



