import React from "react";
import s from "./Meats.module.css";
import GoogtoEat from "../../components/GoodtoEat/GoogtoEat";
import ShopItem from "../../components/ShopItem/ShopItem";

const Meats = () => {
  return (
    <div className={s.Cheeses}>
      <GoogtoEat text={"SHOP WITH US"}></GoogtoEat>
      <p className={s.title}>Meats</p>
      <div className={s.description}>
        <p className={s.descriptionWrap}>
          I'm a paragraph. Click here to add your own text and edit me. I’m a
          great place for you to tell a story and let your users know a little
          more about you
        </p>
      </div>
      <ul>
        <ShopItem id={"bovarSausages"} />
        <ShopItem id={"bacon"} />
        <ShopItem id={"salyami"} />
        <ShopItem id={"bujenina"} />
      </ul>
    </div>
  );
};

export default Meats;
