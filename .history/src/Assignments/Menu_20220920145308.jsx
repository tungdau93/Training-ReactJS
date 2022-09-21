import React from "react";
import { useNavigate } from "react-router-dom";
import {useState} from "react"

const App = () =>{
    const [isHovering,]
}

const Menu = () => {
  const navigate = useNavigate();

  const redirectPage = (url) => {
    navigate(url);
  };

  const changeBackground =(e)=>{
    e.target.style.background = 'purple';
  }

  return (
    <div>
      <ul>
        <li onMouseOut={changeBackground} onClick={() => redirectPage("/")}>
          <div class="home-page--hover">HomePage</div>
        </li>
        <li onClick={() => redirectPage("/bai-tap-2")}>
          <div class="baitap2--hover">Bài tập 2</div>
        </li>
        <li onClick={() => redirectPage("/bai-tap-3")}>
          <div class="baitap3--hover">Bài tập 3</div>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
