// Global Variables
var hasLower = true;
var hasUpper = true;
var hasNumber = true;
var hasSymbol = true;

// DOM Elements
var generateBtn = document.getElementById("generate");
var passwordText = document.querySelector("#password");

// Prompt Question about password legnth and 
var lengthImput = function () {
  var askLength = window.prompt("How long do you want the password? Please enter a number between 8 and 128.");
  if ((askLength >= 8) && (askLength <=128)) {
    console.log("Password length is " + askLength);
    return (askLength);
  }
  else {
    window.alert("You enter and invalid password length. Password length must be a number between 8 and 128. Please try again.");
    return lengthImput();
  }
};

// Prompts for character types to include in password
var typesImput = function() {
  window.alert("Character types selection. Please select at least one character type to be included in your password.");
  hasLower = window.confirm("Will you like to include Lowercase characters in your password?");
  hasUpper = window.confirm("Will you like to include Uppercase characters in your password?");
  hasNumber = window.confirm("Will you like to include Numbers in your password?");
  hasSymbol = window.confirm("Will you like to include Special characters (!#$%&()*+,-./:;<=>?@[\]_{|}~) in your password?"); 
  var typesCount = hasLower + hasUpper + hasNumber + hasSymbol;
  if (typesCount < 1) {
    window.alert("You did not select any type of character for your password. Please try again!");
    return typesImput();
  }
  console.log("Character types selection: Lowers= " + hasLower + ", Uppers= " + hasUpper + ", Numbers= " + hasNumber + ", Symbols= " + hasSymbol);
};

// Generate Password Function
var generatePassword = function (lower, upper, number, symbol, length) {
  // Initialize password variables
  var generatedPassword = '';
  var typesForPassword = '';
  var Lowers = 'abcdefghijklmnopqrstuvwxyz';
  var Uppers = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var Numbers = '0123456789';
  var Symbols = '!"#$%&()*+,-./:;<=>?@[\]_{|}~';
  // Filter out unselected types of characthers and add them to typesOfPassword
  if (lower) {
      typesForPassword += Lowers;
  }
  if (upper) {
    typesForPassword += Uppers;
  }
  if (number) {
    typesForPassword += Numbers;
    typesForPassword += Numbers; /* double adding to make sure numbers are selected for short passwords */
  }
  if (symbol) {
    typesForPassword += Symbols;
  }
  //loop over length to generate password
  for (var i = 0; i < length; i++) {
    generatedPassword += typesForPassword[Math.floor(Math.random() * typesForPassword.length)]; 
  }  
  //add final password to the password var and return
  return generatedPassword;
};

// Generate event listener
generateBtn.addEventListener("click", () => {
  // Determine password length calling function about password length
  var length = lengthImput();
  // Call for character types selection funcion 
  typesImput ();
  // Call generate password function using variables obtained from prompt questions and assgined value to passwordText variable to print in screen. 
  var password = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
  passwordText.value = password;
});