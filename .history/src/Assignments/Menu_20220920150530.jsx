import React from "react";
import { useNavigate } from "react-router-dom";
import {useState} from "react";

// const styleUl

const handleMouseOver =(e)=>{
    e.target.style.color = '#DC143C'
}
const handleMouseOut =(e)=>{
    e.target.style.color = '#000'
}

const Menu = () => {
  const navigate = useNavigate();

  const redirectPage = (url) => {
    navigate(url);
  };

  return (
    <div>
      <ul style={{display: 'flex'}}>
        <li onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} onClick={() => redirectPage("/")}>
          <div>HomePage</div>
        </li>
        <li onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} onClick={() => redirectPage("/bai-tap-2")}>
          <div >Bài tập 2</div>
        </li>
        <li onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} onClick={() => redirectPage("/bai-tap-3")}>
          <div >Bài tập 3</div>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
