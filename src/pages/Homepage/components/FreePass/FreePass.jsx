import React from "react";
import style from "../FreePass/FreePass.module.css";

export default function FreePass() {
  return (
    <div className={style.container}>
      <div className={style.text}>
        <span>Get A Free Pass</span>
      </div>
      <div className={style.inputs}>
        <input type="text" placeholder="First Name" className={style.input} />
        <input type="text" placeholder="Last Name" className={style.input} />
        <input type="text" placeholder="Email" className={style.input} />
        <input type="text" placeholder="Phone" className={style.input} />
        <input type="text" placeholder="Gender" className={style.input} />
        <input type="text" placeholder="Age" className={style.input} />
      </div>
      <div className={style.freeBtn}><span>Get Free Pass</span></div>
    </div>
  );
}
