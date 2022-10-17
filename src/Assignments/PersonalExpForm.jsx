import "../style/_bai-tap-4-personal-exp.scss";
import { useState, useRef, useEffect } from "react";
import useClickOutside from "../hooks/useClickOutside";

const PersonalExpForm = (props) => {
  const closeRef = useRef();

  const initialStateForm = {
    companies: {
      status: false,
      messageError: "Trường này là bắt buộc",
    },
    jobPosition: {
      status: false,
      messageError: "Trường này là bắt buộc",
    },
    time: {
      status: false,
      messageError: "",
    },
    description: {
      status: false,
      messageError: "",
    },
  };

  const searchRef = useRef();
  const [form, setForm] = useState(() => {
    const saved = localStorage.getItem("form");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  const [isShowCompaniesSearch, setIsShowCompaniesSearch] = useState(false);
  const [companyTag, setCompanyTag] = useState([]);
  const [companiesSearch, setCompaniesSearch] = useState([]);
  const [formValidate, setFormValidate] = useState(initialStateForm);
  const [selectedCompany, setSelectedCompany] = useState([]);
  const [prevJob, setPrevJob] = useState("");
  const [workPeriodStart, setWorkPeriodStart] = useState({});
  // const [company,setCompany] = useState([<Company key={0}/>])

  

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

  const handleAddCompany = (company) => {
  };

  const validateForm = () => {};
  // console.log(form.companies[0].company === "")
  //   if (
  //     form.companies[0].company === "" ||
  //     (form.companies[0].company && form.companies[0].company.length === 0) ||
  //     form.companies[0].company === undefined
  //   ) {
  //     if (
  //       form.companies[0].prevJob === undefined ||
  //       form.companies[0].prevJob === ""
  //     ){

  //       setFormValidate({
  //         ...formValidate,
  //         companies: {
  //           status: true,
  //           messageError: "Tối thiểu 1 công ty",
  //         },
  //         jobPosition: {
  //           status: true,
  //           messageError: "Trường này là bắt buộc",
  //         },
  //       });
  //     }

  //     if (
  //       form.companies[0].prevJob && form.companies[0].prevJob.length >10
  //     ){

  //       setFormValidate({
  //         ...formValidate,
  //         companies: {
  //           status: true,
  //           messageError: "Tối thiểu 1 công ty",
  //         },
  //         jobPosition: {
  //           status: true,
  //           messageError: "Không vượt quá 10 ký tự",
  //         },
  //       });
  //     }

  //   }
  //   else {
  //     setFormValidate({
  //       ...formValidate,
  //       companies: {
  //         status: false,
  //         messageError: "",
  //       },
  //     });
  //   }

  //   if (
  //     form.companies[0].prevJob === undefined ||
  //     form.companies[0].prevJob === ""
  //   ) {
  //     if (
  //       form.companies[0].company === "" ||
  //       (form.companies[0].company && form.companies[0].company.length === 0) ||
  //       form.companies[0].company === undefined
  //     )

  //     setFormValidate({
  //       ...formValidate,
  //       jobPosition: {
  //         status: true,
  //         messageError: "Trường này là bắt buộc",
  //       },
  //       companies: {
  //         status: true,
  //         messageError: "Tối thiểu 1 công ty",
  //       },

  //     });

  //   }
  //   if(form.companies[0].prevJob && form.companies[0].prevJob.length >10){
  //     if (
  //       form.companies[0].company === "" ||
  //       (form.companies[0].company && form.companies[0].company.length === 0) ||
  //       form.companies[0].company === undefined
  //     )

  //     setFormValidate({
  //       ...formValidate,
  //       jobPosition: {
  //         status: true,
  //         messageError: "Không vượt quá 10 ký tự",
  //       },
  //       companies: {
  //         status: true,
  //         messageError: "Tối thiểu 1 công ty",
  //       },

  //     });
  //   }

  //   else{
  //     setFormValidate({
  //       ...formValidate,
  //       jobPosition: {
  //         status: false,
  //         messageError: "",
  //       },
  //       companies: {
  //         status: false,
  //         messageError: "",
  //       },
  //     });
  //   }
  // };

  const filterCompany = (text) => {
    const regex = new RegExp(`${text}`, "gi");
    return companies.filter((company) => company.name.match(regex));
  };

  const { nextStep, prevStep } = props;

  useClickOutside(searchRef, () => setIsShowCompaniesSearch(false));

  const searchCompanies = (text) => {
    if (text) {
      setIsShowCompaniesSearch(true);
      const companySearch = filterCompany(text);
      setCompaniesSearch(companySearch);
    }
  };
  const handleFocusCompanyInput = () => {
    setIsShowCompaniesSearch(!isShowCompaniesSearch);
    setCompaniesSearch(companies);
  };
  const handleAddCompanyName = (code) => {
    const selectedCompany = companiesSearch.find(
      (companySearch) => companySearch.code === code
    );
    setCompanyTag(selectedCompany);
    setSelectedCompany(selectedCompany);
    setFormValidate({
      ...formValidate,
      companies: {
        status: false,
        messageError: "",
      },
    });
    setForm({
      ...form,
      companies: [
        {
          company: selectedCompany.name,
          code: selectedCompany.code,
          prevJob: prevJob,
        },
      ],
    });
    setIsShowCompaniesSearch(false);
  };

  const handleRemoveCompany = (code) => {
    const newCompanyTag = [companyTag];
    newCompanyTag.pop(selectedCompany);
    setCompanyTag(newCompanyTag);
    setFormValidate({
      ...formValidate,
      companies: {
        status: true,
        messageError: "Tối thiểu 1 công ty",
      },
    });
    setForm({
      ...form,
      companies: [
        {
          company: "",
          code: "",
          prevJob: prevJob,
        },
      ],
    });
  };

  // console.log(form)

  const handleAddPrevJob = (text) => {
    if (text) {
      setForm({
        ...form,
        companies: [
          {
            company: selectedCompany.name,
            code: selectedCompany.code,
            prevJob: text,
          },
        ],
      });
      setFormValidate({
        ...formValidate,
        jobPosition: {
          status: false,
          messageError: "",
        },
      });
    } else {
      setForm({
        ...form,
        companies: [
          {
            company: selectedCompany.name,
            code: selectedCompany.code,
            prevJob: text,
          },
        ],
      });
      setFormValidate({
        ...formValidate,
        jobPosition: {
          status: true,
          messageError: "Trường này là bắt buộc",
        },
      });
    }

    // console.log(form.companies)
  };
  const handleAddWorkPeriodStart = (valueStart) => {
    console.log(valueStart);
    const selectedYYYYStart = Number(valueStart.slice(0, 4));
    const selectedMMStart = Number(valueStart.slice(5, 7));
    const selectedDDStart = Number(valueStart.slice(8, 10));
    setWorkPeriodStart({
      ddStart: selectedDDStart,
      mmStart: selectedMMStart,
      yyStart: selectedYYYYStart,
    });
    setForm({
      ...form,
      companies: [
        {
          company: selectedCompany.name,
          code: selectedCompany.code,
          prevJob: prevJob,
          start: `${selectedDDStart} - ${selectedMMStart} - ${selectedYYYYStart}`,
        },
      ],
    });
  };

  const handleAddWorkPeriodEnd = (valueEnd) => {
    const selectedYYYYEnd = Number(valueEnd.slice(0, 4));
    const selectedMMEnd = Number(valueEnd.slice(5, 7));
    const selectedDDEnd = Number(valueEnd.slice(8, 10));

    setForm({
      ...form,
      companies: [
        {
          company: selectedCompany.name,
          code: selectedCompany.code,
          prevJob: prevJob,
          end: `${selectedDDEnd} - ${selectedMMEnd} - ${selectedYYYYEnd}`,
        },
      ],
    });
  };

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
        <div className="form-company-container">
          <div className="company-input-wrap">
            <input
              onChange={(e) => searchCompanies(e.target.value)}
              className="company-input"
              type="text"
              onMouseUp={handleFocusCompanyInput}
            />
            {isShowCompaniesSearch && (
              <div ref={searchRef} className="company-option-wrap">
                {companiesSearch.map((companySearch) => {
                  return (
                    <div
                      onClick={(e) => handleAddCompanyName(companySearch.code)}
                      // onClick={() => }
                      className="company-option"
                      key={companySearch.code}
                    >
                      {companySearch.name}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          <img
            className="trash"
            src={require("../assets/images/Trash.png")}
            alt=""
            onClick={handleRemoveCompany}
          />
          <div key={companyTag.code} className="company-tag">
            {form.companies[0].company}
          </div>
        </div>
        {formValidate.companies.status && (
          <div className="invalid-warning">
            {formValidate.companies["messageError"]}
          </div>
        )}

        <div className="form-input form-prev-job">
          <div className="label-input">
            <span className="label-require">Must</span>
            <span>Vị trí từng làm</span>
          </div>
          <input
            onChange={(e) => handleAddPrevJob(e.target.value)}
            className="form-input"
            type="text"
          />
        </div>
        {formValidate.jobPosition.status && (
          <div className="invalid-warning">
            {formValidate.jobPosition["messageError"]}
          </div>
        )}
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
        <div className="form-input form-work-introduction">
          <div className="label-input">
            <span> Mô tả về công việc</span>
          </div>
          <textarea className="work-introduction" type="text" />
        </div>
      </div>
      <div className="add-company">
        <img
          className="plus-2"
          alt=""
          src={require("../assets/images/Plus.png")}
        />
        <span>Thêm công ty</span>
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
