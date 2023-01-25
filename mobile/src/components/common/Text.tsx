import React, { Text as ReactNativeText } from 'react-native';

type Props = {
    style?: any;
    children: any;
};

const Text = ({ children, style }: Props) => {
    return <ReactNativeText style={style}>{children}</ReactNativeText>;
};

export default Text;
