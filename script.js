const board = document.querySelector(".board");
const optionsMenu = document.querySelector(".optionsMenu");
const sizeSlider = document.querySelector(".scale");


function createNewBoard(dimensions) {
    while (board.firstChild) board.removeChild(board.firstChild);

    for (let i = 0; i < dimensions; i++) {
        const boardRow = document.createElement("div");
        boardRow.classList.add("boardRow");

        for (let j = 0; j < dimensions; j++) {
            const pixel = document.createElement("div");
            pixel.classList.add("pixel");
            boardRow.appendChild(pixel);
            pixel.addEventListener("mouseenter", () => {
                if (isMouseDown) {
                    pixel.style.backgroundColor = "red";
                }
            })
            pixel.addEventListener("click", () => {
                pixel.style.backgroundColor = "red";
            })
        }
        board.appendChild(boardRow);
    }
    let isMouseDown = false;

    const pixels = document.querySelectorAll(".pixel");
    pixels.forEach((pixel) => {
        pixel.addEventListener("mousedown", () => {
            isMouseDown = true;
        })
        pixel.addEventListener("mouseup", () => {
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