import { useField } from 'formik'
import React from 'react'
import { Field } from 'formik'

export default function KaanKaplanTextInput({...props}) {
    const [field, meta] = useField(props)
    console.log(field)
  return (
    <div>
        <label htmlFor={props.id} className="form-label"> <strong>{props.placeholder} </strong> </label>
        <Field {...field} {...props} error={!!meta.error && meta.touched}></Field>
        
        {meta.touched && !!meta.error ? (
            <div className="form-text" style={{color:"red"}}>
                <i className="fa-solid fa-triangle-exclamation"></i> {meta.error}
            </div>
        ): null}
            
    </div>
  )
}
