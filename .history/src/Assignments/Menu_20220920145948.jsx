import React from "react";
import { useNavigate } from "react-router-dom";
import {useState} from "react";



const handleMouseOver =(e)=>{
    e.target.style.color = '#DC143C'
}
const handleMouseOut =(e)=>{
    e.target.style.color = '#DC143C'
}

const Menu = () => {
  const navigate = useNavigate();

  const redirectPage = (url) => {
    navigate(url);
  };

  return (
    <div>
      <ul>
        <li onMouseOver={handleMouseOver} onMouseOut={} onClick={() => redirectPage("/")}>
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
