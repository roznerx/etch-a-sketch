const container = document.getElementById("container");
container.style.width = "400px";
container.style.height = "400px";

function createGrid(n) {    

    for (i = 0; i < n; i++) {

        const squaresPerSide = Math.sqrt(n);
        const square = document.createElement("div");

        let width = 400 / parseInt(squaresPerSide);
        let height = 400 / parseInt(squaresPerSide);

        square.style.width = width;
        square.style.height = height;

        square.classList.add("square");
        container.appendChild(square);

        container.style.setProperty("grid-template-columns", "repeat(" + squaresPerSide + "," + height + "px)");
        container.style.setProperty("grid-template-rows", "repeat(" + squaresPerSide + "," + width + "px)");

    }

    const square = document.querySelectorAll(".square");

    square.forEach(function(elem) {

        elem.addEventListener("mouseover", function(event) {
            event.target.style.backgroundColor = "black";
        });
    });
}

function clearGrid() {

    const squares = Array.from(container.childNodes);
    squares.forEach((square) => {
    container.removeChild(square);
    });

}

const clear = document.getElementById("clear");
const resize = document.getElementById("resize");


clear.addEventListener("click", function() {

    const square = document.querySelectorAll(".square");

    for (i = 0; i < square.length; i++) {
        if (square[i].style.backgroundColor = "black") {
            square[i].style.backgroundColor = "white";
        }
    }
});

resize.addEventListener("click", function() {

    const squaresPerSide = prompt("Select number of squares per side");
    let inputNum = parseFloat(squaresPerSide);

    if (inputNum > 100) {

        prompt("Select number of squares per side");
        
    } else if (inputNum != null) {
        
        clearGrid()
        createGrid(inputNum * inputNum);

    }
});

const blackMode = document.getElementById("black");

blackMode.addEventListener("click", function() {

    const square = document.querySelectorAll(".square");

    square.forEach(function(elem) {

        elem.addEventListener("mouseover", function(event) {
            event.target.style.backgroundColor = "black";
        });
    });
})

const colorMode = document.getElementById("colors");

colorMode.addEventListener("click", function() {

    const square = document.querySelectorAll(".square");

    square.forEach(function(elem) {

        elem.addEventListener("mouseover", function(event) {                
                
            let r = Math.floor(Math.random() * 256);
            let g = Math.floor(Math.random() * 256);
            let b = Math.floor(Math.random() * 256);
            event.target.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";

        });
    });
});

createGrid(256);