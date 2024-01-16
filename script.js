const board = document.querySelector(".board");
const toolsMenu = document.querySelector(".toolsMenu");
const sizeSlider = document.querySelector(".scale");
const buttons = Array.from(toolsMenu.children);

let boardSize = 50;
let clickAction;

function changeCurrentTool(newTool) {
    let currentColor = "red";

    buttons.forEach((button) => {
        button.classList.remove("toggledButton");
    })
    

    if (newTool.className === "pickerWheel") {

    }else if (newTool.className === "paintBrush") {
        clickAction = (pixel) => {
            pixel.style.backgroundColor = currentColor;
        }
    }else if (newTool.className === "rainbowBrush") {
        clickAction = (pixel) => {
            const red = Math.floor(Math.random() * 256);
            const green = Math.floor(Math.random() * 256);
            const blue = Math.floor(Math.random() * 256);
            pixel.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        }
    }else if (newTool.className === "fillTool") {
        function getPixelofID(pixelID) {
            return document.querySelector(`${pixelID}`);
        }

        function checkValidFill(pixelID) {
            const pixel = getPixelofID(pixelID);
            if (pixel !== undefined && pixel.style.backgroundColor === undefined) {//maybe change this
                return true;
            }
        }

        clickAction = (pixel) => {

            pixel.style.backgroundColor = currentColor;
            
            if (checkValidFill(pixel.id + 50)) clickAction();
        }
    }else if (newTool.className === "eraser") {
        clickAction = () => {
            
        }
    }
    newTool.classList.add("toggledButton");
}   

//registers when to paint
function setupPaintEventListeners() {
    const pixels = document.querySelectorAll(".pixel");
    let isMouseDown = false;

    pixels.forEach((pixel) => {
        pixel.addEventListener("mouseenter", () => {
            if (isMouseDown) {
                clickAction(pixel);
            }
        })
        pixel.addEventListener("click", () => {
            clickAction(pixel);
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

    boardSize = dimensions;
    while (board.firstChild) board.removeChild(board.firstChild);

    let pixelNum = 0;
    for (let i = 0; i < dimensions; i++) {
        const boardRow = document.createElement("div");
        boardRow.classList.add("boardRow");

        for (let j = 0; j < dimensions; j++) {
            const pixel = document.createElement("div");
            pixel.classList.add("pixel");
            pixel.setAttribute("id", ++pixelNum);
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