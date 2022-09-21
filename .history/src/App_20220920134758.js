import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import BaiTap2 from "./Assignments/BaiTap2";

function App() {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path ="/bai-tap-2" element ={<}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
