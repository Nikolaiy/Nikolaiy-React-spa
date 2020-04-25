import React from "react";
import s from "./FormsControls.module.css"

export const Textarea = ({input, meta, ...props}) => {
    let error = meta.error && meta.touched
    return (
        <div>
            <textarea {...input} {...props} className={(error ? s.inputError : '')} />
            {error && <div className={s.textError}>{meta.error}</div>}
        </div>
    )
}

export const Input = ({input, meta, ...props}) => {
    let error = meta.error && meta.touched
    return (
        <div>
            <input {...input} {...props} className={(error ? s.inputError : '')} />
            {error && <div className={s.textError}>{meta.error}</div>}
        </div>
    )
}