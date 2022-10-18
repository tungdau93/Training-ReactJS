import { forwardRef, useEffect, useState, useContext } from "react";
import React from "react";
import { formContext } from "./PersonalExpForm";

const Company = (props, searchRef) => {
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

  const {
    handleFocusCompanyInput,
    companyTag,
    formValidate,
    handleAddPrevJob,
    handleAddWorkPeriodStart,
    handleAddWorkPeriodEnd,
    company,
  } = props;

  const [form, setForm] = useContext(formContext);

  const handleAddCompanyName = (text) => {
    // setForm([
    //   ...form,
    //   {
    //     keyCompany: form.length,
    //     companyName: text,
    //     info: {
    //       jobPosition: "",
    //       timeStart: "",
    //       timeEnd: "",
    //       jobDescription: "",
    //     },
    //   },
    // ]);
  };

  return (
    <div className="form-company">
      <img
        className="trash"
        src={require("../assets/images/Trash.png")}
        alt=""
      />
      <div className="form-input form-company-name">
        <input
          onChange={(e) => handleAddCompanyName(e.target.value)}
          className="input-company-name"
          type="text"
        />
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

export default forwardRef(Company);
