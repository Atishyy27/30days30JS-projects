// Declaring a constant variable "passwordBox" and assigning it the reference to the HTML element with the ID "password"
const passwordBox = document.getElementById("password");

// Setting the desired length for the password
const length = 12;

// Defining character sets for different types of characters
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "1234567890";
const symbol = "!@#$%^&*()_+{}:<>?|\/.,[]";

// Combining all character sets into one for later use
const allChars = upperCase + lowerCase + symbol + number;

// Function to create a random password
function createPassword() {
    // Initialize an empty password
    let password = "";

    // Adding one random character from the uppercase, lowercase, number, and symbol character sets
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    // Adding random characters from the combined character set until the password reaches the desired length
    while (length > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    // Setting the generated password as the value of the HTML element with the ID "password"
    passwordBox.value = password;
}

// Function to copy the generated password to the clipboard
function copyPassword() {
    // Selecting the text in the passwordBox element
    passwordBox.select();

    // Using the Clipboard API to write the selected text to the clipboard
    navigator.clipboard.writeText(passwordBox.value);
}
