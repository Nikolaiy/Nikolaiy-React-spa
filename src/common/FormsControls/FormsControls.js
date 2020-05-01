import React from "react";
import s from "./FormsControls.module.css"

export const Textarea = ({input, meta: {touched, error}, ...props}) => {
    let hasError = error && touched;
    return (
        <div>
            <textarea {...input} {...props} className={(hasError ? s.inputError : '')} />
            {hasError && <div className={s.textError}>{error}</div>}
        </div>
    )
}

export const Input = ({input, meta: {touched, error}, ...props}) => {
    let hasError = error && touched;
    return (
        <div>
            <input {...input} {...props} className={(hasError ? s.inputError : '')} />
            {hasError && <div className={s.textError}>{error}</div>}
        </div>
    )
}