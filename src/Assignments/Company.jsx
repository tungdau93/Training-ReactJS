import { useEffect, useState, useContext, useRef } from "react";
import React from "react";
import { formContext } from "./PersonalExpForm";
import useClickOutside from "../hooks/useClickOutside";
import { info } from "sass";

const Company = (props) => {
  const searchRef = useRef();

  const {
    handleFocusCompanyInput,
    companyTag,
    formValidate,
    handleAddPrevJob,
    handleAddWorkPeriodStart,
    handleAddWorkPeriodEnd,
    company,
    keyCompany,
  } = props;

  useClickOutside(searchRef, () => {
    setIsShowCompanies(false);
  });

  const [isShowCompanies, setIsShowCompanies] = useState(false);
  const [form, setForm] = useContext(formContext);
  const [isShowCompanyName, setIsShowCompanyName] = useState(false);
  const [selectedCompanies, setSelectedCompanies] = useState("");

  const handleCLickCompanyInput = () => {
    setIsShowCompanies(!isShowCompanies);
  };

  const companies = [
    {
      name: "Walmart",
      code: 1,
    },
    {
      name: "Amazon",
      code: 2,
    },
    {
      name: "Apple",
      code: 3,
    },
    {
      name: "CVS Health",
      code: 4,
    },
    {
      name: "Samsung ",
      code: 5,
    },
    {
      name: "Alphabet",
      code: 6,
    },
    {
      name: "Berkershire",
      code: 7,
    },

    {
      name: "Mckesson",
      code: 8,
    },
  ];

  const handleRemoveComma = (e) => {
    const value = e.target.value;
  };

  // const handleClickCompanyName = ()=>{
  //   setIsShowCompanies(!isShowCompanies)
  // }

  const handleSelectCompany = (companyName, companyCode) => {
    const newForm = [...form];
    setIsShowCompanies(false);
    newForm.forEach((item) => {
      console.log(item.keyCompany);
      if (item && item.keyCompany === keyCompany) {
        item.companyName = companyName;
      }
    });

    const selectedCompanies = companies.find(
      (company) => company.code === companyCode
    );
    console.log(selectedCompanies);

    setSelectedCompanies(selectedCompanies);
    setForm([...newForm]);
    console.log(selectedCompanies);
  };
  const handleRemoveCompany = () => {
    const newForm = [...form];
    const newRemoveForm = newForm.filter(
      (item) => item.keyCompany !== keyCompany
    );
    console.log(newRemoveForm);
    setForm([...newRemoveForm]);
    // )
  };

  return (
    <div className="form-company">
      <img
        onClick={handleRemoveCompany}
        className="trash"
        src={require("../assets/images/Trash.png")}
        alt=""
      />
      <div ref={searchRef} className="form-input form-company-name">
        {form.forEach((item) => {
          if (item.keyCompany === selectedCompanies.code) {
            return <div className="company-name">{item.companyName}</div>;
          }
        })}
        <input
          readOnly
          onClick={handleCLickCompanyInput}
          className="input-company-name"
          type="text"
        />
        {isShowCompanies && (
          <div className="companies-container">
            {companies.map((company) => {
              return (
                <div
                  onClick={() =>
                    handleSelectCompany(company.name, company.code)
                  }
                  className="company"
                  key={company.code}
                >
                  {company.name}
                </div>
              );
            })}
          </div>
        )}
      </div>

      <div className="form-input form-prev-job">
        <div className="label-input">
          <span className="label-require">Must</span>
          <span>Vị trí từng làm</span>
        </div>
        <input className="input-job-position" type="text" />
      </div>

      <div className="form-input form-work-period">
        <div className="label-input">
          <span className="label-require">Must</span>
          <span>Thời gian làm việc</span>
        </div>
        <div className="work-period-input-container">
          <input
            onChange={(e) => handleAddWorkPeriodStart(e.target.value)}
            type="date"
            className="work-period-input"
          />
          <span className="dash">-</span>
          <input
            onChange={(e) => handleAddWorkPeriodEnd(e.target.value)}
            type="date"
            className="work-period-input"
          />
        </div>
      </div>

      <div className="form-input">
        <div className="form-work-introduction">
          <div className="label-input">
            <span> Mô tả về công việc</span>
          </div>
          <textarea className="work-introduction" type="text" />
        </div>

        <span className="text-per-type">0/20</span>
      </div>
    </div>
  );
};

export default Company;
