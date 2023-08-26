import View from './view.js';

class MapView extends View {
  constructor() {
    super();
  }
  generateHTML(data) {
    return `
<main
class="main w-screen min-h-screen bg-gray-50 flex flex-col justify-evenly items-center"
>
<div class="flex flex-row w-full justify-evenly items-center">
  <div
    data-hash="info"
    class="aside__container btn__hash w-[15vw] h-[30vh]"
  >
    <img src="assets/triade.png" alt="" />
    <h3 class="aside__text">Sobre o TEA</h3>
  </div>
  <div class="flex flex-row justify-center items-center">
    <img src="assets/logo300.png" alt="" class="w-[40%]" />
    <h1 class="font-amatic text-6xl">The Map of Me</h1>
  </div>
  <div class="  w-[15vw] h-[30vh]">
  </div>
</div>

<section class="flex flex-row justify-evenly w-full items-center">
  <div
    data-hash="analytics"
    class="aside__container btn__hash h-[40vh] w-[17vw]"
  >
    <img src="assets/parents.png" alt="" />
    <h3 class="aside__text">Para os pais</h3>
  </div>
  <article
    class="w-[1000px] h-[600px] border border-solid border-azulClaro bg-gray0 rounded-md shadow-lg"
  >
    <div class="w-full h-1/2 flex flex-row">
      <div data-hash="mapOne" class="btn__hash map__piece map__piece-discovered">
        <img src="assets/map-1.png" alt="" />
      </div>
      <div data-hash="mapTwo" class="${
        data.currentUser.levels.mapOne.completed ? 'btn__hash' : ''
      } map__piece map__piece-${
      data.currentUser.levels.mapOne.completed ? 'discovered' : 'undiscovered'
    }">
        <img src="${
          data.currentUser.levels.mapOne.completed
            ? 'assets/map-2.png'
            : 'assets/undiscovered.png'
        }" alt="" />
      </div>
      <div data-hash="mapThree" class="${
        data.currentUser.levels.mapTwo.completed ? 'btn__hash' : ''
      } map__piece map__piece-${
      data.currentUser.levels.mapTwo.completed ? 'discovered' : 'undiscovered'
    }">
        <img src="${
          data.currentUser.levels.mapTwo.completed
            ? 'assets/map-3.png'
            : 'assets/undiscovered.png'
        }" alt="" />
      </div>
      <div data-hash="mapFour" class="${
        data.currentUser.levels.mapThree.completed ? 'btn__hash' : ''
      } map__piece map__piece-${
      data.currentUser.levels.mapThree.completed ? 'discovered' : 'undiscovered'
    }">
        <img src="${
          data.currentUser.levels.mapThree.completed
            ? 'assets/map-4.png'
            : 'assets/undiscovered.png'
        }" alt="" />
      </div>
    </div>
    <div class="w-full h-1/2 flex flex-row">
      <div data-hash="mapFive" class="${
        data.currentUser.levels.mapFour.completed ? 'btn__hash' : ''
      } map__piece map__piece-${
      data.currentUser.levels.mapFour.completed ? 'discovered' : 'undiscovered'
    }">
        <img src="${
          data.currentUser.levels.mapFour.completed
            ? 'assets/map-5.png'
            : 'assets/undiscovered.png'
        }" alt="" />
      </div>
      <div data-hash="mapSix" class="${
        data.currentUser.levels.mapFive.completed ? 'btn__hash' : ''
      } map__piece map__piece-${
      data.currentUser.levels.mapFive.completed ? 'discovered' : 'undiscovered'
    }">
        <img src="${
          data.currentUser.levels.mapFive.completed
            ? 'assets/map-6.png'
            : 'assets/undiscovered.png'
        }" alt="" />
      </div>
      <div data-hash="mapSeven" class="${
        data.currentUser.levels.mapSix.completed ? 'btn__hash' : ''
      } map__piece map__piece-${
      data.currentUser.levels.mapSix.completed ? 'discovered' : 'undiscovered'
    }">
        <img src="${
          data.currentUser.levels.mapSix.completed
            ? 'assets/map-7.png'
            : 'assets/undiscovered.png'
        }" alt="" />
      </div>
      <div data-hash="mapEight" class="${
        data.currentUser.levels.mapSeven.completed ? 'btn__hash' : ''
      } map__piece map__piece-${
      data.currentUser.levels.mapSeven.completed ? 'discovered' : 'undiscovered'
    }">
        <img src="${
          data.currentUser.levels.mapSeven.completed
            ? 'assets/map-8.png'
            : 'assets/undiscovered.png'
        }" alt="" />
      </div>
    </div>
  </article>
  <div
    data-hash="memories"
    class="aside__container btn__hash h-[40vh] w-[17vw]"
  >
    <img src="assets/notebook.png" alt="" />
    <h3 class="aside__text">Caderno de lembranças!</h3>
  </div>
</section>
</main>
`;
  }

