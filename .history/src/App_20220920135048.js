import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import BaiTap2 from "./Assignments/BaiTap2";
import HomePage from "./Assignments/HomePage";

function App() {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path ="/bai-tap-2" element ={<BaiTap2/>}/>
        <Route path ="/bai-tap-2" element ={<BaiTap3/>}/>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
