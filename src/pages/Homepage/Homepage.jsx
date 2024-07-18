import React from "react";
import style from "../Homepage/Homepage.module.css";
import FreePass from "./components/FreePass/FreePass";

export default function Homepage() {
  return (
    <div className={style.main}>
      <div className={style.container}>
        <div className={style.contact}>
          <span>
            <img src="https://assets.website-files.com/5f36828308ea3b14a0500991/5f36828308ea3b79c1500a1d_phone.svg" />
          </span>
          <span>
            <img src="https://assets.website-files.com/5f36828308ea3b14a0500991/5f36828308ea3b3e70500a1c_mail.svg" />
          </span>
          <span>
            <img src="https://assets.website-files.com/5f36828308ea3b14a0500991/5f36828308ea3b715d500a20_pin.svg" />
          </span>
        </div>
        <div className={style.middle}>
          <div className={style.text}>
            <div className={style.middleCircle}></div>
            <div className={style.middleText}>
              <span>In Truth, Yoga Doesn't Take Time - It Gives Time</span>
            </div>
          </div>
          <div className={style.middleBtn}>
            <div className={style.freePass}>Free Pass</div>
            <div className={style.explore}>Explore</div>
          </div>
        </div>
        <div className={style.social}>
          <span>
            <img src="https://assets.website-files.com/5f36828308ea3b14a0500991/5f36828308ea3b39e7500a23_facebook.svg" />
          </span>
          <span>
            <img src="https://assets.website-files.com/5f36828308ea3b14a0500991/5f36828308ea3b37f3500a24_twitter.svg" />
          </span>
          <span>
            <img src="https://assets.website-files.com/5f36828308ea3b14a0500991/5f36828308ea3bd0da500a25_instagram.svg" />
          </span>
        </div>
      </div>
      <FreePass />
    </div>
  );
}
