// import {Link} from 'react-router-dom'
import React from "react";
import "../style/_bai-tap-2.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const showListItem = (e)=>{
    const show =document.querySelector(".app__container--input-wrapper--dropdown-list")
    if (!show.contains(e.target)) {
      show.style.display = 'none';
    }
}






const BaiTap2 = () => {
  const onHoverItemIn = (e)=>{
    e.target.style.backgroundColor = "#617D98"
  }

  const onHoverItemOut =(e)=>{
    e.target.style.backgroundColor = "rgba(230, 249, 255, 0.2)"
  }
  // const styleApp = {
  //   backgroundColor: "#1E1E1E",
  // };

  // const styleTitle = {
  //   top: "-976px",
  //   left: "-1124px",
  //   color: "#a0a0a0",
  //   width: "2227px",
  //   height: "1933px",
  // };

  // const styleAppContainer = {
  //   width: "2227px",
  //   height: "1933px",
  //   backgroundColor: "#F8F8F8",
  //   position: "relative",
  // };

  // const appContainerHeading = {
  //   display: "flex",
  //   flexDirection: "row",
  //   alignItems: "center",
  //   padding: "50px 99px 50px 56px",
  //   gap: "10px",

  //   position: "absolute",
  //   width: "2227px",
  //   height: "140px",
  //   left: "0px",
  //   top: "0px",
  //   backgroundColor: "#333333",
  // };

  // const appContainerHeadingName = {
  //   display: "flex",
  //   flexDirection: "row",
  //   alignItems: "center",
  //   padding: "0px",
  //   gap: "30px",

  //   width: "323px",
  //   height: "56px",

  //   /* Inside auto layout */

  //   flex: "none",
  //   order: "0",
  //   flexGrow: "0",
  // };

  // const appContainerHeadingNameJapanese = {
  //   display: "flex",
  //   fontStyle: "normal",
  //   fontWeight: "700",
  //   fontSize: "48px",
  //   lineHeight: "56px",

  //   /* White */

  //   color: "#FFFFFF",

  //   width: "144px",
  //   height: "56px",
  //   fontFamily: "Roboto",

  //   /* Inside auto layout */

  //   flex: "none",
  //   order: "0",
  //   flexGrow: "0",
  // };

  // const appContainerHeadingNameEnglish = {
  //   width: "149px",
  //   height: "38px",

  //   fontFamily: "Roboto",
  //   fontStyle: "normal",
  //   fontWeight: "400",
  //   fontSize: "32px",
  //   lineHeight: "38px",

  //   color: "#FFFFFF",

  //   flex: "none",
  //   order: "1",
  //   flexGrow: "0",
  // };

  return (
    <div>
      <div className="app">
        <span id="title">????????? </span>
        <div className="app__container">
          <div className="app__container--heading">
            <div className="app__container--heading-name">
              <p className="app__container--heading-name--japanese">?????????</p>

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
              onClick ={showListItem}
              type="text"
              placeholder="Nh???p t??n th??nh ph??? ????? t??m ki???m..."
              className="app__container--input-wrapper--input"
            ></input>
            <div className="app__container--input-wrapper--dropdown-list">
                <div className="app__container--input-wrapper--dropdown-list--item1" onMouseOver={onHoverItemIn} onMouseOut={onHoverItemOut}>
                
                </div>
                <div className="app__container--input-wrapper--dropdown-list--item2" onMouseOver={onHoverItemIn} onMouseOut={onHoverItemOut}>
                  
                </div>
                <div className="app__container--input-wrapper--dropdown-list--item3" onMouseOver={onHoverItemIn} onMouseOut={onHoverItemOut}>

                </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BaiTap2;
