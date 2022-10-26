import "../style/_bai-tap-4-about-company.scss";
import { useState } from "react";

const AboutCompany = (props) => {
  const { prevStep } = props;
  const [form, setForm] = useState({
    reason: "",
    expectedSalary: "",
  });
  const [formValidate, setFormValidate] = useState({
    reason: {
      messageError: "",
      state: false
    },
    expectedSalary: {
      messageError: "",
      state: false,
    },
  });

  const handleAddReason = (e) => {
    // form.reason = e.target.value.replace(/\n/g, "").replace(/\s/g, "");
    setForm({
      ...form,
      reason: e.target.value.replace(/\n/g, "").replace(/\s/g, "")
    });
  };

  const handleAddExpectedSalary = (e) => {
    setForm({
      ...form,
      expectedSalary: e.target.value
    });
  };

  const validateForm = () => {

    if (form.reason === "") {
      setFormValidate({
        ...formValidate,
        reason: {
          messageError: "Trường này là bắt buộc",
          state: true,
        },
      });
    }

    if (form.expectedSalary === "") {
      setFormValidate({
        ...formValidate,
        expectedSalary: {
          messageError: "Trường này là bắt buộc",
          state: true,
        },
      });
    }

   

   
    
  };

  return (
    <div className="form-about-company">
      <div className="heading">
        <img
          className="line-progress"
          alt=""
          src={require("../assets/images/line-pr.png")}
        ></img>
        <div className="heading-name">Đơn ứng tuyển</div>
        <div className="heading-step">
          <div className="heading-step__first-step">
            <div className="step-img-container">
              <img
                className="step-img"
                alt=""
                src={require("../assets/images/step1-active.png")}
              />
            </div>
            <div className="step-name">Thông tin cá nhân</div>
            <div></div>
          </div>
          <div className="heading-step__second-step">
            <div className="step-img-container">
              <img
                className="step-img"
                alt=""
                src={require("../assets/images/step2-active.png")}
              />
            </div>
            <div className="step-name">Kinh nghiệm làm việc</div>
          </div>

          <div className="heading-step__third-step">
            <div className="step-img-container">
              <img
                className="step-img"
                alt=""
                src={require("../assets/images/step3-active.png")}
              />
            </div>
            <div className="step-name">
              <span>Về công ty</span>
            </div>
          </div>
        </div>
      </div>
      <div className="body">
        <div className="form-input form-reason-join">
          <div className="label-input">
            <span className="label-require">Must</span>
            <span>Lý do muốn ứng tuyển vào công ty</span>
          </div>
          <textarea
            onChange={(e) => handleAddReason(e)}
            className="reason-join-input"
            type="text"
          />
        </div>
        {formValidate.reason.state && (
          <span className="invalid-warning">
            {formValidate.reason["messageError"]}
          </span>
        )}
        <div className="text-per-type">0/1000</div>
        <div className="form-input form-expected-salary">
          <div className="label-input">
            <span className="label-require">Must</span>
            <span>Mức lương mong muốn </span>
          </div>
          <input
            onChange={(e) => handleAddExpectedSalary(e)}
            className="expected-salary-input"
            type="text"
          />
        </div>
      </div>
      <button onClick={validateForm} className="finish">
        Hoàn thành
      </button>
      <button onClick={prevStep} className="prev-button">
        Quay lại
      </button>
    </div>
  );
};

export default AboutCompany;
