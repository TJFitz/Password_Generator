// Assignment Code
var generateBtn = document.querySelector("#generate");

// Variable creation
var lowerString = "abcdefghijklmnopqrstuvwxyz";
var lowercase = lowerString.split("");
var upperString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var uppercase = upperString.split("");
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "="];
var arrayArr = [];
var i = 0;
var preScramble = [];
var scrambledPass = [];
var scrambledString = [];
finalPass = "";

// Creating password function
function generatePassword() {
  // Logic for taking user input\
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
  while (isLower === false && isUpper === false && isSpecial === false) {
    alert("Please include atleast 1 type of character.");
    isLower = confirm("Would you like lowercase letters?");
    if (isLower === true) {
      alert("Lowercase letters will be included.");
    } else {
      alert("Lowercase letters will not be included.");
    }
    isUpper = confirm("Would you like uppercase letters?");
    if (isUpper === true) {
      alert("Uppercase letters will be included.");
    } else {
      alert("Uppercase letters will not be included.");
    }
    isSpecial = confirm("Would you like special characters?");
    if (isSpecial === true) {
      alert("Special characters will be included.");
    } else {
      alert("Special characters will not be included.");
    }
  }
  var passwordLengthString = prompt(
    // Look for solution to clicking "cancel"
    "How long would you like your password to be?\nPlease enter a number between 8 and 128"
  );

  var passwordLength = parseInt(passwordLengthString);
  passwordNaN = isNaN(passwordLength);
  while (passwordLength < 8 || passwordLength > 128 || passwordNaN === true) {
    alert("Please enter a number between 8 and 128");
    passwordLengthString = prompt(
      "How long would you like your password to be?\nPlease enter a number between 8 and 128"
    );
    passwordLength = parseInt(passwordLengthString);
    passwordNaN = isNaN(passwordLength);
  }
  alert("Password length will be " + passwordLength + " characters long.");
  // Logic for generating password
  if (isLower === true) {
    arrayArr.push(lowercase);
  }
  if (isUpper === true) {
    arrayArr.push(uppercase);
  }
  if (isSpecial === true) {
    arrayArr.push(specialChar);
  }
  // Function to iterate through array of chosen characters
  function iterateArrayArr() {
    chosenArr = arrayArr[i];
    randomChar = chosenArr[Math.floor(Math.random() * chosenArr.length)];
    preScramble.push(randomChar);
    i++;
    if (i === arrayArr.length) {
      i = 0;
    }
  }
  // Function to perform iterateArrayArr an amount of times equal to passwordLength
  function createPreScramble() {
    for (var p = 0; p < passwordLength; p++) {
      iterateArrayArr();
    }
  }
  // Function to shuffle preScramble array
  function shuffle(array) {
    for (var a = 0; a < array.length; a) {
      var r = Math.floor(Math.random() * array.length);
      var y = array.splice(r, 1);
      scrambledPass.push(y.toString());
    }
    return scrambledPass;
  }
  createPreScramble();
  scrambledPass = shuffle(preScramble);
  finalPass = scrambledPass.join("");
  return finalPass;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// arrayArr[Math.floor(Math.random() * arrayArr.length)][Math.floor(Math.random() * )]

// Do all of this an amount of times equal to passwordLength

// Iterate through array of arrays
// On each iteration, randomly access a character in current array and set to a variable
// Add random character variable to prescramble
//

// for (var i = 0; i < passwordLength; i++) {
//   var a;
//   currentArr = arrayArr[a];
//   var randomChar = currentArr[Math.floor(Math.random() * currentArr.length)];
//   a++;
//   preScramble.push(randomChar);
// }
