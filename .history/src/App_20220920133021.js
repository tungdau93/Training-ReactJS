import logo from './logo.svg';
import './App.css';
import {Route, Switch, Link } from 'react-router-dom'
import baitap2 from './Assignments/baitap2';
import {Routes} from 'react-router-dom'


function App() {
  return (
    // <div className="app">
    //   <ul>
    //     <li>
    //       <Link to="/baitap2">bai tap 2</Link>
    //     </li>
    //     <li>
    //       <Link to="/baitap2">bai tap 3</Link>
    //     </li>

    //   </ul>

    //   <Routes>
    //     <Route path="/baitap2" element={<baitap2/>} />  
    //   </Routes>
    // </div>
    <BrowserRouter>
    <Switch>
      <Route path="/bai-tap-2" element={<baitap2/>} />
    </Switch>
    </BrowserRouter>
  );
}

export default App;
