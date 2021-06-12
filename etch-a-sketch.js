const container = document.getElementById("container");

function createGrid(n) {

    for (i = 0; i < n; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        container.appendChild(square);
    }
}

createGrid(256);

const square = document.querySelectorAll(".square");
square.forEach(function(elem) {
    elem.addEventListener("mouseover", function(event) {
        event.target.style.backgroundColor = "black";
        console.log("Event triggered");
    });
});

