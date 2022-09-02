// Assignment Code
var generateBtn = document.querySelector("#generate");
function randomInt (min, max) {
  if (!max) {
    max = min
    min = 0
  }
  var rand = Math.random()
  return Math.floor (min*(1 - rand) + rand*max)
}
function getRandomItem(list) {
  return list[randomInt(list.length)]
}
function generatePassword() {
  while (true) {
    var userInput = window.prompt("How long would you like your password to be")

    if (userInput === null) {
      return
    }
    var passwordLength = parseInt(userInput)
    if (isNaN(passwordLength)) {
      window.alert("Invalid Number")
    } else if (passwordLength < 8 || passwordLength > 128) {
      window.alert("Password length should be between 8-128 characters.")
    } else {
      break
    }
  
}

var uppercase = window.confirm("Do you want uppercase letters?")
var lowercase = window.confirm("Do you want lowercase letters?")
var numbers = window.confirm("Do you want numbers?")
var symbols = window.confirm("Do you want symbols?")

var uppercaseList = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var lowercaseList = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var numbersList = ["0","1","2","3","4","5","6","7","8","9"]
var symbolsList = ['`','~','!','@','#','$',"%",'^','&','*','(',')','-','_','=','+','[','{',']','}','|',';',':','"',',','<','.','>','/','?']

var characterList = []

if (uppercase === true) {
  characterList.push(uppercaseList)
}

if (lowercase === true) {
  characterList.push(lowercaseList)
}

if (numbers === true) {
  characterList.push(numbersList)
}

if (symbols === true) {
  characterList.push(symbolsList)
}

if (characterList.length === 0) {
  characterList.push(lowercaseList)
}

var generatePassword = ""

for (var i = 0; i < passwordLength; i++) {
  var randomList = getRandomItem(characterList)
  var randomCharacters = getRandomItem(randomList)
  generatePassword += randomCharacters
}

return generatePassword
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  if (password) {
    passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
