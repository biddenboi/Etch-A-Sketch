const board = document.querySelector(".board");
const optionsMenu = document.querySelector(".optionsMenu");
const sizeSlider = document.querySelector(".scale");


function paint(target, type) {
    target.style.backgroundColor = "red";
}

function generateBoard(pixels) {
    while (board.firstChild) board.removeChild(board.firstChild);

    for (let i = 0; i < pixels; i++) {
        const boardRow = document.createElement("div");
        boardRow.classList.add("boardRow");
        for (let j = 0; j < pixels; j++) {
            const boardCol = document.createElement("div");
            boardCol.classList.add("boardCol");
            boardCol.addEventListener('mouseenter', () => {
                boardCol.style.backgroundColor = "red";
            });
            boardRow.appendChild(boardCol);
        }
        board.appendChild(boardRow);
    }
}

sizeSlider.addEventListener('mouseup', () => {
    generateBoard(sizeSlider.value);
  });