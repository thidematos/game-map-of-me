import { USER } from './config';

const state = {
  isLogged: false,
  currentUser: {
    name: '',
    email: '',
    id: '',
  },
};

export const approveLogin = function (inputEmail, inputPassword) {
  if (inputEmail === USER.user && inputPassword === USER.password) {
    state.currentUser.email = USER.user;
    state.currentUser.name = USER.name;
    state.currentUser.id = USER.id;

    state.isLogged = true;
    return state;
  }
  if (inputEmail !== USER.user || inputPassword === USER.password) {
    return state;
  }
};
