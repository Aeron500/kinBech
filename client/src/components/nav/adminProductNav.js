import React from "react";
import Link from "next/link";
import { FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";
const AdminProductNav = () => {
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
              <Link href={"/adminPanel"}>Add Products</Link>
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
            <li className="admin-logo">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1j7xfw5Yxs_A81kWTPTR3pHI4aOHt_JQlZw&usqp=CAU" className="admin-logo"/>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default AdminProductNav;
