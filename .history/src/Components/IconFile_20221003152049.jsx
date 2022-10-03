const IconFile = ({ fileType }) => {
  
  switch (fileType) {
    case "application/msword":
      return (
        <img
          src={require("../assets/icons/word.png")}
          alt=""
          className="image-item"
        />
      );
    case "application/pdf":
      return (
        <img
          src={require("../assets/icons/pdf.png")}
          alt=""
          className="image-item"
        />
      );
    case "application/vnd.ms-excel":
      return (
        <img
          src={require("../assets/icons/excel.png")}
          alt=""
          className="image-item"
        />
      );
    default:
      return (
        <img
          src={require("../assets/images/invalid-file-icon.png")}
          alt=""
          className="image-invalid"
        />
      );
  }
};

export default IconFile;
