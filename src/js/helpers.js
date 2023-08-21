import validator from 'validator';

export const verifyEmail = function (inputEmail) {
  return validator.isEmail(inputEmail);
};
