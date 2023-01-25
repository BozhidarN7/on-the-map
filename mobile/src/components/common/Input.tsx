import React, { TextInput } from 'react-native';

type Props = {
    style?: any;
    placeholder?: string;
    autoComplete:
        | 'birthdate-day'
        | 'birthdate-full'
        | 'birthdate-month'
        | 'birthdate-year'
        | 'cc-csc'
        | 'cc-exp'
        | 'cc-exp-day'
        | 'cc-exp-month'
        | 'cc-exp-year'
        | 'cc-number'
        | 'email'
        | 'gender'
        | 'name'
        | 'name-family'
        | 'name-given'
        | 'name-middle'
        | 'name-middle-initial'
        | 'name-prefix'
        | 'name-suffix'
        | 'password'
        | 'password-new'
        | 'postal-address'
        | 'postal-address-country'
        | 'postal-address-extended'
        | 'postal-address-extended-postal-code'
        | 'postal-address-locality'
        | 'postal-address-region'
        | 'postal-code'
        | 'street-address'
        | 'sms-otp'
        | 'tel'
        | 'tel-country-code'
        | 'tel-national'
        | 'tel-device'
        | 'username'
        | 'username-new'
        | 'off'
        | undefined;
    show?: boolean;
    children?: any;
};

const Input = ({ style, placeholder, autoComplete, show }: Props) => {
    if (!show) {
        return null;
    }

    return (
        <TextInput
            style={style}
            placeholder={placeholder}
            autoComplete={autoComplete}
        />
    );
};

export default Input;

Input.defaultProps = {
    show: true,
};
