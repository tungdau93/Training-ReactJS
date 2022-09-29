import React from "react";
import "../style/_bai-tap-3.scss";
import { ref, uploadBytesResumable } from "@firebase/storage";
import { storage } from "../firebase";
import { useState } from "react";

const BaiTap3 = () => {
  const [files, setFiles] = useState([]);
  const [progress, setProgress] = useState(0);
  const [isSizeValid, setIsSizeValid] = useState(true);
  const [isActive, setIsActive] = useState(true);
  const [isValidNumberOfFiles, setValidNumberOfFiles] = useState(true);

  const RemoveAddFile = [];
  // console.log(files)

  const handleAddFiles = (event) => {
    // const reader =new FileReader();
    event.preventDefault();
    var file = event.target.files[0];
    // console.log(file);
    if (file.size > 10485760) {
      // window.alert("Please upload a file smaller than 10 MB");
      setIsSizeValid(false);
      setIsActive(false);
      return;
    }
    setIsActive(true);
    setIsSizeValid(true);

    // console.log(file);
    const newFiles = [...files];

    newFiles.push(file);
    setFiles(newFiles);
    // console.log(files);
    // console.log(newFiles);
    if (files.length > 3) {
      setValidNumberOfFiles(false);
    }
  };

  const uploadFiles = (file) => {
    // console.log(newFilesUpload);

    // console.log(file.name);
    if (!file) return;
    const storageRef = ref(storage, `/files/${file.name}`);
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

  const handleUpload = (event) => {
    event.preventDefault()
    

    const newFilesUpload = [...files];
    for(var i=0;i<newFilesUpload.length;i++){
      uploadFiles(newFilesUpload[i])
      console.log(newFilesUpload[i]);
    }
    
  };

 
  // console.log(files)

  
  const handleClose = (event) => {
    const closeFile = event.target.files;
    const newFiles = [...files];
    newFiles.pop(closeFile);
    setFiles(newFiles);
  };

  return (
    <div className="app">
      <h1>Upload {progress}%</h1>
      <img
        src={require("../assets/images/submit-icon.png")}
        alt=""
        className="slide-icon"
      />
      {/* <h1>Progress {progress}</h1> */}
      <div className={isActive ? "drag-and-drop" : "drag-and-drop--alert"}>
        <form onSubmit={(event) => handleUpload(event)}>
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
      <div className="show-data">
        {isSizeValid ? (
          <>
            {isValidNumberOfFiles ? (
              <>
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
                              <div></div>
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
              </>
            ) : (
              <span className="maximum-files-length">
                Maximum length of files is 4
              </span>
            )}
          </>
        ) : (
          <span className="alert">The maximum file is 10MB</span>
        )}
      </div>
    </div>
  );
};

export default BaiTap3;
