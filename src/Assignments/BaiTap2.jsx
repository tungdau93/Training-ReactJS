// import {Link} from 'react-router-dom'
import React from "react";
import "../style/_bai-tap-2.scss";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

// const clickInput = document.getElementsByClassName(
//   ".app__container--input-wrapper--input"
// );
// const showList = document.getElementsByClassName(
//   ".app__container--input-wrapper--dropdown-list"
// );

// const showListItem = (e) => {
//   if (!clickInput.contains(e.target)) {
//     showList.style.display = "block";
//   }
// };

// const hideListItem = (e) => {
//   if (!showList.contains(e.target)) {
//     showList.style.display = "none";
//   }
// };

const BaiTap2 = () => {

  
  const [cities, setCities] = useState([]);
  // const [value,setValue] = useState("");
  const [cityMatch, setCityMatch] = useState([]);
  const [showSuggestions, setSuggestions] = useState(false);

  const handleClickSuggestion =()=>{
    // document.getElementsByClassName("selection-queue").innerText = "ha noi"
    setSuggestions(!showSuggestions)

  }

  useEffect(() => {
    fetch("https://provinces.open-api.vn/api/")
      .then((response) => response.json())
      .then((data) => setCities(data));
    // console.log(cities)
  }, []);

  const searchCities = (text) => {
    // if (document.getElementsByClassName("app__container--input-wrapper--input").value === ""){
    //   document.getElementsByClassName("app__container--input-wrapper--dropdown-list--item1").display ="none"
    // }
    let matches = cities.filter((city) => {
      // document.getElementsByClassName("app__container--input-wrapper--dropdown-list--item1").display ="block"
      const regex = new RegExp(`${text}`, "gi");
      return city.name.match(regex);
    });
    setCityMatch(matches);
    
  //  return null
  };

  // const onHoverItemIn = (e) => {
  //   e.target.style.backgroundColor = "#617D98";
  // };

  // const handleChangeValue = (e) => {
  //   setValue(e.target.value);
  //   // showList.style.display = "none";
  //   console.log(value)
  // }
  // const onHoverItemOut = (e) => {
  //   e.target.style.backgroundColor = "rgba(230, 249, 255, 0.2)";
  // };

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
            <img className="finding-icon" src={require('../asserts/images/search.png')}/>
            <input
              // value="" 
              onChange={(e) => searchCities(e.target.value)}
              type="text"
              placeholder="Nhập tên thành phố để tìm kiếm..."
              className="app__container--input-wrapper--input"
            ></input>
            <div style={{overflow:"auto"}} className="app__container--input-wrapper--dropdown-list--item1">
              {cityMatch &&
                cityMatch.slice(0,3).map((city) => {
                  // console.log(cities)
                  return (
                    <>
                      <div onClick ={handleClickSuggestion} className ="suggestion" key={city.code}>
                        <>{city.name}</>
                      </div>
                    </>
                  );
                })}
            </div >
          {showSuggestions?<div className="selection-queue">
             {cityMatch.map(city => <div key ={city.code}>{city.name}</div>).slice(0,1)}
          </div>:<></>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BaiTap2;
