const board = document.querySelector(".board");

function startingBoard() {
    const title = document.createElement("h1");
    const startButton = document.createElement("button");

    title.textContent = "Etch A Sketch.";
    startButton.textContent = "Begin?";

    board.classList.toggle("startingBoard");

    board.appendChild(title);
    board.appendChild(startButton);
}

function gameplayBoard() {

}

startingBoard();