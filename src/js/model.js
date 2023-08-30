import { USER } from './config.js';

export const state = {
  isLogged: false,
  currentUser: {
    name: '',
    email: '',
    id: '',
    feedbacks: {
      hasFeedback: false,
      feedbacks: [],
    },

    levels: {
      mapOne: {
        completed: false,
        focusTime: '',
        wrongMoves: '',
        durationToComplete: '',
        hints: '',
      },
      mapTwo: {
        completed: false,
        focusTime: '',
        wrongMoves: '',
        durationToComplete: '',
        hints: '',
      },
      mapThree: {
        completed: false,
        focusTime: '',
        wrongMoves: '',
        durationToComplete: '',
        hints: '',
      },
      mapFour: {
        completed: false,
        focusTime: '',
        wrongMoves: '',
        durationToComplete: '',
        hints: '',
      },
      mapFive: {
        completed: false,
        focusTime: '',
        wrongMoves: '',
        durationToComplete: '',
        hints: '',
      },
      mapSix: {
        completed: false,
        focusTime: '',
        wrongMoves: '',
        durationToComplete: '',
        hints: '',
      },
      mapSeven: {
        completed: false,
        focusTime: '',
        wrongMoves: '',
        durationToComplete: '',
        hints: '',
      },
      mapEight: {
        completed: false,
        focusTime: '',
        wrongMoves: '',
        durationToComplete: '',
        hints: '',
      },
    },
    toWin: {
      mapOne: false,
      mapTwo: false,
      mapThree: false,
      mapFour: false,
      mapFive: false,
      mapSix: false,
      mapSeven: false,
      mapEight: false,
    },
    alreadyEnded: false,
    alreadyBegin: false,
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
  state.currentUser.levels[data.id].hints = data.data.hints;

  state.currentUser.toWin[data.id] = true;

  if (state.currentUser.toWin) console.log(state);
};

export const changeStateEndGame = function () {
  return (state.currentUser.alreadyEnded = true);
};

export const changeStateBegin = function () {
  return (state.currentUser.alreadyBegin = true);
};

export const changeReviewStatus = function (event) {
  state.currentUser.feedbacks.hasFeedback = true;
  state.currentUser.feedbacks.feedbacks.push(event.detail);
  console.log(state);
};
