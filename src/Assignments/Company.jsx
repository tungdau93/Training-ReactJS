import { useEffect, useState, useContext, useRef } from "react";
import React from "react";
import { formContext } from "./PersonalExpForm";
import useClickOutside from "../hooks/useClickOutside";
import { forwardRef } from "react";
import { useCallback } from "react";

const Company = (props, ref) => {
  const searchRef = useRef();

  const { nextStep, keyCompanyForm, timeRange, setTimeRange } = props;

  useClickOutside(searchRef, () => {
    setIsShowCompanies(false);
  });

  const [arrayCompanyNameChange, setArrayCompanyNameChange] = useState([]);
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
    const newTimeRange = [...timeRange];
    newForm.forEach((itemForm) => {
      newFormValidate.forEach((itemValidate) => {
        newTimeRange.forEach((itemTimeRange) => {
          if (value) {
            if (
              itemForm.keyCompanyForm === keyCompanyForm &&
              itemForm.keyCompanyForm === itemTimeRange.keyCompanyTime
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
              itemForm.keyCompanyForm === itemTimeRange.keyCompanyTime
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
  };

  const handleAddCompanyName = (companyName, companyCode) => {
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

  const handleClickButton = () => {
    // const compareRangeTime = (a, b) => {
    //   if (a.timeEnd - a.timeStart < b.timeEnd - b.timeStart) return -1;
    //   if (a.timeEnd - a.timeStart > b.timeEnd - b.timeStart) return 1;
    //   return 0;
    // };
    // timeRange.sort(compareRangeTime)

    const newTimeRange = [...timeRange];

    if (
      (newTimeRange[0].timeStart < newTimeRange[0].timeEnd &&
        newTimeRange[0].timeEnd >= newTimeRange[1].timeStart &&
        newTimeRange[1].timeStart < newTimeRange[1].timeEnd) ||
      (newTimeRange[0].timeStart < newTimeRange[0].timeEnd &&
        newTimeRange[0].timeStart >= newTimeRange[1].timeStart &&
        newTimeRange[1].timeStart < newTimeRange[1].timeEnd) ||
      (newTimeRange[0].timeStart < newTimeRange[0].timeEnd &&
        newTimeRange[0].timeStart >= newTimeRange[1].timeEnd &&
        newTimeRange[1].timeStart < newTimeRange[1].timeEnd)
    ) {
      console.log("khong hop le");
    }

    // console.log(itemTimeRange[0].timeStart <itemTimeRange[0].timeEnd)
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

  const handleCompanyChange = () => {
    form.map((itemForm) => itemForm.companyName);
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
            value={jobPosition}
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
              value={jobDescription}
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
