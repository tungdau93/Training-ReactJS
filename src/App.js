import { StrictMode } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import BaiTap2 from "./Assignments/BaiTap2";
import BaiTap3 from "./Assignments/BaiTap3";
import HomePage from "./Assignments/HomePage";
import Menu from "./Assignments/Menu";
import BaiTap4Form1 from "./Assignments/BaiTap4-form1";
import BaiTap4Form2 from "./Assignments/BaiTap4-form2";
import BaiTap4Form3 from "./Assignments/BaiTap4-form2";


function App() {
  return (
    <StrictMode>
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/bai-tap-2" element={<BaiTap2 />} />
        <Route path="/bai-tap-3" element={<BaiTap3 />} />
        <Route path="/bai-tap-4-form1" element={<BaiTap4Form1 />} />
        <Route path="/bai-tap-4-form2" element={<BaiTap4Form2 />} />
        <Route path="/bai-tap-4-form3" element={<BaiTap4Form3 />} />
      </Routes>
    </BrowserRouter>
    </StrictMode>
  );
}

export default App;
