// import {Link} from 'react-router-dom'
import React from "react";

const BaiTap2 = () => {
  const styleApp ={
    backgroundColor:'#1E1E1E'
  }

  const styleTitle ={
    top:'-976px',
    left:'-1124px',
    color:'#a0a0a0',
    width: '2227px',
    height:'1933px'
  }

  

  return (
    <div>
      <div style={styleApp} class="app">
        <span style={styleTitle} id="title">入力欄 </span>
        <div class="app__container">
          <div class="app__container--heading">
            <div class="app__container--heading-name">
              <p class="app__container--heading-name--japanese">入力欄</p>

              <p class="app__container--heading-name--english">Input Field</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BaiTap2;
