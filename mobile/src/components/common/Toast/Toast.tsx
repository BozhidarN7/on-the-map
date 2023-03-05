import { ToastAndroid } from 'react-native';

enum ToastType {
  Simple,
  Gravity,
  GravityAndOffset,
}

type ToatProps = {
  duration: number;
  gravity?: number;
  message: string;
  type: ToastType;
};

const toast = ({ message, duration, type, gravity }: ToatProps) => {
  console.log(type);

  if (ToastType.Simple === type) {
    ToastAndroid.show(message, duration);
  }

  if (ToastType.Gravity === type) {
    ToastAndroid.showWithGravity(message, duration, gravity!);
  }
};

export default toast;
