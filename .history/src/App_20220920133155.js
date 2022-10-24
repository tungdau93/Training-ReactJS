import "./App.css";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import baitap2 from "./Assignments/baitap2";

function App() {
  return (
    <BrowserRouter>
      <switch>
        <Route path="/bai-tap-2" element={<baitap2 />} />
      </switch>
    </BrowserRouter>
  );
}

export default App;
