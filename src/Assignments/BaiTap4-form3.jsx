import "../style/_bai-tap-4-form3.scss";

const BaiTap4Form3 = () => {
  // const [cities, setICties] = useState([])

  // useEffect(() => {
  //   const url = "https://provinces.open-api.vn/api/";
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((data) => 
  //       setCities(data);
  //     });
  // }, []);

  return (
    <div className="form__container-3">
      <div className="form__container--heading-3">
        <img
          className="line-progress-3"
          alt=""
          src={require("../assets/images/line-pr.png")}
        ></img>
        <div className="form__container--heading-name-3">Đơn ứng tuyển</div>
        <div className="form__container--heading-steps-3">
          <div className="step-1-3">
            <div className="step-1-img-container-3">
              <img
                className="step-1-img-3"
                alt=""
                src={require("../assets/images/step1-active.png")}
              />
            </div>
            <div className="form__container--heading-steps-name-3">
              Thông tin cá nhân
            </div>
            <div></div>
          </div>
          <div className="step-2-3">
            <div className="step-2-img-container-3">
              <img
                className="step-2-img-3"
                alt=""
                src={require("../assets/images/step2-active.png")}
              />
            </div>
            <div className="form__container--heading-steps-name-2-3">
              項目設定
            </div>
          </div>

          <div className="step-3-3">
            <div className="step-3-img-container-3">
              <img
                className="step-3-img-3"
                alt=""
                src={require("../assets/images/step3-inactive.png")}
              />
            </div>
            <div className="form__container--heading-steps-name-3-3">
              <span>目標テンプレート</span>
              <span>設定（標準）</span>
            </div>
          </div>
        </div>
      </div>
      <div className="form__container--body-3">
        <div className="form-company-container-3">
          <select className="select-city-input-3" type="text" />
          <img
            className="trash-3"
            src={require("../assets/images/Trash.png")}
            alt=""
          />
        </div>
        <div className="form-input-3 form-all-position-3">
          <div className="label-input-3">
            <span className="label-require-3">Must</span>
            <span>Vị trí từng làm</span>
          </div>
          <input className="full-name-input-3" type="text" />
        </div>
        <div className="form-input-3 form-work-period-3">
          <div className="label-input-3">
            <span className="label-require-3">Must</span>
            <span>Thời gian làm việc</span>
          </div>
          <div className="work-period-input-container-3">
            <input type="date" className="work-period-input-3" />
            <span className="dash">-</span>
            <input type="date" className="work-period-input-3" />
          </div>
        </div>
        <div className="form-input-3 form-self-introduction-3">
          <div className="label-input-3">
            <span> Mô tả về công việc</span>
          </div>
          <input className="self-introduction-3" type="text" />
        </div>
      </div>
        <div className="add-company-3">
            <img className="plus-3" alt="" src={require("../assets/images/Plus.png")} />
            <span>Thêm công ty</span>
        </div>
      <button className="next-button-3">Tiếp</button>
      <button className="prev-button-3">Quay lại</button>
    </div>
  );
};

export default BaiTap4Form3;