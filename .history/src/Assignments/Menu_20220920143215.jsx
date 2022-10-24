import React from "react";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const navigate = useNavigate();

  const redirectPage = () => {
    navigate('/bai-taip-2');
  };

  return (
    <div>
      <ul>
        <li>
          <div>HomePage</div>
        </li>
        <li>
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
