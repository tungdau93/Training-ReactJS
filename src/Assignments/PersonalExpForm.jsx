import "../style/_bai-tap-4-personal-exp.scss";
import { useState, useRef, useEffect, createContext } from "react";
import useClickOutside from "../hooks/useClickOutside";
import Company from "./Company";
import React from "react";

export const formContext = createContext();
export const companyContext = createContext();

const PersonalExpForm = (props) => {
  const closeRef = useRef();

  const initialStateForm = [
    {
      keyCompany: 0,
      companyName: "",
      info: {
        jobPosition: "",
        timeStart: "",
        timeEnd: "",
        jobDescription: "",
      },
    },
  ];

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
  const [form, setForm] = useState(initialStateForm);

  const [companies, setCompanies] = useState([<Company key={0} />]);

  // const companies = [
  //   {
  //     name: "Walmart",
  //     code: 1,
  //   },
  //   {
  //     name: "Amazon",
  //     code: 2,
  //   },
  //   {
  //     name: "Apple",
  //     code: 3,
  //   },
  //   {
  //     name: "CVS Health",
  //     code: 4,
  //   },
  //   {
  //     name: "Samsung ",
  //     code: 5,
  //   },
  //   {
  //     name: "Alphabet",
  //     code: 6,
  //   },
  //   {
  //     name: "Berkershire",
  //     code: 7,
  //   },

  //   {
  //     name: "Mckesson",
  //     code: 8,
  //   },
  // ];

  useClickOutside(searchRef, () => setIsShowCompaniesSearch(false));

  const handleAddCompany = () => {
    setForm([
      ...form,
      {
        keyCompany: form.length,
        companyName: "",
        info: {
          jobPosition: "",
          timeStart: "",
          timeEnd: "",
          jobDescription: "",
        },
      },
    ]);
  };

  const handleRemoveCompany = () => {};

  // const filterCompany = (text) => {
  //   const regex = new RegExp(`${text}`, "gi");
  //   return companies.filter((company) => company.name.match(regex));
  // };

  const { nextStep, prevStep } = props;

  useClickOutside(searchRef, () => setIsShowCompaniesSearch(false));

  // const searchCompanies = (text) => {
  //   if (text) {
  //     setIsShowCompaniesSearch(true);
  //     const companySearch = filterCompany(text);
  //     setCompaniesSearch(companySearch);
  //   }
  // };
  // const handleFocusCompanyInput = () => {
  //   setIsShowCompaniesSearch(!isShowCompaniesSearch);
  //   setCompaniesSearch(companies);
  // };

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
        <formContext.Provider value={[form, setForm]}>
          {/* {companies &&
            companies.map((company) => {
              return <div key={company.length}>{company}</div>;
            })} */}
          {form.length > 0 &&
            form.map((item) => <Company key={item.keyCompany} />)}
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
      <button className="next-button ">Tiếp</button>
      <button onClick={prevStep} className="prev-button">
        Quay lại
      </button>
    </div>
  );
};

export default PersonalExpForm;
