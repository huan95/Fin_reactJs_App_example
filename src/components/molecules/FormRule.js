import React from 'react';
import styled from 'styled-components';
import Title from '../atoms/Title';
import Input from '../atoms/Input';
import Submit from '../atoms/Submit';
import Names from '../atoms/Names';

const Wrapper = styled.div`
    width: 390px;
    height: 450px;
    margin-left: 380px;
    margin-top: 100px;
    border: 2px solid #000000;
    border-radius: 8px;
`;

const FromRuleTpl = ({
                         email,
                         onChangeEmail,
                         pwd,
                         onChangePwd,
                         onSubmit,
                         pwd_confirm,
                         onChangePwdConfirm
                     }) => (
    <Wrapper >
        <Title title="Login"/>
        <Names content="*" names="Email"/>
        <Input
            isDirty={email.isDirty}
            value={email.value}
            onChange={email.onChange}
            validate={{
                required: true,
                email: true,
            }}
            placeholder={"Input your email"}
        />
        <Names content="*" names="Password"/>
        <Input
            type="password"
            isDirty={pwd.isDirty}
            value={pwd.value}
            onChange={pwd.onChange}
            validate={{
                required: true,
                pwd: true,
                confirmPwd: pwd.value
            }}
            placeholder={"Input your password"}/>
        <Names content="*" names="Password Confirm"/>
        <Input
            isDirty={pwd_confirm.isDirty}
            value={pwd_confirm.value}
            onChange={pwd_confirm.onChange}
            validate={{
                required: true,
                value_confirm: pwd,
                confirmPwd: pwd.value
            }}
            placeholder={"Input your password"}
        />
        <Submit type="button" name="Submit" onClick={onSubmit}/>
    </Wrapper>
);

class FormRule extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: {
                value: "",
                isDirty: false,
                valid: false
            },
            pwd: {
                value: "",
                isDirty: false,
                valid: false
            },
            pwd_confirm: {
                value: "",
                isDirty: false,
                valid: false
            },
        };
    }

    onChange = (event, valid, name) => {
        this.setState({
            [name]: {
                ...this.state[name],
                value: event.target.value,
                isDirty: true,
                valid: valid
            }
        })
    };

    onFocus = (name) => {
        if (!this.state[name].isDirty) {
            this.setState({
                [name]: {
                    ...this.state[name],
                    isDirty: true
                }
            })
        }
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const {email, pwd, pwd_confirm} = this.state;
        const item = {};
        item.email = email;
        item.pwd = pwd;
        item.pwd_confirm = pwd_confirm;
        console.log(item);
        if (this.state.item === "" ){
            return false;
        } else {
            return true;
        }

    };

    render() {
        return (
            <FromRuleTpl
                email={{
                    ...this.state.email,
                    onChange: (e, valid) => this.onChange(e, valid, 'email'),
                }}
                onChangeEmail={e => this.onChange(e, 'email')}

                pwd={{
                    ...this.state.pwd,
                    onChange: (e, valid) => this.onChange(e, valid, 'pwd')
                }}
                onChangePwd={e => this.onChange(e, 'pwd')}

                pwd_confirm={{
                    ...this.state.pwd_confirm,
                    onChange: (e, valid) => this.onChange(e, valid, 'pwd_confirm')
                }}
                onChangePwdConfirm={e => this.onChange(e, 'pwd_confirm')}

                onSubmit={this.handleSubmit}

            />
        )
    }
}

export default FormRule;