import { React, useState } from "react";
import s from "./Cheeses.module.css";
import GoogtoEat from "../../components/GoodtoEat/GoogtoEat";
import images from "../../assets/index";
import ShopItem from "../../components/ShopItem/ShopItem";

const Cheeses = () => {
  return (
    <div className={s.Cheeses}>
      <GoogtoEat text={"SHOP WITH US"}></GoogtoEat>
      <p className={s.title}>Cheeses</p>
      <div className={s.description}>
        <p className={s.descriptionWrap}>
          I'm a paragraph. Click here to add your own text and edit me. I’m a
          great place for you to tell a story and let your users know a little
          more about you
        </p>
      </div>
      <ul>
        <ShopItem id={"cheddar"} />
        <ShopItem id={"parmesan"} />
        <ShopItem id={"ricotta"} />
        <ShopItem id={"danablu"} />
      </ul>
    </div>
  );
};

export default Cheeses;
