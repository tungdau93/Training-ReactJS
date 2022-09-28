import React from "react";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const navigate = useNavigate();

  const redirectPage = (url) => {
    navigate(url);
  };

  return (
    <div>
      <ul>
        <li  onClick={() => redirectPage("/bai-tap-2")}>
          <div>HomePage</div>
        </li>
        <li onClick={() => redirectPage("/bai-tap-2")}>
          <div>Bài tập 2</div>
        </li>
        <li>
          <div>Bài tập 3</div>
        </li>
      </ul>
    </div>
  );
};

export default Menu;