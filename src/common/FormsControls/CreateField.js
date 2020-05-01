import React from 'react';
import {Field} from "redux-form";


export const createField = (placeholder, validates, name, components, props={}, text='') => (
    <div>
        <Field placeholder={placeholder}
               validate={validates}
               name={name} component={components} {...props}/> {text}
    </div>
)

