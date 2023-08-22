import { USER } from './config.js';

export const state = {
  isLogged: false,
  currentUser: {
    name: '',
    email: '',
    id: '',
    levels: {
      mapOne: {
        completed: false,
        focusTime: '',
        wrongMoves: '',
        durationToComplete: '',
      },
      mapTwo: {
        completed: false,
        focusTime: '',
        wrongMoves: '',
        durationToComplete: '',
      },
      mapThree: {
        completed: false,
        focusTime: '',
        wrongMoves: '',
        durationToComplete: '',
      },
      mapFour: {
        completed: false,
        focusTime: '',
        wrongMoves: '',
        durationToComplete: '',
      },
      mapFive: {
        completed: false,
        focusTime: '',
        wrongMoves: '',
        durationToComplete: '',
      },
      mapSix: {
        completed: false,
        focusTime: '',
        wrongMoves: '',
        durationToComplete: '',
      },
      mapSeven: {
        completed: false,
        focusTime: '',
        wrongMoves: '',
        durationToComplete: '',
      },
      mapEight: {
        completed: false,
        focusTime: '',
        wrongMoves: '',
        durationToComplete: '',
      },
    },
  },
  currentHash: '',
  stopperTimer: '',
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

export const changeHash = function (hash = 'adventure-map') {
  if (!state.isLogged) return;
  location.hash = `#${hash}`;
  state.currentHash = hash;
  console.log(state);
  return state;
};

export const getResults = function (data) {
  state.currentUser.levels[data.id].completed = true;
  state.currentUser.levels[data.id].focusTime = Number(
    data.data.focusTime.toFixed(2)
  );
  state.currentUser.levels[data.id].wrongMoves = data.data.wrongMoves;
  state.currentUser.levels[data.id].durationToComplete = data.data.completeTime;

  console.log(state);
};
