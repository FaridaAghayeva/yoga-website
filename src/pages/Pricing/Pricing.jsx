import React, { useContext } from "react";
import { PricingContext } from "../../shared/ContextAPIs/PricingContextApi";
import style from "../Pricing/Pricing.module.css";

export default function Pricing() {
  const { pricing } = useContext(PricingContext);
  return (
    <div className={style.container}>
      <div className={style.items}>
        {pricing?.map((item) => (
          <div key={item.id} className={style.itemContainer}>
            <div
              className={item.id === 3 ? style.itemTypeSpecial : style.itemType}
            >
              <div className={style.type}>{item?.type}</div>
              <div className={style.price}>{item?.price}</div>
            </div>
            <div className={style.itemDetails}>
              <div className={style.cred1}>{item?.cred1}</div>
              <div className={style.cred2}>{item?.cred2}</div>
              <div className={style.cred3}>{item?.cred3}</div>
              <div className={style.cred4}>{item?.cred4}</div>
              <div className={style.cred5}>{item?.cred5}</div>
              <div className={style.text}>{item?.text}</div>
              <div className={item.id === 3 ? style.btnSpecial : style.btn}>
                {item?.btn}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
