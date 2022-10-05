// import "../style/_bai-tap-4-form3.scss";
// import { useEffect, useState } from "react";

// const BaiTap4Form3 = () => {
//   // const [cities, setICties] = useState([])

//   // useEffect(() => {
//   //   const url = "https://provinces.open-api.vn/api/";
//   //   fetch(url)
//   //     .then((response) => response.json())
//   //     .then((data) => {
//   //       setCities(data);
//   //     });
//   // }, []);

//   return (
//     <div className="form__container">
//       <div className="form__container--heading">
//         <img
//           className="line-progress"
//           alt=""
//           src={require("../assets/images/line-pr.png")}
//         ></img>
//         <div className="form__container--heading-name">Đơn ứng tuyển</div>
//         <div className="form__container--heading-steps">
//           <div className="step-1">
//             <div className="step-1-img-container">
//               <img
//                 className="step-1-img"
//                 alt=""
//                 src={require("../assets/images/step1-active.png")}
//               />
//             </div>
//             <div className="form__container--heading-steps-name">
//               Thông tin cá nhân
//             </div>
//             <div></div>
//           </div>
//           <div className="step-2">
//             <div className="step-2-img-container">
//               <img
//                 className="step-2-img"
//                 alt=""
//                 src={require("../assets/images/step2-active.png")}
//               />
//             </div>
//             <div className="form__container--heading-steps-name-2">
//               項目設定
//             </div>
//           </div>

//           <div className="step-3">
//             <div className="step-3-img-container">
//               <img
//                 className="step-3-img"
//                 alt=""
//                 src={require("../assets/images/step3-inactive.png")}
//               />
//             </div>
//             <div className="form__container--heading-steps-name-3">
//               <span>目標テンプレート</span>
//               <span>設定（標準）</span>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="form__container--body">
//         <div className="form-company-container">
//           <select className="select-city-input" type="text" />
//           <img
//             className="trash"
//             src={require("../assets/images/Trash.png")}
//             alt=""
//           />
//         </div>
//         <div className="form-input form-all-position">
//           <div className="label-input">
//             <span className="label-require">Must</span>
//             <span>Vị trí từng làm</span>
//           </div>
//           <input className="full-name-input" type="text" />
//         </div>
//         <div className="form-input form-work-period">
//           <div className="label-input">
//             <span className="label-require">Must</span>
//             <span>Thời gian làm việc</span>
//           </div>
//           <div className="work-period-input-container">
//             <input type="date" className="work-period-input" />
//             <span className="dash">-</span>
//             <input type="date" className="work-period-input" />
//           </div>
//         </div>
//         <div className="form-input form-self-introduction">
//           <div className="label-input">
//             <span> Mô tả về công việc</span>
//           </div>
//           <input className="self-introduction" type="text" />
//         </div>
//       </div>
//         <div className="add-company">
//             <img className="plus" alt="" src={require("../assets/images/Plus.png")} />
//             <span>Thêm công ty</span>
//         </div>
//       <button className="next-button">Tiếp</button>
//       <button className="prev-button">Quay lại</button>
//     </div>
//   );
// };

// export default BaiTap4Form3;