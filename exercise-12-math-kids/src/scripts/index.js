// Shapes Object

const shapesObject = {
    circle: {
        displayValuePrompt: () => {

        },
        displayResults: () => {

        },
        radius: 0,
        area: 0,
        perimeter: 0,
        PI: 3.14
    },
    square: {
        displayValuePrompt: () => {

        },
        displayResults: () => {

        },
        side: 0,
        area: 0,
        perimeter: 0
    },
    triangle: {
        displayValuePrompt: () => {

        },
        displayResults: () => {

        },
        baseAndHeight: 0,
        area: 0,
        perimeter: 0
    }
}

let prevTickedElement = null; // last checked element
let currentShape = "";

const shapeListItems = document.getElementsByClassName("shapes-list-item");

const item = document.getElementById("id");

// item.se

for (let shape of shapeListItems) {
    shape.addEventListener("click", (event) => {
        const currentElement = event.currentTarget;
        currentShape = currentElement.getAttribute("id");

        // Enabling the checking style for the current Element
        if (prevTickedElement) {
            prevTickedElement.classList.remove("tick-mark");
        }
        const currentElementCheckDiv = currentElement.querySelector("div");
        currentElementCheckDiv.classList.add("tick-mark");
        prevTickedElement = currentElementCheckDiv;
        
    })
}