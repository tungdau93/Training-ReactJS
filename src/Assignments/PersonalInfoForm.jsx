import { useState, useEffect, useRef } from "react";
import "../style/_bai-tap-4-personal-info.scss";
import useClickOutside from "../hooks/useClickOutside";
import React from "react";

const PersonalInfoForm = (props) => {
  const searchRef = useRef();
  const [form, setForm] = useState({});
  const [isSelfIntroValid, setSelfIntroValid] = useState(true);
  const [isNameValid, setIsNameValid] = useState(true);
  const [isDateOfBirthValid, setIsDateOfBirthValid] = useState(true);
  const [cities, setCities] = useState([]);
  const [citiesTag, setCitiesTag] = useState([]);
  const [isShowCitiesTag, setIsShowCitiesTag] = useState(false);
  const [citiesSearchTag, setCitiesSearchTag] = useState([]);
  const [citiesSearch, setCitiesSearch] = useState([]);
  const [isCitiesSearchActive, setIsCitiesSearchActive] = useState(false);
  const [isShowCitiesSearchAll, setIsShowCitiesSearchAll] = useState(false);
  const [file, setFile] = useState([]);
  const [isImgSelected, setIsImgSelected] = useState(false);
  const [isJobSearchActive, setIsJobSearchActive] = useState(false);
  const [jobTags, setJobTags] = useState([]);
  const [isShowJobsTag, setIsShowJobsTag] = useState(false);
  const [text, setText] = useState(0);
  const [isDateOfBirthRequired, setIsDateOfBirthRequired] = useState(false);
  const [jobPosition, setJobPosition] = useState([
    {
      code: 1,
      name: "Java Developer",
    },
    {
      code: 2,
      name: "PHP Developer",
    },
    {
      code: 3,
      name: "Javascript Developer",
    },
    {
      code: 4,
      name: "C/C++ Developer",
    },
    {
      code: 5,
      name: "Ruby Developer",
    },
    {
      code: 6,
      name: "Vuejs Developer",
    },
    {
      code: 7,
      name: "Reactjs Developer",
    },
  ]);

  const [isNameRequired, setIsNameRequired] = useState(false);

  useClickOutside(searchRef, () => {
    setIsShowCitiesSearchAll(false);
    setIsCitiesSearchActive(false);
    setIsJobSearchActive(false);
  });

  // console.log(form)

  // const validateInfoForm = () => {
  //   // let formInfo = [...form]
  //   console.log(formInfo);
  // }

  const handleCLickJobs = (codeJob) => {
    const jobChosen = findJobs(codeJob);
    const newJobsTag = [...jobTags];
    newJobsTag.push(jobChosen);
    if (newJobsTag.length < 4) {
      setJobTags(newJobsTag);
      setForm({ ...form, jobTags });

      setIsShowJobsTag(true);
    } else alert("No more than 3 jobs selected");
  };

  const { nextStep } = props;
  
  const handleCloseCities = (codeCity) => {
    const citySelectedTag = citiesTag.find((city) => city.code === codeCity);
    setIsShowCitiesTag(false);
    const newCitiesTag = [...citiesTag];
    newCitiesTag.pop(citySelectedTag);
    setCitiesTag([...newCitiesTag]);
  };

  const handleJobFocus = () => {
    setIsJobSearchActive(true);
  };

  const handleCloseJobs = (code) => {
    const jobSelectedTag = jobTags.find((job) => job.code === code);
    const newJobsTag = [...jobTags];
    newJobsTag.pop(jobSelectedTag);
    setJobTags([...newJobsTag]);
    setForm({
      ...form,
      codeJob: code,
    });
  };

  const handleFocus = () => {
    setIsShowCitiesSearchAll(true);
  };

  const handleClickCities = (code) => {
    setForm({ ...form, code });
    const cityChosen = findCity(code);
    const newCitiesTag = [...citiesSearchTag];
    newCitiesTag.push(cityChosen);
    setCitiesTag(newCitiesTag);
    setIsShowCitiesTag(true);
    setIsCitiesSearchActive(false);
    
  };

  const findCity = (code) => {
    if (code) {
      return cities.find((item) => item && item.code === code);
    }
    return {};
  };

  const findJobs = (code) => {
    if (code) {
      return jobPosition.find((item) => item && item.code === code);
    }
    return {};
  };

  const handleAddAvatar = (event) => {
    const file = URL.createObjectURL(event.target.files[0]);
    const fileType = event.target.files[0].type;
    // setForm({ ...form, file });
    setFile(file);
    setIsImgSelected(true);
    setForm({
      ...form,
      file,
    });
  };

  const validateForm = () => {
    const dateOfBirth = form.DateOfBirth;
    const fullName = form.fullName;

    let textLength = text.length;
    if (textLength <= 10) {
      setSelfIntroValid(true);
    } else {
      setSelfIntroValid(false);
      textLength = 10;
    }

    if (!fullName) {
      setIsNameRequired(true);
      // console.log("ho ten hop le")
    } else if (form.fullname && fullName.length <= 10 && fullName.length > 0)
      {setIsNameValid(true);}
    else if (fullName.length > 10) {
      setIsNameValid(false);
      setIsNameRequired(false);
    }

    const today = new Date();
    const dd = today.getDate();
    const mm = today.getMonth() + 1;
    const yyyy = today.getFullYear();
    debugger;

    if (!dateOfBirth) {
      // console.log("Please select)
      setIsDateOfBirthRequired(true);
      // setIsDateOfBirthValid(true);

    } else if (dateOfBirth) {
      const selectedYYYY = Number(dateOfBirth.slice(0, 4));
      const selectedMM = Number(dateOfBirth.slice(5, 7));
      const selectedDD = Number(dateOfBirth.slice(8, 10));
      console.log(selectedDD);
      if (
        (selectedYYYY === yyyy && selectedMM === mm && selectedDD <= dd) 
       
      )
       {
        setIsDateOfBirthValid(true);}
       else{
         setIsDateOfBirthValid(false);

       } 
    } 

    if (dateOfBirth && fullName && isDateOfBirthValid && isNameValid) {
      nextStep()
    }
  };

  const filterCity = (text) => {
    const regex = new RegExp(`${text}`, "gi");
    return cities.filter((city) => city.name.match(regex));
  };

  const searchCities = (text) => {
    const citySearch = filterCity(text);
    if (text) {
      setCitiesSearch(citySearch);
      setIsShowCitiesSearchAll(false);
      setIsCitiesSearchActive(true);
    }
  };

  useEffect(() => {
    const url = "https://provinces.open-api.vn/api/";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCities(data);
      });
  }, []);

 

  const handleDateOfBirth = (value) => {
    setForm({
      ...form,
      DateOfBirth: value,
    });
  };

  const handleSelfIntro = (text) => {
   

    setText(text.length);
    setForm({
      ...form,
      selfIntro: text,
    });
  };

  const handleFullName = (value) => {
    setForm({
      ...form,
      fullName: value,
    });
  };

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
            className={
              isNameValid || isNameRequired ? "full-name-input" : "full-name-input-invalid"
            }
            type="text"
          />
          <span className={isNameValid  ? "hide-warning" : "invalid-warning"}>
            Số kí tối đa là 10
          </span>
          <span className={isNameRequired ? "invalid-warning" : "hide-warning"}>
            Trường này là bắt buộc
          </span>
        </div>
        <div className="form-input form-date-of-birth">
          <div className="label-input">
            <span className="label-require">Must</span>
            <span>Ngày sinh</span>
          </div>
          <input
            onChange={(e) => handleDateOfBirth(e.target.value)}
            type="date"
            className={
              isDateOfBirthValid
                ? "date-of-birth-input"
                : "date-of-birth-input-invalid"
            }
          />
          <span
            className={isDateOfBirthValid ? "hide-warning" : "invalid-warning"}
          >
            Ngày sinh không hợp lệ
          </span>
          <span
            className={
              isDateOfBirthRequired ? "invalid-warning" : "hide-warning"
            }
          >
            Trường này là bắt buộc
          </span>
        </div>
        <div className="form-input form-city">
          <div className="label-input">
            <span>Thành phố</span>
          </div>
          <input
            onChange={(e) => searchCities(e.target.value)}
            className="select-city-input"
            type="text"
            onFocus={handleFocus}
          />
          <div className={isShowCitiesTag ? "cities-tag" : "hide-tag"}>
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
          </div>
          {isShowCitiesSearchAll ? (
            <div ref={searchRef} className="city-option-wrap">
              {cities.map((city) => {
                return (
                  <div
                    onClick={() => handleClickCities(city.code)}
                    className="city-option"
                    key={city.code}
                  >
                    {city.name}
                  </div>
                );
              })}
            </div>
          ) : isCitiesSearchActive ? (
            <div className="city-option-wrap">
              {citiesSearch.map((citySearch) => {
                return (
                  <div
                    onClick={() => handleClickCities(citySearch.code)}
                    className="city-option"
                    key={citySearch.code}
                  >
                    {citySearch.name}
                  </div>
                );
              })}
            </div>
          ) : null}
        </div>
        <div className="form-input form-job-position">
          <div className="label-input-job">
            <span>Vị trí làm việc</span>
            <span className="label-input-job-subheading">
              Có thể chọn nhiều vị trí mà bạn muốn làm việc
            </span>
          </div>
          <input
            onFocus={handleJobFocus}
            className="job-position-input"
            type="text"
          />
          {isJobSearchActive ? (
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
          ) : null}
          <div className={isShowJobsTag ? "jobs-tag" : "hide-tag"}>
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
          </div>
        </div>
        <div className="form-input form-self-introduction">
          <div className="label-input">
            <span>Mô tả về bản thân</span>
          </div>
          <input
            onChange={(e) => handleSelfIntro(e.target.value)}
            className="self-introduction"
            type="text"
          />
          <span
            className={isSelfIntroValid ? "hide-warning" : "invalid-warning"}
          >
            Số ký tự không vượt quá 10
          </span>
        </div>
        <span className="text-per-type">{text}/10</span>
        <div className="form-personal-image-label">Ảnh cá nhân</div>

        <div className="form-personal-image">
          <div
            className={
              isImgSelected ? "hide-drag-and-drop-label" : "drag-and-drop-label"
            }
          >
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
          <img
            className={
              isImgSelected ? "image-selected" : "hide-drag-and-drop-label"
            }
            alt=""
            src={file}
          />
          <input
            onChange={handleAddAvatar}
            className="drag-and-drop-input  "
            type="file"
          />
        </div>
      </div>

      <button onClick={validateForm} className="next-button">
        Tiếp
      </button>
    </div>
  );
};

export default PersonalInfoForm;
