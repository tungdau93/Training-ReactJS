import React from "react";
import "../style/_bai-tap-3.scss";

const BaiTap3 = () => {
  return (
    <div className="app">
      <div className="drag-and-drop">
        <img
          alt=""
          src={require("../assets/images/upload-file.png")}
          className="drag-and-drop--upload-icon"
        ></img>
        <div className="drag-and-drop--name">
          <div className="drag-and-drop--heading">
            Drag and drop files<br></br>
            <span className="drag-and-drop--sub-heading">
              Browse Files
            </span>{" "}
          </div>
        </div>
      </div>
      <div className="sample-file">
        <div className="sample-excel">
          <img className="sample-excel-icon" src="" alt="" />
          <div className="sample-excel-tag">
            <span className="sample-excel-tag-name"> </span>
            <span className="sample-excel-tag-name"> </span>
          </div>
          <img className="sample-excel-close-button" alt="" />
        </div>

        <div className="sample-pdf"></div>

        <div className="sample-doc"></div>
      </div>
    </div>
  );
};

export default BaiTap3;
