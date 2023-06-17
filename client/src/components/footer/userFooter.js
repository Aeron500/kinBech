import React from 'react'

const UserFooter = () => {
  return (
    
      <footer class="dashboard-footer">
  <p>
    <a href="/privacyPolicy" style={{color:"#010104eb"}}>Privacy Policy</a> |
    <a href="/termsofservice" style={{color:"#010104eb"}}>Terms of Service</a> |
    <a href="/help" style={{color:"#010104eb"}}>Help & Support</a>
  </p>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm2CWLZXaq-Zf_OJ7FF9VUJbzHKSHNpgnSyg&usqp=CAU" className='footer-scanner'/>
  <h3 class="copyright" style={{color:"#010104eb",fontSize:"16px",fontFamily:"sans-serif"}}>
    © 2023 KinBech. All rights reserved.
  </h3>
</footer>

  )
}

export default UserFooter
