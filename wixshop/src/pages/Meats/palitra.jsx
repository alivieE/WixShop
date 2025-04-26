import React from "react";
import { useState } from "react";
import s from "./palitra.module.css";
const Palitra = () => {
  const [feedBack, setfeedBack] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  function handleFeedback(e) {
    setfeedBack((prev) => {
      return {
        ...prev,
        [e.target.name]: prev[e.target.name] + 1,
      };
    });
  }
  function resetFn() {
    setfeedBack({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  }
  return (
    <div>
      <div>
        <button name="good" onClick={handleFeedback}>
          {" "}
          good
        </button>
        <p>-</p>
        <button name="neutral" onClick={handleFeedback}>
          {" "}
          neutral
        </button>
        <p>-</p>
        <button name="bad" onClick={handleFeedback}>
          {" "}
          bad
        </button>
      </div>
      <div>
        <p>good</p>
        <p>{feedBack.good}</p>
      </div>
      <div>
        <p>neutral</p>
        <p>{feedBack.neutral}</p>
      </div>
      <div>
        <p>bad</p>
        <p>{feedBack.bad}</p>
      </div>
      <button onClick={resetFn}>reset</button>
    </div>
  );
};

export default Palitra;
