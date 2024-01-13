const board = document.querySelector(".board");
const body = document.querySelector("body");

function startingBoard() {
    const title = document.createElement("h1");
    const startButton = document.createElement("button");

    title.textContent = "Etch A Sketch.";
    startButton.textContent = "Begin?";

    board.classList.toggle("startingBoard");

    board.appendChild(title);
    board.appendChild(startButton);


    startButton.addEventListener("click", () => {
        board.classList.toggle("gameplayBoard");
        board.classList.toggle("startingBoard");
        title.remove();
        startButton.remove();
        gameplayBoard(100, 100);
    })
}

function gameplayBoard(width, height) {
    const row = document.createElement("div");
    row.classList.toggle("boardRow");

    const square = document.createElement("div");
    square.classList.toggle("boardSquare");

    for (let i = 0; i < height; i++) {
        row.appendChild(square.cloneNode(true));
    }

    for (let i = 0; i < width; i++) {
        board.appendChild(row.cloneNode(true));
    }

    const squares = document.querySelectorAll(".boardSquare");
    squares.forEach((square) => 
        square.addEventListener("mousedown", () => {
            square.classList.toggle("activeSquare");
        }))

}



startingBoard();