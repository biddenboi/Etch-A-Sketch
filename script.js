const board = document.querySelector(".board");
const toolsMenu = document.querySelector(".toolsMenu");
const sizeSlider = document.querySelector(".scale");
const buttons = Array.from(toolsMenu.children);
const colorPicker = document.querySelector("#colorPicker");

let boardSize = 50;
let clickAction;
let currentColor = "red";

function changeCurrentTool(newTool) {
    buttons.forEach((button) => {
        button.classList.remove("toggledButton");
    })
    
    if (newTool.className === "colorSelector") {
        clickAction = (pixel) => {
            if (pixel.style.backgroundColor === "") return;
            currentColor = pixel.style.backgroundColor;
            colorPicker.parentElement.style.backgroundColor = currentColor;
        }
    }if (newTool.className === "paintBrush") {
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
        clickAction = (pixel) => {
            let initialColor = pixel.style.backgroundColor;
            clickActionHelper(pixel);

            function clickActionHelper(pixel) {
                function getPixelofID(pixelID) {
                    return document.querySelector(`#pixel-${pixelID}`);
                }
                function checkValidFill(pixelID) {
                    const pixel = getPixelofID(pixelID);
                    if (pixel === null || pixel.style.backgroundColor !== initialColor) {
                        return false;
                        }
                    
                    return true;
                }

                const pixelID = parseInt(pixel.id.replace("pixel-", ""));
                pixel.style.backgroundColor = currentColor;
                console.log(pixelID);

                //left right
                if (checkValidFill(pixelID + boardSize)) clickActionHelper(getPixelofID(pixelID + boardSize));
                if (checkValidFill(pixelID - boardSize)) clickActionHelper(getPixelofID(pixelID - boardSize));
                
                //top bottom
                if (checkValidFill(pixelID + 1) && pixel.parentElement === getPixelofID(pixelID+1).parentElement) clickActionHelper(getPixelofID(pixelID + 1));
                if (checkValidFill(pixelID - 1) && pixel.parentElement === getPixelofID(pixelID+1).parentElement) clickActionHelper(getPixelofID(pixelID - 1));

                
        }
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
            pixel.setAttribute("id", `pixel-${++pixelNum}`);
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

colorPicker.addEventListener("input", () => {
    colorPicker.parentElement.style.backgroundColor = colorPicker.value;
    currentColor = colorPicker.value;
});