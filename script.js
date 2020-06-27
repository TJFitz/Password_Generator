// Assignment Code
var generateBtn = document.querySelector("#generate");

// Variable creation
var lowercase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var uppercase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "="];
var passwordLength = 8;
var isUpper = false;
var isSpecial = false;

// Creating password function
function generatePassword() {
  var isLower = confirm("Would you like lowercase letters?");
  if (isLower === true) {
    alert("Lowercase letters will be included.");
  } else {
    alert("Lowercase letters will not be included.");
  }
  var isUpper = confirm("Would you like uppercase letters?");
  if (isUpper === true) {
    alert("Uppercase letters will be included.");
  } else {
    alert("Uppercase letters will not be included.");
  }
  var isSpecial = confirm("Would you like special characters?");
  if (isSpecial === true) {
    alert("Special characters will be included.");
  } else {
    alert("Special characters will not be included.");
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
