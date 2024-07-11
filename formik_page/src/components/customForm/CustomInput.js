import { useField } from 'formik'
import React from 'react'

const CustomInput = ({label, ...props}) => {
  const[field, meta] = useField(props)


  return (
    <div>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input {...field}{...props} />
      {meta.touched && meta.error?(
      <div className='error'>{meta.error}</div>
      ):null}  
    </div>
    
  );
}

export default CustomInput