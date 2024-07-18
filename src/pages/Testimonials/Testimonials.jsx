import React, { useContext } from "react";
import { TestContext } from "../../shared/ContextAPIs/TestContextApi.jsx";
import style from "../Testimonials/Testimonials.module.css";

export default function Testimonials() {
  const { test } = useContext(TestContext);
  return (
    <div className={style.container}>
      <div className={style.items}>
        {test?.map((item) => (
          <div key={item?.id} className={style.item}>
            <div className={style.img}>
              <img src={item?.img} />
            </div>
            <div className={style.job}>
              <span>{item?.job}</span>
            </div>
            <div className={style.name}>
              <span>{item?.name}</span>
            </div>
            <div className={style.text}>
              <span>{item?.text}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
