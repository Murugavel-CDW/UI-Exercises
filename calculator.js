//  Function to check if both the passed values are numbers
const checkIfBothAreNumber = (num1, num2) => {
    return typeof (num1) == "number" && typeof (num2) == "number";
}

// Calculator object
const calculator = {
    // Add Functionality
    add: (num1, num2) => {
        if (!checkIfBothAreNumber(num1, num2)) {
            return 0;
        }
        return num1 + num2;
    },
    // Subtract Functionality
    subtract: (num1, num2) => {
        if (!checkIfBothAreNumber(num1, num2)) {
            return 0;
        }
        return num1 - num2
    },
    // Multiply Functionality
    multiply: (num1, num2) => {
        if (!checkIfBothAreNumber(num1, num2)) {
            return 0;
        }
        return num1 * num2;
    },
    // Divide Functionality
    divide: (num1, num2) => {
        if (!checkIfBothAreNumber(num1, num2) || num2 === 0) {
            return 0;
        }
        return num1 / num2;
    }
}




console.log(`1 + 2 = ${calculator.add(1, 2)}`);
console.log(calculator.add("apple", 1)); // logs as 0
console.log(`5 - 3 = ${calculator.subtract(5, 3)}`);
console.log(`5 * 5 = ${calculator.multiply(5, 5)}`);
console.log(`5 / 0 = ${calculator.divide(5, 0)}`);
console.log(calculator.divide("apple", 0));
console.log(`25 / 5 = ${calculator.divide(25, 5)}`);


let a = {
    name: "nike",
    age: {
        num: 20
    }
}

let b = { ...a }
b.age.num = 50;

console.log(a.age.num);
console.log(b.age.num);

