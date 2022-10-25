import { useState, useEffect, useRef } from "react";
import "../style/_bai-tap-4-personal-info.scss";
import useClickOutside from "../hooks/useClickOutside";
import React from "react";

const PersonalInfoForm = (props) => {
  const { nextStep } = props;
  const initialStateForm = {
    fullName: {
      status: true,
      messageError: "",
      text: "0",
    },
    dob: {
      status: true,
      messageError: "",
      value: "0",
    },
    description: {
      status: false,
      messageError: "",
    },
    cityName: {
      status: false,
      messageError: "",
    },
    job: {
      status: false,
      messageError: "",
    },
  };

  const searchRef = useRef();

  const [isShowMessageErrorName, setIsShowMessageErrorName] = useState(false);
  const [isShowMessageErrorDoB, setIsShowMessageErrorDoB] = useState(false);
  const [form, setForm] = useState(() => {
    const saved = localStorage.getItem("form");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  const [formValidate, setFormValidate] = useState(initialStateForm);
  const [cities, setCities] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [citiesSearchTag, setCitiesSearchTag] = useState([]);
  const [citiesSearch, setCitiesSearch] = useState([]);
  const [isShowCitiesSearch, setIsShowCitiesSearch] = useState(false);
  const [jobsSearchTag, setJobsSearchTag] = useState([]);
  const [jobsSearch, setJobsSearch] = useState([]);
  const [isShowJobsSearch, setIsShowJobsSearch] = useState(false);
  const [avatar, setAvatar] = useState([]);
  const [isAvatarSelected, setIsAvatarSelected] = useState(false);
  const [isShowJobsTag, setIsShowJobsTag] = useState(false);

  const jobPosition = [
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
  ];

  useClickOutside(searchRef, () => {
    setIsShowCitiesSearch(false);
    setIsShowJobsSearch(false);
  });

  const handleAddCity = (code) => {
    const selectedCity = citiesSearch.find(
      (citySearch) => citySearch.code === code
    );
    setCitiesSearchTag(selectedCity);
    setIsShowCitiesSearch(false);
    setForm({
      ...form,
      cityName: selectedCity.name,
    });
  };

  const handleAddJob = (code) => {
    const selectedJob = jobsSearch.find((jobSearch) => jobSearch.code === code);
    const newJobSearch = jobsSearch.filter(
      (jobSearch) => jobSearch.code !== code
    );
    const newJobSearchTag = [...jobsSearchTag];
    if (newJobSearchTag.length < 3) {
      newJobSearchTag.push(selectedJob);
      setJobsSearchTag([...newJobSearchTag]);

      setJobsSearch(newJobSearch);
      setIsShowJobsTag(true);
    } else alert("Không vượt quá 3 vị trí");

    setForm({
      ...form,
      job: newJobSearchTag,
    });
  };

  const handleFocusCity = () => {
    setIsShowCitiesSearch((current) => !current);
    setCitiesSearchTag([]);
    setCitiesSearch(cities);
  };

  const handleFocusJob = () => {
    setIsShowJobsSearch(true);
    setJobsSearchTag([]);
    setJobsSearch(jobPosition);
  };

  const handleCloseJobTag = (code) => {
    const newJobTags = jobsSearchTag.filter(
      (jobSearchTag) => jobSearchTag.code !== code
    );
    const newJobSelected = jobsSearchTag.find(
      (jobSearchTag) => jobSearchTag.code === code
    );
    setJobsSearchTag(newJobTags);
    if (jobsSearchTag.length === 1) {
      setIsShowJobsTag(false);
    }
    const newJobSearch = [...jobsSearch];
    newJobSearch.push(newJobSelected);
    setJobsSearch(newJobSearch);
    setForm({
      ...form,
      job: newJobTags,
    });
  };

  const handleAddAvatar = (event) => {
    const file = URL.createObjectURL(event.target.files[0]);

    setIsAvatarSelected(true);
    event.target.value = null;
    setAvatar(file);
    // upload img twice

    setForm({
      ...form,
      avatar: file,
    });
  };

  const handleCloseAvatar = () => {
    setIsAvatarSelected(false);
    setAvatar(null);
    setForm({
      ...form,
      avatar: null,
    });
  };

  // console.log(form);

  // const handleClickDropDown = () => {
  //   setIsShowCitiesSearch((prevState)=>!prevState);
  // };

  const validateForm = () => {
    // if (
    //   formValidate.fullName.status === true &&
    //   formValidate.fullName.text === "0" &&
    //   !form.fullName
    // ) {
    //   setIsShowMessageErrorName(true);
    // }
    // if (formValidate.dob.status === true && formValidate.dob.value === "0") {
    //   setIsShowMessageErrorDoB(true);
    // }

    // if (form.fullName && form.fullName.length > 20) {
    //   setIsShowMessageErrorName(false);
    //   setFormValidate({
    //     ...formValidate,
    //     fullName: {
    //       status: true,
    //       messageError: "Không vượt quá 20 ký tự",
    //       text: "1",
    //     },
    //   });
    // }

    // if (form.DateOfBirth) {
    //   setIsShowMessageErrorDoB(false);
    // }

    // if (form.description && form.description.length > 20) {
    //   setFormValidate({
    //     ...formValidate,
    //     description: {
    //       status: true,
    //       messageError: "Không vượt quá 20 ký tự",
    //     },
    //   });
    // }

    // if (
    //   (form.fullName &&
    //     form.fullName.length <= 20 &&
    //     form.DateOfBirth &&
    //     !form.description) ||
    //   (form.fullName &&
    //     form.fullName.length <= 20 &&
    //     form.DateOfBirth &&
    //     form.description &&
    //     form.description.length <= 20)
    // ) {
      nextStep();
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
      setCitiesSearchTag([]);
    }
  };

  const filterJob = (text) => {
    setJobs(jobPosition);
    const regex = new RegExp(`${text}`, "gi");
    return jobPosition.filter((job) => job.name.match(regex));
  };

  const searchJobs = (text) => {
    if (text) {
      const jobSearch = filterJob(text);
      setJobsSearch(jobSearch);
      setIsShowJobsSearch(true);
      setJobsSearchTag([]);
    }
  };

  const handleFullName = (text) => {
    if (!text) {
      setFormValidate({
        ...formValidate,
        fullName: {
          status: true,
          messageError: "Trường này là bắt buộc",
          text: "",
        },
      });
      setForm({
        ...form,
        fullName: text,
      });
    } else {
      if (text.length <= 20) {
        setFormValidate({
          ...formValidate,
          fullName: {
            status: false,
            messageError: "",
            text: "1",
          },
        });
        setIsShowMessageErrorName(false);

        setForm({
          ...form,
          fullName: text,
        });
      } else {
        setFormValidate({
          ...formValidate,
          fullName: {
            status: true,
            messageError: "Không vượt quá 20 ký tự",
            text: "1",
          },
        });
        setForm({
          ...form,
          fullName: text,
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
          value: "0",
        },
      });

      setIsShowMessageErrorDoB(true);
    } else {
      if (
        (selectedYYYY === yyyy && selectedMM === mm && selectedDD <= dd) ||
        (selectedYYYY === yyyy && selectedMM < mm) ||
        selectedYYYY < yyyy
      ) {
        setFormValidate({
          ...formValidate,
          dob: {
            status: false,
            messageError: "",
            value: "1",
          },
        });
        setIsShowMessageErrorDoB(false);

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
            value: "1",
          },
        });
      }
    }
  };

  const handleSelfIntro = (textIntro) => {
    if (textIntro?.length <= 20) {
      setFormValidate({
        ...formValidate,
        description: {
          status: false,
          messageError: "",
        },
      });

      setForm({
        ...form,
        description: textIntro,
      });
    } else {
      setFormValidate({
        ...formValidate,
        description: {
          status: true,
          messageError: "Không vượt quá 20 ký tự",
        },
      });
      setForm({
        ...form,
        description: textIntro,
      });
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

  useEffect(() => {
    localStorage.setItem("form", JSON.stringify(form));
  }, [form]);

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
            value={form.fullName}
          />
          {formValidate.fullName.status && (
            <span className="invalid-warning">
              {formValidate.fullName["messageError"]}
            </span>
          )}
          {isShowMessageErrorName && (
            <span className="invalid-warning">Trường này là bắt buộc</span>
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
            value={form.DateOfBirth}
          />
          {formValidate.dob.status && (
            <span className="invalid-warning">
              {formValidate.dob["messageError"]}
            </span>
          )}
          {isShowMessageErrorDoB && (
            <span className="invalid-warning">Trường này là bắt buộc</span>
          )}
        </div>
        <div className="form-input form-city">
          <div className="label-input">
            <span>Thành phố</span>
          </div>
          <input
            onChange={(e) => searchCities(e.target.value)}
            className="select-city-input"
            type="text"
            onFocus={handleFocusCity}
          />

          <div className="city-tag">{form.cityName}</div>

         
          {isShowCitiesSearch && (
            <div ref={searchRef} className="cities-option-wrap">
              {citiesSearch.length > 0 &&
                citiesSearch.map((citySearch) => {
                  return (
                    <div
                      onClick={() => handleAddCity(citySearch.code)}
                      className="city-option"
                      key={citySearch.code}
                    >
                      <span className="cities-name">{citySearch.name}</span>
                    </div>
                  );
                })}
            </div>
          )}
        </div>
        <div ref={searchRef} className="form-input form-job-position">
          <div className="label-input-job">
            <span>Vị trí làm việc</span>
            <span className="label-input-job-subheading">
              Có thể chọn nhiều vị trí mà bạn muốn làm việc{" "}
            </span>
          </div>
          <input
            className="select-position-input"
            type="text"
            onChange={(e) => searchJobs(e.target.value)}
            onFocus={handleFocusJob}
          />
          {isShowJobsTag && (
            <div className="job-tags-container">
              {jobsSearchTag &&
                form.job?.map((jobItem) => {
                  return (
                    <div className="job-tag-content" key={jobItem.code}>
                      <div className="job-tag-name">{jobItem.name}</div>
                      <img
                        onClick={(e) => handleCloseJobTag(jobItem.code)}
                        alt=""
                        src={require("../assets/images/close-button.png")}
                        className="close-button"
                      />
                    </div>
                  );
                })}
            </div>
          )}

          {isShowJobsSearch && (
            <div ref={searchRef} className="jobs-option-wrap">
              {jobsSearch.length > 0 &&
                jobsSearch.map((jobSearch) => {
                  return (
                    <div
                      key={jobSearch.code}
                      onClick={() => handleAddJob(jobSearch.code)}
                      className="job-option"
                      value={form.job}
                    >
                      <span className="cities-name" key={jobSearch.code}>
                        {jobSearch.name}
                      </span>
                    </div>
                  );
                })}
            </div>
          )}
        </div>
        <div className="form-input form-self-introduction">
          <div className="label-input">
            <span>Mô tả về bản thân</span>
          </div>
          <textarea
            onChange={(e) => handleSelfIntro(e.target.value)}
            className="self-introduction"
            type="text"
            value={form.description}
            spellCheck="false"
          />
          <span className="text-per-type">
            {form.description?.length || 0}/20
          </span>
          {formValidate.description["status"] && (
            <div className="invalid-warning-self-intro">
              {formValidate.description["messageError"]}
            </div>
          )}
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
            onChange={handleAddAvatar}
            className="drag-and-drop-input  "
            type="file"
            // value={form.avatar}
          />

          {(isAvatarSelected || form.avatar)  && (
            <div className={"image-selected-container"}>
              <img className="image-selected" alt="" src={avatar?form.avatar:"../assets/images/no-preview.jpg"} />
              <img
                onClick={handleCloseAvatar}
                className="close-icon"
                alt=""
                src={require("../assets/images/close7.jpg")}
              />
            </div>
          )}
          {console.log(avatar)}
        </div>
      </div>

      <button onClick={validateForm} className="next-button">
        Tiếp
      </button>
      {/* <div>
        {form.job.map((jobItem) => {
          return jobItem.name
        })} 
      </div> */}
    </div>
  );
};

export default PersonalInfoForm;
