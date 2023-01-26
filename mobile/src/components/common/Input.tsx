import React, { TextInput } from 'react-native';

type Props = {
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
    children?: any;
    name?: string | undefined;
    onChangeText?: ((text: string, name?: string) => void) | undefined;
    placeholder?: string;
    show?: boolean;
    style?: any;
    value?: string | undefined;
};

const Input = ({ autoComplete, name, onChangeText, placeholder, show, style, value }: Props) => {
    if (!show) {
        return null;
    }

    return (
        <TextInput
            autoComplete={autoComplete}
            onChangeText={(text) => onChangeText && onChangeText(text, name)}
            placeholder={placeholder}
            style={style}
            value={value}
        />
    );
};

export default Input;

Input.defaultProps = {
    show: true,
};
