import React from "react";
import { useState } from "react";
import s from "./palitra.module.css";
const Palitra = () => {
  const [currentColor, setcurrentColor] = useState("red");
  return (
    <div>
      <div className={s.palitra}>
        <div
          style={{ backgroundColor: "red" }}
          data-color="red"
          className={s.color}
        ></div>
        <div
          style={{ backgroundColor: "orange" }}
          data-color="orange"
          className={s.color}
        ></div>
        <div
          style={{ backgroundColor: "green" }}
          data-color="green"
          className={s.color}
        ></div>
        <div
          style={{ backgroundColor: "yellow" }}
          data-color="yellow"
          className={s.color}
        ></div>
        <div
          style={{ backgroundColor: "pink" }}
          data-color="pink"
          className={s.color}
        ></div>
      </div>
      <div style={{ backgroundColor: currentColor }} className={s.result}></div>
    </div>
  );
};

export default Palitra;
