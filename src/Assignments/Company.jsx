import { useEffect, useState, useContext, useRef } from "react";
import React from "react";
import { formContext } from "./PersonalExpForm";
import useClickOutside from "../hooks/useClickOutside";
import { forwardRef } from "react";
import { useCallback } from "react";
import { info } from "sass";
import { isBuffer } from "util";

const Company = (props, ref) => {
  const searchRef = useRef();

  const { nextStep, keyCompanyForm } = props;

  useClickOutside(searchRef, () => {
    setIsShowCompanies(false);
  });

  const [arrayCompanyNameChange,setArrayCompanyNameChange] = useState([])
  const [isShowCompanies, setIsShowCompanies] = useState(false);
  const formWitFormValidate = useContext(formContext);
  const [isShowCompanyName, setIsShowCompanyName] = useState(false);
  const [companyName, setCompanyName] = useState("");

  const handleCLickCompanyInput = (e) => {
    setIsShowCompanies(!isShowCompanies);
    const newPosition = [...form];
    const newFormValidate = [...formValidate];

    newPosition.forEach((itemForm) => {
      newFormValidate.forEach((itemValidate) => {
        if (e.target) {
          if (itemForm.keyCompanyForm === itemValidate.keyCompanyValidate) {
            itemValidate.companyName.state = false;
            itemValidate.companyName.messageError = "";
          }
        }
      });
    });
    setFormValidate([...newFormValidate]);
  };

  const [form, setForm] = useState(formWitFormValidate.form);
  const [formValidate, setFormValidate] = useState(
    formWitFormValidate.formValidate
  );

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
    const newFormValidate = [...formValidate];
    const newForm = [...form];
    newForm.forEach((itemForm) => {
      newFormValidate.forEach((itemValidate) => {
        if (value) {
          if (itemForm.keyCompanyForm === keyCompanyForm) {
            itemValidate.info.timeValidate.state = false;
            itemValidate.info.timeStart.state = false;
            itemValidate.info.timeStart.messageError = "";
            itemValidate.info.timeValidate.messageError = "";
            itemForm.info.timeStart = new Date(value);
          }
        }
        if (JSON.stringify(new Date(value)) === "null") {
          if (itemForm.keyCompanyForm === keyCompanyForm) {
            itemValidate.info.timeValidate.state = false;
            itemValidate.info.timeStart.state = false;
            itemValidate.info.timeStart.messageError = "";
            itemValidate.info.timeValidate.messageError = "";
            itemForm.info.timeStart = "null";
          }
        }
      });
    });

    setFormValidate([...newFormValidate]);
    setForm([...newForm]);
  };

  const handleAddTimeEnd = (value) => {
    console.log(value);
    const newTimeEnd = [...form];
    const newFormValidate = [...formValidate];

    const newForm = [...form];
    newForm.forEach((itemForm) => {
      newFormValidate.forEach((itemValidate) => {
        if (value) {
          if (itemForm.keyCompanyForm === keyCompanyForm) {
            itemValidate.info.timeValidate.state = false;
            itemValidate.info.timeEnd.state = false;
            itemValidate.info.timeEnd.messageError = "";
            itemValidate.info.timeValidate.messageError = "";
            itemForm.info.timeEnd = new Date(value);
          }
        }
        if (JSON.stringify(new Date(value)) === "null") {
          if (itemForm.keyCompanyForm === keyCompanyForm) {
            itemValidate.info.timeValidate.state = false;
            itemValidate.info.timeEnd.state = false;
            itemValidate.info.timeEnd.messageError = "";
            itemValidate.info.timeValidate.messageError = "";
            itemForm.info.timeEnd = "null";
          }
        }
      });
    });

    setFormValidate([...newFormValidate]);
    setForm([...newForm]);
  };

  const handleAddJobPosition = (text) => {
    const newPosition = [...form];
    const newFormValidate = [...formValidate];
    newPosition.forEach((item) => {
      newFormValidate.forEach((itemValidate) => {
        if (item && item.keyCompanyForm === keyCompanyForm) {
          item.info.jobPosition = text;
        }
      });
    });
    setForm([...newPosition]);
    setFormValidate([...newFormValidate]);

    newPosition.forEach((itemForm) => {
      newFormValidate.forEach((itemValidate) => {
        if (text) {
          if (
            itemForm.keyCompanyForm === keyCompanyForm &&
            itemForm.keyCompanyForm === itemValidate.keyCompanyValidate
          ) {
            itemValidate.info.jobPosition.state = false;
            itemValidate.info.jobPosition.messageError = "";
            itemForm.info.jobPosition = text;
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

  const handleAddCompanyName = (companyName, companyCode) => {
    // const newArrayCompanyName = [...arrayCompanyNameChange]
    const newForm = [...form];
    setIsShowCompanies(false);
    newForm.forEach((item) => {
      if (item && item.keyCompanyForm === keyCompanyForm) {
        item.companyName = companyName;
        

        setCompanyName(companyName);
        setIsShowCompanyName(true);
        setForm([...newForm]);
      }
    });
    // newArrayCompanyName.push(companyName)
    // setArrayCompanyNameChange([...newArrayCompanyName])
    // console.log(arrayCompanyNameChange)

    
  };

  

  const handleAddJobDescription = (jobDescription) => {
    const newFormValidate = [...formValidate];
    const newJobDescription = [...form];
    newJobDescription.forEach((item) => {
      newFormValidate.forEach((itemValidate) => {
        if (
          item &&
          item.keyCompanyForm === keyCompanyForm &&
          item.keyCompanyForm === itemValidate.keyCompanyValidate
        ) {
          item.info.jobDescription = jobDescription
            .replace(/\n/g, "")
            .replace(/\s/g, "");
        }
      });
    });

    setForm([...newJobDescription]);
    setFormValidate([...newFormValidate]);

    newJobDescription.forEach((itemForm) => {
      newFormValidate.forEach((itemValidate) => {
        if (jobDescription) {
          if (
            itemForm.keyCompanyForm === itemValidate.keyCompanyValidate &&
            itemForm.keyCompanyForm === keyCompanyForm
          ) {
            itemValidate.info.jobDescription.state = false;
            itemValidate.info.jobDescription.messageError = "";
            itemForm.info.jobDescription = jobDescription
              .replace(/\n/g, "")
              .replace(/\s/g, "");
          }
        }
      });
    });

    setFormValidate([...newFormValidate]);
    setForm([...newJobDescription]);
  };

 
  const handleCompanyChange = ()=>{
    form.map((itemForm) => 
      itemForm.companyName
    )

  
  }

  handleCompanyChange()

  useEffect(() => {
    setForm(Array.from(formWitFormValidate.form));

  }, [formWitFormValidate.form]);

  useEffect(() => {
    setFormValidate(Array.from(formWitFormValidate.formValidate));
  }, [formWitFormValidate.formValidate]);



  // useEffect(() => {
  //   const newForm = [...form]
  //   newForm.forEach((itemForm)=>{
  //     if(itemForm && itemForm.keyCompanyForm === keyCompanyForm){
  //       itemForm.info.jobPosition =""
  //       itemForm.info.jobDescription = ""
  //       itemForm.info.timeStart = ""
  //       itemForm.info.timeEnd = ""
  //       console.log(newForm)

  //     }
  //     setForm([...newForm])
  //   })
    
  // }, [companyName]);


 
  return (
    <>
      <div
        className="form-company"
      >
        <img
          id={0}
          className="trash"
          src={require("../assets/images/Trash.png")}
          alt=""
          onClick={() => props.handleRemoveCompany(keyCompanyForm)}
        />

        <div ref={searchRef} className="form-input form-company-name">
          {isShowCompanyName && (
            <div onClick={handleClickCompanyName} className="company-name">
              {companyName}
            </div>
          )}

          <input
            readOnly
            onClick={(e) => handleCLickCompanyInput(e)}
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
                    onClick={() =>
                      handleAddCompanyName(company.name, company.code)
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
                return item.info.jobDescription?.length || 0;
              }
            })}
            /5
          </span>
        </div>
      </div>
    </>
  );
};

export default forwardRef(Company);
