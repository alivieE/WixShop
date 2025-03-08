import React from "react";
import s from "./GoodtoEat.module.css";

const GoogtoEat = () => {
  return (
    <div className={s.mainBox}>
      <h1 className={s.logoText}>
        GOOD <span className={s.span}>to</span> EAT
      </h1>
      <div className={s.mainBoxWrap}></div>
      <div className={s.description}>Offering speciality foods since 2035</div>
    </div>
  );
};

export default GoogtoEat;
