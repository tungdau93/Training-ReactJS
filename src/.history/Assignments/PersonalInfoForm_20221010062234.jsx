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
  const [citiesTag, setCitiesTag] =useState([]);
  const [isShowCitiesTag, setIsShowCitiesTag] = useState(false)
  const [citiesSearchTag, setCitiesSearchTag] =useState([]);
  const [citiesSearch, setCitiesSearch] = useState([])
  const [isCitiesSearchActive, setIsCitiesSearchActive] = useState(false)
  const [isShowCitiesSearchAll, setIsShowCitiesSearchAll] = useState(false);
  const [file, setFile] = useState([]);
  const [fileType, setFileType] = useState([]);
  const [isImgSelected, setIsImgSelected] = useState(false)


  useClickOutside(searchRef, () =>{
     setIsShowCitiesSearchAll(false)
     setIsCitiesSearchActive(false);
  });

  const handleClose =(code)=>{
    const citySelectedTag = citiesTag.filter((city) => city.code === code);
    setIsShowCitiesTag(false)
    // console.log(citiesTag)
    const newCitiesTag = [...citiesTag]
    newCitiesTag.pop(citySelectedTag)
    setCitiesTag([...newCitiesTag]);

    
  }

  const handleFocus =()=>{
    setIsShowCitiesSearchAll(true)
  }

  const handleClickCities = (code) => {
    setForm({ ...form, code });
    const cityChosen = findCity(code);
    // console.log(cityChosen)
    const newCitiesTag = [...citiesSearchTag]
    newCitiesTag.push(cityChosen);
    // console.log(newCitiesTag)
    setCitiesTag(newCitiesTag)
    setIsShowCitiesTag(true)
    setIsCitiesSearchActive(false);
  };

  const findCity = (code) => {
    if (code) {
      return cities.find((item) => item && item?.code === code);
    }
    return {};
  };

  // const jobPosition=[
  //   {
  //     code:1,
  //     job:"Java Developer" 
  //   },
  //   {
  //     code:2,
  //     job:"PHP Developer"
  //   },
  //   {
  //     code:3,
  //     job:"Javascript Developer"
  //   },
  //   {
  //     code:4,
  //     job:"C/C++ Developer"
  //   },
  //   {
  //     code:5,
  //     job:"Ruby Developer"
  //   },
  //   {
  //     code:6,
  //     job:"Vuejs Developer"
  //   },
  //   {
  //     code:7,
  //     job:"Reactjs Developer"
  //   },

  // ]


  const handleAddAvatar = (event) => {
    const file = URL.createObjectURL(event.target.files[0]);
    console.log(file)
    const fileType = event.target.files[0].type;
    setForm({...form,file})
    setFile(file);
    setIsImgSelected(true)
  };

  console.log(form)

 

  const filterCity = (text) => {
    const regex = new RegExp(`${text}`, "gi");
    return cities.filter((city) => city.name.match(regex));
  };

  const searchCities = (text) => {
    const citySearch = filterCity(text);
    if(text){
      setCitiesSearch(citySearch);
      setIsShowCitiesSearchAll(false);
      setIsCitiesSearchActive(true)      
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

  const { nextStep } = props;

  const handleDateOfBirth = (value) => {
    const today = new Date();
    const dd = today.getDate();
    const mm = today.getMonth() + 1;
    const yyyy = today.getFullYear();
    const selectedYYYY = Number(value.slice(0, 4));
    const selectedMM = Number(value.slice(5, 7));
    const selectedDD = Number(value.slice(8, 10));
    if (
      (selectedYYYY === yyyy && selectedMM === mm && selectedDD <= dd) ||
      (selectedYYYY === yyyy && selectedMM < mm) ||
      selectedYYYY < yyyy
    ) {
      setIsDateOfBirthValid(true);
    } else setIsDateOfBirthValid(false);
    setForm({
      ...form,
      DateOfBirth: value,
    });
  };

  const handleSelfIntro = (text) => {
    if (text.length <= 10) {
      setSelfIntroValid(true);
    } else setSelfIntroValid(false);
  };

  const handleFullName = (value) => {
    if (value.length <= 10) {
      setIsNameValid(true);
    } else setIsNameValid(false);
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
              isNameValid ? "full-name-input" : "full-name-input-invalid"
            }
            type="text"
          />
          <span className={isNameValid ? "hide-warning" : "invalid-warning"}>
            Số kí tối đa là 10
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
        </div>
        <div ref={searchRef} className="form-input form-city">
          <div className="label-input">
            <span>Thành phố</span>
          </div>
          <input
            onChange={(e) => searchCities(e.target.value)}
            className="select-city-input"
            type="text"
            onFocus={handleFocus}
          />
          <div className={isShowCitiesTag?"cities-tag":"hide-tag"}>{
            citiesTag.length> 0 && citiesTag.map((cityTag)=>{
              return(<div className="cities-tag-content">
                <span className="cities-tag-name" key={cityTag.code}>
                  {cityTag.name}
                </span>
                <img onClick={handleClose} className="close-img" src={require("../assets/images/close-button.png")} />
              </div>
              )
            
            })
          }</div>
          { isShowCitiesSearchAll ? (
            <div className="city-option-wrap">
              {
                cities.map((city) => {
                  return (
                    <div
                      onClick={() => handleClickCities(city.code)}
                      className="city-option"
                      key={city.code}
                    >
                      {city.name}
                    </div>
                  );
                })
             }
             
            </div>
          ): isCitiesSearchActive?
          <div className="city-option-wrap">
          {
            citiesSearch.map((citySearch) => {
              return (
                <div
                  onClick={() => handleClickCities(citySearch.code)}
                  className="city-option"
                  key={citySearch.code}
                >
                  {citySearch.name}
                </div>
              );
            })
         }
         
        </div>:null}
        </div>
        <div className="form-input form-job-position">
          <div className="label-input-job">
            <span>Vị trí làm việc</span>
            <span className="label-input-job-subheading">
              Có thể chọn nhiều vị trí mà bạn muốn làm việc
            </span>
          </div>
          <input className="job-position-input" type="text" />
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
        <span className="text-per-type">0/1000</span>
        <div className="form-personal-image-label">Ảnh cá nhân</div>

        <div
          className=
              "form-personal-image"
          
        >
          <div className={isImgSelected }>
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
            <img className="image-selected"  src={file}/>
          <input
            onChange={handleAddAvatar}
            className="drag-and-drop-input  "
            type="file"
          />
        </div>
       
       
      </div>

      <button onClick={nextStep} className="next-button">
        Tiếp
      </button>
    </div>
  );
};

export default PersonalInfoForm;
