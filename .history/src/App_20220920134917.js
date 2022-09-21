import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import BaiTap2 from "./Assignments/BaiTap2";
import H

function App() {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path ="/bai-tap-2" element ={<BaiTap2/>}>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
