// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = passwordGenerator();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function passwordGenerator(length) {
  var length = prompt("How long do you want the password to be?")
  length = (length) ? (length) : (13);
  var string = "abcdefghijklmnopqrstuvwxyz"; //allows it to grab all 26 letters
  var numeric = '0123456789'; //allows for selection of numbers
  var special = '!@#$%^&*()_+~`|}{[]\:;?><,./-='; //grabs special characters
  var password = "";
  var wantUpper = confirm("Do you want uppercase characters?")
  var wantLower = confirm("Do you want lowercase characters?")
  var wantNumber = confirm("Do you want numeric characters?")
  var wantSpecial = confirm("Do you want special characters?")

  var characters = "";
  if (wantUpper) {
    characters+=string.toUpperCase()
  }
  if (wantLower) {
    characters = characters+string
  }
  if (wantNumber) {
    characters = characters+numeric
  }
  if (wantSpecial) {
    characters = characters+special
  }

  while (password.length < length) {
    // letters = Math.ceil(string.length * Math.random() * Math.random());
    // numbers = Math.ceil(numeric.length * Math.random() * Math.random());
    // chars = Math.ceil(special.length * Math.random() * Math.random());
    var index = Math.floor(characters.length*Math.random());
    var random = characters.charAt(index)
    password+= random
    // hold = string.charAt(letters);
    // hold = (password.length % 2 == 0) ? (hold.toUpperCase()) : (hold); //forces some selected chars to Upper
    // password += hold;
    // password += numeric.charAt(numbers);
    // password += special.charAt(chars);
    // password = character;
  }
  password = password.split('').sort(function () { return 0.5 - Math.random() }).join('');
  return password.substr(0, length);
}
