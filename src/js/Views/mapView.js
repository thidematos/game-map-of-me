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
  <div
    data-hash="options"
    class="aside__container btn__hash w-[15vw] h-[30vh]"
  >
    <img src="assets/logout.png" alt="" class="w-[70%]" />
    <h3 class="aside__text">Opções</h3>
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
}

export default new MapView();
