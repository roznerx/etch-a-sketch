const container = document.getElementById("container");

function createGrid(n) {

    for (i = 0; i < n; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        container.appendChild(square);
    }
}

function clearGrid() {

    const squares = Array.from(container.childNodes);
    squares.forEach((square) => {
    container.removeChild(square);
    });

}

createGrid(256);

const clear = document.getElementById("clear");
const resize = document.getElementById("resize");
const square = document.querySelectorAll(".square");

square.forEach(function(elem) {

    elem.addEventListener("mouseover", function(event) {
        event.target.style.backgroundColor = "black";
        console.log("Event triggered");
    });
});

clear.addEventListener("click", function() {

    for (i = 0; i < square.length; i++) {
        if (square[i].style.backgroundColor = "black") {
            square[i].style.backgroundColor = "white";
            console.log("Board cleared");
        }
    }
});

resize.addEventListener("click", function() {

    clearGrid()

    const squaresPerSide = prompt("Select number of squares per side");
    let inputNum = parseFloat(squaresPerSide);

    if (inputNum > 100) {

        return prompt("Select number of squares per side");
        
    } else if (inputNum != null) {
        
        createGrid(inputNum * inputNum);
        container.style.setProperty('grid-template-columns', 'repeat(' + inputNum + ', 25px)');
        container.style.setProperty('grid-template-rows', 'repeat(' + inputNum + ', 25px)');
        console.log("Board resized to " + inputNum + " squares per side");
    }
});
