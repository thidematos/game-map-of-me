import validator from 'validator';
import generateUniqueId from 'generate-unique-id';

export const verifyEmail = function (inputEmail) {
  return validator.isEmail(inputEmail);
};

export const generateID = function () {
  return generateUniqueId();
};
