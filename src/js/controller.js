import * as model from './model.js';

import loginView from './Views/loginView.js';

const controlLogin = function () {
  const [email, password] = loginView.getInputValues();
  const data = model.approveLogin(email, password);
  if (!data.isLogged) loginView.renderError();
};

const init = function () {
  loginView.addHandlerLogin(controlLogin);
};
init();
