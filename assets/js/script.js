
var length = 8;
var hasLower = true;
var hasUpper = true;
var hasNumber = true;
var hasSymbol = true;

// DOM Elements
var generateBtn = document.getElementById("generate");
var passwordText = document.querySelector("#password");

// Generate event listenner
generateBtn.addEventListener("click", () => {

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