const board = document.querySelector(".board");
const toolsMenu = document.querySelector(".toolsMenu");
const sizeSlider = document.querySelector(".scale");
const buttons = Array.from(toolsMenu.children);

let color = "paint";

function useBrush(pixel) {
    
}

//registers corresponding effect of each tool
function useTool(pixel) {
    pixel.style.backgroundColor = color;
}

//changes selected button in css
function changeCurrentTool(clickedButton) {
    buttons.forEach((button) => {
        button.classList.remove("toggledButton");
    })
    clickedButton.classList.add("toggledButton");
    currentTool = clickedButton.className;
}

//registers when to paint
function setupPaintEventListeners() {
    const pixels = document.querySelectorAll(".pixel");
    let isMouseDown = false;

    pixels.forEach((pixel) => {
        pixel.addEventListener("mouseenter", () => {
            if (isMouseDown) {
                colorPixel(pixel);
            }
        })
        pixel.addEventListener("click", () => {
            colorPixel(pixel);
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
        changeCurrentTool(button);
}))