// Shapes Object

const shapesObject = {
    circle: {
        dimensionText: "RADIUS",
        dimensionSymbol: "r",
        areaFormula: `πr<sup class="text-small">2</sup>`,
        perimeterFormula: "2πr",
        calculateArea: (radius) => +(Math.PI * (radius * radius)).toFixed(2),
        calculatePerimeter: (radius) => +(2 * Math.PI * radius).toFixed(2),
        fetchValuePrompt: () => "Enter Radius"
    },
    square: {
        dimensionText: "SIDE",
        dimensionSymbol: "s",
        areaFormula: "s * s",
        perimeterFormula: "4 * s",
        calculateArea: (side) => +(side * side).toFixed(2),
        calculatePerimeter: (side) => +(4 * side).toFixed(2),
        fetchValuePrompt: () => "Enter Side",
    },
    triangle: {
        dimensionText: "SIDE",
        dimensionSymbol: "s",
        areaFormula: "0.433 * s * s",
        perimeterFormula: "3 * s",
        calculateArea: (side) => +(0.433 * side * side).toFixed(2),
        calculatePerimeter: (side) => +(3 * side).toFixed(2),
        fetchValuePrompt: () => "Enter Side(Base and Height)",
    }
}

// Function to fetch the value from the input and modify the dom

const fetchInputAndModifyDom = (event) => {
    if (event.type === "keydown" && parseInt(event.keyCode) != 13) {
        return; // if keydown event was fired
    }
    const inputValue = parseFloat(dimensionValueInput.value);
    dimensionValueInput.value = ""; // resetting the value of the input
    if (!inputValue || typeof(inputValue) != "number" || inputValue < 0) { // checking if the entered input is valid
        return;
    }
    shapeContainer.setAttribute("class", `shapes-${currentShape}`); // adding the needed shape into the section
    shapeValueSection.style.display = "none";
    appendResultsToDom(inputValue);
    calculationResultSection.style.display = "flex";
}

// Function to append the result to DOM 

const appendResultsToDom = (inputValue) => {
    calculationResultSection.querySelector("#shape-name").innerText = currentShape.charAt(0).toUpperCase() + currentShape.slice(1);
    tableElements[0].innerText = shapesObject[currentShape].dimensionText;
    tableElements[1].innerText = shapesObject[currentShape].dimensionSymbol;
    tableElements[2].innerText = inputValue;
    tableElements[3].innerHTML = shapesObject[currentShape].areaFormula;
    tableElements[4].innerText = shapesObject[currentShape].calculateArea(inputValue);
    tableElements[5].innerText = shapesObject[currentShape].perimeterFormula;
    tableElements[6].innerText = shapesObject[currentShape].calculatePerimeter(inputValue);
}

// Section DOM Elements
const shapeSection = document.getElementById("shapes");
const shapeValueSection = document.getElementById("shape-value");
const calculationResultSection = document.getElementById("shape-calculation-results");

// Shapes List DOM Element
const shapeListItems = shapeSection.querySelectorAll(".shapes-list-item");

// Button DOM Elementa
const shapeSectionButton = shapeSection.querySelector("#shapes-section-button");
const dimensionSectionButton = shapeValueSection.querySelector(".section-button");
const resultSectionButton = calculationResultSection.querySelector(".section-button");

// Value Promopt DOM Elements
const valuePromptText = document.getElementById("value-prompt-text");
const dimensionValueInput = document.getElementById("dimension-input");
const tableElements = Array.from(calculationResultSection.querySelectorAll("td, span"))
    .filter((element) => element.innerText == "");

// Container Elements
const shapeContainer = document.getElementById("shape-container");

let prevTickedElement = null; // last checked element
let currentShape = "";

// Attaching event listeners for all shapes
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
        if (!prevTickedElement) { // if there is no previously ticked shape
            shapeSectionButton.style.visibility = "visible";
        }
        prevTickedElement = currentElementCheckDiv;
    })
}

// Event Listener for Shape section Button
shapeSectionButton.addEventListener("click", () => {
    shapeSection.style.display = "none"; // hiding the current section
    prevTickedElement.classList.remove("tick-mark"); // removing the tickmark on the last checked item
    valuePromptText.innerText = shapesObject[currentShape].fetchValuePrompt();
    shapeValueSection.style.display = "flex"; // making the next section visible
});

// Event Listener for Dimension section Button
dimensionSectionButton.addEventListener("click", fetchInputAndModifyDom);
shapeValueSection.addEventListener("keydown", fetchInputAndModifyDom);

// Even Listener for Result section Button
resultSectionButton.addEventListener("click", () => {
    calculationResultSection.style.display = "none";
    shapeSection.style.display = "flex";
})