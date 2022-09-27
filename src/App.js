import { StrictMode } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import BaiTap2 from "./Assignments/BaiTap2";
import BaiTap3 from "./Assignments/BaiTap3";
import HomePage from "./Assignments/HomePage";
import Menu from "./Assignments/Menu";

function App() {
  return (
    <StrictMode>
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/bai-tap-2" element={<BaiTap2 />} />
        <Route path="/bai-tap-3" element={<BaiTap3 />} />
      </Routes>
    </BrowserRouter>
    </StrictMode>
  );
}

export default App;
