import { useField } from 'formik'
import React from 'react'

const CustomSelect = ({label, ...props}) => {
    const[field, meta] =useField(props)
  return (
    <div>
        <label>{label}</label>
        <select {...field} {...props} className="form-control" />
        {meta.touched && meta.error?(
            <div className='error'>{meta.error}</div>
        ): null}
    </div>
  );
}

export default CustomSelect