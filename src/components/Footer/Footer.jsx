import React from "react";
import style from "../Footer/Footer.module.css";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

export default function Footer() {
  return (
    <div className={style.container}>
      <div className={style.itemContainer}>
        <span>ChangeLog</span>
        <span>Styles</span>
        <span>Licensing</span>
      </div>
      <div className={style.logosContainer}>
        <span>
          <FaFacebookF />
        </span>
        <span>
          <FaTwitter />
        </span>
        <span>
          <AiFillInstagram />
        </span>
      </div>
      <div className={style.poweredContainer}>
        <span>Powered by Webflow.com</span>
      </div>
    </div>
  );
}
