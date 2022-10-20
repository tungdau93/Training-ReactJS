import { useEffect, useState, useContext, useRef } from "react";
import React from "react";
import { formContext } from "./PersonalExpForm";
import useClickOutside from "../hooks/useClickOutside";

const Company = (props) => {
  const searchRef = useRef();

  const { nextStep, keyCompanyForm } = props;

  useClickOutside(searchRef, () => {
    setIsShowCompanies(false);
  });

  const [isShowCompanies, setIsShowCompanies] = useState(false);
  const formWitFormValidate = useContext(formContext);
  const [isShowCompanyName, setIsShowCompanyName] = useState(false);
  const [companyName, setCompanyName] = useState("");

  const handleCLickCompanyInput = () => {
    setIsShowCompanies(!isShowCompanies);
  };

  const handleClickButton = () => {
  }
  const [form, setForm] = useState(formWitFormValidate.form);
  const [formValidate, setFormValidate] = useState(
    formWitFormValidate.formValidate
  );

  // const handleClickButton = () => {
  //   // form.forEach((itemForm) => {
  //   //   formValidate.forEach((itemValidate)=>{
  //   //     if( itemForm.companyName ===""){
  //   //       if(itemForm.keyCompanyForm === itemValidate.keyCompanyValidate){
  //   //        console.log(itemValidate)
  //   //       }
  //   //     }
  //   //   })
  //   //   }
  //   // )
  //   // formValidate.forEach((itemForm) => console.log(itemForm));
  // };
  // //  formValidate.forEach((itemValidate)=>console.log(itemValidate))

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

  const handleAddTimeStart = (value) => {
    const selectedYYYY = Number(value.slice(0, 4));
    const selectedMM = Number(value.slice(5, 7));
    const selectedDD = Number(value.slice(8, 10));
    const newForm = [...form];
    newForm.forEach((item) => {
      if (item && item.keyCompanyForm === keyCompanyForm) {
        item.info.timeStart = `${selectedDD}- ${selectedMM}- ${selectedYYYY}`;
      }
    });
    setForm([...newForm]);
  };

  const handleAddTimeEnd = (value) => {
    const selectedYYYY = Number(value.slice(0, 4));
    const selectedMM = Number(value.slice(5, 7));
    const selectedDD = Number(value.slice(8, 10));
    const newForm = [...form];
    newForm.forEach((item) => {
      if (item && item.keyCompanyForm === keyCompanyForm) {
        item.info.timeEnd = `${selectedDD}- ${selectedMM}- ${selectedYYYY}`;
      }
    });
    setForm([...newForm]);
  };

  const handleAddJobPosition = (text) => {
    const newPosition = [...form];
    newPosition.forEach((item) => {
      if (item && item.keyCompanyForm === keyCompanyForm) {
        item.info.jobPosition = text;
      }
    });
    setForm([...newPosition]);
  };

  const handleClickCompanyName = () => {
    setIsShowCompanies(!isShowCompanies);
  };

  const handleAddCompany = (companyName, companyCode) => {
    const newForm = [...form];
    setIsShowCompanies(false);
    newForm.forEach((item) => {
      if (item && item.keyCompanyForm === keyCompanyForm) {
        item.companyName = companyName;
        setCompanyName(companyName);
        setIsShowCompanyName(true);
      }
    });
    setForm([...newForm]);
  };
  const handleRemoveCompany = () => {
    const newForm = [...form];
    console.log(newForm)
    // const newRemoveForm = newForm.find((item) => item.keyCompanyForm !== keyCompanyForm);
    // console.log(newRemoveForm)
  };

  const handleAddJobDescription = (jobDescription) => {
    const newForm = [...form];
    newForm.forEach((item) => {
      if (item && item.keyCompanyForm === keyCompanyForm) {
        item.info.jobDescription = jobDescription
          .replace(/\n/g, "")
          .replace(/\s/g, "");
      }
    });

    setForm([...newForm]);
  };

  return (
    
   
    <div className="form-company">
       <button onClick={handleClickButton} className="button">aaa</button>
     
      <div ref={searchRef} className="form-input form-company-name">
        {isShowCompanyName && (
          <div onClick={handleClickCompanyName} className="company-name">
            {companyName}
          </div>
        )}
        <input
          readOnly
          onClick={handleCLickCompanyInput}
          className="input-company-name"
          type="text"
        />

        {formValidate.map((itemValidate) => {
          if (itemValidate.keyCompanyValidate === keyCompanyForm) {
            return (
              <div className="invalid-warning">
                {itemValidate.companyName.messageError}
              </div>
            );
          }
          // console.log(itemValidate.keyCompanyValidate === keyCompanyForm)
        })}

        {isShowCompanies && (
          <div className="companies-container">
            {companies.map((company) => {
              return (
                <div
                  onClick={() => handleAddCompany(company.name, company.code)}
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
        <input
          onChange={(e) => handleAddJobPosition(e.target.value)}
          className="input-job-position"
          type="text"
        />
      </div>

      <div className="form-input form-work-period">
        <div className="label-input">
          <span className="label-require">Must</span>
          <span>Thời gian làm việc</span>
        </div>
        <div className="work-period-input-container">
          <input
            onChange={(e) => handleAddTimeStart(e.target.value)}
            type="date"
            className="work-period-input"
          />
          <span className="dash">-</span>
          <input
            onChange={(e) => handleAddTimeEnd(e.target.value)}
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
          <textarea
            onChange={(e) => handleAddJobDescription(e.target.value)}
            className="work-introduction"
            type="text"
          />
        </div>

        <span className="text-per-type">
          {form.map((item) => {
            if (item && item.keyCompanyForm === keyCompanyForm) {
              return item.info.jobDescription?.length;
            }
          })}
          /20
        </span>
      </div>
    </div>
  );
};

export default Company;
