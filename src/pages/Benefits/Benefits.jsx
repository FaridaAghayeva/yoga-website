import React, { useContext } from "react";
import { BenefitsContext } from "../../shared/ContextAPIs/BenefitsContextApi";
import style from "../Benefits/Benefits.module.css";
export default function Benefits() {
  const { benefit } = useContext(BenefitsContext);

  return (
    <div className={style.container}>
      <div className={style.benefit1}>
        {benefit?.slice(0, 3).map((item) => (
          <div key={item?.id} className={style.itemContainer}>
            <div className={style.title}>{item?.title}</div>
            <div className={style.text}>{item?.text}</div>
            <div className={style.author}>{item?.author}</div>
          </div>
        ))}
      </div>
      <div className={style.bckImg}></div>
      <div className={style.benefit2}>
        {benefit?.slice(3, 6).map((item) => (
          <div key={item?.id} className={style.itemContainer2}>
            <div className={style.title2}>{item?.title}</div>
            <div className={style.text2}>{item?.text}</div>
            <div className={style.author2}>{item?.author}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
