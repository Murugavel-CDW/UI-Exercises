const formElement = document.getElementById("form");

// Regex expressions
const nameRegex = /^[a-zA-z]{1, 30}$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/;
const mobileRegex = /\d{10}/;
const pinCodeRegex = /\d{6}/;
const cardNumberRegex = /\d{16}/;
const expiryYearRegex = /\d{4}/;
const cvvRegex = /\d{3, 4}/;

// Input DOM Elements
const formInputs = formElement.querySelectorAll("input");
const firstNameInput = formInputs[0];
const lastNameInput = formInputs[1];
const emailInput = formInputs[2];
const contactNumberInput = formInputs[3];
const pinCodeInput = formInputs[4];
const cardNumberInput = formInputs[5];
const expiryYearInput = formInputs[6];
const cvvNumberInput = formInputs[7];

const resetErrorTexts = () => {
    formInputs.forEach((input) => input.innerText = "");
}

const displayErrorText = (errorText, errorMessage) => {
    errorText.innerText = errorMessage;
}

const validateName = (name, nameType, nameInput) => {
    const errorText = nameInput.nextElementSibling;
    if (!name || name.length == 0) {
        displayErrorText(errorText, `${nameType} is required`);
        return false;
    }
    const isValid = nameRegex.test(name);
    console.log(isValid);
    if (!isValid) {
        displayErrorText(errorText, `${nameType} is not valid`);
    }
    return isValid;
}

const validateEmail = (email) => {
    const errorText = emailInput.nextElementSibling;
    if (!email || email.length() == 0) {
        displayErrorText(errorText, `Email is required`);
        return false;
    }
    const isValid = emailRegex.test(email);
    if (!isValid) {
        displayErrorText(errorText, `Email is invalid`);
    }
    return isValid;
}

const validateMobileNumber = (mobileNumber) => {
    const errorText = contactNumberInput.nextElementSibling;
    if (!mobileNumber) {
        displayErrorText(errorText, `Email is required`);
        return false;
    }
    const isValid = mobileRegex.test(mobileNumber);
    if (!isValid || mobileNumber < 0) {
        displayErrorText(errorText, `Email is invalid`);
    }
    return isValid;
}

const validatePinCode = (pinCode) => {
    const errorText = pinCodeInput.nextElementSibling;
    if (!pinCode) {
        displayErrorText(errorText, `PIN Code is required`);
        return false;
    }
    const isValid = pinCodeRegex.test(pinCode);
    if (!isValid || pinCode < 0) {
        displayErrorText(errorText, `PIN Code is invalid`);
    }
    return isValid;
}

const validateCard = (cardNumber) => {
    const errorText = cardNumberInput.nextElementSibling;
    if (!cardNumber) {
        displayErrorText(errorText, `Card Number is required`);
        return false;
    }
    const isValid = cardNumberRegex.test(cardNumber);
    if (!isValid || cardNumber < 0) {
        displayErrorText(errorText, `Card Number is invalid`);
    }
    return isValid;
}

const validateExpiryYear = (expiryYear) => {
    const errorText = expiryYearInput.nextElementSibling;
    const currentYear = new Date().getFullYear;
    if (!expiryYear) {
        displayErrorText(errorText, `Card Expiry is required`);
        return false;
    }
    const isValid = expiryYearRegex.test(expiryYear);
    if (!isValid || expiryYear < 0 || expiryYear < currentYear) {
        displayErrorText(errorText, `Card Expiry is invalid`);
    }
    return isValid;
}

const validateCVV = (cvvNumber) => {
    const errorText = cvvNumberInput.nextElementSibling;
    if (!cvvNumber) {
        displayErrorText(errorText, `CVV is required`);
        return false;
    }
    const isValid = cvvRegex.test(cvvNumber);
    if (!isValid || cardNumber < 0) {
        displayErrorText(errorText, `CVV is invalid`);
    }
    return isValid;
}


const validateForm = () => {
    let allFieldsValid = true;
    resetErrorTexts();
    // Fetching values of all inputs
    const firstNameText = firstNameInput.value.trim();
    const lastNameText = lastNameInput.value.trim();
    const emailText = emailInput.value.trim();
    const contactNumber = parseInt(cardNumberInput.value);
    const pinCode = parseInt(pinCodeInput.value);
    const cardNumber = parseInt(cardNumberInput.value);
    const expiryYear = parseInt(expiryYearInput.value);
    const cvvNumber = parseInt(cvvNumberInput.value);

    allFieldsValid = validateName(firstNameText, "First Name", firstNameInput);
    allFieldsValid = validateName(lastNameText, "Last Name", lastNameInput);
    allFieldsValid = validateEmail(emailText);
    allFieldsValid = validateMobileNumber(contactNumber);
    allFieldsValid = validatePinCode(pinCode);
    allFieldsValid = validateCard(cardNumber);
    allFieldsValid = validateExpiryYear(expiryYear);
    allFieldsValid = validateCVV(cvvNumber);

    return allFieldsValid;
}

formElement.addEventListener("submit", (event) => {
    event.preventDefault(); // preventing the default reload behavior
    if (validateForm()) window.alert("Form validated successfully");
})