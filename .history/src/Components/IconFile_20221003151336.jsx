const IconFile = ({ fileType }) => {
  
  switch (fileType) {
    case "application/msword":
      return (
        <img
          src={require("../assets/icons/word.png")}
          alt=""
          className="show-data__item--icon "
        />
      );
    case "application/pdf":
      return (
        <img
          src={require("../assets/icons/pdf.png")}
          alt=""
          className="show-data__item--icon "
        />
      );
    case "application/vnd.ms-excel":
      return (
        <img
          src={require("../assets/icons/excel.png")}
          alt=""
          className="show-data__item--icon "
        />
      );
    default:
      return (
        <img
          src={require("../assets/images/invalid-file-icon.png")}
          alt=""
          className="show-data__item--icon--invalid "
        />
      );
  }
};

export default IconFile;
