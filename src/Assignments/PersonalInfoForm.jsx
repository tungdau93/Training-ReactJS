import { useState, useEffect, useRef } from "react";
import "../style/_bai-tap-4-personal-info.scss";
import useClickOutside from "../hooks/useClickOutside";
import React from "react";

const PersonalInfoForm = (props) => {
  const { nextStep } = props;
  const initialStateForm = {
    fullName: {
      status: false,
      messageError: "",
    },
    dob: {
      status: false,
      messageError: "",
    },
    selfIntro: {
      status: false,
      messageError: "",
    },
  };

  // const [isValidateSuccess, setIsValidateSuccess] = useState(false);
  const searchRef = useRef();
  const [form, setForm] = useState({});
  const [formValidate, setFormValidate] = useState(initialStateForm);
  const [cities, setCities] = useState([]);
  // const [citiesTag, setCitiesTag] = useState([]);
  // const [isShowCitiesTag, setIsShowCitiesTag] = useState(false);
  const [citiesSearchTag, setCitiesSearchTag] = useState([]);
  const [citiesSearch, setCitiesSearch] = useState([]);
  const [isShowCitiesSearch, setIsShowCitiesSearch] = useState(false);

  // const [isCitiesSearchActive, setIsCitiesSearchActive] = useState(false);
  const [file, setFile] = useState([]);
  // const [isImgSelected, setIsImgSelected] = useState(false);
  // const [isJobSearchActive, setIsJobSearchActive] = useState(false);
  // const [jobTags, setJobTags] = useState([]);
  // const [isShowJobsTag, setIsShowJobsTag] = useState(false);

  // const jobPosition = [
  //   {
  //     code: 1,
  //     name: "Java Developer",
  //   },
  //   {
  //     code: 2,
  //     name: "PHP Developer",
  //   },
  //   {
  //     code: 3,
  //     name: "Javascript Developer",
  //   },
  //   {
  //     code: 4,
  //     name: "C/C++ Developer",
  //   },
  //   {
  //     code: 5,
  //     name: "Ruby Developer",
  //   },
  //   {
  //     code: 6,
  //     name: "Vuejs Developer",
  //   },
  //   {
  //     code: 7,
  //     name: "Reactjs Developer",
  //   },
  // ];

  // const [isNameRequired, setIsNameRequired] = useState(false);


  // useClickOutside(searchRef, () => {
  //   setIsShowCitiesSearch(false);
  // });  

  const handleClickOptionCity =(code)=>{
    console.log("here")
    const selectedCity= citiesSearch.find((citySearch)=>citySearch.code ===code)
    const newCitiesTag =[...citiesSearchTag]; 
  
    newCitiesTag.push(selectedCity);
    setCitiesSearchTag(newCitiesTag)
    console.log(citiesSearchTag)
    setForm({
      ...form,  
      city: citiesSearchTag
    })  
    
  }
 

  // const handleCloseCities = (codeCity) => {
  //   const citySelectedTag = citiesTag.find((city) => city.code === codeCity);
  //   setIsShowCitiesTag(false);
  //   const newCitiesTag = [...citiesTag];
  //   newCitiesTag.pop(citySelectedTag);
  //   setCitiesTag([...newCitiesTag]);
  // };

  // const handleJobFocus = () => {
  //   setIsJobSearchActive(!isCitiesSearchActive);
  // };

  // const handleCloseJobs = (code) => {
  //   const jobSelectedTag = jobTags.find((job) => job.code === code);
  //   const newJobsTag = [...jobTags];
  //   newJobsTag.pop(jobSelectedTag);
  //   setJobTags([...newJobsTag]);
  //   setForm({
  //     ...form,
  //     codeJob: code,
  //   });
  // };

  const handleFocus = () => {
    setIsShowCitiesSearch(true);
  };

  // const handleClickCitySearch = (code) => {
  //   // setForm({ ...form, code });
  //   const citySelected = findCity(code);
  //   const newCitiesTag = [...citiesSearchTag];
  //   newCitiesTag.push(citySelected);
  //   console.log(newCitiesTag);
  //   // setCitiesTag(newCitiesTag);

  // };

  // const findCity = (code) => {
  //   if (code) {
  //     return cities.find((item) => item && item.code === code);
  //   }
  //   return {};
  // };

  // const findJobs = (code) => {
  //   if (code) {
  //     return jobPosition.find((item) => item && item.code === code);
  //   }
  //   return {};
  // };

  // const handleAddAvatar = (event) => {
  //   const file = URL.createObjectURL(event.target.files[0]);
  //   const fileType = event.target.files[0].type;
  //   // setForm({ ...form, file });
  //   setFile(file);
  //   setIsImgSelected(true);
  //   setForm({
  //     ...form,
  //     file,
  //   });
  // };

  const handleclickDropDown =()=>{
    setIsShowCitiesSearch(true);
    // console.log('drop down')
  }

  const validateForm = () => {
    // if (isValidateSuccess) {
    //   nextStep();
    // }
  };

  const filterCity = (text) => {
    const regex = new RegExp(`${text}`, "gi");
    return cities.filter((city) => city.name.match(regex));
  };

  const searchCities = (text) => {
    if (text) {
      const citySearch = filterCity(text);
      setCitiesSearch(citySearch);
      setIsShowCitiesSearch(true);
    }
  };

  const handleFullName = (text) => {
    if (!text) {
      setFormValidate({
        ...formValidate,
        fullName: {
          status: true,
          messageError: "Trường này là bắt buộc",
        },
      });
    } else {
      if (text.length < 10) {
        setFormValidate({
          ...formValidate,
          fullName: {
            status: false,
            messageError: "",
          },
        });

        setForm({
          ...form,
          fullName: text,
        });
      } else {
        setFormValidate({
          ...formValidate,
          fullName: {
            status: true,
            messageError: "Không vượt quá 10 ký tự",
          },
        });
      }
    }
  };

  const handleDateOfBirth = (value) => {
    const today = new Date();
    const dd = today.getDate();
    const mm = today.getMonth() + 1;
    const yyyy = today.getFullYear();
    const selectedYYYY = Number(value.slice(0, 4));
    const selectedMM = Number(value.slice(5, 7));
    const selectedDD = Number(value.slice(8, 10));

    if (!value) {
      setFormValidate({
        ...formValidate,
        dob: {
          status: true,
          messageError: "Trường này là bắt buộc",
        },
      });
    } else {
      if (selectedYYYY === yyyy && selectedMM === mm && selectedDD <= dd) {
        setFormValidate({
          ...formValidate,
          dob: {
            status: false,
            messageError: "",
          },
        });
        setForm({
          ...form,
          DateOfBirth: value,
        });
      } else {
        setFormValidate({
          ...formValidate,
          dob: {
            status: true,
            messageError: "Ngày sinh không hợp lệ",
          },
        });
      }
    }
  };

  // const handleSelfIntro = (textIntro) => {
  //   if (!textIntro) {
  //     setIsValidateSuccess(false);
  //     setFormValidate({
  //       ...formValidate,
  //       selfIntro: {
  //         status: true,
  //         messageError: "Trường này là bắt buộc",
  //       },
  //     });
  //   } else {
  //     if (textIntro.length <= 10) {
  //       setIsValidateSuccess(true);

  //       setFormValidate({
  //         ...formValidate,
  //         selfIntro: {
  //           status: false,
  //           messageError: "",
  //         },
  //       });

  //       setForm({
  //         ...form,
  //         selfIntro: textIntro,
  //       });
  //     } else {
  //       setIsValidateSuccess(false);
  //       setFormValidate({
  //         ...formValidate,
  //         selfIntro: {
  //           status: true,
  //           messageError: "Không vượt quá 10 ký tự",
  //         },
  //       });
  //     }
  //   }
  // };

  useEffect(() => {
    const url = "https://provinces.open-api.vn/api/";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCities(data);
      });
  }, []);

  return (
    <div className="form-personal-info">
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
                src={require("../assets/images/step2-inactive.png")}
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
        <div className="form-input form-full-name">
          <div className="label-input">
            <span className="label-require">Must</span>
            <span>Họ và tên</span>
          </div>
          <input
            onChange={(e) => handleFullName(e.target.value)}
            className="full-name-input"
            type="text"
          />
          {formValidate.fullName["status"] && (
            <span className="invalid-warning">
              {formValidate.fullName["messageError"]}
            </span>
          )}
        </div>
        <div className="form-input form-date-of-birth">
          <div className="label-input">
            <span className="label-require">Must</span>
            <span>Ngày sinh</span>
          </div>
          <input
            onChange={(e) => handleDateOfBirth(e.target.value)}
            type="date"
            className="date-of-birth-input"
          />
          {formValidate.dob.status && (
            <span className="invalid-warning">
              {formValidate.dob["messageError"]}
            </span>
          )}
        </div>
        <div className="form-input form-city">
          <div className="label-input">
            <span>Thành phố</span>
          </div>
          <input ref={searchRef}
            onChange={(e) => searchCities(e.target.value)}
            className="select-city-input"
            type="text"
            onFocus={handleFocus}
          />
          <img
            onClick={handleclickDropDown}
            alt=""
            className="drop-down-icon"
            src={require("../assets/images/drop-down-icon.png")}
          />
          {/* <div className={isShowCitiesTag ? "cities-tag" : "hide-tag"}>
            {citiesTag.length > 0 &&
              citiesTag.map((cityTag) => {
                return (
                  <div className="cities-tag-content">
                    <span className="cities-tag-name" key={cityTag.code}>
                      {cityTag.name}
                    </span>
                    <img
                      alt=""
                      onClick={handleCloseCities}
                      className="close-img"
                      src={require("../assets/images/close-button.png")}
                    />
                  </div>
                );
              })}
          </div> */}
          {isShowCitiesSearch && <div className="cities-option-wrap">
          {citiesSearch.length>0 &&
              citiesSearch.map((citySearch) => {
                return (
                  <div onClick={()=>handleClickOptionCity(citySearch.code)} className="city-option">
                    <span className="cities-name" key={citySearch.code}>
                      {citySearch.name}
                    </span>
                   
                  </div>
                );
              })}
             
          </div>}
        </div>
        <div className="form-input form-job-position">
          <div className="label-input-job">
            <span>Vị trí làm việc</span>
            <span className="label-input-job-subheading">
              Có thể chọn nhiều vị trí mà bạn muốn làm việc{" "}
            </span>
          </div>
          <input
            // onFocus={handleJobFocus}
            className="select-position-input"
            type="text"
          />

          {/* {isJobSearchActive ? (
            <div ref={searchRef} className="job-option-wrap">
              {jobPosition.map((job) => {
                return (
                  <div
                    onClick={() => handleCLickJobs(job.code)}
                    className="job-option"
                    key={job.code}
                  >
                    {job.name}
                  </div>
                );
              })}
            </div>
          ) : null} */}
          {/* <div className={isShowJobsTag ? "jobs-tag" : "hide-tag"}>
            {jobTags.length > 0 &&
              jobTags.map((jobTag) => {
                return (
                  <div className="jobs-tag-content">
                    <span className="jobs-tag-name" key={jobTag.code}>
                      {jobTag.name}
                    </span>
                    <img
                      onClick={() => handleCloseJobs(jobTag.code)}
                      className="close-img"
                      alt=""
                      src={require("../assets/images/close-button.png")}
                    />
                  </div>
                );
              })}
          </div> */}
        </div>
        <div className="form-input form-self-introduction">
          <div className="label-input">
            <span>Mô tả về bản thân</span>
          </div>
          <textarea
            // onChange={(e) => handleSelfIntro(e.target.value)}
            className="self-introduction"
            type="text"
          />
          <span className="text-per-type">
            {/* {form.selfIntro?.length || 0}/10 */}
          </span>
          {/* {formValidate.selfIntro["status"] && (
            <div className="invalid-warning-self-intro">
              {formValidate.selfIntro["messageError"]}
            </div>
          )} */}
        </div>
        <div className="form-personal-image-label">Ảnh cá nhân</div>

        <div className="form-personal-image">
          <div className="drag-and-drop-label">
            <span className="image-drag-drop">
              <img
                alt=""
                src={require("../assets/images/upload-icon.png")}
                width={32}
                height={32}
              />
            </span>
            <span>Drag and drop files</span>
            <span>Browse Files</span>
          </div>

          <input
            // onChange={handleAddAvatar}
            className="drag-and-drop-input  "
            type="file"
          />
          <div
          // className={
          //     isImgSelected ? "image-selected-container" : "hide-drag-and-drop-label"
          //   }
          >
            <img className="image-selected" alt="" src={file} />
            {/* <img
            className=
               "close-icon" 
            alt=""
            src={require("../assets/images/close7.jpg")}
          /> */}
          </div>
        </div>
      </div>

      <button onClick={validateForm} className="next-button">
        Tiếp
      </button>
    </div>
  );
};

export default PersonalInfoForm;
