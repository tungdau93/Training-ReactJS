import { useState } from "react";
import AboutCompany from "./AboutCompanyForm";
import PersonalExpForm from "./PersonalExpForm";
import PersonalInfoForm from "./PersonalInfoForm";

const BaiTap4 = () => {
  const [stepForm, setStepForm] = useState(1);

  const nextStep = () => {
    const newStep = stepForm + 1;
    setStepForm(newStep);
  };

  const prevStep = () => {
    const newStep = stepForm - 1;
    setStepForm(newStep);
  };

  const ABC = () => {
    switch ('') {
      case '':
        
        break;
    
      default:
        break;
    }
    return <></>;
  };

  return (
    <>
      {stepForm === 1 ? (
        <PersonalInfoForm nextStep={nextStep} prevStep={prevStep} />
      ) : stepForm === 2 ? (
        <PersonalExpForm nextStep={nextStep} prevStep={prevStep} />
      ) : (
        <AboutCompany prevStep={prevStep} />
      )}

      <ABC />
    </>
  );
};

export default BaiTap4;
