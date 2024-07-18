import React, { useState } from "react";
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
          <NavLink
            to="/"
            style={({ isActive }) => {
              return isActive ? { color: "#66a901" } : {};
            }}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            style={({ isActive }) => {
              return isActive ? { color: "#66a901" } : {};
            }}
          >
            About
          </NavLink>
          <NavLink
            to="/benefits"
            style={({ isActive }) => {
              return isActive ? { color: "#66a901" } : {};
            }}
          >
            Benefits
          </NavLink>
          <NavLink
            to="/testimonials"
            style={({ isActive }) => {
              return isActive ? { color: "#66a901" } : {};
            }}
          >
            Testimonials
          </NavLink>
          <NavLink
            to="/pricing"
            style={({ isActive }) => {
              return isActive ? { color: "#66a901" } : {};
            }}
          >
            Pricing
          </NavLink>
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
