const checkValidNumber = amount => amount && typeof (amount) == "number"; 

const createAccountClosure = () => {
    let accountBalance = 0;

    // Withdraw function
    const withdrawAmount = (pin, cardNumber) => {
        const enteredCardNumber = parseInt(window.prompt("Enter card number"));
        const enteredPin = parseInt(window.prompt("Enter PIN"));
        if (cardNumber != enteredCardNumber || pin != enteredPin) {
            window.alert("Card Number / Pin does not match");
            return;
        }
        const amount = parseFloat(window.prompt("Enter the amount to withdraw"));
        if (!checkValidNumber(amount) || accountBalance < 0) {
            window.alert("Enter a valid amount");
        } else {
            accountBalance -= amount;
            window.alert(`Amount withdrawn successfully.\n Withdrawn amount: ${amount}; Current Account Balance: ${accountBalance}`);
        }
    };

    // Deposit function
    const depositAmount = (pin, cardNumber) => {
        const enteredCardNumber = parseInt(window.prompt("Enter card number"));
        const enteredPin = parseInt(window.prompt("Enter PIN"));
        if (cardNumber != enteredCardNumber || pin != enteredPin) {
            window.alert("Card Number / Pin does not match");
            return;
        }
        const amount = parseFloat(window.prompt("Enter the amount to deposit"));
        if (!checkValidNumber(amount)) {
            window.alert("Enter a valid amount");
        }else {
            accountBalance += amount;
            window.alert(`Amount Deposited successfully.\n Deposited amount: ${amount}; Current Account Balance: ${accountBalance}`);
        }
    }
    return { withdrawAmount, depositAmount };
}

// Customer account list
const bankAccounts = [
    {
        accountNumber: 123456,
        cardNumber: 1234567890,
        pin: 2468,
        accountOperations: createAccountClosure()
    },
    {
        accountNumber: 678901,
        cardNumber: 2345678901,
        pin: 8956,
        accountOperations: createAccountClosure()
    },
    {
        accountNumber: 1112134,
        cardNumber: 3456789012,
        pin: 2875,
        accountOperations: createAccountClosure()
    },
    {
        accountNumber: 2875490,
        cardNumber: 8217452099,
        pin: 3287,
        accountOperations: createAccountClosure()
    },
    {
        accountNumber: 918237,
        cardNumber: 2817364223,
        pin: 9028,
        accountOperations: createAccountClosure()
    },
];

const performOperations = () => {
    const accountNumber = parseInt(window.prompt("Enter account number"));
    if (!checkValidNumber(accountNumber)) {
        return window.alert("Enter a valid number"); // if account number is not valid
    } 
    const customerObj = bankAccounts.find(customer => customer.accountNumber === accountNumber); // fetching the customer with the accountNumber
    if (!customerObj) {
        return window.alert("User with account number doesnt exist");
    } 
    const pinNumber = customerObj.pin;
    const cardNumber = customerObj.cardNumber;
    customerObj.accountOperations.depositAmount(pinNumber, cardNumber);
    customerObj.accountOperations.depositAmount(pinNumber, cardNumber);
    customerObj.accountOperations.withdrawAmount(pinNumber, cardNumber);
}

performOperations();
