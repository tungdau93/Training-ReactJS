
import { useRef,useState } from "react"
import { forwardRef } from "react";


const RemoveCompany =(props,ref)=>{
  const {keyRemoveCompany, form,style} = props
  const heightRef = useRef()
 

  const handleRemoveCompany =()=>{
    console.log(style)
  }

return(
  

    <img
    ref={ref}
    onClick={handleRemoveCompany}
    style={style}
      className="new-trash"
      src={require("../assets/images/Trash.png")}
      alt=""
    /> 
  
)
}

export default forwardRef(RemoveCompany)