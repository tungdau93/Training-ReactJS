import "../style/_bai-tap-4-form3.scss";
import { useEffect, useState } from "react";

const BaiTap4Form3 = () => {
  
  return (
    <div className="form__container-3">
      <div className="form__container--heading-3">
        <img
          className="line-progress-3"
          alt=""
          src={require("../assets/images/line-pr.png")}
        ></img>
        <div className="form__container--heading-name-3">Đơn ứng tuyển</div>
        <div className="form__container--heading-steps-3">
          <div className="step-1-3">
            <div className="step-1-img-container-3">
              <img
                className="step-1-img-3"
                alt=""
                src={require("../assets/images/step1-active.png")}
              />
            </div>
            <div className="form__container--heading-steps-name-3">
              Thông tin cá nhân
            </div>
            <div></div>
          </div>
          <div className="step-2-3">
            <div className="step-2-img-container-3">
              <img
                className="step-2-img-3"
                alt=""
                src={require("../assets/images/step2-active.png")}
              />
            </div>
            <div className="form__container--heading-steps-name-3-3">
              項目設定
            </div>
          </div>

          <div className="step-3-3">
            <div className="step-3-img-container-3">
              <img
                className="step-3-img-3"
                alt=""
                src={require("../assets/images/step3-active.png")}
              />
            </div>
            <div className="form__container--heading-steps-name-3-3">
              <span>目標テンプレート</span>
              <span>設定（標準）</span>
            </div>
          </div>
        </div>
      </div>
      <div className="form__container--body-3">
        <div className="form-input-3 form-reason-join">
          <div className="label-input-3">
            <span className="label-require-3">Must</span>
            <span>Lý do muốn ứng tuyển vào công ty</span>
          </div>
          <input className="full-name-input-3 reason-join-input-3" type="text" />
        </div>
        <span className="text-per-type-3">0/1000</span>
        <div className="form-input-3 form-expected-salary">
          <div className="label-input-3">
            <span className="label-require-3">Must</span>
            <span>Mức lương mong muốn </span>
          </div>
          <input className="full-name-input-3 expected-salary-input-3" type="text" />
        </div>
      </div>    
      <button className="finish-3">Hoàn thành</button>
    </div>
  );
};

export default BaiTap4Form3;
