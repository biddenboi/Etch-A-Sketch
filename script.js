const board = document.querySelector(".board");
const toolsMenu = document.querySelector(".toolsMenu");
const sizeSlider = document.querySelector(".scale");
const buttons = Array.from(toolsMenu.children);

let clickAction;

function changeCurrentTool(newTool) {
    buttons.forEach((button) => {
        button.classList.remove("toggledButton");
    })
    

    if (newTool.className === "pickerWheel") {

    }else if (newTool.className === "paintBrush") {
        clickAction = (pixel) => {
            pixel.style.backgroundColor = "red";
        }
    }else if (newTool.className === "rainbowBrush") {
        clickAction = (pixel) => {
            
        }
    }else if (newTool.className === "fillTool") {
        clickAction = (pixel) => {
            
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