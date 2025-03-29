import { React, useState } from "react";
import s from "./Cheeses.module.css";
import GoogtoEat from "../../components/GoodtoEat/GoogtoEat";
import images from "../../assets/index";
import ShopItem from "../../components/ShopItem/ShopItem";

const Cheeses = ({ productList, setProductList }) => {
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
        <ShopItem
          productList={productList}
          setProductList={setProductList}
          id={"cheddar"}
        />
        <ShopItem
          productList={productList}
          setProductList={setProductList}
          id={"parmesan"}
        />
        <ShopItem
          productList={productList}
          setProductList={setProductList}
          id={"ricotta"}
        />
        <ShopItem
          productList={productList}
          setProductList={setProductList}
          id={"danablu"}
        />
      </ul>
    </div>
  );
};

export default Cheeses;
