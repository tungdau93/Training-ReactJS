import { useState, useEffect, useRef,useContext } from "react";
import "../style/_bai-tap-4-personal-info.scss";
import useClickOutside from "../hooks/useClickOutside";
import React from "react";
import { ParentContext } from "./BaiTap4";

//  export const PersonalInfoFormContext = createContext()


const PersonalInfoForm = (props) => {
  const { nextStep } = props;
  const searchCityRef = useRef();
  const searchJobRef = useRef();
  const jobTagContent = useRef();
  const inputAvatar = useRef();
  const dateRef = useRef();




  const [isShowAvatar, setIsShowAvatar] = useState(false);

  useClickOutside(searchCityRef, () => {
    setIsShowCities(false);
  });
  useClickOutside(searchJobRef, () => {
    setIsShowJobs(false);
  });

  const [jobTag, setJobTag] = useState( []
  )
  const [cityName, setCityName] = useState();

  const clearCityInput = useRef();
  // const [jobTag, setJobTag] = useState([]);
  const [cities, setCities] = useState([]);

  const [isShowJobs, setIsShowJobs] = useState(false);
  const [citySearch, setCitySearch] = useState([]);
  const [isShowCityName, setIsShowCityName] = useState(false);
  // const [personalInfoForm, setPersonalInfoForm] = useState({
  //   fullName: "",
  //   dateOfBirth: "",
  //   city: "",
  //   jobPosition: [],
  //   selfDescription: "",
  //   avatar: "",
  // });

  const { personalInfoForm, setPersonalInfoForm} = useContext(ParentContext)

  

  const [formValidate, setFormValidate] = useState({
    fullName: {
      messageError: "",
      state: false,
    },
    dateOfBirth: {
      state: false,
      messageError: "",
    },
    city: {
      state: false,
      messageError: "",
    },
    jobPosition: {
      state: false,
      messageError: "",
    },
    selfDescription: {
      state: false,
      messageError: "",
    },
    avatar: {
      state: false,
      messageError: "",
    },
  });

  // const [date, setDate] = useState(() => {
  //   const saved = localStorage.getItem("personal-info-form");

  //   const initialValueDate = JSON.parse(saved);

  //   return initialValueDate?.dateOfBirth || "";
  // });
  const [fullName, setFulName] = useState("");

  // const [selfDescription, setSelfDescription] = useState(() => {
  //   const saved = localStorage.getItem("personal-info-form");

  //   const initialValueDate = JSON.parse(saved);

  //   return initialValueDate?.selfDescription || "";
  // });
  const [avatar, setAvatar] = useState("");

  // const [cities, setCities] = useState([]);
  const [isShowJobTag, setIsShowJobTag] = useState(false);

  // const [formValidate, setFormValidate] = useState({
  //   fullName: {
  //     messageError: "",
  //     state: false,
  //   },
  //   dateOfBirth: {
  //     messageError: "",
  //     state: false,
  //   },
  //   city: {
  //     messageError: "",
  //     state: false,
  //   },
  //   jobPosition: {
  //     messageError: "",
  //     state: false,
  //   },
  //   selfDescription: {
  //     messageError: "",
  //     state: false,
  //   },
  //   avatar: {
  //     messageError: "",
  //     state: false,
  //   },
  // });

  const [isShowCities, setIsShowCities] = useState(false);

  const [jobPosition, setJobPosition] = useState([
    {
      name: "PhP developer",
      code: 1,
    },
    {
      name: "JS developer",

      code: 2,
    },
    {
      name: "C/C++ developer",
      code: 3,
    },
    {
      name: "Java developer",
      code: 4,
    },
    {
      name: "C# developer",
      code: 5,
    },
    {
      name: "Ruby developer",

      code: 6,
    },
    {
      name: "ReactJs developer",
      code: 7,
    },
    {
      name: "VueJS developer",

      code: 8,
    },
  ]);

  const handleAddFullName = (e) => {
    if (e.target.value && e.target.value.length > 10) {
      setFormValidate((prevState) => {
        return {
          ...prevState,
          fullName: {
            messageError: "Không vượt quá 10 ký tự",
            state: true,
          },
        };
      });
      setPersonalInfoForm((prevState) => {
        return {
          ...prevState,
          fullName: e.target.value,
        };
      });
    }
    // setForm((prevState) => {
    //   return {
    //     ...prevState,
    //     fullName: e.target.value.replace(/\s/g, ""),
    //   };
    // });
    if ((e.target.value && e.target.value.length <= 10) || !e.target.value) {
      setFormValidate((prevState) => {
        return {
          ...prevState,
          fullName: {
            messageError: "",
            state: false,
          },
        };
      });

      setPersonalInfoForm((prevState) => {
        return {
          ...prevState,
          fullName: e.target.value,
        };
      });
    }
    // setFulName(e.target.value);
  };

  const handleAddDateOfBirth = (e) => {
  

    if (
      e.target.value &&
      (new Date(e.target.value) < new Date() ||
        JSON.stringify(new Date(e.target.value)) === JSON.stringify(new Date()))
    ) {
      setFormValidate((prevState) => {
        return {
          ...prevState,
          dateOfBirth: {
            messageError: "",
            state: false,
          },
        };
      });
      setPersonalInfoForm((prevState) => {
        return {
          ...prevState,
          dateOfBirth: new Date(e.target.value),
        };
      });
    }

    if (
      JSON.stringify(new Date(e.target.value)) === "null"
    ) {
      setFormValidate((prevState) => {
        return {
          ...prevState,
          dateOfBirth: {
            messageError: "",
            state: false,
          },
        };
      });
      setPersonalInfoForm((prevState) => {
        return {
          ...prevState,
          dateOfBirth: "",
        };
      });
    }

    if (e.target.value && new Date(e.target.value) > new Date()) {
      setFormValidate((prevState) => {
        return {
          ...prevState,
          dateOfBirth: {
            messageError: "Không vượt quá ngày hiện tại",
            state: true,
          },
        };
      });
      setPersonalInfoForm((prevState) => {
        return {
          ...prevState,
          dateOfBirth: new Date(e.target.value),
        };
      });
    }
  };

  const handleClickCityInput = (e) => {
    setIsShowCities(!isShowCities);
    setCitySearch([...cities]);
    setIsShowCityName(false);
    setPersonalInfoForm((prevState) => {
      return {
        ...prevState,
        city: "",
      };
    });
  };
  const handleClickCityName = () => {
    setIsShowCities(!isShowCities);
    setIsShowCityName(false);
    setPersonalInfoForm((prevState) => {
      return {
        ...prevState,
        city: "",
      };
    });
  };

  const filterCity = (text) => {
    const regex = new RegExp(`${text}`, "gi");
    return cities.filter((city) => city.name.match(regex));
  };

  const searchCities = (text) => {
    const resultSearch = filterCity(text);
    setCitySearch(resultSearch);
    setIsShowCities(true);
    if (!text) {
      setIsShowCities(false);
    }
  };

  const handleAddCity = (cityName) => {
    clearCityInput.current.value = "";
    setIsShowCities(false);
    setIsShowCityName(true);
    setPersonalInfoForm((prevState) => {
      return {
        ...prevState,
        city: cityName,
      };
    });
    setCityName(cityName);
  };

  const handleClickJobInput = () => {
    setIsShowJobs(!isShowJobs);
  };

  const handleAddJobs = (jobCode) => {
    if (personalInfoForm.jobPosition && personalInfoForm.jobPosition.length < 4) {
      setIsShowJobTag(true);
      setIsShowJobs(true);
      const newJobTag = [...jobTag];
      const selectedJob = jobPosition.find((job) => job.code === jobCode);
      const newJobPosition = jobPosition.filter((job) => job.code !== jobCode);
      newJobTag.push(selectedJob);
      setJobTag([...newJobTag]);
      setJobPosition([...newJobPosition]);
      setPersonalInfoForm((prevState) => {
        return {
          ...prevState,
          jobPosition: [...newJobTag],
        };
      });
      // setJobs([...newJobsSaved]);
    }
    if (personalInfoForm.jobPosition && personalInfoForm.jobPosition.length >= 4) {
      alert("Không quá 4 vị trí");
      setIsShowJobs(false);
    }
  };

  const handleRemoveJobs = (e,jobCode) => {
    setIsShowJobs(false);
    e.stopPropagation();
    console.log("click herer")
    const newJobPosition = [...jobPosition];
    const newJobTag = [...jobTag];
    const jobSelected = newJobTag.find((job) => job.code === jobCode);
    const jobAfterSelected = newJobTag.filter((job) => job.code !== jobCode);
    // const jobSaved = newJobSaved.filter((job) => job.code !== jobCode);
    newJobPosition.push(jobSelected);
    setJobPosition(newJobPosition);
    setJobTag(jobAfterSelected);
    setPersonalInfoForm((prevState) => {
      return {
        ...prevState,
        jobPosition: [...jobAfterSelected],
      };
    });

    if (personalInfoForm.jobPosition.length === 1) {
      setIsShowJobTag(false);
      setIsShowJobs(false)
    }
  };

  const handleAddSelfDescription = (text) => {
    // setForm((prevState) => {
    //   return {
    //     ...prevState,
    //     // selfDescription: text.replace(/\n/g, "").replace(/\s/g, ""),
    //     selfDescription: text
    //   };
    // });
    // if (text || !text) {
    //   setFormValidate((prevState) => {
    //     return {
    //       ...prevState,
    //       selfDescription: {
    //         messageError: "",
    //         state: false,
    //       },
    //     };
    //   });
    // }
    // setSelfDescription(text);

    if(text && text.length >10){
      setPersonalInfoForm((prevState) => {
      return {
        ...prevState,
        selfDescription: text
      };
    });
    setFormValidate((prevState) => {
          return {
            ...prevState,
            selfDescription: {
              messageError: "Không vượt quá 10 ký tự",
              state: true,
            },
          };
        });
    }

    if(!text || (text && text.length <=10)){
      setPersonalInfoForm((prevState) => {
      return {
        ...prevState,
        selfDescription: text
      };
    });
    setFormValidate((prevState) => {
          return {
            ...prevState,
            selfDescription: {
              messageError: "",
              state: false,
            },
          };
        });
    }
  };

  const handleAddAvatar = (e) => {
    const avatar = URL.createObjectURL(e.target.files[0]);
    setIsShowAvatar(true);
    setAvatar(avatar);
    setPersonalInfoForm((prevState) => {
      return {
        ...prevState,
        avatar,
      };
    });
  };

  const handleRemoveAvatar = () => {
    setAvatar("");
    setIsShowAvatar(false);
    setPersonalInfoForm((prevState) => {
      return {
        ...prevState,
        avatar: "",
      };
    });
    inputAvatar.current.value = "";
  };

  const validateForm = () => {
    let isSuccess = true;
    if (!personalInfoForm.fullName) {
      setFormValidate((prevState) => {
        return {
          ...prevState,
          fullName: {
            messageError: "Trường này là bắt buộc",
            state: true,
          },
        };
      });
      isSuccess = false;
    }

    if (personalInfoForm.fullName && personalInfoForm.fullName.length > 10) {
      setFormValidate((prevState) => {
        return {
          ...prevState,
          fullName: {
            messageError: "Không vượt quá 10 ký tự",
            state: true,
          },
        };
      });
      isSuccess = false;
    }

    if (personalInfoForm.dateOfBirth === "null" || personalInfoForm.dateOfBirth === "") {
      setFormValidate((prevState) => {
        return {
          ...prevState,
          dateOfBirth: {
            messageError: "Trường này là bắt buộc",
            state: true,
          },
        };
      });
      isSuccess = false;
    }

    if (personalInfoForm.dateOfBirth && personalInfoForm.dateOfBirth > new Date()) {
      setFormValidate((prevState) => {
        return {
          ...prevState,
          dateOfBirth: {
            messageError: "Ngày sinh không hợp lệ",
            state: true,
          },
        };
      });
      isSuccess = false;
    }

    if (personalInfoForm.selfDescription && personalInfoForm.selfDescription.length > 10) {
      setFormValidate((prevState) => {
        return {
          ...prevState,
          selfDescription: {
            messageError: "Không vượt quá 10 ký tự",
            state: true,
          },
        };
      });
      isSuccess = false;
    }
    return isSuccess;
  };

  const handleClickJobTag = (e) => {
    setIsShowJobs(!isShowJobs); 
  };

  const handleNextButton = () => {
    const isValid = validateForm();
    if (true) {
      nextStep();
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

  

  return (

    <div value ={personalInfoForm} className="form-personal-info">
      {/* <button className="set-date" onClick={setDate}>sadfasdfsdaf</button> */}
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
            onChange={(e) => handleAddFullName(e)}
            className="full-name-input"
            type="text"
            // value={fullName}
          />
        </div>

        {formValidate.fullName.state && (
          <div className="invalid-warning">
            {formValidate.fullName["messageError"]}
          </div>
        )}

        {<span className="text-per-type">{personalInfoForm.fullName?.length || 0}/10</span>}

        <div className="form-input form-date-of-birth">
          <div className="label-input">
            <span className="label-require">Must</span>
            <span>Ngày sinh</span>
          </div>
          <input
            onChange={handleAddDateOfBirth}
            type="date"
            className="date-of-birth-input"
            // value={date.slice(0, 10)}
          />
        </div>
        {formValidate.dateOfBirth.state && (
          <span className="invalid-warning">
            {formValidate.dateOfBirth["messageError"]}
          </span>
        )}
        <div className="form-input form-city">
          {isShowCityName && (
            <div onClick={handleClickCityName} className="city-name">
              {cityName}
            </div>
          )}
          <div className="label-input">
            <span>Thành phố</span>
          </div>
          <div ref={searchCityRef} className="city-input-with-city-search">
            <input
              onClick={(e) => handleClickCityInput(e)}
              onChange={(e) => searchCities(e.target.value)}
              ref={clearCityInput}
              className="select-city-input"
              type="text"
            />
            {isShowCities && (
              <div className="cities-container">
                {citySearch.map((city) => {
                  return (
                    <div
                      onClick={() => handleAddCity(city.name)}
                      className="city"
                      key={city.code}
                    >
                      {city.name}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
        <div className="form-input form-job-position">
          <div className="label-input-job">
            <span>Vị trí làm việc</span>
            <span className="label-input-job-subheading">
              Có thể chọn nhiều vị trí mà bạn muốn làm việc{" "}
            </span>
          </div>
          <div
            ref={searchJobRef}
            className="position-input-with-position-search"
          >
            <input
              onClick={handleClickJobInput}
              readOnly
              className="select-position-input"
              type="text"
            />
            <div className="jobs-container">
              {isShowJobs &&
                jobPosition.map((job) => {
                  return (
                    <div
                      onClick={() => handleAddJobs(job.code)}
                      className="job"
                    >
                      {job.name}
                    </div>
                  );
                })}
            </div>
          </div>
          {isShowJobTag && (
            <div onClick={(e) => handleClickJobTag(e)} className="jobs-tag">
              {jobTag.map((job) => {
                return (
                  <div ref={jobTagContent} className="job-tag-content">
                    <div className="job-tag-name">{job.name}</div>
                    <img
                      onClick={(e) => handleRemoveJobs(e,job.code)}
                      className="close-img"
                      alt=""
                      src={require("../assets/images/close-button.png")}
                    />
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <div className="form-input form-self-description">
          <div className="label-input">
            <span>Mô tả về bản thân</span>
          </div>
          <textarea
            onChange={(e) => handleAddSelfDescription(e.target.value)}
            className="self-description"
            type="text"
            spellCheck="false"
            // value={selfDescription}
          />

        </div>
        {formValidate.selfDescription.state && (
          <span className="invalid-warning">
            {formValidate.selfDescription["messageError"]}
          </span>
        )}  

        {<div className="text-per-type">{personalInfoForm.selfDescription?.length || 0}/10</div>}

       
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
            ref={inputAvatar}
            multiple
            onChange={(e) => handleAddAvatar(e)}
            className="drag-and-drop-input"
            type="file"
          />
          {isShowAvatar && (
            <div className="avatar-container">
              <img alt="" className="avatar-preview" src={avatar} />
              <img
                onClick={handleRemoveAvatar}
                src={require("../assets/images/close7.jpg")}
                className="close-icon"
                alt=""
              />
            </div>
          )}
        </div>
      </div>

      <button onClick={handleNextButton} className="next-button">
        Tiếp
      </button>
    </div>
  );
};

export default PersonalInfoForm;
