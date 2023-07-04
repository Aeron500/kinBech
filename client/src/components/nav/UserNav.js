import React from "react";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaYoutube,FaCartPlus} from "react-icons/fa";
import { useRouter } from "next/router";
const UserNav = () => {
  const router=useRouter();
  return (
    <>
      <nav className="user-main sticky">
        <div className="user-nav">
          <h2>
            <span>K</span>in
            <span>B</span>ech
            <span>.com</span>
          </h2>
        </div>
        <div className="social-media">

          <ul className="social-media-desktop">
          <li>
            <Link href={'/login'}>Sign in</Link>
           
          </li>
          <li>
            <Link href={'/register'}>Sign up</Link>
           
          </li>
          <li>
            <h5 style={{color:'#e84a4a'}}>Cart</h5> <FaCartPlus className="cart" onClick={()=>router.push('/cart')}/>
              </li>
            <li>
              <a href="https://www.facebook.com/">
                <FaFacebook className="facebook" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/">
                <FaInstagram className="instagram" />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/">
                <FaYoutube className="youtube" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default UserNav;
