import IconFile from "./IconFile";

const FileUpload = ({ fileType, fileSize, fileName, ref  }) => {
  return <div className="show-data--item">
    <IconFile fileType ={fileType}/>
    <div className="show-data__item--name ">
        <div className="show-data__item--name--heading">   
            <span className="show-data__item--name--size">{fileSize}</span>
            {fileName}
        </div>
    </div>
  </div>;
};

export default forwardRef(FileUpload;
