//declaring a constant variable "passwordBox" to the id "password" 
const passwordBox = document.getElementById("password");

//assigns the length of password
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "1234567890";
const symbol = "!@#$%^&*()_+{}:<>?|\/.,[]";

const allChars = upperCase + lowerCase + symbol + number;

function createPassword() {
    //empty password
    let password = "";

    //will add any indexes among "A-Z" or 0-25 to the password
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    // it will continue to add a one random value to password,
    // until the password length exceeds its maximun length

    while (length > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password;

}

function copyPassword() {
    passwordBox.select();
    navigator.clipboard.writeText(passwordBox.value);
}
