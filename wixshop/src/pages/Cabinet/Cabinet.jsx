import React from "react";

import Hero from "../../components/Hero/Hero";
import images from "../../assets/index";
import s from "./Cabinet.module.css";
import GoogtoEat from "../../components/GoodtoEat/GoogtoEat";

const Cabinet = () => {
  return (
    <div>
      <Hero></Hero>

      <section>
        <p className={s.elementStyle}>Enjoy Our Special Recommendations</p>
        <ul className={s.box}>
          <li className={s.boxWrap}>
            <img src={images.cheess} />
            <p>FRENCH BRIE CHEESE</p>
            <div>&mdash;</div>
            <p>$6.99</p>
          </li>
          <li className={s.boxWrap}>
            <img src={images.baconHome} />
            <p>SMOKED VIRGINA BACON</p>
            <div>&mdash;</div>
            <p>$12.99</p>
          </li>
          <li className={s.boxWrap}>
            <img src={images.olivesHome} />
            <p>GREEK KALAMATA OLIVES</p>
            <div>&mdash;</div>
            <p>$8.99</p>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Cabinet;
