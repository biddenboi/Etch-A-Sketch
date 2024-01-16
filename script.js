const board = document.querySelector(".board");
const optionsMenu = document.querySelector(".optionsMenu");
const sizeSlider = document.querySelector(".scale");

function checkValid(element) {
    let isMouseDown = false;
    let isMouseEntered = false;
    element.addEventListener("mouseenter", () => {
        isMouseEntered = true;
        checkValidHelper();
    })
    element.addEventListener("mouseleave", () => {
        isMouseEntered = false;
        checkValidHelper();
    })
    element.addEventListener("mouseup", () => {
        isMouseDown = false;
        checkValidHelper();
    })
    element.addEventListener("mousedown", () => {
        isMouseDown = true;
        checkValidHelper();
    })

    function checkValidHelper() {
        if (isMouseDown && isMouseEntered) {
            element.style.backgroundColor = "red";
        }
    }
}

function generateBoard(pixels) {
    while (board.firstChild) board.removeChild(board.firstChild);

    for (let i = 0; i < pixels; i++) {
        const boardRow = document.createElement("div");
        boardRow.classList.add("boardRow");

        for (let j = 0; j < pixels; j++) {
            const boardCol = document.createElement("div");
            boardCol.classList.add("boardCol");
            boardRow.appendChild(boardCol);
            checkValid(boardCol);
        }
        board.appendChild(boardRow);
    }
}


//usage
generateBoard(50);

sizeSlider.addEventListener('mouseup', () => {
    generateBoard(sizeSlider.value);
});

