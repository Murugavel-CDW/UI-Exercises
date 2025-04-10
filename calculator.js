//  Function to check if both the passed values are numbers
const checkIfBothAreNumber = (num1, num2) => {
    if (!(typeof (num1) == "number" && typeof (num2) == "number")) {
        alertMessage("Enter valid number input");
    }
}

const alertMessage = (message) => {
    window.alert(message);
}

// Calculator object
const calculator = {
    // Add Functionality
    add: (num1, num2) => {
        checkIfBothAreNumber(num1, num2);
        alertMessage(`${num1} + ${num2} = ${num1 + num2}`);
    },
    // Subtract Functionality
    subtract: (num1, num2) => {
        checkIfBothAreNumber(num1, num2);
        alertMessage(`${num1} - ${num2} = ${num1 - num2}`);
    },
    // Multiply Functionality
    multiply: (num1, num2) => {
        checkIfBothAreNumber(num1, num2);
        alertMessage(`${num1} * ${num2} = ${num1 * num2}`);
    },
    // Divide Functionality
    divide: (num1, num2) => {
        checkIfBothAreNumber(num1, num2);
        if(num2 == 0) alertMessage("num2 cannot be zero")
        alertMessage(`${num1} / ${num2} = ${num1 / num2}`);
    }
}

const num1 = window.prompt("Enter value of num1");
const num2 = window.prompt("Enter value of num2");
const operation = window.prompt("Enter the operation").trim().toLowerCase();
if (operation) {
    calculator[operation](parseFloat(num1), parseFloat(num2));
}


// let a = {
//     name: "nike",
//     age: {
//         num: 20
//     }
// }

// let b = { ...a }
// b.age.num = 50;

// console.log(a.age.num);
// console.log(b.age.num);

