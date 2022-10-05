import "../style/_bai-tap-4-form2.scss";
import { useEffect, useState } from "react";

const BaiTap4Form2 = () => {
  // const [cities, setICties] = useState([])

  // useEffect(() => {
  //   const url = "https://provinces.open-api.vn/api/";
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((data) => 
  //       setCities(data);
  //     });
  // }, []);

  return (
    <div className="form__container-2">
      <div className="form__container--heading-2">
        <img
          className="line-progress-2"
          alt=""
          src={require("../assets/images/line-pr.png")}
        ></img>
        <div className="form__container--heading-name-2">Đơn ứng tuyển</div>
        <div className="form__container--heading-steps-2">
          <div className="step-1-2">
            <div className="step-1-img-container-2">
              <img
                className="step-1-img-2"
                alt=""
                src={require("../assets/images/step1-active.png")}
              />
            </div>
            <div className="form__container--heading-steps-name-2">
              Thông tin cá nhân
            </div>
            <div></div>
          </div>
          <div className="step-2-2">
            <div className="step-2-img-container-2">
              <img
                className="step-2-img-2"
                alt=""
                src={require("../assets/images/step2-active.png")}
              />
            </div>
            <div className="form__container--heading-steps-name-2-2">
              項目設定
            </div>
          </div>

          <div className="step-3-2">
            <div className="step-3-img-container-2">
              <img
                className="step-3-img-2"
                alt=""
                src={require("../assets/images/step3-inactive.png")}
              />
            </div>
            <div className="form__container--heading-steps-name-3-2">
              <span>目標テンプレート</span>
              <span>設定（標準）</span>
            </div>
          </div>
        </div>
      </div>
      <div className="form__container--body-2">
        <div className="form-company-container-2">
          <select className="select-city-input-2" type="text" />
          <img
            className="trash-2"
            src={require("../assets/images/Trash.png")}
            alt=""
          />
        </div>
        <div className="form-input-2 form-all-position-2">
          <div className="label-input-2">
            <span className="label-require-2">Must</span>
            <span>Vị trí từng làm</span>
          </div>
          <input className="full-name-input-2" type="text" />
        </div>
        <div className="form-input-2 form-work-period-2">
          <div className="label-input-2">
            <span className="label-require-2">Must</span>
            <span>Thời gian làm việc</span>
          </div>
          <div className="work-period-input-container-2">
            <input type="date" className="work-period-input-2" />
            <span className="dash">-</span>
            <input type="date" className="work-period-input-2" />
          </div>
        </div>
        <div className="form-input-2 form-self-introduction-2">
          <div className="label-input-2">
            <span> Mô tả về công việc</span>
          </div>
          <input className="self-introduction-2" type="text" />
        </div>
      </div>
        <div className="add-company-2">
            <img className="plus-2" alt="" src={require("../assets/images/Plus.png")} />
            <span>Thêm công ty</span>
        </div>
      <button className="next-button-2">Tiếp</button>
      <button className="prev-button-2">Quay lại</button>
    </div>
  );
};

export default BaiTap4Form2;