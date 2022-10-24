import IconFile from "./IconFile";
// import "../style/_bai-tap-3.scss";
import "../style/_file-upload.scss";
import React from "react";
import { forwardRef } from "react";

const FileUpload = (props, ref) => {
  const {{}}
  return (
    <div ref={ref} className="show-data--item">
      <IconFile fileType={props.fileType} />
      <div className="show-data__item--name ">
        <span className="show-data__item--name--heading">{props.fileName}</span>
        <br></br>
        <span className="show-data__item--name--size">
          {props.fileSize} bytes
        </span>
      </div>
      <img
        onClick={props.handleClose}
        alt=""
        className="show-data__item--close-button"
        src={require("../assets/images/close-button.png")}
      />
    </div>
  );
};

export default forwardRef(FileUpload);
