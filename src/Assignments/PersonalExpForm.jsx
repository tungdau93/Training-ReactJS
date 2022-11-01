import "../style/_bai-tap-4-personal-exp.scss";
import { useState, useRef, useEffect, createContext } from "react";
import useClickOutside from "../hooks/useClickOutside";
import Company from "./Company";
import React from "react";
import { info } from "sass";

export const formContext = createContext();
export const companyContext = createContext();

const PersonalExpForm = (props) => {
  const searchRef = useRef();

  const [companies, setCompanies] = useState([
    {
      name: "Walmart",
      code: 1,
      state: "enable",
    },
    {
      name: "Amazon",
      code: 2,
      state: "enable",
    },
    {
      name: "Apple",
      code: 3,
      state: "enable",
    },
    {
      name: "CVS Health",
      code: 4,
      state: "enable",
    },
    {
      name: "Samsung ",
      code: 5,
      state: "enable",
    },
    {
      name: "Alphabet",
      code: 6,
      state: "enable",
    },
    {
      name: "Berkershire",
      code: 7,
      state: "enable",
    },

    {
      name: "Mckesson",
      code: 8,
      state: "enable",
    },
  ]);

  const [isShowCompaniesSearch, setIsShowCompaniesSearch] = useState(false);
  const [form, setForm] = useState(() => {
    const saved = localStorage.getItem("personal-exp-form");
    const initialValue = JSON.parse(saved);
    return (
      initialValue || [
        {
          keyCompanyForm: 0,
          companyName: "",
          info: {
            jobPosition: "",
            jobDescription: "",
            timeStart: "",
            timeEnd: "",
          },
        },
      ]
    );
  });

  const [timeRange, setTimeRange] = useState(() => {
    const saved = localStorage.getItem("personal-exp-form-time");
    const initialValue = JSON.parse(saved);
    return (
      initialValue || [
        {
          keyCompanyTime: 0,
          timeStart: "",
          timeEnd: "",
        },
      ]
    );
  });

  const [formValidate, setFormValidate] = useState(() => {
    const saved = localStorage.getItem("personal-exp-form-validate");
    const initialValue = JSON.parse(saved);
    return (
      initialValue || [
        {
          keyCompanyValidate: 0,
          companyName: {
            state: false,
            messageError: "",
          },
          info: {
            jobPosition: {
              messageError: "",
              state: false,
            },
            jobDescription: {
              messageError: "",
              state: false,
            },
            timeValidate: {
              state: false,
              messageError: "",
            },
            timeStart: {
              state: false,
              messageError: "",
            },
            timeEnd: {
              state: false,
              messageError: "",
            },
          },
        },
      ]
    );
  });

  const [isNoForm, setIsNoForm] = useState(false);

  useClickOutside(searchRef, () => setIsShowCompaniesSearch(false));

  const handleRemoveCompany = (value) => {
    const newForm = form.filter(
      (item) => item && item.keyCompanyForm !== value
    );
    const newFormValidate = formValidate.filter(
      (item) => item && item.keyCompanyValidate !== value
    );

    const newTimeRange = timeRange.filter(
      (item) => item && item.keyCompanyTime !== value
    );

    setForm(newForm);
    setFormValidate(newFormValidate);
    setTimeRange(newTimeRange);

    if (form.length === 1) {
      setIsNoForm(true);
    }
  };

  const validateForm = (e) => {
    let isSuccess = true;

    for (var i = 0; i < form.length; i++) {
      for (var j = 0; j < form.length; j++) {
        const newFormValidate = [...formValidate];

        if (
          form[i].info.timeStart !== "" &&
          form[i].info.timeEnd !== "" &&
          new Date(form[i].info.timeStart) > new Date(form[i].info.timeEnd)
        ) {
          newFormValidate[i].info.timeValidate.state = true;
          newFormValidate[i].info.timeValidate.messageError =
            "Thời gian băt đầu không vượt quá thời gian kết thúc";
          isSuccess = false;
        }

        if (
          form[i].info.jobDescription !== "" &&
          form[i].info.jobDescription.length > 10
        ) {
          newFormValidate[i].info.jobDescription.state = true;
          newFormValidate[i].info.jobDescription.messageError =
            "Không vượt quá 10 ký tự";
          isSuccess = false;
        }

        if (
          new Date(form[i].info.timeStart) < new Date(form[i].info.timeEnd) ||
          JSON.stringify(new Date(form[i].info.timeStart)) ===
            JSON.stringify(new Date(form[i].info.timeEnd))
        ) {
          newFormValidate[i].info.timeValidate.state = false;
          newFormValidate[i].info.timeValidate.messageError = "";
          isSuccess = true;
        }

        if (form[i].info.jobPosition === "") {
          newFormValidate[i].info.jobPosition.state = true;
          newFormValidate[i].info.jobPosition.messageError =
            "Trường này là bắt buộc";
          isSuccess = false;
        }
        if (
          form[i].info.jobPosition !== "" &&
          form[i].info.jobPosition.length > 10
        ) {
          newFormValidate[i].info.jobPosition.state = true;
          newFormValidate[i].info.jobPosition.messageError =
            "Không vượt quá 10 ký tự ";
          isSuccess = false;
        }

        if (form[i].companyName === "") {
          newFormValidate[i].companyName.state = true;
          newFormValidate[i].companyName.messageError =
            "Trường này là bắt buộc";
          isSuccess = false;
        }

        if (form[i].info.timeStart === "" || form[i].info.timeEnd === "") {
          newFormValidate[i].info.timeValidate.state = true;
          newFormValidate[i].info.timeValidate.messageError =
            "Khoảng thời gian làm việc là bắt buộc";
          isSuccess = false;
        }
        if (
          i !== j &&
          form[i].info.timeStart &&
          form[j].info.timeStart &&
          form[i].info.timeEnd &&
          form[j].info.timeEnd &&
          ((new Date(form[i].info.timeStart) < new Date(form[i].info.timeEnd) &&
            new Date(form[j].info.timeStart) < new Date(form[j].info.timeEnd) &&
            new Date(form[i].info.timeEnd) > new Date(form[j].info.timeStart) &&
            new Date(form[i].info.timeStart) <
              new Date(form[j].info.timeStart)) ||
            (new Date(form[i].info.timeStart) <
              new Date(form[i].info.timeEnd) &&
              new Date(form[j].info.timeStart) <
                new Date(form[j].info.timeEnd) &&
              (JSON.stringify(new Date(form[i].info.timeStart)) ===
                JSON.stringify(new Date(form[j].info.timeStart)) ||
                JSON.stringify(new Date(form[i].info.timeEnd)) ===
                  JSON.stringify(new Date(form[j].info.timeEnd)))))
        ) {
          newFormValidate[i].info.timeValidate.messageError =
            "Trùng thời gian làm việc với công ty khác";
          newFormValidate[j].info.timeValidate.messageError =
            "Trùng thời gian làm việc với công ty khác";

          newFormValidate[j].info.timeValidate.state = true;
          newFormValidate[i].info.timeValidate.state = true;
          isSuccess = false;
        }

        if (
          i !== j &&
          form[i].companyName !== "" &&
          form[j].companyName !== "" &&
          form[i].companyName === form[j].companyName
        ) {
          newFormValidate[i].companyName.messageError =
            "Mỗi công ty chỉ điền 1 lần";
          newFormValidate[j].companyName.messageError =
            "Mỗi công ty chỉ điền 1 lần";

          newFormValidate[j].companyName.state = true;
          newFormValidate[i].companyName.state = true;
          isSuccess = false;
        }

        if (
          (i !== j &&
            form[i].info.timeStart &&
            form[j].info.timeStart &&
            form[i].info.timeEnd &&
            form[j].info.timeEnd &&
            new Date(form[i].info.timeStart) < new Date(form[i].info.timeEnd) &&
            new Date(form[j].info.timeStart) < new Date(form[j].info.timeEnd) &&
            (JSON.stringify(new Date(form[i].info.timeEnd)) ===
              JSON.stringify(new Date(form[j].info.timeStart)) ||
              JSON.stringify(new Date(form[i].info.timeEnd)) ===
                JSON.stringify(new Date(form[j].info.timeEnd)))) ||
          (i !== j &&
            form[i].info.timeStart &&
            form[j].info.timeStart &&
            form[i].info.timeEnd &&
            form[j].info.timeEnd &&
            JSON.stringify(new Date(form[i].info.timeEnd)) ===
              JSON.stringify(new Date(form[i].info.timeStart)) &&
            (JSON.stringify(new Date(form[i].info.timeStart)) ===
              JSON.stringify(new Date(form[j].info.timeStart)) ||
              JSON.stringify(new Date(form[i].info.timeStart)) ===
                JSON.stringify(new Date(form[j].info.timeEnd)))) ||
          (i !== j &&
            form[i].info.timeStart &&
            form[j].info.timeStart &&
            form[i].info.timeEnd &&
            form[j].info.timeEnd &&
            JSON.stringify(new Date(form[i].info.timeEnd)) ===
              JSON.stringify(new Date(form[i].info.timeStart)) &&
            new Date(form[i].info.timeStart) >
              new Date(form[j].info.timeStart) &&
            new Date(form[i].info.timeEnd) < new Date(form[j].info.timeEnd))
        ) {
          newFormValidate[i].info.timeValidate.messageError =
            "Trùng thời gian làm việc với công ty khác";
          newFormValidate[j].info.timeValidate.messageError =
            "Trùng thời gian làm việc với công ty khác";

          newFormValidate[j].info.timeValidate.state = true;
          newFormValidate[i].info.timeValidate.state = true;
          isSuccess = false;
        }
        setFormValidate([...newFormValidate]);
      }
    }
    return isSuccess;
  };

  const handleNextButton = () => {
    const isValid = validateForm();
    console.log(isValid);
    // if(isValid){
    //   nextStep()
    // }
  };

  const formWitFormValidate = {
    form: form,
    formValidate: formValidate,
  };

  const handleAddCompany = () => {
    setForm([
      ...form,
      {
        keyCompanyForm: form.length,
        companyName: "",
        info: {
          jobPosition: "",
          timeStart: "",
          timeEnd: "",
          jobDescription: "",
        },
      },
    ]);

    setFormValidate([
      ...formValidate,
      {
        keyCompanyValidate: formValidate.length,
        companyName: {
          state: false,
          messageError: "",
        },
        info: {
          jobPosition: {
            messageError: "",
            state: false,
          },
          jobDescription: {
            messageError: "",
            state: false,
          },

          timeValidate: {
            state: false,
            messageError: "",
          },
          timeStart: {
            state: false,
            messageError: "",
          },
          timeEnd: {
            state: false,
            messageError: "",
          },
        },
      },
    ]);

    setTimeRange([
      ...timeRange,
      {
        keyCompanyTime: timeRange.length,
        timeStart: "",
        timeEnd: "",
      },
    ]);

    if (form.length === 0) {
      setIsNoForm(false);
    }
    setCompanies([...companies]);
  };

  const { nextStep, prevStep } = props;

  useClickOutside(searchRef, () => setIsShowCompaniesSearch(false));


  return (
    <div className="form-personal-exp">
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
                src={require("../assets/images/step3-inactive.png")}
              />
            </div>
            <div className="step-name">
              <span>Về công ty</span>
            </div>
          </div>
        </div>
      </div>
      <div className="body">
        <formContext.Provider value={formWitFormValidate}>
          {form.length > 0 &&
            form.map((item) => {
              return (
                <Company
                  handleRemoveCompany={handleRemoveCompany}
                  keyCompanyForm={item.keyCompanyForm}
                  timeRange={timeRange}
                  setTimeRange={setTimeRange}
                  companies={companies}
                  setCompanies={setCompanies}
                />
              );
            })}
        </formContext.Provider>
        <div onClick={handleAddCompany} className="add-company">
          <img
            className="plus-2"
            alt=""
            src={require("../assets/images/Plus.png")}
          />
          <span>Thêm công ty</span>
        </div>
      </div>

      <button
        onClick={(e) => handleNextButton(e)}
        className={isNoForm ? "next-button-invalid" : "next-button"}
      >
        Tiếp
      </button>
      <button onClick={prevStep} className="prev-button">
        Quay lại
      </button>
    </div>
  );
};

export default PersonalExpForm;
