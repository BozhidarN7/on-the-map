export const NAME_MAX_LENGTH = 200;
export const PASSWORD_VALIDATION_REGEX = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[!#\/@_\-]).{8,32}$/;
export const EMAIL_VALIDATION_REGEX =
  /^(?=.{1,256})(?=.{1,64}@)[A-Za-z0-9_-]+(?:\.[A-Za-z0-9_-]+)*@[A-Za-z0-9_-]+(?:\.[A-Za-z0-9_-]+)*\.[A-Za-z]{2,}$/;
