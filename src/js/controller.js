import * as model from './model.js';

import { HASHS } from './config.js';

import { VIEWS } from './config.js';

import { instanceView } from './Views/view.js';

import loginView from './Views/loginView.js';

import mapView from './Views/mapView.js';

const controlLogin = function () {
  const [email, password] = loginView.getInputValues();

  model.approveLogin(email, password);

  if (!model.state.isLogged) {
    return loginView.renderError();
  } else {
    model.changeHash();
    console.log(model.state);
  }
};

const controlHashChange = function () {
  const currentHash = model.state.currentHash;
  console.log(`It works! Hash: ${model.state.currentHash}`);
  const index = HASHS.findIndex((hash) => hash === currentHash);
  const currentView = VIEWS[index];
  currentView.renderHTML([currentView.generateHTML(model.state)], model.state);
  currentView.addGetHash(model.changeHash);
};

const getResultsHandler = function (data) {
  model.getResults(data);
};

const init = function () {
  model.changeHash('login');
  instanceView.addHandlerChangeHash(controlHashChange);
  loginView.addHandlerLogin(controlLogin);
  window.addEventListener('victory', (event) => {
    getResultsHandler(event.detail);
  });
};
init();
