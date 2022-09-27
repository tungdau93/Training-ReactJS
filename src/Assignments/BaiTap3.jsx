import React from "react";
import "../style/_bai-tap-3.scss";
import { ref, uploadBytesResumable } from "@firebase/storage";
import { storage } from "../firebase";
import { useState } from "react";
import { configConsumerProps } from "antd/lib/config-provider";

const BaiTap3 = () => {
  const [files, setFiles] = useState([]);
  const [progress, setProgress] = useState(0);
  
  const RemoveAddFile =[]

  const stopProp = (e) => {
    e.stopPropagation();
  };

  const handleUpload = (event) => {
    event.preventDefault();
    uploadFiles();
    setFiles(RemoveAddFile);
    // console.log(files);
  };
  
  const handleAddFiles = (event) => {
    const file = event.target.files[0];

    // console.log(file);
    const newFiles = [...files];
    newFiles.push(file);
    setFiles(newFiles);
    
   
  };
  const handleClose = (event) => {
    const file = event.target.files;
    const newFiles = [...files];
    newFiles.pop(file);
    setFiles(newFiles);
  };


  const uploadFiles = (files) => {
    if (!files) return;
    const storageRef = ref(storage, "document/" + `${files.name}`);
    const uploadTask = uploadBytesResumable(storageRef, files);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(prog);
      },
      (err) => console.log(err)
    );
  };

  return (
    <div className="app">
      <h1>Progress {progress}</h1>
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
        <form onSubmit={handleUpload}>
          <input type="file" className="input" onChange={handleAddFiles} />
          <button type="submit" className="submit">
            upload
          </button>
        </form>
        <img
          onMouseOver={stopProp}
          src={require("../assets/images/submit-icon.png")}
          alt=""
          className="submit-img"
        />
      </div>
      <div className="show-data">
        {files &&
          files.map((file, index) => {
            // console.log(index)
            return (
              <div disabled={files.length>3} key={index} className="show-data__sample">
                <img
                  className="show-data__sample--icon"
                  src={require("../assets/images/excel.png")}
                  alt="../assets/images/invalid-file-icon.png"
                />
                <div className="show-data__sample--name">
                  <div className="show-data__sample--name--heading">
                    {file.name}
                  </div>

                  <div className="show-data__sample--name--subheading">
                    {file.size} bytes
                  </div>
                </div>
                <img
                  onClick={handleClose}
                  className="show-data__sample--close-button"
                  alt=""
                  src={require("../assets/images/close-button.png")}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default BaiTap3;
