import "../style/_bai-tap-4-personal-exp.scss";
import { useState, useRef } from "react";
import useClickOutside from "../hooks/useClickOutside";


const PersonalExpForm = (props) => {
  const initialStateForm = {
    companies: {
      status: false,
      messageError: "",
    },
    jopPosition: {
      status: false,
      messageError: "",
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
  const [form,setForm] = useState({})
  const [isJobpositionValid, setIsJobPositionValid] = useState(true);
  const [isShowCompaniesSearch, setIsShowCompaniesSearch] = useState(false);
  const [companiesTag, setCompaniesTag] = useState([])
  const [companiesSearch, setCompaniesSearch] = useState([])
  const [formValidate, setFormValidate] = useState(initialStateForm);

  

  const companies =[
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
      name: "UnitedHealth Groupppp",
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
  ]

  const filterCompany= (text) => {
    const regex = new RegExp(`${text}`, "gi");
    return companies.filter((company) => company.name.match(regex));
  };

  const { nextStep, prevStep } = props;

  useClickOutside(searchRef, () => setIsShowCompaniesSearch(false));


  const searchCompanies = (text) => {

    if (text) {
      setIsShowCompaniesSearch(true);
      const companySearch = filterCompany(text)
      setCompaniesSearch(companySearch)
    }
  };
  const handleFocusCompanyInput = () => {
    setIsShowCompaniesSearch(true)
    setCompaniesSearch(companies)
  }
  const handleClickOptionCompany =(code)=>{
    const selectedCompany = companiesSearch.find((companySearch)=>companySearch.code ===code)
    const newCompaniesSearch = companiesSearch.filter((companySearch)=>companySearch.code !==code)
    const newCompaniesTag =[...companiesTag]; 
    newCompaniesTag.push(selectedCompany);
    setCompaniesTag([...newCompaniesTag])
    setCompaniesSearch(newCompaniesSearch)
    setForm({
      ...form,  
      companies: companiesTag 
    })  
    console.log(form)
    
  }


  const handleClose = (code) => {
    const newCompaniesTag= companiesTag.filter((companyTag)=>companyTag.code !== code)
    setCompaniesTag([...newCompaniesTag])
    setForm({
      ...form,  
      companies: companiesTag
    })
    console.log(form)

  }


  const handleCompanies =()=>{
    if(!companiesTag){
      setFormValidate({
        ...formValidate,
        companies: {
          status: true,
          messageError: "Trường này là bắt buộc",
        }

        })
    }
  }


  const handleJobPosition = (e) => {
    if (e.target.value <= 5) {
      setIsJobPositionValid(true);
    } else setIsJobPositionValid(false);
  };

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
              onChange={(e)=>searchCompanies(e.target.value)}
              className="company-input"
              type="text"
              onFocus={handleFocusCompanyInput}
            />
          {isShowCompaniesSearch && (           
            <div ref={searchRef} className="company-option-wrap">
              {companiesSearch.map((companySearch) => {
                return (
                  <div
                  onClick={(e)=>handleClickOptionCompany(companySearch.code)}
                    // onClick={() => }
                    className="company-option"
                    key={companySearch.code}
                  >
                    {companySearch.name}
                  </div>
                );
              })}
            </div>)}
          </div>
          <img
            className="trash"
            src={require("../assets/images/Trash.png")}
            alt=""
          />
          <div className="companies-tag-wrap">
          {
            companiesTag && companiesTag.map((companyTag) => { 
              return(<div className="companies-tag-content">

                <div key={companyTag.code} className="company-tag">
                  {companyTag.name}
                </div>
                <img onClick={()=>handleClose(companyTag.code)} alt="" className="close" src={require("../assets/images/close-button.png")}/>
              </div>
              )
          })}
          </div>

        </div>
        {formValidate.companies.status && (
            <span className="invalid-warning">
              {formValidate.companies["messageError"]}
            </span>
          )}

        <div className="form-input form-all-position">
          <div className="label-input">
            <span className="label-require">Must</span>
            <span>Vị trí từng làm</span>
          </div>
          <input className="form-input" type="text" />
        </div>
        <div className="form-input form-work-period">
          <div className="label-input">
            <span className="label-require">Must</span>
            <span>Thời gian làm việc</span>
          </div>
          <div className="work-period-input-container">
            <input type="date" className="work-period-input" />
            <span className="dash">-</span>
            <input type="date" className="work-period-input" />
          </div>
        </div>
        <div className="form-input form-work-introduction">
          <div className="label-input">
            <span> Mô tả về công việc</span>
          </div>
          <input
            onChange={handleJobPosition}
            className="work-introduction"
            type="text"
          />
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
      <button onClick={nextStep} className="next-button ">
        Tiếp
      </button>
      <button onClick={prevStep} className="prev-button">
        Quay lại
      </button>
    </div>
  );
};

export default PersonalExpForm;
