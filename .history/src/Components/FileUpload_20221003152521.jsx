import IconFile from "./IconFile";
// import "../style/_bai-tap-3.scss";
import "../style/_file-upload.scss";
import React from "react";
import { forwardRef } from "react";

const FileUpload = (props, ref) => {
  return (
    <div ref={ref} className="show-data-list-item">
      <IconFile fileType={props.fileType} />
      <div className="item-label">
        <span className="item-label-name ">{props.fileName}</span>
        <span className="item-label-capacity ">{props.fileSize}</span>
      </div>
      <img
        onClick = {}
        className="item-label--close-button"
        src={require("../assets/images/close-button.png")}
      ></img>
    </div>
  );
};

export default forwardRef(FileUpload);
