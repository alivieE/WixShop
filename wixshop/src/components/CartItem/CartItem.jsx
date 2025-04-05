import React from "react";
import s from "./CartItem.module.css";

const CartItem = ({ product, productList }) => {
  return (
    <div>
      <p>{product.id}</p>
    </div>
  );
};

export default CartItem;
