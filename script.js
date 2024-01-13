const board = document.querySelector(".board");

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
        gameplayBoard(15, 15);
    })
}

function gameplayBoard(width, height) {

    for (let i = 0; i < width; i++) {
        const row = document.createElement("div");
        row.classList.toggle("boardRow");

        for (let j = 0; j < height; j++) {
            const square = document.createElement("div");
            square.classList.toggle("boardSquare");
            row.appendChild(square);
        }
        board.appendChild(row);
    }
}



startingBoard();