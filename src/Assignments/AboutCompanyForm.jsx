import "../style/_bai-tap-4-about-company.scss";
import { useState } from "react";
import { useEffect } from "react";

const AboutCompany = (props) => {
  const { prevStep } = props;
  const [form, setForm] = useState(() => {
    const saved = localStorage.getItem("about-company-form");
    const initialValue = JSON.parse(saved);
    return (
      initialValue || {
        reason: "",
        expectedSalary: "",
      }
    );
  });

  const [formValidate, setFormValidate] = useState(() => {
    const saved = localStorage.getItem("about-company-form");
    const initialValue = JSON.parse(saved);
    return (
      initialValue || {
        reason: {
          messageError: "",
          state: false,
        },
        expectedSalary: {
          messageError: "",
          state: false,
        },
      }
    );
  });


  // const [jobPosition, setJobPosition] = useState(() => {
  //   var newJobPositionSaved;
  //   const saved = localStorage.getItem("personal-exp-form");
  //   const initialValue = JSON.parse(saved);
  //   if (initialValue === "null") {
  //     return "";
  //   }
  //   if (initialValue && initialValue !== "null") {

  //   initialValue.map((itemForm) => {
  //     if (itemForm.keyCompanyForm === keyCompanyForm) {
  //       newJobPositionSaved = itemForm.info.jobPosition;
  //     }
  //   });
  // }
  //   return newJobPositionSaved;
  // });

  const handleAddReason = (e) => {
    setForm({
      ...form,
      reason: e.target.value.replace(/\n/g, "").replace(/\s/g, ""),
    });
    if (!e.target.value || e.target.value) {
      setFormValidate({
        ...formValidate,
        reason: {
          messageError: "",
          state: false,
        },
      });
    }
  };

  const handleAddExpectedSalary = (e) => {
    const value = e.target.value;
    console.log(value.replace(/\./g, " "));

    setForm({
      ...form,
      expectedSalary: e.target.value
        .replace(/\./g, "")
        .replace(/\s/g, "")
        .replace(/,/g, ""),
    });
    if (!e.target.value || e.target.value) {
      setFormValidate({
        ...formValidate,
        expectedSalary: {
          messageError: "",
          state: false,
        },
      });
    }
  };

  const validateForm = () => {
    if (form.reason === "") {
      setFormValidate((prevState) => {
        return {
          ...prevState,
          reason: {
            messageError: "Trường này là bắt buộc",
            state: true,
          },
        };
      });
    }
    if (form.expectedSalary === "") {
      setFormValidate((prevState) => {
        return {
          ...prevState,
          expectedSalary: {
            messageError: "Trường này là bắt buộc",
            state: true,
          },
        };
      });
    }

    if (form.reason && form.reason.length > 10) {
      setFormValidate((prevState) => {
        return {
          ...prevState,
          reason: {
            messageError: "Không vượt quá 10 ký tự",
            state: true,
          },
        };
      });
    }

    if (isNaN(Number(form.expectedSalary))) {
      setFormValidate((prevState) => {
        return {
          ...prevState,
          expectedSalary: {
            messageError: "Phải là số",
            state: true,
          },
        };
      });
    }

    if (Number(form.expectedSalary) && form.expectedSalary.length > 10) {
      setFormValidate((prevState) => {
        return {
          ...prevState,
          expectedSalary: {
            messageError: "Tối đa 10 chữ số",
            state: true,
          },
        };
      });
      // console.log(Number(form.expectedSalary) && Number(form.expectedSalary) >10)
    }
  };

  useEffect(() => {
    localStorage.setItem("about-company-form", JSON.stringify(form));
  }, [form]);

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
            value={form.reason}
          />
        </div>
        {formValidate.reason.state && (
          <span className="invalid-warning">
            {formValidate.reason["messageError"]}
          </span>
        )}
        <div className="text-per-type">{form.reason?.length || 0}/10</div>
        <div className="form-input form-expected-salary">
          <div className="label-input">
            <span className="label-require">Must</span>
            <span>Mức lương mong muốn </span>
          </div>
          <input
            onChange={(e) => handleAddExpectedSalary(e)}
            className="expected-salary-input"
            type="text"
            value={form.expectedSalary}
          />
        </div>
        {formValidate.expectedSalary.state && (
          <span className="invalid-warning">
            {formValidate.expectedSalary["messageError"]}
          </span>
        )}
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
