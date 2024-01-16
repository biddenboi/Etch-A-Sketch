const board = document.querySelector(".board");
const optionsMenu = document.querySelector(".optionsMenu");
const sizeSlider = document.querySelector(".scale");


function createNewBoard(pixels) {
    while (board.firstChild) board.removeChild(board.firstChild);

    for (let i = 0; i < pixels; i++) {
        const boardRow = document.createElement("div");
        boardRow.classList.add("boardRow");

        for (let j = 0; j < pixels; j++) {
            const boardCol = document.createElement("div");
            boardCol.classList.add("boardCol");
            boardRow.appendChild(boardCol);
            boardCol.addEventListener("mouseenter", () => {
                if (isMouseDown) {
                    boardCol.style.backgroundColor = "red";
                }
            })
            boardCol.addEventListener("click", () => {
                boardCol.style.backgroundColor = "red";
            })
        }
        board.appendChild(boardRow);
    }
    let isMouseDown = false;

    const boardCols = document.querySelectorAll(".boardCol");
    boardCols.forEach((boardCol) => {
        boardCol.addEventListener("mousedown", () => {
            isMouseDown = true;
        })
        boardCol.addEventListener("mouseup", () => {
            isMouseDown = false;
        })
    })
}

//usage
createNewBoard(50);

sizeSlider.addEventListener('mouseup', () => {
    createNewBoard(sizeSlider.value);
});

const buttons = optionsMenu.childNodes;


buttons.forEach((button) => {
    button.addEventListener("click", () => {
        
    })
})