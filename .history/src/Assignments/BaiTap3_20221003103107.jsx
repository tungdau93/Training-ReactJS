import React from "react";
import "../style/_bai-tap-3.scss";
import { ref, uploadBytesResumable } from "@firebase/storage";
import { storage } from "../firebase";
import { useState, useRef } from "react";
import IconFile from "../Components/IconFile";
import FileUpload from "../Components/FileUpload";

const BaiTap3 = () => {
  const listUploadedRef = useRef();
  const fileUploadedRef = useRef();

  const [files, setFiles] = useState([]);
  const [progress, setProgress] = useState(0);
  const [isSizeValid, setIsSizeValid] = useState(true);
  const [isActive, setIsActive] = useState(true);
  const [isValidNumberOfFiles, setValidNumberOfFiles] = useState(false);

  const RemoveAddFile = [];

  const handleSlide = () => {
    const listUploadedOffsetWidth = listUploadedRef.current?.offsetWidth;
    const listUploadedClientWidth = listUploadedRef.current?.clientWidth;
    const fileUploadedWidth = fileUploadedRef.current?.offsetWidth;
    const removeSpace = listUploadedOffsetWidth - listUploadedClientWidth;
    console.log(removeSpace);

    if (listUploadedRef.current && fileUploadedRef.current) {
      listUploadedRef.current.scrollTo({
        left: fileUploadedWidth,
        behavior: "smooth",
      });
    }
  };
  const handleAddFiles = (event) => {
    setValidNumberOfFiles(false);
    const file = event.target.files[0];

    event.preventDefault();
    const fileArray = event.target.files;
    for (var j = 0; j < fileArray.length; j++) {
      if (fileArray[j].size > 10485760) {
        setIsSizeValid(false);
        setIsActive(false);
        return;
      }
    }
    setIsActive(true);
    setIsSizeValid(true);

    const newFiles = [...files];
    for (let k = 0; k < fileArray.length; k++) {
      newFiles.push(fileArray[k]);
    }
    setFiles(newFiles);
  };

  const uploadFiles = (file) => {
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
    event.preventDefault();

    const newFilesUpload = [...files];
    if (files.length > 0 && files.length <= 4) {
      for (let i = 0; i < newFilesUpload.length; i++) {
        uploadFiles(newFilesUpload[i]);
        console.log(newFilesUpload[i]);
        setFiles(RemoveAddFile);
      }
    } else {
      setValidNumberOfFiles(true);
      setFiles(RemoveAddFile);
      setIsActive(false);
    }
  };

  const handleClose = (index) => {
    const fileSelected = files.filter((file) => file.index === index);
    // console.log(newFiles);
    const newFiles = [...files];
    newFiles.pop(fileSelected);
    setFiles([...newFiles]);
  };

  return (
    <>
      <h1>Upload {progress}%</h1>
      <img
        onClick={handleSlide}
        src={require("../assets/images/submit-icon.png")}
        alt=""
        className="slide-icon"
      />

      <div className="drag-drop-files">
        <div className="">
          <img alt="" src={require("../assets/images/upload-icon.png")} />
          <span>Drag and drop files</span>
          <span></span>
        </div>
        <input
          id="name"
          type="file"
          className="input"
          onChange={handleAddFiles}
          multiple
        />
        {/* <form onSubmit={(event) => handleUpload(event)}>
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
            multiple
          />
          <button type="submit" className="submit">
            Upload
          </button>
        </form> */}
      </div>

      {isSizeValid ? (
        <div ref={listUploadedRef} className="show-data--hidden">
          {files &&
            files.map((file, index) => {
              // console.log(file.type);
              return (
                <FileUpload
                  handleClose={() => handleClose(index)}
                  key={index}
                  ref={fileUploadedRef}
                  fileType={file.type}
                  fileName={file.name}
                  fileSize={file.size}
                />
              );
            })}
        </div>
      ) : (
        <span className="maximum-files-size">
          The maximum file size is 10MB
        </span>
      )}

      {isValidNumberOfFiles ? (
        <span className="maximum-files-length">
          Maximum length of files is 4
        </span>
      ) : null}
    </>
  );
};

export default BaiTap3;
