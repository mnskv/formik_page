import { useField } from 'formik'
import React from 'react'

export const CustomCheckBox = ({children, ...props}) => {
    const[field, meta] = useField({...props, type:'checkbox'});
  return (
    <div>
        <label>
            <input {...field} {...props} type="checkbox" />
            {children}
        </label>
        {meta.touched && meta.error ? (
            <div className="error">{meta.error}</div>
        ) : null}
    </div>
  )
}
