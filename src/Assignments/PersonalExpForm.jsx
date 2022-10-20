import "../style/_bai-tap-4-personal-exp.scss";
import { useState, useRef, useEffect, createContext } from "react";
import useClickOutside from "../hooks/useClickOutside";
import Company from "./Company";
import React from "react";

export const formContext = createContext();
export const companyContext = createContext();

const PersonalExpForm = (props) => {
  const { keyCompanyForm } = props;

  const closeRef = useRef();

  // const initialStateForm = [
  //   {
  //     keyCompanyForm: 0,
  //     companyName: "",
  //     info: {
  //       jobPosition: "",
  //       jobDescription: "",
  //       timeStart: "",
  //       timeEnd: "",
  //     },
  //   },
  // ];

  // const initialStateFormValidate = [
  //   {
  //     keyCompanyValidate: 0,
  //     companyName: {
  //       state: false,
  //       messageError: "",
  //     },
  //     info: {
  //       jobPosition: {
  //         messageError: "",
  //         state: false,
  //       },
  //       jobDescription: {
  //         messageError: "",
  //         state: false,
  //       },
  //       timeStart: {
  //         messageError: "",
  //         state: false,
  //       },
  //       timeEnd: {
  //         messageError: "",
  //         state: false,
  //       },
  //     },
  //   },
  // ];

  const searchRef = useRef();
  const [formSaved, setFormSaved] = useState(() => {
    const saved = localStorage.getItem("form");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });

  const [isShowCompaniesSearch, setIsShowCompaniesSearch] = useState(false);
  const [companyTag, setCompanyTag] = useState([]);
  // const [companiesSearch, setCompaniesSearch] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState([]);
  const [prevJob, setPrevJob] = useState("");
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
  ])
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
        timeStart: {
          messageError: "",
          state: false,
        },
        timeEnd: {
          messageError: "",
          state: false,
        },
      },
    },
  ]);

  useClickOutside(searchRef, () => setIsShowCompaniesSearch(false));

  const validateForm = () => {
    console.log(form)
    const newFormValidate = [...formValidate]

    form.forEach((itemForm) => {
      newFormValidate.forEach((itemValidate) => {
        if (
          itemForm.companyName === "" &&
          itemForm.keyCompanyForm === itemValidate.keyCompanyValidate
        ) {
          itemValidate.companyName.state = true;
          itemValidate.companyName.messageError = "Tối thiểu 1 công ty";
        }
        if( itemForm.companyName !== "" &&
        itemForm.keyCompanyForm === itemValidate.keyCompanyValidate){
          itemValidate.companyName.state = false;
          itemValidate.companyName.messageError = "";
        }
      });
    });
    setFormValidate(newFormValidate)
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
          timeStart: {
            messageError: "",
            state: false,
          },
          timeEnd: {
            messageError: "",
            state: false,
          },
        },
       
      },
    ]);
  };
  console.log(form)

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
              return <Company keyCompanyForm={item.keyCompanyForm} />;
            })}
        </formContext.Provider>
        <img
        
        className="trash"
        src={require("../assets/images/Trash.png")}
        alt=""
      />
        <div onClick={handleAddCompany} className="add-company">
          <img
            className="plus-2"
            alt=""
            src={require("../assets/images/Plus.png")}
          />
          <span>Thêm công ty</span>
        </div>
      </div>
      <button onClick={validateForm} className="next-button ">
        Tiếp
      </button>
      <button onClick={prevStep} className="prev-button">
        Quay lại
      </button>
    </div>
  );
};

export default PersonalExpForm;
