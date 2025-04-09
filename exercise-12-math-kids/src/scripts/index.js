// Shapes Object

const shapesObject = {
    circle: {
        calculateArea: (radius) => +(Math.PI * (radius * radius)).toFixed(2),
        calculatePerimeter: (radius) => +(2 * Math.PI * radius).toFixed(2),
        fetchValuePrompt: () => "Enter Radius",
        appendResultsToDom: () => {
            // Assigning the specific formulas, etc in the result container
            resultDimensionText.innerText = "RADIUS";
            resultDimensionSymbol.innerText = "r";
            areaFormulaElement.innerHTML = `πr<sup class="text-small">2</sup>`;
            perimeterFormulaElement.innerText = "2πr";
        }
    },

    square: {
        calculateArea: (side) => +(side * side).toFixed(2),
        calculatePerimeter: (side) => +(4 * side).toFixed(2),
        fetchValuePrompt: () => "Enter Side",
        appendResultsToDom: () => {
            resultDimensionText.innerText = "SIDE";
            areaFormulaElement.innerHTML = "s * s";
            resultDimensionSymbol.innerText = "s";
            perimeterFormulaElement.innerText = "4 * s";
        }
    },
    triangle: {
        calculateArea: (side) => +(0.433 * side * side).toFixed(2),
        calculatePerimeter: (side) => +(3 * side).toFixed(2),
        fetchValuePrompt: () => "Enter Side(Base and Height)",
        appendResultsToDom: () => {
            resultDimensionText.innerText = "SIDE";
            resultDimensionSymbol.innerText = "s";
            areaFormulaElement.innerHTML = "0.433 * s * s";
            perimeterFormulaElement.innerText = "3 * s";
        }
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
    document.getElementById("shape-name").innerText = currentShape.charAt(0).toUpperCase() + currentShape.slice(1);
    shapesObject[currentShape].appendResultsToDom();
    resultDimensionValue.innerText = inputValue;
    areaValueElement.innerText = shapesObject[currentShape].calculateArea(inputValue);
    perimeterValueElement.innerText = shapesObject[currentShape].calculatePerimeter(inputValue);
    calculationResultSection.style.display = "flex";
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
const resultDimensionText = document.getElementById("dimension-text");
const resultDimensionSymbol = document.getElementById("dimension-symbol");
const resultDimensionValue = document.getElementById("dimension-value");
const areaFormulaElement = document.getElementById("area-formula-text");
const areaValueElement = document.getElementById("area-value");
const perimeterFormulaElement = document.getElementById("perimeter-formula-text");
const perimeterValueElement = document.getElementById("perimeter-value");

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