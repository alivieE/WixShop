import "./App.css";
import { useState, useEffect } from "react";
import Cabinet from "./pages/Cabinet/Cabinet";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./pages/About/About";
import Header from "./components/Header/Header";
import Cheeses from "./pages/Cheeses/Cheeses";
import Meats from "./pages/Meats/Meats";
import Provision from "./pages/Provision/Provision";
import Cart from "./components/Cart/Cart";
import FindUs from "./pages/FindUs/FindUs";
function App() {
  const [productList, setProductList] = useState(() => {
    const isLS = JSON.parse(localStorage.getItem("cart"));
    return isLS ? isLS : [];
  });
  const [openCart, setOpenCart] = useState(false);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(productList));
  }, [productList]);
  return (
    <BrowserRouter>
      <div className="App">
        <Header
          setOpenCart={setOpenCart}
          openCart={openCart}
          productList={productList}
        ></Header>
        {openCart && (
          <Cart
            setOpenCart={setOpenCart}
            openCart={openCart}
            productList={productList}
            setProductList={setProductList}
          />
        )}
        <Routes>
          <Route path="/" element={<Cabinet />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/cheeses"
            element={
              <Cheeses
                productList={productList}
                setProductList={setProductList}
              />
            }
          />
          <Route
            path="/meats"
            element={
              <Meats
                productList={productList}
                setProductList={setProductList}
              />
            }
          />
          <Route
            path="/provision"
            element={
              <Provision
                productList={productList}
                setProductList={setProductList}
              />
            }
          />
          <Route
            path="/findUs"
            element={
              <FindUs
                productList={productList}
                setProductList={setProductList}
              />
            }
          />
        </Routes>
        <p className="bottomTextWrap">
          © 2035 by GOOD TO EAT. Powered and secured by{" "}
        </p>
      </div>
    </BrowserRouter>
  );
}

export default App;
