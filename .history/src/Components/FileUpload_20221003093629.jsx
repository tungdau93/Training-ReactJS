import IconFile from "./IconFile";
// import "../style/_bai-tap-3.scss";
import "../style/_file-upload.scss";
import React from "react";
import { forwardRef } from "react";

const FileUpload = (props, ref) => {
  const {fileName,fileType, fileSize} = props
  return (
    <div ref={ref} className="show-data--item">
      <IconFile fileType={fileName} />
      <div className="show-data__item--name ">
        <span className="show-data__item--name--heading">{fileName}</span>
        <br></br>
        <span className="show-data__item--name--size">
          {file} bytes
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
