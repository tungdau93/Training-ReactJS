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
    <div className="form__container-4">
      <div className="form__container--heading-4">
        <img
          className="line-progress-4"
          alt=""
          src={require("../assets/images/line-pr.png")}
        ></img>
        <div className="form__container--heading-name-4">Đơn ứng tuyển</div>
        <div className="form__container--heading-steps-4">
          <div className="step-1-4">
            <div className="step-1-img-container-4">
              <img
                className="step-1-img-4"
                alt=""
                src={require("../assets/images/step1-active.png")}
              />
            </div>
            <div className="form__container--heading-steps-name-4">
              Thông tin cá nhân
            </div>
            <div></div>
          </div>
          <div className="step-2-4">
            <div className="step-2-img-container-4">
              <img
                className="step-2-img-4"
                alt=""
                src={require("../assets/images/step2-inactive.png")}
              />
            </div>
            <div className="form__container--heading-steps-name-2-4">
              項目設定
            </div>
          </div>

          <div className="step-3-4">
            <div className="step-3-img-container-4">
              <img
                className="step-3-img-4"
                alt=""
                src={require("../assets/images/step3-inactive.png")}
              />
            </div>
            <div className="form__container--heading-steps-name-3-4">
              <span>目標テンプレート</span>
              <span>設定（標準）</span>
            </div>
          </div>
        </div>
      </div>
      <div className="form__container--body-4">
        <div className="form-input-4 form-full-name-4">
          <div className="label-input-4">
            <span className="label-require-4">Must</span>
            <span>Họ và tên</span>
          </div>
          <input className="full-name-input-4" type="text" />
        </div>
        <div className="form-input-4 form-date-of-birth-4">
          <div className="label-input-4">
            <span className="label-require-4">Must</span>
            <span>Ngày sinh</span>
          </div>
          <input type="date" className="date-of-birth-input-4" />
        </div>
        <div className="form-input-4 form-city-4">
          <div className="label-input-4">
            <span>Thành phố</span>
          </div>
          <select className="select-city-input-4" type="text" />
        </div>
        <div className="form-input-4 form-job-position-4">
          <div className="label-input-job-4">
            <span>Vị trí làm việc</span>
            <span className="label-input-job-subheading-4">
              Có thể chọn nhiều vị trí mà bạn muốn làm việc
            </span>
          </div>
          <input className="job-position-input-4" type="text" />
        </div>
        <div className="form-input-4 form-self-introduction-4">
          <div className="label-input-4">
            <span>Mô tả về bản thân</span>
          </div>
          <input className="self-introduction-4" type="text" />
        </div>
        <span className="text-per-type-4">0/1000</span>
        <div className="form-personal-image-label-4">Ảnh cá nhân</div>
        <div className=" form-personal-image-4">
          <div className="drag-and-drop-label-4">
          <span className="image-drag-drop-4">
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
          <input className="full-name-input-4" type="file" />
        </div>

      </div>

      <button className="next-button-4">Tiếp</button>
    </div>
  );
};

export default BaiTap4Form1;