import React, { useState } from "react";
import style from "../About/About.module.css";

export default function About() {
  const aboutObj = [
    {
      id: 1,
      title: "Nihil Saepe Voluptas",
      text: "Maecenas eu felis eget metus euismod accumsan. Maecenas posuere lobortis orci, in vulputate metus aliquam a. Mauris diam orci, molestie et commodo sit amet, tincidunt et turpis. Cras at urna eget libero eleifend finibus et nec est. Donec quis est facilisis metus tincidunt consectetur et nec nibh. Aenean eget enim at neque pharetra viverra sit amet vitae dui.",
    },
    {
      id: 2,
      title: "Ut Labore Accusantium Numquam Omnis",
      text: "Fusce porta egestas sem, at commodo nunc aliquam at. Nunc rhoncus eget risus eget euismod. Nullam dapibus ex at blandit pulvinar. Aenean quis libero eu arcu lobortis porttitor ut quis lorem. Aliquam ante leo, mollis feugiat augue in, iaculis condimentum odio. Sed eget tristique lorem. Cras interdum leo eu sem porta, eget euismod felis egestas.",
    },
    {
      id: 3,
      title: "Temporibus Molestiae Autem",
      text: "Vestibulum auctor mollis enim, a posuere lectus sodales ut. Vivamus volutpat sit amet nisi vitae mollis. Ut dictum erat sem, in molestie turpis mattis in. Nam ac ipsum elementum, auctor mi vitae, placerat mauris. Sed ornare erat vel sem finibus, in venenatis sem posuere. Ut a tristique mauris, at lobortis mi. Fusce rutrum, lacus ac dapibus posuere.",
    },
  ];

  return (
    <div className={style.container}>
      <div className={style.title}>
        <div className={style.aboutUs}>About Us</div>
      </div>

      <div className={style.aboutContainer}>
        <div className={style.i}>
          <div className={style.i2}>i</div>
        </div>
        <div className={style.aboutTexts}>
          {aboutObj?.map((item) => (
            <div key={item.id} className={style.textsContainer}>
              <div className={style.aboutTitle}>{item.title}</div>
              <div className={style.aboutText}>{item.text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
