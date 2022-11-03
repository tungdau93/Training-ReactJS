import { useState } from "react";
import AboutCompany from "./AboutCompanyForm";
import PersonalExpForm from "./PersonalExpForm";
import PersonalInfoForm from "./PersonalInfoForm";
import { formContext } from "./PersonalExpForm";
import { createContext } from "react";

export const ParentContext = createContext()

const BaiTap4 = () => {
  const [stepForm, setStepForm] = useState(1);
  const [personalInfoForm, setPersonalInfoForm] = useState({
    fullName: "",
    dateOfBirth: "",
    city: "",
    jobPosition: [],
    selfDescription: "",
    avatar: "",
  })

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
    <ParentContext.Provider value={{personalInfoForm,setPersonalInfoForm}}>
      {stepForm === 1 ? (
        <PersonalInfoForm   nextStep={nextStep} prevStep={prevStep} />
      ) : stepForm === 2 ? (
        <PersonalExpForm nextStep={nextStep} prevStep={prevStep} />
      ) : (
        <AboutCompany prevStep={prevStep} />
      )}

      <ABC />
    </ParentContext.Provider>
  );
};

export default BaiTap4;
