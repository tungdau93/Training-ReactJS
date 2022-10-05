// import {Link} from 'react-router-dom'
import React from "react";
import BaiTtap2 from "../style/BaiTap2.css"

const BaiTap2 = () => {
  const styleApp = {
    background-color:#1E1E1E;
  }
  return (
    <div>
      <div styleApp={{backg}} class="app">
        <span id="title">入力欄 </span>
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
