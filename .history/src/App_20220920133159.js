import "./App.css";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import baitap2 from "./Assignments/baitap2";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/bai-tap-2" element={<baitap2 />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
