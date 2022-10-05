import "../style/_bai-tap-4.scss";
import { useEffect, useState } from "react";

const BaiTap4 = () => {
  // const [cities, setICties] = useState([])

  // useEffect(() => {
  //   const url = "https://provinces.open-api.vn/api/";
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setCities(data);
  //     });
  // }, []);

  return (
    <div className="form__container">
      <div className="form__container--heading">
        <img
          className="line-progress"
          alt=""
          src={require("../assets/images/line-pr.png")}
        ></img>
        <div className="form__container--heading-name">Đơn ứng tuyển</div>
        <div className="form__container--heading-steps">
          <div className="step-1">
            <div className="step-1-img-container">
              <img
                className="step-1-img"
                alt=""
                src={require("../assets/images/step1-active.png")}
              />
            </div>
            <div className="form__container--heading-steps-name">
              Thông tin cá nhân
            </div>
            <div></div>
          </div>
          <div className="step-2">
            <div className="step-2-img-container">
              <img
                className="step-2-img"
                alt=""
                src={require("../assets/images/step2-inactive.png")}
              />
            </div>
            <div className="form__container--heading-steps-name-2">
              項目設定
            </div>
          </div>

          <div className="step-3">
            <div className="step-3-img-container">
              <img
                className="step-3-img"
                alt=""
                src={require("../assets/images/step3-Inactive.png")}
              />
            </div>
            <div className="form__container--heading-steps-name-3">
              <span>目標テンプレート</span>
              <span>設定（標準）</span>
            </div>
          </div>
        </div>
      </div>
      <div className="form__container--body">
        <div className="form-input form-full-name">
          <div className="label-input">
            <span className="label-require">Must</span>
            <span>Họ và tên</span>
          </div>
          <input className="full-name-input" type="text" />
        </div>
        <div className="form-input form-date-of-birth">
          <div className="label-input">
            <span className="label-require">Must</span>
            <span>Ngày sinh</span>
          </div>
          <input type="date" className="date-of-birth-input" />
        </div>
        <div className="form-input form-city">
          <div className="label-input">
            <span>Thành phố</span>
          </div>
          <select className="select-city-input" type="text" />
        </div>
        <div className="form-input form-job-position">
          <div className="label-input-job">
            <span>Vị trí làm việc</span>
            <span className="label-input-job-subheading">
              Có thể chọn nhiều vị trí mà bạn muốn làm việc
            </span>
          </div>
          <input className="job-position-input" type="text" />
        </div>
        <div className="form-input form-self-introduction">
          <div className="label-input">
            <span>Mô tả về bản thân</span>
          </div>
          <input className="self-introduction" type="text" />
        </div>
        <span className="text-per-type">0/1000</span>
        <div className="form-personal-image-label">Ảnh cá nhân</div>
        <div className=" form-personal-image">
          <div className="drag-and-drop-label">
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
          <input className="full-name-input" type="file" />
        </div>

      </div>

      <button className="next-button">Tiếp</button>
    </div>
  );
};

export default BaiTap4;