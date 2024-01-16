const board = document.querySelector(".board");
const toolsMenu = document.querySelector(".toolsMenu");
const sizeSlider = document.querySelector(".scale");
const buttons = Array.from(toolsMenu.children);

let currentTool = "paint";
function getCurrentTool() {

}

function colorPixel(pixel) {
    pixel.style.backgroundColor = color;
}

function getToolFromClass() {

}

function changeCurrentButton(clickedButton) {
    buttons.forEach((button) => {
        button.classList.remove("toggledButton");
    })
    clickedButton.classList.add("toggledButton");
    currentTool = clickedButton.className;
}

function setupPaintEventListeners() {
    const pixels = document.querySelectorAll(".pixel");
    let isMouseDown = false;

    pixels.forEach((pixel) => {
        pixel.addEventListener("mouseenter", () => {
            if (isMouseDown) {
                pixel.style.backgroundColor = "red";
            }
        })
        pixel.addEventListener("click", () => {
            pixel.style.backgroundColor = "red";
        })

        pixel.addEventListener("mousedown", () => {
            isMouseDown = true;
        })
        pixel.addEventListener("mouseup", () => {
            isMouseDown = false;
        })
    })
}

function createNewBoard(dimensions) {
    while (board.firstChild) board.removeChild(board.firstChild);

    for (let i = 0; i < dimensions; i++) {
        const boardRow = document.createElement("div");
        boardRow.classList.add("boardRow");

        for (let j = 0; j < dimensions; j++) {
            const pixel = document.createElement("div");
            pixel.classList.add("pixel");
            boardRow.appendChild(pixel);
            
        }
        board.appendChild(boardRow);
    }
    setupPaintEventListeners();
}

//usage
createNewBoard(50);

sizeSlider.addEventListener('mouseup', () => {
    createNewBoard(sizeSlider.value);
});


buttons.forEach((button) => 
    button.addEventListener("click", () => {
        changeCurrentButton(button);
}))