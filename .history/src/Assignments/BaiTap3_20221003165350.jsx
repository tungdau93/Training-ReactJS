import { ref, uploadBytesResumable } from "@firebase/storage";
import React, { useRef, useState } from "react";
import { storage } from "../firebase";
import "../style/_bai-tap-3.scss";
import FileUpload from "../Components/FileUpload";

const BaiTap3 = () => {
  const listUploadedRef = useRef();
  const fileUploadedRef = useRef();

  const [files, setFiles] = useState([]);
  const [progress, setProgress] = useState(0);
  const [isSizeValid, setIsSizeValid] = useState(true);
  const [isActive, setIsActive] = useState(true);
  const [isValidNumberOfFiles, setValidNumberOfFiles] = useState(false);
  const [isAnItemInList,setIsAnItemInList] = useState(false);

  const RemoveAddFile = [];

  const handleSlide = () => {
    const listUploadedOffsetWidth = listUploadedRef.current?.offsetWidth;
    const listUploadedClientWidth = listUploadedRef.current?.clientWidth;
    const fileUploadedWidth = fileUploadedRef.current?.offsetWidth;
    // const removeSpace = listUploadedOffsetWidth - listUploadedClientWidth;
    console.log(removeSpace);

    if (listUploadedRef.current && fileUploadedRef.current) {
      listUploadedRef.current.scrollTo({
        left: fileUploadedWidth+removeSpace,
        behavior: "smooth",
      });
    }
  };

  const handleAddFiles = (event) => {
    setValidNumberOfFiles(false);
    const file = event.target.files[0];

    event.preventDefault();
    const fileArray = event.target.files;
    console.log(fileArray)
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
    <div className="drag-drop-files-container">
      <button className="upload-button" onClick={handleUpload} >
        Upload
      </button>
      <h1>Upload {progress}%</h1>
      <div className="drag-drop-files">
        <div className="drag-drop-label">
          <span className="image-drag-drop">
            <img
              alt=""
              src={require("../assets/images/upload-icon.png")}
              width={32}
              height={32}
            />
          </span>
          <span>Drag and drop files</span>
          <span>Browse Files</span>
        </div>

        <input
          id="name"
          type="file"
          className="input-files"
          onChange={handleAddFiles}
          multiple
        />
      </div>

      

      {isSizeValid ? (
        <div className="show-data">
          <div ref={listUploadedRef} className="show-data-list" >
            {files &&
              files.map((file, index) => {
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
          <img
          onClick={handleSlide}
          className="next-button"
          src={require("../assets/images/next-img.png")}
        />
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
      
    </div>
  );
};

export default BaiTap3;