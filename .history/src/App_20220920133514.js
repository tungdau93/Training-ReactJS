import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import baitap2 from "./Assignments/BaiTap2";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<baitap2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
