"use strict"

const boardContainer = document.querySelector(".boardContainer");

for (let i = 1; i <= 100; i++){
    const boardCell = document.boardCell = document.createElement("div");
    boardCell.innerHTML = i;
    boardCell.classList.add("boardNumber");
    boardContainer.append(boardCell);
}