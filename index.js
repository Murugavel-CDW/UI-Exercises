// Section 1

// console.log("1 + 2 =", 1 + 2);
// console.log("apple" + "orange");
// console.log(1 + 2 + "apple");
// console.log("apple" + 1 + 2);
// console.log(1 + true);
// console.log(0 == false);
// console.log(1 === true);
// console.log(2 == "2");

// Section 2

// Creating an array of 11 members
// const cricketTeamArray = ["James", "Kyle", "Andrew", "Jack", "Mike", "Michael", "Aron", "Beru", "Tim", "Tom", "Jerry"];

// Removing the first player from the team
// const removedFirstPlayerName = cricketTeamArray.shift();
// console.log("Removed First player name: " + removedFirstPlayerName);

// Finding out the number of players in the team
// const playersCount = cricketTeamArray.length;
// console.log("Number of players currently in the team: " + playersCount);

// Adding another player to make the count back to 11
// cricketTeamArray.push("Ben");
// console.log(cricketTeamArray);

// Sorting the players list by their names
// cricketTeamArray.sort();
// console.log("Array after sorting:");
// console.log(cricketTeamArray);

// Displaying all player names and assigning a random jersey
// cricketTeamArray.forEach((player) => console.log(player + " - " + Math.floor(Math.random() * 1000)));

// Storing names of players in uppercase
// const uppercasePlayerNamesArray = cricketTeamArray.map((player) => player.toUpperCase());
// console.log("New Array with player names in uppercase:");
// console.log(uppercasePlayerNamesArray);

// Section 3

// Function to display numbers from 1 to 100
// const displayNumbers = () => {
//     for (let num = 1; num <= 100; num++){
//         console.log(num);
//     }
// }

// displayNumbers();

// Function to display today's date in DD/MM/YYY format
// const displayCurrentDate = () => {
//     const currentDateObj = new Date();
//     const currentDate = currentDateObj.toLocaleDateString('en-GB');
//     console.log(`Today's date: ${currentDate}`);
// }

// displayCurrentDate();

//  Function to convert celsius to fahrenheit
// const celsiusToFahrenheitConverter = celsius => (celsius * (9 / 5)) + 32;
// console.log(`1 Degree Celsius in Fahrenheit is ${celsiusToFahrenheitConverter(1)}`);

// Function to calculate average from an array of numbers
// const calculateAverage = (numbers) => {
//     if (!numbers || numbers.length == 0) {
//         return 0;
//     }
//     let totalSum = 0;
//     for (let number of numbers) {
//         totalSum += number;
//     }
//     return totalSum / numbers.length;
// } 

// const numberArray = [1, 2, 3, 4];
// const average = calculateAverage(numberArray);
// console.log(`Average of the array is ${average}`);

// Function to reverse a string

// Method 1

// const reverseString = (inputString) => {
//     if (!inputString) {
//         return "";
//     }
//     let reversedString = "";
//     for (let index = 0; index < inputString.length; index++){
//         reversedString = inputString.charAt(index) + reversedString;
//     }
//     return reversedString;
// }

// Method 2

// const reverseString = (inputString) => {
//     if (!inputString) {
//         return "";
//     }
//     let reversedString = "";
//     for (let index = inputString.length - 1; index >= 0; index--){
//         reversedString += inputString.charAt(index);
//     }
//     return reversedString;
// }

// console.log(reverseString("Hello"));