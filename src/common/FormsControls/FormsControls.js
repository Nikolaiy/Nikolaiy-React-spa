import React from "react";
import s from "./FormsControls.module.css"

export const Textarea = ({input, meta: {touched, error}, ...props}) => {
    let hasError = error && touched;
    return (
        <div className="form-group">
            <form action="" className=''>
                <textarea {...input} {...props} className={(hasError ? s.inputError : '')}/>
                {hasError && <div className={s.textError}>{error}</div>}
            </form>
        </div>
    )
}

export const Input = ({input, meta: {touched, error}, ...props}) => {
    let hasError = error && touched;
    return (
        <div className="form-group">
            <input {...input} {...props} className={(hasError ? s.inputError : '')}/>
            {hasError && <div className={s.textError}>{error}</div>}
        </div>
    )
}