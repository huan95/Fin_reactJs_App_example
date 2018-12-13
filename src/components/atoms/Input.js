import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div``;
const Form = styled.form`
        margin-left: 50px;
`;
const Label = styled.label``;

const Span = styled.span`
        color:red;
        text-align: center;
`;

const Value = styled.input.attrs({
    value: props => props.value,
    onChange: props => props.onChange,
    onFocus: props => props.onFocus,
    placeholder: props => props.placeholder,
    margin: props => props.size || "0.5em",
    padding: props => props.size || "0.5em"
})`
color: #000000;
font-size: 1em;
border: 2px solid #D3D3D3;
border-radius: 8px;
margin: ${props => props.margin};
padding: ${props => props.padding};
margin-left: 60px;
background: #D3D3D3;

`;

const required = (value) => {
    if (!value || value.length === 0) return false;

    return true;
};

const email = (value) => {
    var re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;
    return re.test(value);
};

const pwd = (value) => {
    var pw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    return pw.test(value);
};

const pwd_confirm = (value) => {
    return value;
};

const onChangeInput = (event, fn, validate) => {
    let value = event.target.value;
    let valid = true;

    if (validate.required && !required(value)) {
        valid = false;
    }

    if (validate.email && !email(value)) {
        valid = true;
    }

    if (validate.pwd && !pwd(value)) {
        valid = false;
    }

    if (validate.value_confirm && !pwd_confirm(value)) {
        valid = false;
    }

    fn(event, valid);
};

const Input = ({
                   label,
                   onChange,
                   placeholder,
                   value,
                   validate,
                   isDirty,
                   onFocus,
                   onValidate,
               }) => {
    // console.log(label, validate, required(value), isDirty);
    return (
        <Wrapper>
            {label}
            <Form>
                <Label>
                    <Value
                        placeholder={placeholder}
                        value={value}
                        onChange={e => onChangeInput(e, onChange, validate)}
                        onFocus={onFocus}
                        onValidate={onValidate}
                    />
                </Label>
            </Form>
            {validate.required && !required(value) && isDirty ?
                <Span>Required!</Span>
                : null}
            {validate.value_confirm && !required(value) && isDirty ?
                <Span>Must be password!</Span>
                : null}
            {validate.confirmPwd !== pwd_confirm(value) && isDirty ?
                <Span>Wrong Password!</Span>
                : null}
        </Wrapper>
    )
};

export default Input;