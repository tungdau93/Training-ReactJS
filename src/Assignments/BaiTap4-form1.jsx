import "../style/_bai-tap-4-form1.scss"
import { useEffect, useState } from "react";

const BaiTap4Form1 = () => {
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
    <div className="form__container-1">
      <div className="form__container--heading-1">
        <img
          className="line-progress-1"
          alt=""
          src={require("../assets/images/line-pr.png")}
        ></img>
        <div className="form__container--heading-name-1">Đơn ứng tuyển</div>
        <div className="form__container--heading-steps-1">
          <div className="step-1-1">
            <div className="step-1-img-container-1">
              <img
                className="step-1-img-1"
                alt=""
                src={require("../assets/images/step1-active.png")}
              />
            </div>
            <div className="form__container--heading-steps-name-1">
              Thông tin cá nhân
            </div>
            <div></div>
          </div>
          <div className="step-2-1">
            <div className="step-2-img-container-1">
              <img
                className="step-2-img-1"
                alt=""
                src={require("../assets/images/step2-inactive.png")}
              />
            </div>
            <div className="form__container--heading-steps-name-2-1">
              項目設定
            </div>
          </div>

          <div className="step-3-1">
            <div className="step-3-img-container-1">
              <img
                className="step-3-img-1"
                alt=""
                src={require("../assets/images/step3-inactive.png")}
              />
            </div>
            <div className="form__container--heading-steps-name-3-1">
              <span>目標テンプレート</span>
              <span>設定（標準）</span>
            </div>
          </div>
        </div>
      </div>
      <div className="form__container--body-1">
        <div className="form-input-1 form-full-name-1">
          <div className="label-input-1">
            <span className="label-require-1">Must</span>
            <span>Họ và tên</span>
          </div>
          <input className="full-name-input-1" type="text" />
        </div>
        <div className="form-input-1 form-date-of-birth-1">
          <div className="label-input-1">
            <span className="label-require-1">Must</span>
            <span>Ngày sinh</span>
          </div>
          <input type="date" className="date-of-birth-input-1" />
        </div>
        <div className="form-input-1 form-city-1">
          <div className="label-input-1">
            <span>Thành phố</span>
          </div>
          <select className="select-city-input-1" type="text" />
        </div>
        <div className="form-input-1 form-job-position-1">
          <div className="label-input-job-1">
            <span>Vị trí làm việc</span>
            <span className="label-input-job-subheading-1">
              Có thể chọn nhiều vị trí mà bạn muốn làm việc
            </span>
          </div>
          <input className="job-position-input-1" type="text" />
        </div>
        <div className="form-input-1 form-self-introduction-1">
          <div className="label-input-1">
            <span>Mô tả về bản thân</span>
          </div>
          <input className="self-introduction-1" type="text" />
        </div>
        <span className="text-per-type-1">0/1000</span>
        <div className="form-personal-image-label-1">Ảnh cá nhân</div>
        <div className=" form-personal-image-1">
          <div className="drag-and-drop-label-1">
          <span className="image-drag-drop-1">
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
          <input className="full-name-input-1" type="file" />
        </div>

      </div>

      <button className="next-button-1">Tiếp</button>
    </div>
  );
};

export default BaiTap4Form1;