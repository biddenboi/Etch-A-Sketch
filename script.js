const board = document.querySelector(".board");
const optionsMenu = document.querySelector(".optionsMenu");
const sizeSlider = document.querySelector(".scale");


function togglePaint() {
const paintPixel = (pixel) => {paint(pixel, 0);};

    const pixels = document.querySelectorAll(".boardCol");
    pixels.forEach((pixel) => {
        pixel.addEventListener("mouseenter", () => paintPixel(pixel));
    })
    pixels.forEach((pixel) => {
        pixel.addEventListener("mouseup", () => {
            pixels.forEach((pixel) => {
                pixel.removeEventListener("mouseenter", () => paintPixel(pixel));
            })
        })
    })
}

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
            boardRow.appendChild(boardCol);
            boardCol.addEventListener("mousedown", () => togglePaint());
        }
        board.appendChild(boardRow);
    }
}

sizeSlider.addEventListener('mouseup', () => {
    generateBoard(sizeSlider.value);
});


