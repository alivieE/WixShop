import "./App.css";
import Cabinet from "./pages/Cabinet/Cabinet";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./pages/About/About";
import Header from "./components/Header/Header";
import Cheeses from "./pages/Cheeses/Cheeses";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header></Header>

        <Routes>
          <Route path="/" element={<Cabinet />} />
          <Route path="/about" element={<About />} />
          <Route path="/cheeses" element={<Cheeses />} />
        </Routes>
        <p className="bottomTextWrap">
          © 2035 by GOOD TO EAT. Powered and secured by{" "}
        </p>
      </div>
    </BrowserRouter>
  );
}

export default App;
