
var hasLower = true;
var hasUpper = true;
var hasNumber = true;
var hasSymbol = true;

// DOM Elements
var generateBtn = document.getElementById("generate");
var passwordText = document.querySelector("#password");

// Prompt Question about password legnth
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
// Prompt for character types to include in password

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

// Generate event listenner
generateBtn.addEventListener("click", () => {
  // determine password length calling function about password length
  var length = lengthImput();
  // call for character types selection funcion 
  typesImput ();
  // call generate password function and assgined value to passwordText variable to print in screen. 
  var password = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
  passwordText.value = password;
});

// Generate Password Function
var generatePassword = function (lower, upper, number, symbol, length) {
  // password variable
  var generatedPassword = '';
  // Filter out unselected types of characthers
  var typesCount = lower + upper + number + symbol;
  var typesArray = [{ lower }, { upper }, { number }, { symbol }].filter(item => Object.values(item)[0]);
  //loop over length cal generator function for each type
  for(var i = 0; i < length; i += typesCount) {
    typesArray.forEach(type => {
      var funcName = Object.keys(type)[0];
      if (funcName === "lower") {
      generatedPassword += randomLower();
      }
      if (funcName === "upper") {
        generatedPassword += randomUpper();
      }
      if (funcName === "number") {
        generatedPassword += randomNumber();
      }
      if (funcName === "symbol") {
        generatedPassword += randomSymbol();
      }   
    });
  }
  //add final password to the password var and return
  var finalPasswod = generatedPassword.slice(0, length);
  return finalPasswod;
};


// Random Generator Functions 
var randomLower = function() {
  var Lowers = 'abcdefghijklmnopqrstuvwxyz';
  return Lowers[Math.floor(Math.random() * Lowers.length)];
}
var randomUpper = function() {
  var Uppers = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return Uppers[Math.floor(Math.random() * Uppers.length)];
}
var randomNumber = function() {
  return Math.floor(Math.random() * 10);
}
var randomSymbol = function() {
  var Symbols = '!"#$%&()*+,-./:;<=>?@[\]_{|}~';
  return Symbols[Math.floor(Math.random() * Symbols.length)];
  
}