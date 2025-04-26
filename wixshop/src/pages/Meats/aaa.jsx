import React from "react";
import { useState } from "react";

const Aaa = () => {
  const [data, setdata] = useState({
    a: "",
    b: "",
    c: "",
  });
  function handleChangeInput(params) {}
  return (
    <div>
      <input type="text" name="a" />
      <input type="text" name="b" />
      <input type="text" name="c" />
    </div>
  );
};

export default Aaa;
