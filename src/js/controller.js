import * as model from './model.js';

import loginView from './Views/loginView.js';

const controlLogin = function () {
  const [email, password] = loginView.getInputValues();

  const data = model.approveLogin(email, password);

  if (!model.state.isLogged) loginView.renderError();
  console.log(model.state);
};

const init = function () {
  loginView.addHandlerLogin(controlLogin);
};
init();
