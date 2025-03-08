import React from "react";

import Hero from "../../components/Hero/Hero";
import images from "../../assets/index";
import s from "./Cabinet.module.css";

const Cabinet = () => {
  return (
    <div>
      <Hero></Hero>
      <section>
        <p className={s.elementStyle}>Enjoy Our Special Recommendations</p>
        <ul className={s.uul}>
          <li className={s.lii}>
            <img src={images.cheess} />
            <p>FRENCH BRIE CHEESE</p>
            <div>&mdash;</div>
            <p>$6.99</p>
          </li>
          <li className={s.lii}>
            <img src={images.bacon} />
            <p>smoked virgina bacon</p>
            <div>&mdash;</div>
            <p>$12.99</p>
          </li>
          <li className={s.lii}>
            <img src={images.oliva} />
            <p>GREEK KALAMATA OLIVES</p>
            <div>&mdash;</div>
            <p>$8.99</p>
          </li>
        </ul>
        <div className={s.bottomText}>
          <p className={s.bottomTextWrap}>
            © 2035 by GOOD TO EAT. Powered and secured by{" "}
          </p>
        </div>
      </section>
    </div>
  );
};

export default Cabinet;
