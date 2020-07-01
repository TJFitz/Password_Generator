// Assignment Code
var generateBtn = document.querySelector("#generate");

// Variable creation
var lowerString = "abcdefghijklmnopqrstuvwxyz";
var lowercase = lowerString.split("");
var upperString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var uppercase = upperString.split("");
var numbersString = "0123456789";
var numbers = numbersString.split("");
var specialString = "!@#$%^&*()-=_+";
var specialChar = specialString.split("");
var arrayArr = [];
var preScramble = [];
var scrambledPass = [];
var scrambledString = [];
var finalPass = "";
var i = 0;
var beepBoop = false;
var creatingPass = 0;
var beepBoopFunction;

// Function for creating password
function generatePassword() {
  resetPass();
  // Logic for taking user input\

  var isLower = confirm("Would you like lowercase letters?");
  if (isLower) {
    alert("Lowercase letters will be included.");
  } else {
    alert("Lowercase letters will not be included.");
  }
  var isUpper = confirm("Would you like uppercase letters?");
  if (isUpper) {
    alert("Uppercase letters will be included.");
  } else {
    alert("Uppercase letters will not be included.");
  }
  var isSpecial = confirm("Would you like special characters?");
  if (isSpecial) {
    alert("Special characters will be included.");
  } else {
    alert("Special characters will not be included.");
  }
  var isNumbers = confirm("Would you like numbers?");
  if (isNumbers) {
    alert("Numbers will be included.");
  } else {
    alert("Numbers will not be included.");
  }
  while (
    isLower === false &&
    isUpper === false &&
    isSpecial === false &&
    isNumbers === false
  ) {
    alert("Please include atleast 1 type of character.");
    isLower = confirm("Would you like lowercase letters?");
    if (isLower) {
      alert("Lowercase letters will be included.");
    } else {
      alert("Lowercase letters will not be included.");
    }
    isUpper = confirm("Would you like uppercase letters?");
    if (isUpper) {
      alert("Uppercase letters will be included.");
    } else {
      alert("Uppercase letters will not be included.");
    }
    isSpecial = confirm("Would you like special characters?");
    if (isSpecial) {
      alert("Special characters will be included.");
    } else {
      alert("Special characters will not be included.");
    }
    isNumbers = confirm("Would you like numbers?");
    if (isNumbers) {
      alert("Numbers will be included.");
    } else {
      alert("Numbers will not be included.");
    }
  }
  var passwordLengthString = prompt(
    "How long would you like your password to be?\nPlease enter a number between 8 and 128"
  );
  if (passwordLengthString === null) {
    return;
  }
  var passwordLength = parseInt(passwordLengthString);
  passwordNaN = isNaN(passwordLength);
  while (passwordLength < 8 || passwordLength > 128 || passwordNaN) {
    alert("Please enter a number between 8 and 128");
    passwordLengthString = prompt(
      "How long would you like your password to be?\nPlease enter a number between 8 and 128"
    );
    passwordLength = parseInt(passwordLengthString);
    passwordNaN = isNaN(passwordLength);
    if (passwordLengthString === null) {
      return;
    }
  }
  alert("Password length will be " + passwordLength + " characters long.");
  // Logic for generating password based on user input above

  // Logic for adding included characters to the password generating array
  if (isLower) {
    arrayArr.push(lowercase);
  }
  if (isUpper) {
    arrayArr.push(uppercase);
  }
  if (isSpecial) {
    arrayArr.push(specialChar);
  }
  if (isNumbers) {
    arrayArr.push(numbers);
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
  // Function to randomize the preScramble array
  function shuffle(array) {
    for (var a = 0; a < array.length; a) {
      var r = Math.floor(Math.random() * array.length);
      var y = array.splice(r, 1);
      scrambledPass.push(y.toString());
    }
    return scrambledPass;
  }

  // Creation of final password

  createPreScramble();
  scrambledPass = shuffle(preScramble);
  finalPass = scrambledPass.join("");
  return finalPass;
}
//  ------------------ end of main function --------------------

// Function to show cool text to the user before displaying password, proving that this took a lot of work
function beepSwitch() {
  if (beepBoop === false) {
    beepText = document.querySelector("#password");
    beepText.value = "Beep Boop\nPlease Wait";
    beepBoop = true;
  } else {
    createText = document.querySelector("#password");
    createText.value = "Generating your secure password\nPlease Wait";
    beepBoop = false;
    creatingPass++;
  }
  if (creatingPass > 1) {
    clearInterval(beepBoopFunction);
  }
}
// beepBoopFunction = setInterval(beepSwitch, 1000);

// Function to reset necessary arrays and variables before creating a new password - This prevents previous callings of the function from adding their values to the last and displaying improperly
function resetPass() {
  arrayArr = [];
  preScramble = [];
  scrambledPass = [];
  scrambledString = [];
  finalPass = "";
  i = 0;
  beepBoop = false;
  creatingPass = 0;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
