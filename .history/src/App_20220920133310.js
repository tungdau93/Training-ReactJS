import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import baitap2 from "./Assignments/baitap2";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/bai-tap-2" element={<baitap2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
