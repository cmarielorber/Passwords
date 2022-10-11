var characterLength = 8;
var choiceArr = [];

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var charList = [" ", "!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
var numberList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// Assignment Code

var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompts();
  var passwordText = document.querySelector("#password");

  if (correctPrompts) {
    var newPassword = generatePassword();
    passwordText.value = newPassword;
  } else {
    passwordText.value = "";
  }

}

//return a random password
function generatePassword() {
  // logic goes here
  var password = "";
  for (var i = 0; 1 < characterLength;) {
    var randomPass = Math.floor(Math.random() * choiceArr.length);
    password = password + choiceArr[randomPass];
  }
  return password;
}

function getPrompts() {

  choiceArr = [];

  characterLength = parseInt(prompt("How many characters would you like your password to contain?"));

  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Password must be more than 8 characters and less than 128 characters. Please try again.");
    return false;
  }

  if (confirm("Click OK to confirm including special characters.")) {
    choiceArr = choiceArr.charList;
  }

  if (confirm("Click OK to confirm including numeric characters.")) {
    choiceArr = choiceArr.numberList;
  }

  if (confirm("Click OK to confirm including uppercase letters.")) {
    choiceArr = choiceArr.upperCase;
  }

  if (confirm("Click OK to confirm including lowercase letters.")) {
    choiceArr = choiceArr.lowerCase;
  }
  return true;
}





// press link to open window
//true or false 
//if false then return
//if true then boolean
//smaller than 8 greater than 128 are false
