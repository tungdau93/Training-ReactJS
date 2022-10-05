import "../style/_bai-tap-5.scss";
import { useEffect, useState } from "react";

const BaiTap5 = () => {
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
    <div className="form__container-5">
      <div className="form__container--heading-5">
        <img
          className="line-progress-5"
          alt=""
          src={require("../assets/images/line-pr.png")}
        ></img>
        <div className="form__container--heading-name-5">Đơn ứng tuyển</div>
        <div className="form__container--heading-steps-5">
          <div className="step-1-5">
            <div className="step-1-img-container-5">
              <img
                className="step-1-img-5"
                alt=""
                src={require("../assets/images/step1-active.png")}
              />
            </div>
            <div className="form__container--heading-steps-name-5">
              Thông tin cá nhân
            </div>
            <div></div>
          </div>
          <div className="step-2-5">
            <div className="step-2-img-container-5">
              <img
                className="step-2-img-5"
                alt=""
                src={require("../assets/images/step2-active.png")}
              />
            </div>
            <div className="form__container--heading-steps-name-2-5">
              項目設定
            </div>
          </div>

          <div className="step-3-5">
            <div className="step-3-img-container-5">
              <img
                className="step-3-img-5"
                alt=""
                src={require("../assets/images/step3-inactive.png")}
              />
            </div>
            <div className="form__container--heading-steps-name-3-5">
              <span>目標テンプレート</span>
              <span>設定（標準）</span>
            </div>
          </div>
        </div>
      </div>
      <div className="form__container--body-5">
        <div className="form-company-container-5">
          <select className="select-city-input-5" type="text" />
          <img
            className="trash-5"
            src={require("../assets/images/Trash.png")}
            alt=""
          />
        </div>
        <div className="form-input-5 form-all-position-5">
          <div className="label-input-5">
            <span className="label-require-5">Must</span>
            <span>Vị trí từng làm</span>
          </div>
          <input className="full-name-input-5" type="text" />
        </div>
        <div className="form-input-5 form-work-period-5">
          <div className="label-input-5">
            <span className="label-require-5">Must</span>
            <span>Thời gian làm việc</span>
          </div>
          <div className="work-period-input-container-5">
            <input type="date" className="work-period-input-5" />
            <span className="dash">-</span>
            <input type="date" className="work-period-input-5" />
          </div>
        </div>
        <div className="form-input-5 form-self-introduction-5">
          <div className="label-input-5">
            <span> Mô tả về công việc</span>
          </div>
          <input className="self-introduction-5" type="text" />
        </div>
      </div>
        <div className="add-company-5">
            <img className="plus-5" alt="" src={require("../assets/images/Plus.png")} />
            <span>Thêm công ty</span>
        </div>
      <button className="next-button-5">Tiếp</button>
      <button className="prev-button-5">Quay lại</button>
    </div>
  );
};

export default BaiTap5;