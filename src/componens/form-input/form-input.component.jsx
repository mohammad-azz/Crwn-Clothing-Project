import React from "react";
import './form-input.style.scss';

const FormInput=({handleChange,lable,...OtherProps})=>
(
    <div className="group">

        <input className="form-input" 
        onChange={handleChange}
        {...OtherProps}/>
       {
           lable ?
           (<lable className={`${OtherProps.value.lenght}`}/>)
           :null
       }
    </div>
)

export default FormInput;