import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import BaiTap2 from "./Assignments/BaiTap2";
import BaiTap3 from "./Assignments/BaiTap3";
import HomePage from "./Assignments/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Menu" element={<Menu />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/bai-tap-2" element={<BaiTap2 />} />
        <Route path="/bai-tap-3" element={<BaiTap3 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
