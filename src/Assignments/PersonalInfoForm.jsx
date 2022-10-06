import { useState } from "react";
import "../style/_bai-tap-4-personal-info.scss";



const PersonalInfoForm = (props) => {
  const [form, setForm] = useState({});
  const [isSelfIntroValid, setSelfIntroValid] = useState(true);
  const [isNameValid, setIsNameValid] = useState(true);
  const [isDateOfBirthValid, setIsDateOfBirthValid] = useState(true);

  const {nextStep} =props

  const handleDateOfBirth = (value) => {
    const today = new Date();
    const dd = today.getDate();
    const mm = today.getMonth() + 1;
    const yyyy = today.getFullYear();
    const selectedYYYY = Number(value.slice(0, 4));
    const selectedMM = Number(value.slice(5, 7));
    const selectedDD = Number(value.slice(8, 10));
    console.log(value)
    if (
      (selectedYYYY === yyyy && selectedMM === mm && selectedDD <= dd) ||
      (selectedYYYY === yyyy && selectedMM < mm) ||
      selectedYYYY < yyyy 
    ) {
      setIsDateOfBirthValid(true);
    } else setIsDateOfBirthValid(false);
    setForm({
      ...form,
      DateOfBirth:value
    })
    console.log(form)
  };

  const handleSelfIntro = (text) => {
    if (text.length <= 5) {
      setSelfIntroValid(true);
    } else setSelfIntroValid(false);
  };

  const handleFullName = (value) => {
    if (value.length <= 5) {
      setIsNameValid(true);
    } else setIsNameValid(false);
    setForm({
      ...form,
      fullName: value,
    });
    // console.log(value)

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
            onChange={(e)=>handleFullName(e.target.value)}
            className={
              isNameValid ? "full-name-input" : "full-name-input-invalid"
            }
            type="text"
          />
          <span className={isNameValid ? "hide-warning" : "invalid-warning"}>
            Số kí tối đa là 5
          </span>
        </div>
        <div className="form-input form-date-of-birth">
          <div className="label-input">
            <span className="label-require">Must</span>
            <span>Ngày sinh</span>
          </div>
          <input
            onChange={(e)=>handleDateOfBirth(e.target.value)}
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
        <div className="form-input form-city">
          <div className="label-input">
            <span>Thành phố</span>
          </div>
          <select className="select-city-input" type="text" />
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
            Số ký tự không vượt quá 5
          </span>
        </div>
        <span className="text-per-type">0/1000</span>
        <div className="form-personal-image-label">Ảnh cá nhân</div>
        <div className=" form-personal-image">
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
          <input className="full-name-input" type="file" />
        </div>
      </div>

      <button onClick={nextStep} className="next-button">
        Tiếp
      </button>
    </div>
  );
};

export default PersonalInfoForm;
