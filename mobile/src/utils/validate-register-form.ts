import { RegisterData } from '@app/components/forms/AuthForm/AuthTypes';
import {
  EMAIL_VALIDATION_REGEX,
  NAME_MAX_LENGTH,
  PASSWORD_VALIDATION_REGEX,
} from '@app/constants/register-data-restrictions';

const validateRegisterForm = (registerData: RegisterData) => {
  const { firstName, lastName, email, password, repeatPassword } = registerData;

  if (!isNameValid(firstName)) {
    return;
  }

  if (!isNameValid(lastName)) {
    return;
  }

  if (!isPasswordValid(password)) {
    return;
  }

  if (!isPasswordValid(repeatPassword)) {
    return;
  }

  if (password !== repeatPassword) {
    return;
  }

  if (!isEmailValid(email)) {
    return;
  }

  return true;
};

const isNameValid = (name: string) => {
  if (!name || !name.trim() || name.length > NAME_MAX_LENGTH) {
    return false;
  }

  return true;
};

const isPasswordValid = (password: string) => {
  if (!PASSWORD_VALIDATION_REGEX.test(password)) {
    return false;
  }

  return true;
};

const isEmailValid = (email: string) => {
  if (!EMAIL_VALIDATION_REGEX.test(email)) {
    return false;
  }

  return true;
};

export default validateRegisterForm;
