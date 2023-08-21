import * as components from '../componentsLogin.js';

class View {
  _data = '';
  _body = document.querySelector('body');

  _clearParentElement() {
    this._parentElement.innerHTML = '';
  }

  renderHTML(components) {
    console.log(components);
    components.forEach((component) => {
      this._parentElement.insertAdjacentHTML('beforeend', component);
    });
  }
}

export default View;
