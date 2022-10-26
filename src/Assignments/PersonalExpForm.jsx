import "../style/_bai-tap-4-personal-exp.scss";
import { useState, useRef, useEffect, createContext } from "react";
import useClickOutside from "../hooks/useClickOutside";
import Company from "./Company";
import React from "react";
import RemoveCompany from "./RemoveCompany";

export const formContext = createContext();
export const companyContext = createContext();

const PersonalExpForm = (props) => {
  const { keyCompanyForm } = props;

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
  const [form, setForm] = useState([
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
  ]);

  const [timeRange, setTimeRange] = useState([
    {
      keyCompanyTime: 0,
      timeStart: "",
      timeEnd: "",
    },
  ]);

  const [formValidate, setFormValidate] = useState([
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
  ]);

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

  const validateForm = () => {
    const newFormValidate = [...formValidate];
    const newForm = [...form];

    newForm.forEach((itemForm) => {
      newFormValidate.forEach((itemValidate) => {
        // if (itemForm.companyName !== "") {
        //   itemValidate.companyName.state = false;
        //   itemValidate.companyName.messageError = "";
        // }

        // if (
        //   itemForm.info.jobPosition === "" &&
        //   itemForm.keyCompanyForm === itemValidate.keyCompanyValidate
        // ) {
        //   itemValidate.info.jobPosition.state = true;
        //   itemValidate.info.jobPosition.messageError = "Trường này là bắt buộc";
        // }

        // if (
        //   itemForm.info.jobPosition !== "" &&
        //   itemForm.info.jobPosition.length > 10 &&
        //   itemForm.keyCompanyForm === itemValidate.keyCompanyValidate
        // ) {
        //   itemValidate.info.jobPosition.state = true;
        //   itemValidate.info.jobPosition.messageError =
        //     "Không vượt quá 10 ký tự";
        // }
        // if (
        //   itemForm.info.jobDescription !== "" &&
        //   itemForm.info.jobDescription.length > 10 &&
        //   itemForm.keyCompanyForm === itemValidate.keyCompanyValidate
        // ) {
        //   itemValidate.info.jobDescription.state = true;
        //   itemValidate.info.jobDescription.messageError =
        //     "Không vượt quá 10 ký tự";
        // }

        // if (
        //   itemForm.info.jobDescription !== "" &&
        //   itemForm.info.jobDescription.length <= 10
        // ) {
        //   if (itemForm.keyCompanyForm === itemValidate.keyCompanyValidate) {
        //     itemValidate.info.jobDescription.state = false;
        //     itemValidate.info.jobDescription.messageError = "";
        //   }
        // }

        // if (
        //   itemForm.info.jobDescription === "" &&
        //   itemForm.keyCompanyForm === itemValidate.keyCompanyValidate
        // ) {
        //   itemValidate.info.jobDescription.state = false;
        // }

        // if (
        //   (itemForm.info.timeStart === "" ||
        //     itemForm.info.timeEnd === "" ||
        //     itemForm.info.timeStart === "null" ||
        //     itemForm.info.timeEnd === "null") &&
        //   itemForm.keyCompanyForm === itemValidate.keyCompanyValidate
        // ) {
        //   itemValidate.info.timeValidate.messageError =
        //     "Khoảng thời gian làm việc là bắt buộc";
        //   itemValidate.info.timeValidate.state = true;
        // }

        // if (
        //   itemForm.info.timeStart &&
        //   itemForm.info.timeEnd &&
        //   itemForm.info.timeStart > itemForm.info.timeEnd
        // ) {
        //   if (itemForm.keyCompanyForm === itemValidate.keyCompanyValidate) {
        //     itemValidate.info.timeValidate.state = true;
        //     itemValidate.info.timeValidate.messageError =
        //       "Thời gian băt đầu không vượt quá thời gian kết thúc";
        //   }
        // }

        // if (
        //   itemForm.info.timeStart &&
        //   itemForm.info.timeEnd &&
        //   itemForm.info.timeStart < itemForm.info.timeEnd
        // ) {
        //   if (itemForm.keyCompanyForm === itemValidate.keyCompanyValidate) {
        //     itemValidate.info.timeValidate.state = false;
        //     itemValidate.info.timeValidate.messageError = "";
        //   }
        // }

        // for (var i = 0; i < form.length; i++) {
        //   for (var j = 0; j < form.length; j++) {
        //     if (
        //       (i !== j &&
        //         ((form[i].info.timeEnd > form[j].info.timeStart &&
        //           form[i].info.timeStart < form[j].info.timeStart &&
        //           form[i].info.timeStart < form[i].info.timeEnd) ||
        //           (form[i].info.timeStart > form[j].info.timeStart &&
        //             form[i].info.timeEnd < form[j].info.timeEnd &&
        //             form[i].info.timeStart < form[i].info.timeEnd) ||
        //           (form[i].info.timeStart > form[j].info.timeStart &&
        //             form[i].info.timeStart < form[j].info.timeEnd &&
        //             form[i].info.timeEnd > form[j].info.timeEnd &&
        //             form[i].info.timeStart < form[i].info.timeEnd))) ||
        //       (i !== j &&
        //         form[i].info.timeStart !== "" &&
        //         form[i].info.timeEnd !== "" &&
        //         (JSON.stringify(form[i].info.timeStart) ===
        //           JSON.stringify(form[j].info.timeStart) ||
        //           JSON.stringify(form[i].info.timeStart) ===
        //             JSON.stringify(form[j].info.timeEnd) ||
        //           JSON.stringify(form[i].info.timeEnd) ===
        //             JSON.stringify(form[j].info.timeStart) ||
        //           JSON.stringify(form[i].info.End) ===
        //             JSON.stringify(form[j].info.timeEnd)))
        //     ) {
        //       formValidate[i].info.timeValidate.state = true;
        //       formValidate[i].info.timeValidate.messageError =
        //         "Trùng thời gian làm ở công ty khác";
        //     }
        //     if (
        //       i !== j &&
        //       form[i].companyName === form[j].companyName &&
        //       form[i].companyName !== ""
        //     ) {
        //       formValidate[i].companyName.state = true;
        //       formValidate[i].companyName.messageError =
        //         "Mỗi công ty chỉ điền 1 lần";
        //     }
        //     if (i === j && form[i].companyName === "") {
        //       formValidate[i].companyName.state = true;
        //       formValidate[i].companyName.messageError =
        //         "Trường này là bắt buộc";
        //     }

        //     if (
        //       i !== j &&
        //       formValidate[i].companyName.state === false &&
        //       formValidate[i].info.jobPosition.state === false &&
        //       formValidate[i].info.jobDescription.state === false &&
        //       formValidate[i].info.timeValidate.state === false &&
        //       formValidate[i].info.timeStart.state === false &&
        //       formValidate[i].info.timeEnd.state === false &&
        //       form[i].companyName !== "" &&
        //       form[i].info.jobPosition !== "" &&
        //       form[i].info.timeStart !== "" &&
        //       form[i].info.timeEnd !== "" &&
        //       formValidate[j].companyName.state === false &&
        //       formValidate[j].info.jobPosition.state === false &&
        //       formValidate[j].info.jobDescription.state === false &&
        //       formValidate[j].info.timeValidate.state === false &&
        //       formValidate[j].info.timeStart.state === false &&
        //       formValidate[j].info.timeEnd.state === false &&
        //       form[j].companyName !== "" &&
        //       form[j].info.jobPosition !== "" &&
        //       form[j].info.timeStart !== "" &&
        //       form[j].info.timeEnd !== ""
        //     ) {
              nextStep();
        //     }
        //   }
        // }
      });
    });

    setFormValidate([...newFormValidate]);
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

  useEffect(() => {
    localStorage.setItem("form", JSON.stringify(form));
  }, [form]);

  

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
                  key={item.keyCompanyForm}
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
        onClick={validateForm}
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
