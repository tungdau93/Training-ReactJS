// import {Link} from 'react-router-dom'
import React from "react";
import "../style/_bai-tap-2.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  useEffect } from "react";


// const clickInput = document.querySelector(
//   ".app__container--input-wrapper--input"
// );
// const showList = document.querySelector(
//   ".app__container--input-wrapper--dropdown-list"
// );

// const showListItem = (e) => {
//   if (!clickInput.contains(e.target)) {
//     showList.style.display = "block";
//   }
// };

// // const hideListItem = (e) => {
// //   if (!showList.contains(e.target)) {
// //     showList.style.display = "none";
// //   }
// // };

const BaiTap2 = () => {

  useEffect(()=>{
    fetch("https://provinces.open-api.vn/api/")
    .then(response => response.json())
    .then(data =>console.log(data))
      
    },[])

  const onHoverItemIn = (e) => {
    e.target.style.backgroundColor = "#617D98";
  };

  const onHoverItemOut = (e) => {
    e.target.style.backgroundColor = "rgba(230, 249, 255, 0.2)";
  };

  return (
    <div>
      <div className="app">
        <span id="title">入力欄 </span>
        <div className="app__container">
          <div className="app__container--heading">
            <div className="app__container--heading-name">
              <p className="app__container--heading-name--japanese">入力欄</p>

              <p className="app__container--heading-name--english">
                Input Field
              </p>
            </div>
          </div>
          <div className="app__container--input-wrapper">
            <span>
              <FontAwesomeIcon icon="fa-thin fa-magnifying-glass" />
            </span>
            <input
              type="text"
              placeholder="Nhập tên thành phố để tìm kiếm..."
              className="app__container--input-wrapper--input"
            ></input>
            <div className="app__container--input-wrapper--dropdown-list">
              <div
                className="app__container--input-wrapper--dropdown-list--item1"
                onMouseOver={onHoverItemIn}
                onMouseOut={onHoverItemOut}
              ></div>
              <div
                className="app__container--input-wrapper--dropdown-list--item2"
                onMouseOver={onHoverItemIn}
                onMouseOut={onHoverItemOut}
              ></div>
              <div
                className="app__container--input-wrapper--dropdown-list--item3"
                onMouseOver={onHoverItemIn}
                onMouseOut={onHoverItemOut}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BaiTap2;