  renderHTML(component, data) {
    this._clearParentElement();
    this._data = data;

    this._body.insertAdjacentHTML('beforeend', component);
    this._verifyEndGame();
  }

  generateEndModal() {
    return `
    <div
    class="modal__cover bg-[rgba(0,0,0,0.39)] w-screen h-screen absolute z-[9998]"
  ></div>
  <div class="modal__victory">
    <div class="w-full flex flex-row justify-evenly items-center">
      <img src="./assets/logo300.png" alt="" class="w-[15%]" />
      <div class="flex flex-col justify-center items-center gap-3">
        <h2 class="text-orange-400 text-5xl font-amatic">Parábens!</h2>
        <h2 class="text-xl">O mapa da floresta foi inteiro descoberto!</h2>
      </div>
      <div
        data-hash="adventure-map"
        class="w-[20%] btn__hash flex flex-col justify-center items-center bg-brancoAzulado p-2 rounded-lg shadow-xl cursor-pointer"
      >
        <img src="./assets/map.png" alt="" class="drop-shadow-lg w-[60%]" />
        <h4
          class="font-amatic font-bold text-3xl text-orange-400 drop-shadow-lg"
        >
          Retornar à aventura!
        </h4>
      </div>
    </div>
    <img
      src="./assets/fullMap.png"
      alt=""
      class="w-[35%] rounded-lg border border-solid border-azulClaro shadow-lg mb-3"
    />
    <div class="flex flex-col justify-center items-center gap-3 mb-2">
      <h3>Fique a vontade para jogar novamente =]</h3>
      <h4>
        Esperamos que tenha se divertido e aprendido um pouco mais sobre suas
        emoções, seu próprio mapa, seu...
      </h4>
    </div>
    <h5 class="font-amatic text-azulEscuro text-5xl mb-4">The Map of Me!</h5>
    <div class="w-full flex flex-row justify-center items-center">
      <img src="./assets/fiap.png" alt="" class="w-[20%]" />
      <h3 class="w-[50%] flex flex-row justify-center">
        Obrigado por embarcar conosco nessa jornada!
      </h3>
      <img src="./assets/palo-alto.png" alt="" class="w-[20%]" />
    </div>
  </div>
    `;
  }

  _handleModalCover() {
    const modal = document.querySelector('.modal__victory');
    const cover = document.querySelector('.modal__cover');
    const event = new CustomEvent('ended', { detail: this._data });

    cover.addEventListener('click', (e) => {
      window.dispatchEvent(event);
      modal.remove();
      cover.remove();
    });
  }

  _verifyEndGame() {
    const wins = Object.values(this._data.currentUser.toWin);

    if (!wins.every((win) => win === true)) return;

    if (!this._data.currentUser.alreadyEnded) {
      const html = this.generateEndModal();
      this._body.insertAdjacentHTML('afterbegin', html);
      this._handleModalCover();
    }
  }
}

export default new MapView();
