import React from "react";
import "../style/_bai-tap-3.scss";
import { ref, uploadBytesResumable } from "@firebase/storage";
import { storage } from "../firebase";
import { useState } from "react";

const BaiTap3 = () => {
  const [files, setFiles] = useState([]);
  const [progress, setProgress] = useState(0);
  const [isFullItem, setIsFullItem] = useState({
    
  });

  const [isSizeValid, setIsSizeValid] = useState('false')

  const RemoveAddFile = [];

  const handleUpload = (event) => {
    var file = event.target.files[0];
    event.preventDefault();
    uploadFiles(file);
    setFiles(RemoveAddFile);
    // console.log(file);
  };

  // handleValidateFile = () => {
    
  // };
  

  const handleAddFiles = (event) => {
    event.preventDefault();
    var file = event.target.files[0];

    // console.log(file.name);
    const newFiles = [...files];
    if(files.length <4){

      newFiles.push(file);
      setFiles(newFiles);
      console.log(files.length);
    }else{

      setIsFullItem({
        overflow:"hidden"
      })
    }
  };
  const handleClose = (event) => {
    const closeFile = event.target.files;
    const newFiles = [...files];
    newFiles.pop(closeFile);
    setFiles(newFiles);
  };

  const uploadFiles = (file) => {
    // console.log(file.name);
    if (!file) return;
    const storageRef = ref(storage, "document/" + `${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
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
      <img
        src={require("../assets/images/submit-icon.png")}
        alt=""
        className="slide-icon"
      />
      {/* <h1>Progress {progress}</h1> */}
      <div className="drag-and-drop">
        <form onSubmit={handleUpload}>
          <label htmlFor="name" className="drag-and-drop-img">
            <img alt="" src={require("../assets/images/upload-icon.png")} />
          </label>
          <label htmlFor="name" className="drag-and-drop-heading">
            Drag and drop files
          </label>
          <label htmlFor="name" className="drag-and-drop-heading--sub-heading">
            Browse Files
          </label>
          <input
            id="name"
            type="file"
            className="input"
            onChange={handleAddFiles}
          />
          <button type="submit" className="submit">
            Upload
          </button>
        </form>
      </div>
      <div  className="show-data">
        {files &&
          files.map((file, index) => {
            // console.log(files);
            if (file.name.includes(".doc")) {
              // console.log(index)
              return (
                <div key={index} className="show-data__sample">
                  <img
                    className="show-data__sample--icon "
                    src={require("../assets/images/word.png")}
                    alt="../assets/images/invalid-file-icon.png"
                  />
                  <div className="show-data__sample--name">
                    <div className="show-data__sample--name--heading">
                      {}
                    </div>

                    <div className="show-data__sample--name--subheading">
                      <div>

                      </div>
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
            } else if (file.name.includes(".xls")) {
              // console.log(index)
              return (
                <div key={index} className="show-data__sample">
                  <img
                    className="show-data__sample--icon "
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
            } else if (file.name.includes(".pdf")) {
              // console.log(index)
              return (
                <div key={index} className="show-data__sample">
                  <img
                    className="show-data__sample--icon "
                    src={require("../assets/images/pdf.png")}
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
            } else {
              return (
                <div key={index} className="show-data__sample">
                  <img
                    className="show-data__sample--icon--invalid "
                    src={require("../assets/images/invalid-file.png")}
                    alt="../assets/images/invalid-file.png"
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
            }
          })}
      </div>
    </div>
  );
};

export default BaiTap3;
