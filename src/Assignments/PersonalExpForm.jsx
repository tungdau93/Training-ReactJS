import "../style/_bai-tap-4-personal-exp.scss";
import { useState, useRef, useEffect, createContext } from "react";
import useClickOutside from "../hooks/useClickOutside";
import Company from "./Company";
import React from "react";
import RemoveCompany from "./RemoveCompany";
import { info } from "sass";

export const formContext = createContext();
export const companyContext = createContext();

const PersonalExpForm = (props) => {
  const { keyCompanyForm } = props;

  const closeRef = useRef();
  const searchRef = useRef();
  const trashRef = useRef();
  const heightRef = useRef();
  const handleClickButton = () => {
    setCompanyPosition([
      {
        key: "",
        position: "",
      },
    ]);
  };

  // const [formSaved, setFormSaved] = useState(() => {
  //   const saved = localStorage.getItem("form");
  //   const initialValue = JSON.parse(saved);
  //   return initialValue || "";
  // });
  const [isShowCompaniesSearch, setIsShowCompaniesSearch] = useState(false);
  const [companyTag, setCompanyTag] = useState([]);
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
        timeValidate:{
          state:false,
          messageError:""
        }
        ,
          timeStart:{
            state:false,
            messageError:""
          },
          timeEnd:{
            state:false,
            messageError:""
          }
       
      },
    },
  ]);
  const [idRemoveCompany, setIdRemoveCompany] = useState([]);
  const [id, setId] = useState(1);

  const [companyPosition, setCompanyPosition] = useState([
    {
      key: "",
      position: "",
    },
  ]);


  useClickOutside(searchRef, () => setIsShowCompaniesSearch(false));

  const handleRemoveCompany=(value)=>{
    const newForm = form.filter(
      (item) => item && item.keyCompanyForm !== value
    );

    setForm(newForm)
  }

  const validateForm = () => {
    const newFormValidate = [...formValidate];
    const newForm = [...form]

    newForm.forEach((itemForm) => {
      newFormValidate.forEach((itemValidate) => {
        if (
          itemForm.companyName === "" &&
          itemForm.keyCompanyForm === itemValidate.keyCompanyValidate
        ) {
          itemValidate.companyName.state = true;
          itemValidate.companyName.messageError = "Trường này là bắt buộc";
        }
        if (
          itemForm.companyName !== "" 
        ) {
         
          itemValidate.companyName.state = false;
          itemValidate.companyName.messageError = ""
        }

        if (
          itemForm.info.jobPosition === "" &&
          itemForm.keyCompanyForm === itemValidate.keyCompanyValidate
        ) {
          itemValidate.info.jobPosition.state = true;
          itemValidate.info.jobPosition.messageError = "Trường này là bắt buộc";
        }

        if (
          itemForm.info.jobPosition !== "" &&
          itemForm.info.jobPosition.length > 5 &&
          itemForm.keyCompanyForm === itemValidate.keyCompanyValidate
        ) {
          itemValidate.info.jobPosition.state = true;
          itemValidate.info.jobPosition.messageError = "Không vượt quá 5 ký tự";
        }
        if (
          itemForm.info.jobDescription !== "" &&
          itemForm.info.jobDescription.length > 5 &&
          itemForm.keyCompanyForm === itemValidate.keyCompanyValidate
        ) {
          itemValidate.info.jobDescription.state = true;
          itemValidate.info.jobDescription.messageError = "Không vượt quá 5 ký tự";
        }

        if (  
          itemForm.info.jobDescription !== "" &&
          itemForm.info.jobDescription.length <= 5 
         
        ) {
          if( itemForm.keyCompanyForm === itemValidate.keyCompanyValidate){

            itemValidate.info.jobDescription.state = false;
            itemValidate.info.jobDescription.messageError = "";
          }
        }

        if (
          itemForm.info.jobDescription === "" &&
          itemForm.keyCompanyForm === itemValidate.keyCompanyValidate
        ) {
          itemValidate.info.jobDescription.state = false;
         
        }

        if (
          (itemForm.info.timeStart === "" || itemForm.info.timeEnd === "" ||
          itemForm.info.timeStart === "null" ||   itemForm.info.timeEnd === "null" 
          )  &&
          itemForm.keyCompanyForm === itemValidate.keyCompanyValidate
        ) {
          // itemValidate.info.timeValidate.messageError ="Thời gian làm việc là bắt buộc"
         
        }

        if (
          itemForm.info.timeStart &&
          itemForm.info.timeEnd 
          
          && 
          itemForm.info.timeStart > itemForm.info.timeEnd
        ) {
          if(itemForm.keyCompanyForm === itemValidate.keyCompanyValidate){
            itemValidate.info.timeValidate.state = true
          itemValidate.info.timeValidate.messageError ="Thời gian băt đầu không vượt quá thời gian kết thúc"
          }
          
        
        }


      });
    });
    
    setFormValidate([...newFormValidate]);
    // console.log("formValidate",formValidate)
    
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
          
          timeValidate:{
            state:false,
            messageError:""
          },
          timeStart:{
            state:false,
            messageError:""
          },
          timeEnd:{
            state:false,
            messageError:""
          }
        },
      },
    ]);
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
                <Company handleRemoveCompany ={handleRemoveCompany} ref={heightRef} keyCompanyForm={item.keyCompanyForm} />
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
