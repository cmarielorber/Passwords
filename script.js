// Assignment Code
var generateBtn = document.querySelector("#generate");

//return a random password
function generatePassword() {
  // logic goes here

  //return password
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


