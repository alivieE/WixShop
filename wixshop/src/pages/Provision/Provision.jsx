import React from "react";
import s from "./Provision.module.css";
import GoogtoEat from "../../components/GoodtoEat/GoogtoEat";
import ShopItem from "../../components/ShopItem/ShopItem";

const Provision = ({ productList, setProductList }) => {
  return (
    <div className={s.Cheeses}>
      <GoogtoEat text={"SHOP WITH US"}></GoogtoEat>
      <p className={s.title}>Provision</p>
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
          id={"macarons"}
        />
        <ShopItem
          productList={productList}
          setProductList={setProductList}
          id={"cakes"}
        />
        <ShopItem
          productList={productList}
          setProductList={setProductList}
          id={"olives"}
        />
        <ShopItem
          productList={productList}
          setProductList={setProductList}
          id={"bovarSausages"}
        />
      </ul>
    </div>
  );
};

export default Provision;
