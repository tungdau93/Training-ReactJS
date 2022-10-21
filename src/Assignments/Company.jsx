import { useEffect, useState, useContext, useRef } from "react";
import React from "react";
import { formContext } from "./PersonalExpForm";
import useClickOutside from "../hooks/useClickOutside";
import { forwardRef } from "react";

const Company = (props, ref) => {
  const searchRef = useRef();

  const { nextStep, keyCompanyForm } = props;

  useClickOutside(searchRef, () => {
    setIsShowCompanies(false);
  });

  const [isShowCompanies, setIsShowCompanies] = useState(false);
  const formWitFormValidate = useContext(formContext);
  const [isShowCompanyName, setIsShowCompanyName] = useState(false);
  const [companyName, setCompanyName] = useState("");

  const handleCLickCompanyInput = (e) => {
    setIsShowCompanies(!isShowCompanies);
    const newPosition = [...form];
    const newFormValidate = [...formValidate]

    newPosition.forEach((itemForm) => {
      newFormValidate.forEach((itemValidate) => {
        if (
        e.target
        ) {
        if(
          itemForm.keyCompanyForm === itemValidate.keyCompanyValidate
        ){
          itemValidate.companyName.state = false
          itemValidate.companyName.messageError=""
         
        }
        // console.log("sadfasjdf")
        }
      });
    });
    setFormValidate([...newFormValidate])
  };

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
    const newTimeStart = [...form];
    const newFormValidate = [...formValidate]

    const selectedYYYY = value.slice(0, 4)
    const selectedMM = value.slice(5, 7).padStart(2,"0")
    const selectedDD = value.slice(8, 10).padStart(2,"0")
    const newForm = [...form];
    newForm.forEach((item) => {
      if (item && item.keyCompanyForm === keyCompanyForm) {
        item.info.timeStart = `${selectedDD}-${selectedMM}-${selectedYYYY}`;
      }
    });
   
    setForm([...newForm]);

    newTimeStart.forEach((itemForm) => {
      newFormValidate.forEach((itemValidate) => {
        if (
        value
        ) {
        if(
          itemForm.keyCompanyForm === itemValidate.keyCompanyValidate
        ){
          itemValidate.info.timeValidate.state = false
          itemValidate.info.timeValidate.messageError=""
          itemForm.info.timeStart = `${value.slice(8, 10).padStart(2,"0")}-${value.slice(5, 7).padStart(2,"0")}-${value.slice(0, 4)}`
        }
        }

      });
    });
    setFormValidate([...newFormValidate])
    setForm([...newTimeStart])
  };
  console.log(form)

  const handleAddTimeEnd = (value) => {

    const newTimeEnd = [...form];
    const newFormValidate = [...formValidate]

    const selectedYYYY = value.slice(0, 4)
    const selectedMM = value.slice(5, 7).padStart(2,"0")
    const selectedDD = value.slice(8, 10).padStart(2,"0")
    const newForm = [...form];
    newForm.forEach((item) => {
      if (item && item.keyCompanyForm === keyCompanyForm) {
        item.info.timeEnd = `${selectedDD}-${selectedMM}-${selectedYYYY}`;
      }
    });
    setForm([...newForm]);
    newTimeEnd.forEach((itemForm) => {
      newFormValidate.forEach((itemValidate) => {
        if (
        value
        ) {
        if(
          itemForm.keyCompanyForm === itemValidate.keyCompanyValidate
        ){
          itemValidate.info.timeValidate.state = false
          itemValidate.info.timeValidate.messageError=""
          itemForm.info.timeEnd = `${value.slice(8, 10).padStart(2,"0")}-${value.slice(5, 7).padStart(2,"0")}-${value.slice(0, 4)}`
        }
        }

      });
    });
    setFormValidate([...newFormValidate])
    setForm([...newTimeEnd])
  };


  const handleAddJobPosition = (text) => {
    const newPosition = [...form];
    const newFormValidate = [...formValidate]
    newPosition.forEach((item) => {
      if (item && item.keyCompanyForm === keyCompanyForm) {
        item.info.jobPosition = text;
      }
    });
    setForm([...newPosition]);

    newPosition.forEach((itemForm) => {
      newFormValidate.forEach((itemValidate) => {
        if (
        text
        ) {
        if(
          itemForm.keyCompanyForm === itemValidate.keyCompanyValidate
        ){
          itemValidate.info.jobPosition.state = false
          itemValidate.info.jobPosition.messageError=""
          itemForm.info.jobPosition = text
        }
        }

      });
    });

    setFormValidate([...newFormValidate]);
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

  const heightRef = useRef();

  const handleRemoveCompany = () => {
    const newForm = [...form];
    const newRemoveForm = newForm.find(
      (item) => item.keyCompanyForm === keyCompanyForm
    );
  };

  const handleAddJobDescription = (jobDescription) => {
    const newFormValidate = [...formValidate]
    const newJobDescription = [...form];
    newJobDescription.forEach((item) => {
      if (item && item.keyCompanyForm === keyCompanyForm) {
        item.info.jobDescription = jobDescription
          .replace(/\n/g, "")
          .replace(/\s/g, "");
      }
    });

    setForm([...newJobDescription]);

    newJobDescription.forEach((itemForm) => {
      newFormValidate.forEach((itemValidate) => {
        if (
          jobDescription
        ) {
        if(
          itemForm.keyCompanyForm === itemValidate.keyCompanyValidate
        ){
          itemValidate.info.jobDescription.state = false
          itemValidate.info.jobDescription.messageError=""
          itemForm.info.jobDescription = jobDescription
        }
        }

      });
    });

    setFormValidate([...newFormValidate]);
    setForm([...newJobDescription]);

    
  };

  return (
    <>
      <div
        // ref={ref}
        ref={heightRef}
        className="form-company"
      >
        <img
          id={0}
          className="trash"
          src={require("../assets/images/Trash.png")}
          alt=""
          onClick={handleRemoveCompany}
        />

        <div ref={searchRef} className="form-input form-company-name">
          {isShowCompanyName && (
            <div onClick={handleClickCompanyName} className="company-name">
              {companyName}
            </div>
          )}

          <input
            readOnly
            onClick={(e)=>handleCLickCompanyInput(e)}
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
          {formValidate.map((itemValidate) => {
            if (itemValidate.keyCompanyValidate === keyCompanyForm) {
              return (
                <div className="invalid-warning">
                  {itemValidate.info.jobPosition.messageError}
                </div>
              );
            }
          })}
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
          {formValidate.map((itemValidate) => {
            if (itemValidate.keyCompanyValidate === keyCompanyForm) {
              return (
                <div className="invalid-warning">
                  {itemValidate.info.timeValidate.messageError}
                
                </div>
              );
            }
          })}
          
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
          {formValidate.map((itemValidate) => {
            if (itemValidate.keyCompanyValidate === keyCompanyForm) {
              return (
                <div className="invalid-warning">
                  {itemValidate.info.jobDescription.messageError}
                </div>
              );
            }
          })}

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
    </>
  );
};

export default forwardRef(Company);
