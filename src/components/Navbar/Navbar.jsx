import React from "react";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import style from "../Navbar/Navbar.module.css";

export default function Navbar() {
  return (
    <div className={style.container}>
      <div className={style.logoContainer}>
        <div className={style.logo}>
          <img src="https://assets.website-files.com/5f36828308ea3b14a0500991/5f36828308ea3bc72f500a01_webclip.png" />
        </div>
        <div className={style.yogart}>
          <span>Yogart</span>
        </div>
      </div>
      <div className={style.rightContainer}>
        <div className={style.itemsContainer}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/benefits">Benefits</NavLink>
          <NavLink to="/testimonials">Testimonials</NavLink>
          <NavLink to="/pricing">Pricing</NavLink>
        </div>
        <div className={style.btnContainer}>
          <div className={style.contactBtn}>Contact Us</div>
          <div className={style.shoppingCart}>
            <FaShoppingCart />
          </div>
        </div>
      </div>
    </div>
  );
}
