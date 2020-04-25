export const required = value => {
    if (value) return undefined;
    return 'Field is Required'
}

export const maxLengthCreater = max => value => {
    if (value.length > max) return `Max length is ${max} symbol`;
    return undefined
}