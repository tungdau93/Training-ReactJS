import { useEffect, useState, useContext, useRef } from "react";
import React from "react";
import { formContext } from "./PersonalExpForm";
import useClickOutside from "../hooks/useClickOutside";
import { forwardRef } from "react";
import { useCallback } from "react";

const Company = (props, ref) => {
  const searchRef = useRef();

  const {
    nextStep,
    keyCompanyForm,
    timeRange,
    setTimeRange,
    companies,
    setCompanies,
  } = props;

  useClickOutside(searchRef, () => {
    setIsShowCompanies(false);
  });

  const [classId, setClassId] = useState(0);
  const [isShowCompanies, setIsShowCompanies] = useState(false);
  const formWitFormValidate = useContext(formContext);
  const [isShowCompanyName, setIsShowCompanyName] = useState(false);
  const [companyName, setCompanyName] = useState("");
  const [jobPosition, setJobPosition] = useState("");
  const [timeStart, setTimeStart] = useState("");
  const [timeEnd, setTimeEnd] = useState("");
  const [jobDescription, setJobDescription] = useState("");

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

  const handleAddTimeStart = (value) => {
    const newFormValidate = [...formValidate];
    const newForm = [...form];
    const newTimeRange = [...timeRange];
    newForm.forEach((itemForm) => {
      newFormValidate.forEach((itemValidate) => {
        newTimeRange.forEach((itemTimeRange) => {
          if (value) {
            if (
              itemForm.keyCompanyForm === keyCompanyForm &&
              itemForm.keyCompanyForm === itemTimeRange.keyCompanyTime &&
              itemForm.keyCompanyForm === itemValidate.keyCompanyValidate
            ) {
              itemValidate.info.timeValidate.state = false;
              itemValidate.info.timeStart.state = false;
              itemValidate.info.timeStart.messageError = "";
              itemValidate.info.timeValidate.messageError = "";
              itemForm.info.timeStart = new Date(value);
              setTimeStart(value);
              itemTimeRange.timeStart = new Date(value);
            }
          }
          if (JSON.stringify(new Date(value)) === "null") {
            if (itemForm.keyCompanyForm === keyCompanyForm) {
              itemValidate.info.timeValidate.state = false;
              itemValidate.info.timeStart.state = false;
              itemValidate.info.timeStart.messageError = "";
              itemValidate.info.timeValidate.messageError = "";
              itemForm.info.timeStart = "null";
              setTimeStart(null);
            }
          }
        });
      });
    });

    setFormValidate([...newFormValidate]);
    setForm([...newForm]);
    setTimeRange([...newTimeRange]);
  };

  console.log(form)


  const handleAddTimeEnd = (value) => {
    const newFormValidate = [...formValidate];
    const newForm = [...form];
    const newTimeRange = [...timeRange];
    newForm.forEach((itemForm) => {
      newFormValidate.forEach((itemValidate) => {
        newTimeRange.forEach((itemTimeRange) => {
          if (value) {
            if (
              itemForm.keyCompanyForm === keyCompanyForm &&
              itemForm.keyCompanyForm === itemTimeRange.keyCompanyTime &&
              itemForm.keyCompanyForm === itemValidate.keyCompanyValidate
            ) {
              itemValidate.info.timeValidate.state = false;
              itemValidate.info.timeEnd.state = false;
              itemValidate.info.timeEnd.messageError = "";
              itemValidate.info.timeValidate.messageError = "";
              itemForm.info.timeEnd = new Date(value);
              setTimeEnd(value);
              itemTimeRange.timeEnd = new Date(value);
            }
          }
          if (JSON.stringify(new Date(value)) === "null") {
            if (itemForm.keyCompanyForm === keyCompanyForm) {
              itemValidate.info.timeValidate.state = false;
              itemValidate.info.timeEnd.state = false;
              itemValidate.info.timeEnd.messageError = "";
              itemValidate.info.timeValidate.messageError = "";
              itemForm.info.timeEnd = "null";
              setTimeEnd(null);
            }
          }
        });
      });
    });

    setFormValidate([...newFormValidate]);
    setForm([...newForm]);
    setTimeRange([...newTimeRange]);
  };

  const handleAddJobPosition = (text) => {
    const newPosition = [...form];
    const newFormValidate = [...formValidate];
    newPosition.forEach((item) => {
      newFormValidate.forEach((itemValidate) => {
        if (item && item.keyCompanyForm === keyCompanyForm) {
          item.info.jobPosition = text;
          setJobPosition(text);
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
    const newForm =[...form]
    const newFormValidate = [...formValidate];

    newFormValidate.forEach((itemValidate)=>{
      newForm.forEach((itemForm)=>{
        if(itemValidate.keyCompanyValidate === itemForm.keyCompanyForm){
          itemValidate.companyName.messageError= ""


        }
      })
    })
    setFormValidate([...newFormValidate]);
    
      
    }

  

  const handleAddCompanyName = (event, companyName, companyCode) => {
    setClassId(companyCode);

    const newForm = [...form];
    const newFormValidate = [...formValidate];
    setIsShowCompanies(false);
    newForm.forEach((item) => {
      newFormValidate.forEach((itemValidate) => {
        if (
          item &&
          item.keyCompanyForm === keyCompanyForm &&
          item.keyCompanyForm === itemValidate.keyCompanyValidate
        ) {
          item.companyName = companyName;
          itemValidate.info.jobPosition.messageError = "";
          itemValidate.info.jobDescription.messageError = "";
          itemValidate.info.timeStart.messageError = "";
          itemValidate.info.timeEnd.messageError = "";
          itemValidate.info.timeValidate.messageError = "";

          setCompanyName(companyName);
          setIsShowCompanyName(true);
          setForm([...newForm]);
          setFormValidate([...newFormValidate]);
        }
      });
    });
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
          setJobDescription(jobDescription);
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

  useEffect(() => {
    setForm(Array.from(formWitFormValidate.form));
  }, [formWitFormValidate.form]);

  useEffect(() => {
    setFormValidate(Array.from(formWitFormValidate.formValidate));
  }, [formWitFormValidate.formValidate]);

  useEffect(() => {
    const newForm = [...form];
    newForm.forEach((itemForm) => {
      if (itemForm && itemForm.keyCompanyForm === keyCompanyForm) {
        itemForm.info.jobPosition = "";
        itemForm.info.jobDescription = "";
        itemForm.info.timeStart = "";
        itemForm.info.timeEnd = "";
        setJobPosition("");
        setTimeStart("");
        setTimeEnd("");
        setJobDescription("");
      }
      setForm([...newForm]);
    });
  }, [companyName]);

  return (
    <>
      <div className="form-company">
        <img
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
                <div
                  key={itemValidate.keyCompanyValidate}
                  className="invalid-warning"
                >
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
                    onClick={(event) => {
                      handleAddCompanyName(event, company.name, company.code);
                    }}
                    className={
                      company.code === classId ? "company-disable" : "company"
                    }
                    key={company.code}
                    id={company.code}
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
            value={jobPosition}
          />
          {formValidate.map((itemValidate) => {
            if (itemValidate.keyCompanyValidate === keyCompanyForm) {
              return (
                <div
                  key={itemValidate.keyCompanyValidate}
                  className="invalid-warning"
                >
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
              value={timeStart}
            />
            <span className="dash">-</span>
            <input
              onChange={(e) => handleAddTimeEnd(e.target.value)}
              type="date"
              className="work-period-input"
              value={timeEnd}
            />
          </div>
          {formValidate.map((itemValidate) => {
            if (itemValidate.keyCompanyValidate === keyCompanyForm) {
              return (
                <div
                  key={itemValidate.keyCompanyValidate}
                  className="invalid-warning"
                >
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
              value={jobDescription}
            />
          </div>
          {formValidate.map((itemValidate) => {
            if (itemValidate.keyCompanyValidate === keyCompanyForm) {
              return (
                <div key={itemValidate.keyCompanyValidate} className="invalid-warning">
                  {itemValidate.info.jobDescription.messageError}
                </div>
              );
            }
          })}

          
            {form.map((item) => {
              if (item && item.keyCompanyForm === keyCompanyForm) {
                return <span key={item.keyCompanyForm} className="text-per-type"> {item.info.jobDescription?.length || 0}/10 </span>
              }
            })}
           
          
        </div>
      </div>
    </>
  );
};

export default forwardRef(Company);