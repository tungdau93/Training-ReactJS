import React from "react";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const navigate = useNavigate();

  const redirectPage = (url) => {
    navigate(url);
  };

  const obj = {
    cursor: "pointer",
  };

  return (
    <div>
      <ul>
        <li onClick={() => redirectPage("/")}>
          <div>HomePage</div>
        </li>
        <li onClick={() => redirectPage("/bai-tap-2")} style={obj}>
          <div>Bài tập 2</div>
        </li>
        <li onClick={() => redirectPage("/bai-tap-3")}>
          <div>Bài tập 3</div>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
