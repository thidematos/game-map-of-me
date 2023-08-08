class Puzzle {
  elDragged;
  spaces;
  pieces;
  rightMoves = 0;
  constructor(numX, numY, imgPath) {
    this.piecesContainer = document.querySelector('.pieces__container');
    this.spacesContainer = document.querySelector('.spaces__container');

    this.#createSpaces(numX, numY, this.spacesContainer);
    this.#createPieces(this.spaces, imgPath, this.piecesContainer);

    this.#handleSpaceEvents(this.spaces);
    this.#handlePieceEvents();
  }

  //Helpers
  #calculateSpacesSize(spacesContainer, numX, numY) {
    const height = Number.parseInt(getComputedStyle(spacesContainer).height);
    const width = Number.parseInt(getComputedStyle(spacesContainer).width);

    return [height / numY, width / numX];
  }

  #createRowsHTML(pieceHeight, numPiecesY, spacesContainer) {
    const xHTML = `<div style='height: ${pieceHeight}px; width: 100%' class="xcontainer__wrapper borders flex flex-row flex-nowrap justify-center items-center"></div>`;

    //Adding the Rows (X) HTML
    for (let i = 1; i <= numPiecesY; i++) {
      spacesContainer.insertAdjacentHTML('beforeend', xHTML);
    }
  }

  #createColsHTML(pieceWidth, numPiecesX) {
    const yHTML = `<img style='height: 100%; width: ${pieceWidth}px' src="assets/transparent.png" class="space borders block" alt=""/>`;

    //Selecting All inserted rows (X)
    const xContainers = [...document.querySelectorAll('.xcontainer__wrapper')];

    //Removing undesired borders
    xContainers.at(-1).style.borderBottom = '1px solid rgb(251 146 60)';
    xContainers.at(0).style.borderTop = 'none';

    //Adding the Cols (Y) HTML
    xContainers.forEach((container) => {
      for (let i = 1; i <= numPiecesX; i++) {
        container.insertAdjacentHTML('beforeend', yHTML);
      }
    });
  }

  #createPiecesHTML(imgPath, piecesContainer, ind, lengthSpaces) {
    const piecesHTML = `<img src="assets/${imgPath}-${
      ind + 1
    }.png" alt="" style='order: ${Math.trunc(
      Math.random() * lengthSpaces
    )}; ' class="piece borders block" draggable="true" data-piece='${
      ind + 1
    }'/>`;

    piecesContainer.insertAdjacentHTML('beforeend', piecesHTML);

    //Selected all the pieces. Copy to Global Variable
    const pieces = document.querySelectorAll('.piece');
    this.pieces = pieces;

    //Adjust Piece sizes
    pieces.forEach((piece, ind) => {
      piece.style.width = getComputedStyle(this.spaces[ind]).width;
      piece.style.height = getComputedStyle(this.spaces[ind]).height;
    });
  }

  #resetAfterRightMove() {
    this.elDragged.remove();
    this.elDragged = null;
    //Scored!
    this.rightMoves++;
  }

  #verifyWin(piecesContainer) {
    if (this.pieces.length === this.rightMoves) {
      //Hide the Pieces Container
      piecesContainer.classList.add('hidden');

      this.#showVictoryModal();
    }
  }

  #showVictoryModal() {
    const modal = document.querySelector('.modal');
    this.#settleModalCover();

    modal.classList.remove('hidden');

    setTimeout(() => {
      modal.style.opacity = 1;
      modal.classList.add('flex');
    }, 100);
  }

  #settleModalCover() {
    const modalCover = document.querySelector('.modal__cover');
    const body = document.querySelector('body');
    modalCover.style.backgroundColor = 'rgba(0,0,0,0.5)';
    modalCover.style.width = getComputedStyle(body).width;
    modalCover.style.height = getComputedStyle(body).height;
    modalCover.classList.remove('hidden');
  }

  #hightlightAvaliableSpaces(spaces, status) {
    spaces.forEach((space) => {
      if (status) space.style.backgroundColor = 'rgba(192, 234, 185, 0.34)';
      else space.style.backgroundColor = '';
    });
  }

  //Space Handlers
  #dragOverEvent(event, space) {
    //Get the current dragging Element
    const draggingPiece = document.querySelector('.is-dragging');

    //Guard Clauses
    //Verifies if the current dragged over space is already occupied
    if (event.target.dataset.completed) return;
    //Verifies if some element is been dragged at all.
    if (!draggingPiece) return;

    //Ghost effect
    space.src = draggingPiece.src;
  }

  #dragLeaveEvent(event, space) {
    //Guard Clauses
    //Verifies if there is a dragged Element
    if (!this.elDragged) return;
    //Verifies if the space is already occupied
    if (event.target.dataset.completed) return;

    //Ghost effect
    space.src = 'assets/transparent.png';
  }

  #dropEvent(event) {
    //Guard Clause
    //Verifies if some element is dragged
    if (!this.elDragged) return;

    const spaceTarget = event.target;
    const pieceTarget = this.elDragged;

    //Log the Space ID
    console.log(spaceTarget.dataset.space);
    //Log the Piece ID
    console.log(pieceTarget.dataset.piece);

    //Verifies if the Piece dropped matchs with the Space target
    if (spaceTarget.dataset.space === pieceTarget.dataset.piece) {
      //Piece occupies the empty space
      spaceTarget.src = pieceTarget.src;
      //Marks the space as current Occupied
      spaceTarget.dataset.completed = true;

      this.#resetAfterRightMove();

      //Verifies if the game is won
      this.#verifyWin(this.piecesContainer);
    } else {
      if (spaceTarget.dataset.completed) return;
      spaceTarget.src = 'assets/transparent.png';
    }
  }

  //Piece Handlers
  #dragStartEvent(event, piece) {
    //Sets the current element status to dragging
    piece.classList.add('is-dragging');

    this.elDragged = event.target;

    //Hightlight the avaliable spaces
    this.#hightlightAvaliableSpaces(this.spaces, true);
  }

  //Internals API Methods
  //Creates spaces of the Puzzle.
  #createSpaces(numPiecesX, numPiecesY, spacesContainer) {
    const [pieceHeight, pieceWidth] = this.#calculateSpacesSize(
      spacesContainer,
      numPiecesX,
      numPiecesY
    );

    //Log the Pieces to make the puzzle
    console.log(pieceHeight);
    console.log(pieceWidth);

    //Create HTML spacesElements
    this.#createRowsHTML(pieceHeight, numPiecesY, spacesContainer);
    this.#createColsHTML(pieceWidth, numPiecesX);

    //Settint Global Variables
    this.spaces = document.querySelectorAll('.space');
  }

  //Creates pieces of the Puzzle
  #createPieces(spacesArr, imgPath, piecesContainer) {
    spacesArr.forEach((space, ind, arr) => {
      //Creating ID Number for the space.
      space.dataset.space = ind + 1;

      //Creating Pieces HTML
      this.#createPiecesHTML(imgPath, piecesContainer, ind, arr.length);
    });
  }

  //addEventListeners to the Spaces
  #handleSpaceEvents(spacesArr) {
    spacesArr.forEach((space) => {
      //Handling with the Drag Over Event
      space.addEventListener('dragover', (event) => {
        event.preventDefault();
        this.#dragOverEvent(event, space);
      });

      //Handling with the Drag Leave Event
      space.addEventListener('dragleave', (event) => {
        this.#dragLeaveEvent(event, space);
      });

      //Handling with the Drop Event
      space.addEventListener('drop', this.#dropEvent.bind(this));
    });
  }

  //addEventListeners to the Pieces
  #handlePieceEvents() {
    const pieces = this.pieces;

    pieces.forEach((piece) => {
      //Handling the Drag Start Event
      piece.addEventListener('dragstart', (event) => {
        this.#dragStartEvent(event, piece);
      });

      //Handling the Drag End Event
      piece.addEventListener('dragend', (event) => {
        event.target.classList.remove('is-dragging');
        this.#hightlightAvaliableSpaces(this.spaces, false);
      });
    });
  }
}

//Estrutura básica do HTML
//spaces container 1000 x 600px
