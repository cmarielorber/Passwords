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
    var passPassword = generatePassword();
    passwordText.value = passPassword;
  } else {
    passwordText.value = "";
  }
}
//return a random password
function generatePassword() {                      //logic here
  var password = "";
  for (var i = 0; i < characterLength; i++) {
    var randomChar = Math.floor(Math.random() * choiceArr.length);
    password = password + choiceArr[randomChar];
  }
  return password;
}

function getPrompts() {

  choiceArr = [];
  characterLength = parseInt(prompt("How many characters would you like your password to contain?")); //write out numbers

  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Password must be more than 8 characters and less than 128 characters. Please try again.");
    return false;
  }

  if (confirm("Click OK to confirm including special characters.")) {
    choiceArr = choiceArr.concat(charList);
  }

  if (confirm("Click OK to confirm including numeric characters.")) {
    choiceArr = choiceArr.concat(numberList);
  }

  if (confirm("Click OK to confirm including uppercase letters.")) {
    choiceArr = choiceArr.concat(upperCase);
  }

  if (confirm("Click OK to confirm including lowercase letters.")) {
    choiceArr = choiceArr.concat(lowerCase);
  }
  return true;
}




        //Steps
// press link to open window
//true or false 
//if false then return
//if true then boolean
//smaller than 8 greater than 128 are false
