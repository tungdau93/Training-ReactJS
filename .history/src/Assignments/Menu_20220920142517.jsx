import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <ul>
        <li>
          <div to="/">HomePage</div>
        </li>
        <li>
          <div to="/bai-tap-2">Bài tập 2</div>
        </li>
        <li>
          <Link to="/bai-tap-3">Bài tập 3</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
