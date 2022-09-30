const IconFile = ({ fileType }) => {
  switch ({ fileType }) {
    case "application/msword":
      return (
        <img
          src={require("../assets/icons/word.png")}
          alt=""
          className="show-data__item--icon "
        />
      );
      break;
    case "application/pdf":
      return (
        <img
          src={require("../assets/icons/pdf.png")}
          alt=""
          className="show-data__item--icon "
        />
      );
      break;
    case "application/vnd.ms-excel":
      return (
        <img
          src={require("../assets/icons/excel.png")}
          alt=""
          className="show-data__item--icon "
        />
      );
      break;
    default:
  }
};

export default IconFile;
