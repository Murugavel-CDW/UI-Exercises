const checkValidNumber = amount => amount && typeof (amount) == "number"; 

const bankInstance = (() => {
    // Customer account list
    const bankUserList = [
        {
            accountNumber: 123456,
            cardNumber: 1234567890,
            pin: 2468,
            balance: 0
        },
        {
            accountNumber: 678901,
            cardNumber: 2345678901,
            pin: 8956,
            balance: 0
        },
        {
            accountNumber: 1112134,
            cardNumber: 3456789012,
            pin: 2875,
            balance: 0
        },
        {
            accountNumber: 2875490,
            cardNumber: 8217452099,
            pin: 3287,
            balance: 0
        },
        {
            accountNumber: 918237,
            cardNumber: 2817364223,
            pin: 9028,
            balance: 0
        }
    ];
    
    // Log into account
    const login = () => {
        const accountNumber = parseInt(window.prompt("Enter account number"));
        if (!checkValidNumber(accountNumber)) {
            return window.alert("Enter a valid number"); // if account number is not valid
        }
        const customerObj = bankUserList.find(customer => customer.accountNumber === accountNumber); // fetching the customer with the accountNumber
        return customerObj;
    };

    // Withdraw function
    const withdrawAmount = () => {
        const customerObj = login();
        if (!customerObj) {
            return window.alert("User with account number doesnt exist");
        } 
        const enteredCardNumber = parseInt(window.prompt("Enter card number"));
        const enteredPin = parseInt(window.prompt("Enter PIN"));
        if (customerObj.cardNumber != enteredCardNumber || customerObj.pin != enteredPin) {
            window.alert("Card Number / Pin does not match");
            return;
        }
        const amount = parseFloat(window.prompt("Enter the amount to withdraw"));
        if (!checkValidNumber(amount) || customerObj.balance < 0) {
            window.alert("Enter a valid amount");
        } else {
            customerObj.balance -= amount;
            window.alert(`Amount withdrawn successfully.\n Withdrawn amount: ${amount}; Current Account Balance: ${customerObj.balance}`);
        }
    };

    // Deposit function
    const depositAmount = () => {
        const customerObj = login();
        if (!customerObj) {
            return window.alert("User with account number doesnt exist");
        } 
        const enteredCardNumber = parseInt(window.prompt("Enter card number"));
        const enteredPin = parseInt(window.prompt("Enter PIN"));
        if (customerObj.cardNumber != enteredCardNumber || customerObj.pin != enteredPin) {
            window.alert("Card Number / Pin does not match");
            return;
        }
        const amount = parseFloat(window.prompt("Enter the amount to deposit"));
        if (!checkValidNumber(amount)) {
            window.alert("Enter a valid amount");
        } else {
            customerObj.balance += amount;
            window.alert(`Amount Deposited successfully.\n Deposited amount: ${amount}; Current Account Balance: ${customerObj.balance}`);
        }
    }
    return { withdrawAmount, depositAmount };
})();

const performOperations = () => {
    bankInstance.depositAmount();
    bankInstance.depositAmount();
    bankInstance.withdrawAmount();
}

performOperations();
