import View from './view';
import * as components from '../componentsLogin';

class LoginPage extends View {
  _parentElement = document.querySelector('.form');
  _inputEmail = document.querySelector('#input__text');
  _inputPassword = document.querySelector('#input__password');

  getInputValues() {
    const email = this._inputEmail.value;
    const password = this._inputPassword.value;

    return [email, password];
  }

  _clearInputs() {
    [this._inputEmail, this._inputPassword].forEach(
      (element) => (element.value = '')
    );
    this._inputEmail.focus();
  }

  renderError() {
    const btn = this._parentElement.querySelector('.form__btn');
    btn.insertAdjacentHTML('beforebegin', components.errorMessageHTML);
    this._clearInputs();
    setTimeout(() => {
      btn.previousElementSibling.remove();
    }, 5000);
  }

  addHandlerLogin(handler) {
    console.log(this._parentElement);
    this._parentElement.addEventListener('click', (event) => {
      event.preventDefault();
      if (!event.target.classList.contains('form__btn')) return;
      handler();
    });
  }
}

export default new LoginPage();
