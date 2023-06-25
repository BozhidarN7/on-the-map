import { NativeModules } from 'react-native';

const CustomToastModule = NativeModules.CustomToastModule;

const CustomToast = {
  show: (message: string) => {
    CustomToastModule.showToast(message);
  },
};

export default CustomToast;
